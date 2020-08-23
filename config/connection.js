const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'NETPLIKS2',
    username:'root',
    password:'rootroot'
})

module.exports = db