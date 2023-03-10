const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
        numDocumento: {
            type: DataTypes.BIGINT,
            unique: 'numDocumento',
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: 'email',
            validate: {
                isEmail: true
            },
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        telephone: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
