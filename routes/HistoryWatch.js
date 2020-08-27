const express = require('express')
const router = require('express').Router()

const {
    getAllHistoryWatch,
    createHistoryWatch,
    deleteHistory
} = require('../controllers/HistoryWatch')

router.get('/historyWatch', getAllHistoryWatch)
router.post('/historyWatch', createHistoryWatch)
router.delete('/historyWatch', deleteHistory)

module.exports = router