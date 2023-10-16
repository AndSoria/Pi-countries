const {Activity,Country, country_activity}= require('../../db')
const searchById= require('../CountriesControllers/searchById')

const postActivity=async(name, difficult, duration, season, countriesId)=>{
    let newActivity;

    console.log(countriesId);

    const existActivity= await Activity.findOne({where:{name:name}})

    if(existActivity===null){
         newActivity= await Activity.create({name, difficult, duration, season})

        countriesId.map(async countryId=>{
            const country= await searchById(countryId)
            console.log(countryId);
            if(country){
                await country_activity.create({CountryId:countryId, ActivityId: newActivity.id})
            }
        })
    }
    return newActivity
}

module.exports=postActivity