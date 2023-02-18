const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: {
                 args: [['bello', 'apartado', 'envigado', 'parque berrio', 'pichincha', 'carabobo', 'cundinamarca', 'ayacucho', 'pereira', 'buenos aires', 'central', 'itagui']]

                }
            }
        },
    },
    {
        freezeTableName: true,
    })
}