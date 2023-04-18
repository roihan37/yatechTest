const express = require('express')
const Controller = require('../controllers/userController')
const router = express.Router()

router.post('/register', Controller.registerUser)
router.post('/login', Controller.loginUser)

module.exports = router