
const searchByName = require('../Controllers/CountriesControllers/searchByName');
const searchByID= require ('../Controllers/CountriesControllers/searchById');
const getCountries= require('../Controllers/CountriesControllers/getCountries');
const countryHandler= async (req, res)=>{
    

        const {name}= req. query
        console.log(name);
      
            if(name!== undefined && name !== ''){

                try {
                    const countryByName= await searchByName(name)
                    return res.status(200).json(countryByName)
                    
                } catch (error) {
                    return res.status(404).json({ error: error.message });
                }
            }
            else{
                try {
                    
                    const countries= await getCountries()
                    res.status(200).json(countries)

                } catch (error) {

                    return res.status(500).json({ error: error.message });

                }
            }

}


const countryIdHandler = async (req, res) => {

    try {
        const { id } = req.params;
        const resultCountry = await searchByID(id);

        return res.status(200).json(resultCountry);

    } catch (error) {
        
        return res.status(404).json({ error: error.message });

    }
 
};

module.exports={
    countryHandler, countryIdHandler
}