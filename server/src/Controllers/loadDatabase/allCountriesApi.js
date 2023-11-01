const endPoint = require ('../../EndPoints/endPoint')
const axios = require ('axios')
const cleanResponse = require('./cleanResponse')
const allCountriesApi = async()=>{

    try {
        const getCountries = await axios.get(endPoint).then(response=>response.data)
        const countries= await cleanResponse(getCountries)
    
        return countries

    } catch (error) {
        throw Error (error.message)
    }
}

module.exports = allCountriesApi