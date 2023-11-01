//aca se llamaran a los controllers para hacer las peticiones y manejar la info
const getActivities = require('../Controllers/ActivitiesControllers/getActivities');
const postActivity = require ('../Controllers/ActivitiesControllers/postActivity')
const activityHandler = async (req, res) => {
    try {
      const allActivities = await getActivities();
      
      res.status(200).send(allActivities);

    } catch (error) {

        console.log(error);
      res.status(500).json({message:'Error en el servidor' });
    }
  };
  
  const activityPostHandler = async (req, res) => {
    try {
      const { name, difficulty, duration, season, countriesId } = req.body;
      const newActivity = await postActivity(name, difficulty, duration, season, countriesId);
  
      if (newActivity instanceof Error) {
        res.status(400).json({ error: newActivity.message });
      } else {
        res.status(201).send(newActivity);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    activityHandler,
    activityPostHandler,
  };