const express = require('express')
const router = require('express').Router()

const {
    getAll,
    createUser,
    updateUser,
    deleteUser  
} = require('../controllers/User')

router.get('/users', getAll)
router.post('/users',createUser )
router.put('/users', updateUser )
router.delete('/users', deleteUser )


module.exports = router