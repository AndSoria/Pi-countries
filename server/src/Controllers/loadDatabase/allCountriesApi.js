const endPoint = require ('../../EndPoints/endPoint')
const axios = require ('axios')
const cleanResponse = require('./cleanResponse')
const allCountriesApi = async()=>{

    const getCountries = await axios.get(endPoint).then(response=>response.data)
    const countries= await cleanResponse(getCountries)
    return countries
}

module.exports = allCountriesApi