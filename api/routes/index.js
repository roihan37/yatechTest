const express = require('express')
const router = express.Router()
const routerUsers = require("./users")
const routerPokemon = require("./pokemon")

router.use("/", routerUsers)
router.use("/pokemon", routerPokemon)

module.exports = router