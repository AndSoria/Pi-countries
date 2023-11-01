
const {Country}= require ('../../db')
const allCountriesApi = require('./allCountriesApi')

const loadDb=async()=>{

        const getCountries = await allCountriesApi()
        
        await Country.bulkCreate(getCountries)    

        console.log('Database loaded'); 
}

module.exports=loadDb
