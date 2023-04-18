const axios = require("axios");

class Controller {
    static async pokemonList(req, res, next) {
        try {
            const getAllPokemons = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/ditto"
            );
            res.status(200).json(getAllPokemons.data);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;
