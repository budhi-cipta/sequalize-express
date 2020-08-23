const HistoryWatch = require('../models/HistoryWatch')
const Movies = require('../models/Movies')
const User = require('../models/User')
const Subscription = require('../models/Subscription')


module.exports = {
    getAllHistoryWatch: (req, res) => {
        HistoryWatch.findAll({
            include:{
                Movies,
                User,
                Subscription,
                raw: true,   
            }
        })
        .then(result => {
            res.send({
                message:'get all data',
                status:200,
                result
            })
        })
        .catch (error => {
            console.log(error)
            res.send({
                message:'internal error',
                status:500
            })
        })
    },
    createHistoryWatch:(req, res) => {
        HistoryWatch.create (req.body)
        .then(result => {
            res.send({
                message:'create one history watch succes',
                status:201,
                result
            })
        })
        .catch(error => {
            console.log (error)
            res.send({
                message:'internal server error',
                status:500
            })
        })
    }
}