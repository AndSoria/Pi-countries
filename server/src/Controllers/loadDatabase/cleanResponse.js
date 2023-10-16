//* Esta funcion limpia la data que llega desde el pedido de la api
const cleanResponse=(response)=>{
    const arrayResponse= response.map(country=>{

    return{

        id: country.cca3,
        name:country.name.common,
        imageFlag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0]: 'Not found',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        }
    })

    return arrayResponse
}

module.exports=cleanResponse