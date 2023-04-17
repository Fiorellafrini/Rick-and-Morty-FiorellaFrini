const axios = require("axios");
const { Character } = require("../DB_connection");

const getApiData = async () => {
  // TODO ESTO ES UN CONTROLADOR , no ruta
  try {
    let i = 1; //hice un array que arranca en 1
    let characters = [];

    while (i < 6) {
      //voy a recorrer hasta que i sea menor a 6. POR CADA i VOY A HACER UN LLAMADO A LA API Y GUARDANDO UNA PROMESA

      let apiData = await axios(
        `http://rickandmortyapi.com/api/character?page=${i}`
      ); // me vienen 20 en el link (http://rickandmortyapi.com/api/character) por eso tengo que hacer la logica para hacer 100. TODO ESTO ME DEVUELVE UNA PROMESA

      characters.push(apiData); // me estoy trayendo toda la info ( de 5 paginas) y la traigo al array para trabajarla. CON CADA PUSH GUARDO UNA PROMESA.
      //OBTENGO UN ARRAY DE 5 PROMESAS EN ESTADO PENDIENTE, POR ESO DSP APLICO PROMISE ALL
      i++;
    }

    characters = (await Promise.all(characters)).map((res) =>
      res.data.results.map((char) => {
        //MAPEO EL ARRAY, POR CADA RES (QUE ES EL OBJ QUE ME RETORNA LA API) ENTRO A DATA, ENTRO A LA PROP RESULT Y MAPEO. ENTONCES AHORA RECORRO CADA PERSONAJE. Y RETORNO EL OBJ CON LAS PROPIEDADES. ESAS PROP SON LAS QUE ESTAN EN MI MODELO.
        // HAGO DOS MAP PQ ES UN ARRAY DE ARRAY DE OBJ
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name, // pq es un obj
          image: char.image,
        };
      })
    );

    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(
        // mapeo el array que tengo arriba. dsp piso el array vacio y le concateno char, es decir cada uno de los personajes que tengo arriba
        char
      );
    });

    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Character.bulkCreate(allCharacters); // ese Character es el modelo

    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  saveApiData,
};
