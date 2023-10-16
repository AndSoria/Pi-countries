
const {Country}= require ('../../db')
const allCountries = require('./allCountriesApi')

const loadDb=async()=>{

        const getCountries = await allCountries()
        
        Country.bulkCreate(getCountries)    

        console.log('Database loaded'); 
}

module.exports=loadDb
