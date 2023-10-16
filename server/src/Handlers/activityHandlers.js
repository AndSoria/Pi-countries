//aca se llamaran a los controllers para hacer las peticiones y manejar la info
const getActivities = require('../Controllers/ActivitiesControllers/getActivities');
const postActivity = require ('../Controllers/ActivitiesControllers/postActivity')
const activityHandler=async( req, res)=>{
    //ingresa a la base de datos y trae todas las actividades
    const allActivities= await getActivities();
    res.status(200).send(allActivities);
    
}
const activityPostHandler=async (req, res)=>{
    //se debe tomar la info por body
    const {name, difficult, duration, season, countriesId}=req.body
    const newActivity= await postActivity(name, difficult, duration, season, countriesId)
   
    res.status(200).send(newActivity);
}

module.exports={
    activityHandler, activityPostHandler
}