require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

//POSTGRES:

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

//MYSQL: 

  const sequelize = new Sequelize(
    `${DB_NAME}`,
    `${DB_USER}`,
    `${DB_PASSWORD}`,
     {
       host: `${DB_HOST}`,
       dialect: 'mysql'
     }
);
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Ticket, Store } = sequelize.models


User.hasMany(Ticket, {foreignKey: 'userId'});
Ticket.belongsTo(User, {foreignKey: 'userId'});

Store.hasMany(Ticket, {foreignKey: 'storeId'})
Ticket.belongsTo(Store, {foreignKey: 'storeId'}) 


module.exports = {
  ...sequelize.models, 
  conn: sequelize,    
};
