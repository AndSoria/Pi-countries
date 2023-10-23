const getCountries = require ('./CountriesControllers/getCountries')

const filterContinent=async ()=>{
    const countries= await getCountries();
    const allContinents= countries.map(country=> country.continent);
    console.log(allContinents);
    const uniqueContinents= [...new Set(allContinents)].sort();
    console.log(uniqueContinents);
    return uniqueContinents;

}

module.exports= filterContinent;