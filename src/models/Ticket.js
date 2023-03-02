const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
        code: {
            type: DataTypes.BIGINT,
            unique: 'code',
            allowNull: false,
        },
        dateRegistro: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            references: {
              model: "User",
              key: "id",
              as: "userId"
            }
        },
        storeId: {
            type: DataTypes.UUID,
            references: {
              model: "Store",
              key: "id",
              as: "storeId"
            }
        },
    },
    {
        freezeTableName: true,
    })
}
