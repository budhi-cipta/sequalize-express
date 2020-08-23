const express = require('express')
const router = require('express').Router()

const {
    getAllHistoryWatch,
     createHistoryWatch
} = require('../controllers/HistoryWatch')

router.get('/subscription', getAllHistoryWatch)
router.post('/subscription', createHistoryWatch)

module.exports = router