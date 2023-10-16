
const searchByName = require('../Controllers/CountriesControllers/searchByName');
const searchByID= require ('../Controllers/CountriesControllers/searchById');
const getCountries= require('../Controllers/CountriesControllers/getCountries');
const countryHandler= async (req, res)=>{
    

        const {name}= req. query
        console.log(name);
        if(name!== undefined && name !== ''){

            //! usar la query y hacer una busqueda aproximada del nombre del pais, usando name.common
            const countryByName= await searchByName(name)

            return res.status(200).json(countryByName)
          
        }
        else{

            const countries= await getCountries()
            res.status(200).json(countries)
        }
      
}


const countryIdHandler=async(req,res)=>{
    const {id}= req.params
    const resultCountry = await searchByID(id)
    return res.status(200).json(resultCountry)
}

module.exports={
    countryHandler, countryIdHandler
}