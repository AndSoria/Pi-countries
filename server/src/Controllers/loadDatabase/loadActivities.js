const {Activity} = require ('../../db')
const activitiesDb = require ('../../../api/activitiesDb');
const postActivity = require('../ActivitiesControllers/postActivity');
const loadActivities=async()=>{
    
   activitiesDb.map((activity)=>postActivity(activity.name, activity.difficult, activity.duration, activity.season, activity.countriesId))
   console.log('Activities created');
}

module.exports= loadActivities