const express = require('express')
const router = require('express').Router()

const {
    getAllMovies,
    createMovies
} = require('../controllers/Movies')

router.get('/movies', getAllMovies)
router.post('/movies',createMovies )

module.exports = router