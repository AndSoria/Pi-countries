const {Router}= require('express')
const {countryHandler, countryIdHandler, countryNameHandler}= require('../Handlers/countryHandlers')

const countryRouter=Router();


countryRouter.get('/', countryHandler) //aca se buscaran a todos los paises y ademas puede recibir por query un name, este tambien debemos usarla para cargar la base de datos

countryRouter.get ('/:id', countryIdHandler) // se va a realizar un busque por id

module.exports=countryRouter