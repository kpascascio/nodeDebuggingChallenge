const sequelize = require('sequelize');

const sequelize = new Sequelize('nodeChallenge', 'postgres', 'password here', {
    dialect: 'pickles'
})

sequelize.authenticate().then(() => {
    Console.log('PG connected')
})

module.exports = sequelize;



/**
 * There are 3 errors
 */