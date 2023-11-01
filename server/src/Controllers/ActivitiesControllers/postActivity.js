const { Activity, country_activity } = require('../../db');
const searchById = require('../CountriesControllers/searchById');

const postActivity = async (name, difficulty, duration, season, countriesId) => {
  let newActivity;

  const existActivity = await Activity.findOne({ where: { name: name } });

  if (existActivity === null) {
    newActivity = await Activity.create({ name, difficulty, duration, season });

    countriesId.map(async countryId => {
      const country = await searchById(countryId);
      if (country) {
        await country_activity.create({ CountryId: countryId, ActivityId: newActivity.id });
      }
    });
    return 'Successfully created activity';
  } 
  else {
        const error = new Error('Activity already exists');
        return error;
  }
};

module.exports = postActivity;