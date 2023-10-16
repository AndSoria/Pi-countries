const {Activity,Country,country_activity} = require ('../../db')

const getActivities=async()=>{
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
}

module.exports=getActivities