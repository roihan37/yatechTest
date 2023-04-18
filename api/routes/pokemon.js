const express = require('express')
const Controller = require('../controllers/pokemonController')
const router = express.Router()
const {authentication} = require('../middleware/auth')

router.use(authentication)
router.get('/', Controller.pokemonList)

module.exports = router