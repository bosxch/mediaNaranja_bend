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
        code: {
            type: DataTypes.BIGINT,
            unique: true,
            allowNull: false,
        },
        dateRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
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
