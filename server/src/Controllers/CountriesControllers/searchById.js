const { Country, Activity,country_activity } = require('../../db');
const { Sequelize } = require("sequelize");

const searchByID = async (prop) => {
    //! falta agregar la busqueda con las actividades.
  try {
    const searchCountry = await Country.findOne({
      where: Sequelize.where( 
        Sequelize.fn('LOWER', Sequelize.col('id')),
        prop.toLowerCase()
      ), //*Tenemos una funcion where, dentro de esta tenemos otra funcion que toma la columna id y transforma sus valores en minusculas, para luego ser comparado con la el valor que se recibe por parametro
      include:[{
        model:Activity,
        attributes:['id','name','duration','season', 'difficulty'],
        through:{
          model: country_activity,
          attributes:[]
        }
      }]
    });

    return searchCountry;
    
  } catch (error) {
    console.error('Error en searchByID:', error);
    throw error;
  }
};

module.exports = searchByID;