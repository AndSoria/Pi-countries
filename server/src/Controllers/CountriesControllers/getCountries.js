const { Country } = require('../../db');

const getCountries = async () => {
    try {
        const allCountries = await Country.findAll();
        if (allCountries && allCountries.length > 0) {
            return allCountries;
        } else {
            throw new Error('Countries not found');
        }
    } catch (error) {
        console.log(error);
        throw Error(error) ;
    }
};

module.exports = getCountries;