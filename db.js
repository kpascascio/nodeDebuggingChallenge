const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeDebugChallenge', 'postgres', 'k12323', {
    dialect: 'postgres'
})

sequelize.authenticate().then(() => {
    console.log('PG connected')
})

module.exports = sequelize;



/**
 * There are 3 errors
 */