const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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
        password: {
            type: DataTypes.STRING,
            unique: 'password',
            allowNull: false,
        },
        countdown: {
            type: "DATETIME", //YYYY-MM-DD hh:mm:ss
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
