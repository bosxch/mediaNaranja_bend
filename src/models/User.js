const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        numDocumento: {
            type: DataTypes.BIGINT,
            
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            },
            
        },
        password: {
            type: DataTypes.STRING,
           
        },
        nombre: {
            type: DataTypes.STRING,
           
        },
        direccion: {
            type: DataTypes.STRING,
            
        },
        telephone: {
            type: DataTypes.STRING,
            
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
