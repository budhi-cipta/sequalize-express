const db = require('../config/connection')
const Sequelize = require('sequelize');
const User = require('./User')


const Subscription = db.define('subscription', {
    id_subscription:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    id_user:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    status:{
        type:Sequelize.BOOLEAN
    },
})
User.hasOne(Subscription,{
    foreignkey:'id_user'
});
Subscription.belongsTo(User, {
    foreignkey:'id_user'
});


module.exports = Subscription;