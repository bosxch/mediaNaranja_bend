const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            },
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        countdown: {
            type: DataTypes.smalldatetime, //YYYY-MM-DD hh:mm:ss
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
}
