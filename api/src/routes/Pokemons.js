const { Types, Pokemon } = require('../db');
const router = require('express').Router()
const axios = require('axios').default;

var pokemons = []
if(pokemons.length != 17){for (let i = 1; i < 17; i++) {
    pokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
}}
function hashFilter(arr){
    var hash = {};
    arr = arr.filter(curr => {
        var existe = !hash[curr.name];
        hash[curr.name] = true;
        return existe
    })
}

async function getAllData(poke){
    return Promise.all(poke.map(fetchData))
}

async function fetchData(URL) {
    
    return await axios
    .get(URL)
    .then((response) => {
        return {
            id: response.data.id,
            name: response.data.name,
            sprites: response.data.sprites.front_default,
            types: response.data.types
        };
    })
    .catch(function(error) {
        return { success: false };
    });
}

router.get('/pokemons/', async(req, res) => {
    const {name} = req.query
    if(name){
        getAllData(pokemons)
        .then(r => {
            r = r.filter(curr => {
                let current = curr.name.toLowerCase()
                return current.includes(name)
            })
    
            return res.status(200).json(r)
        })
    }
    getAllData(pokemons).then(r => res.status(200).json(r))
})

router.get('/pokemons/:idPokemon', (req, res) => {
    const {idPokemon} = req.params;
    getAllData(pokemons)
    .then(r => {
        var response = r.filter(m => m.id == idPokemon)
        return res.json(response)
    })
})

router.get('/pokemons/', (req, res) => {
    const {nameGame} = req.query
    console.log(nameGame)
    getAllData(pokemons)
    .then(r => {
        var response = r.filter(curr => {
            let current = curr.name.toLowerCase()
            if(current.includes(nameGame))return curr
            else{return}
        })

        return res.status(200).json(response)
    })
})

router.get('/type', async (req, res) => {
    var type = [];
    axios.get('https://pokeapi.co/api/v2/type')
    .then(result => result.data)
    .then(async(data) => {
        try {

            for (let i = 0; i < data.results.length; i++) {

                var obj = {
                    name: data.results[i].name
                }

                type.push(obj)

                await Types.findOrCreate({
                    where:{types: obj.name}
                })
            }

            return res.status(200).json(type)

        } catch (error) {
            return
        }
    })
})

router.post('/pokemons', async(req, res) => {
    const {types, name, life, force, defense, speed, height, weight} = req.body;
    if(types, name, life, force, defense, speed, height, weight){
        try {
            await Pokemon.create({
                name,
                life,
                force,
                defense,
                speed,
                height,
                weight
            })
            await Types.create({
                types
            })
            var basedate = Pokemon.findAll({raw:true}).then(data => JSON.parse(JSON.stringify(data)))
            console.log(basedate)

            res.status(200).json({
                name,
                life,
                force,
                defense,
                speed,
                height,
                weight
            })
        } catch (error) {
            return error
        }
    }
})

// ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
// Nombre *
// Vida
// Fuerza
// Defensa
// Velocidad
// Altura
// Peso


module.exports = router