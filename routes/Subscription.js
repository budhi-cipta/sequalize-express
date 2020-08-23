const express = require('express')
const router = require('express').Router()

const {
    getAllSubscription,
    createSubscription
} = require('../controllers/Subscription')

router.get('/subscription', getAllSubscription)
router.post('/subscription',createSubscription)

module.exports = router