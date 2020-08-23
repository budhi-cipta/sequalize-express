const db = require('../config/connection')
const Sequelize = require('sequelize');


const User = db.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        
        validate:{
            isEmail:true
        }
    },
    password:{
        type: Sequelize.STRING(64),
        is: /^[0-9a-f]{64}$/i
    },
    address:{
        type: Sequelize.STRING
    }
}, {
    // options
});

module.exports = User;