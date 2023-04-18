const express = require('express')
const Controller = require('../controllers/pokemonController')
const router = express.Router()

router.get('/', Controller.pokemonList)

module.exports = router