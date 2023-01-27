const http = require ("http");
const { RESET } = require("../../../front/src/redux/actions_type");
const characters = require("../utils/data") //para traerme los characters de data , los arrays de objs


http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*") // con esto le hago peticiones del ffrot al back // todavia no lo vimos


    if(req.url.includes("rickandmorty/character")){
        let id = req.url.split("/").at(-1);
        // console.log(req.url.split("/").at(-1));  //hago todo esto para quedarme con el id.

        // let characterFilter = characters.filter(character => character.id === Number(id)) // como aca comparo 3(character.id) con "3"(id) y no se puede. tengo que parsear y por eso pongo number(id)
        // console.log(characterFilter);
        let characterFilter = characters.find(character => character.id === Number(id)) // pruebo lo mismo que con filter. el find me devuelve el array c obj y el find directamente el obj.
        // console.log(characterFilter);
        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFilter)) // como me viene directamente el obj en el charFilter lo transformo a json con JSON.stringify

        
    }

}).listen(3001, "localhost")