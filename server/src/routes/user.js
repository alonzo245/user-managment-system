const express = require('express')
const router = express.Router()
const { getUsers, addUser } = require('../controllers/user')

router
    .route('/:id?')
    .get(getUsers)

router
    .route('/')
    .post(addUser)

module.exports = router