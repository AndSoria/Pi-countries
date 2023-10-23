const getCountries = require("./CountriesControllers/getCountries")

const onlyCountriesName=async()=>{
    const countries= await getCountries()
    const onlyName=(countries.map(country=>country.name)).sort()
    console.log(onlyName);
    return onlyName
}


module.exports= onlyCountriesName;