const {Country} = require ('../../db')


const getCountries=async()=>{
    const allCountries= await Country.findAll();
    return allCountries
}

module.exports= getCountries