const {Router}= require('express')
const {activityHandler, activityPostHandler}= require('../Handlers/activityHandlers')
const validate= require ('../Middleware/validate')
const activityRouter=Router();

activityRouter.get('/', activityHandler ) //ruta para obtener un arreglo con las actividades

activityRouter.post('/',validate, activityPostHandler) //ruta para crear  un actividad, recibe info por body

module.exports=activityRouter
