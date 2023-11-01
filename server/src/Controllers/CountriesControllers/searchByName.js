
const {Country}= require('../../db')
const searchByName= async(prop)=>{
  
    const countries= await Country.findAll()
    
    const filterByName= await countries.filter((country) => country.name.toLowerCase().includes(prop.toLowerCase()))
   
    if (filterByName.length > 0) {
        return filterByName;
      }
    else {
        throw Error('Countries not found');
      }
}



module.exports=searchByName