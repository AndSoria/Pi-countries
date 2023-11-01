const {Activity,Country,country_activity} = require ('../../db')

const getActivities=async()=>{
  try {

    const activities= await Activity.findAll({
      include:[{
          model:Country,
          attributes:['id','name'],
          through:{
            model: country_activity,
            attributes:[]
          }
        }]
    })
    return activities
    
  } catch (error) {
    throw Error (error.message)
  }
}

module.exports=getActivities