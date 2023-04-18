const axios = require('axios')

class Controller{
    static async pokemonList(req, res){
        try {
            const getAllPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            res.status(200).json( getAllPokemons.data );
        } catch (err) {
            res.status(500).json({message : "Internal Server Error" })
        }
    }
}

module.exports = Controller