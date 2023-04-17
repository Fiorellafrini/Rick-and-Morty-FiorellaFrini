import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { Link } from "react-router-dom";
import React from 'react';


const Detail = () => {

const {detailId} = useParams(); // para obtener el id
const [character, setCharacter]= useState({}) //Es el valor inicial, para trabajador los estados en compenentes uncionales


useEffect(() => { // para trabajarlos ciclos de vida del componente funcional
  // fetch(`https://rickandmortyapi.com/api/character/${detailId}`) 
  fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`) // asi se concecta en back con el front, el front le pide al 3001
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]); // cada vez que se cmbie este id corre este useeffect

return (
  <div>
  {/* <button>
      <Link to='/home'></Link>
  </button> */}
  <h1>{character?.name}</h1>
  <p>{character?.status}</p>
  <p>{character?.species}</p>
  <p>{character?.gender}</p>
  <p>{character?.origin?.name}</p>
  <img src={character?.image} alt={character?.name} />
</div>


)
}
export default Detail;
