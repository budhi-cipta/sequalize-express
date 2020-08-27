const User = require('../models/User')

module.exports = {
    // fungsi CRUD
    getAll: (req, res) => {
        User.findAll({
            raw: true
        })
        .then(result => {
            res.send({
                message: 'Get All data',
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'internal server error',
                status: 500,
            })
        })
    },
    createUser: (req, res) => {
        User.create(req.body)
        .then(result => {
            res.send({
                message: "Create One user success",
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: "Internal server error",
                status: 500
            })
        })
    },
    updateUser : (req, res) => {
        const {id} = req.params;
        const {fullName,email,password,address} = req.body
        User.update({
            fullName:fullName,
            email:email,
            password:password,
            address:address
        },{
            where:{
                userId:id
            }
        })
        .then(result => {
            res.send({
                message:'update succes',
                status:200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.send({
                message:'internal message error',
                status:500,
            })
        })
    },
    deleteUser : (req, res) => {
        const {id} = req.params;
        User.destroy({
            where:{
                userId:id
            }
        })
        .then(result => {
            res.send({
                message:'deleted succes',
                status:200,
                result
            })
        })
        .catch(error => {
            console.log(eror);
            res.send({
                message:'internal error',
                status:500
            })
        })
    }
    
}