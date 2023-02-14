const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
        dateRegistro: {
            type: DataTypes.DATE,
            unique: true,
            validate: {
                isEmail: true
            },
            allowNull: false,
        },
        almacen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    })
}
