const db = require('../config/connection')
const Sequelize = require('sequelize');
const Movies = require('./Movies');
const User = require('./User');
const Subscription = require('./Subscription')



const HistoryWatch = db.define('history_watch',{
    id_history:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    id_movie:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    id_user:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    id_subscription:{
        type:Sequelize.INTEGER,
        allowNull:true  
    }
});

Movies.hasMany(HistoryWatch,{
    foreignKey:'id_movie'
});
HistoryWatch.belongsTo(Movies,{
    foreignKey:'id_movie'
})

User.hasMany(HistoryWatch, {
    foreignKey:'id_user'
});
HistoryWatch.belongsTo(User,{
    foreignKey:'id_user'
})

Subscription.hasMany(HistoryWatch,{
    foreignKey:'id_subscription'
});
HistoryWatch.belongsTo(Subscription,{
    foreignKey:'id_subscription'
})

module.exports = HistoryWatch;





