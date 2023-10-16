
const {Country}= require('../../db')
const searchByName= async(prop)=>{
  
    const countries= await Country.findAll()
    
    const filterByName= await countries.filter((country) => country.name.toLowerCase().includes(prop.toLowerCase()))
   
return filterByName.length >0 ? filterByName : 'No hay paises relacionados con el valor de busqueda'
   
}



module.exports=searchByName