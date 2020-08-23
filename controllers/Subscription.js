const Subscription = require('../models/Subscription')
const User = require('../models/User')


module.exports = {
    getAllSubscription:(req, res) =>{
        Subscription.findAll({
            include:User,
            raw:true,
                
                
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
    createSubscription:(req, res) => {
        Subscription.create (req.body)
        .then(result => {
            res.send({
                message:'create one subscriptions succes',
                status:201,
                result
            })
        })
        .catch(error => {
            console.log (error)
            res.send({
                message:'internal server error',
                status: 500
            })
        })
    }
}