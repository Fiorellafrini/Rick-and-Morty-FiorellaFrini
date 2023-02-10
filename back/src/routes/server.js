// const http = require ("http");
// const { RESET } = require("../../../front/src/redux/actions_type");
// const characters = require("../utils/data") //para traerme los characters de data , los arrays de objs


// http.createServer((req,res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*") // con esto le hago peticiones del ffrot al back // todavia no lo vimos


//     if(req.url.includes("rickandmorty/character")){
//         let id = req.url.split("/").at(-1);
//         // console.log(req.url.split("/").at(-1));  //hago todo esto para quedarme con el id.

//         // let characterFilter = characters.filter(character => character.id === Number(id)) // como aca comparo 3(character.id) con "3"(id) y no se puede. tengo que parsear y por eso pongo number(id)
//         // console.log(characterFilter);
//         let characterFilter = characters.find(character => character.id === Number(id)) // pruebo lo mismo que con filter. el find me devuelve el array c obj y el find directamente el obj.
//         // console.log(characterFilter);
//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(characterFilter)) // como me viene directamente el obj en el charFilter lo transformo a json con JSON.stringify

        
//     }

// }).listen(3001, "localhost")

const express = require ('express');
const app= express();
const axios = require('axios') // uso axios pq hago la llamada a la api
const cors = require('cors');
const getAllChars = require('../controllers/getAllChars')
const postFav = require('../controllers/postFav');
// const Character = require('../models/Character');
const getAllFavorites = require('../controllers/getAllFavorites');
const deleteFavoriteById = require('../controllers/deleteFavoriteById');



app.use(cors());
app.use(express.json());

app.get('/rickandmorty/allCharacters', async (req, res) => {
    try {
        const allCharacters = await getAllChars();
        res.status(200).json(allCharacters);
   
    } catch (error) {
        res.status(404).send('Hubo un problema')
        
    }
})


    app.get('/rickandmorty/character/:id', async (req,res) => {
    try {
        const {id} = req.params;

        const response = await axios (`https://rickandmortyapi.com/api/character/${id}`); // como no tengo base de datos la info la pido en la api
        const data = response.data; // como axios es enorme , solo me traigo la data

        const infoCharacter = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        res.status(200).json(infoCharacter)

    } catch (error) {
        res.status(404).send(error.message);
    }
})

app.get('/rickandmorty/detail/:detailId', async (req, res) =>{
    try {
        const { detailId } = req.params;
  const response = (await axios (`https://rickandmortyapi.com/api/character/${detailId}`)).data; //  // hago la peticion
//   puedo hacer asi const data = response.data o con el .data de arriba. nada mas que el de arriba tiene que encerrar entre arentesis desde await a detaild
  const infoCharacterDetail = {
    name: response.name,
    status: response.status,
    species: response.species,
    gender: response.gender,
    origin: response.origin.name,
    image: response.image
  }
    res.status(200).json(infoCharacterDetail)

    } catch (error) {
        res.status(404).send(error.message);
    }
})

// let fav = []

// app.get('/rickandmorty/fav', (req, res)=>{
//     res.status(200).json(fav)
// })

app.get('/rickandmorty/fav', async (req, res) => {
    try {
        const allFavorites = await getAllFavorites();

        if(allFavorites.error) throw new Error(allFavorites.error);

        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(404).send(error.message)
    }
})






app.post('/rickandmorty/fav', async (req,res) =>{


        try {
        const characterFav = await postFav(req.body);
   
        if(characterFav.error) throw new Error (characterFav.error)

        res.status(200).json(characterFav)
    
    } catch (error){
        res.status(404).send(error.message)
    }
})

app.delete('/rickandmorty/fav/:id', async (req, res) => {    
    try {
        const { id } = req.params;;
        const deleteFavorite = await deleteFavoriteById(parseInt(id));

        if(deleteFavorite.error) throw new Error(deleteFavorite.error)
    
        return res.status(200).send(deleteFavorite);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports= app;