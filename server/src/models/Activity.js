const { DataTypes, UUIDV4 }= require('sequelize');
module.exports= (sequelize)=>{
    sequelize.define('Activity',{
        id:{
            type: DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{ //definimos el rango permitido
                min:1,
                max:5,
            }
        },
        duration:{
            type: DataTypes.FLOAT,
            allowNull:true,
        },
        season:{
            type:DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
            allowNull: false,
        },
    })
}