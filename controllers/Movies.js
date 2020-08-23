const Movies = require('../models/Movies')


module.exports = {
    getAllMovies:(req, res) => {
        Movies.findAll({
            raw:true
        })
        .then(result => {
            res.send({
                message:'get all data',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message:'internal error',
                status:500
            })
        })
    },
    createMovies:(req,res) => {
        Movies.create(req.body)
        .then(result => {
            res.send({
                message:'create one movies succes',
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