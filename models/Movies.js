const db = require('../config/connection')
const Sequelize = require('sequelize');



const Movies = db.define('movie', {
    id_movie:{
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type: Sequelize.STRING(50)
    },
    year:{
        type:Sequelize.INTEGER(10)
    },
    genre:{
        type:Sequelize.STRING(50)
    },
    description:{
        type:Sequelize.STRING(50)
    },
    url_trailer:{
        type:Sequelize.STRING(100),
        validate:{
            isUrl:true
        }
    }
})

module.exports = Movies;
