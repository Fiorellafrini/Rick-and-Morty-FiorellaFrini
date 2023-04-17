import {
  GET_FAVORITES,
  CLEAN_FAVORITE,
  ADD_PERSONAJE,
  DELETE_PERSONAJE,
  FILTER,
  ORDER,
} from "./actions_type";
import axios from "axios";

export const addPersonaje = (character) => {
  // return {type: ADD_PERSONAJE, payload: character}
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/rickandmorty/fav",
      character
    );
    const data = response.data;

    return dispatch({
      type: ADD_PERSONAJE,
      payload: data,
    });
  };
};

export const getFavorites = () => {
  return async (dispatch) => {
    try {
      await fetch("http://localhost:3001/rickandmorty/fav")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: GET_FAVORITES,
            payload: data,
          })
        );
    } catch (err) {
      console.error(new Error(err.message));
    }
  };
};

export const cleanFavorites = () => {
  return {
    type: CLEAN_FAVORITE,
  };
};

export const deletePersonaje = (id) => {
  // return { type: DELETE_PERSONAJE, payload: id}
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;

    return dispatch({
      type: DELETE_PERSONAJE,
      payload: data,
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
// export const reset = () => {
//     return { type: RESET}
// }

// import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, GET_FAVORITES, CLEAN_FAVORITE } from "./action-types";
// import axios from 'axios';

// export const addFavorite = (character) => {
//     return async (dispatch) => {
//         const response = await axios.post('http://localhost:3001/rickandmorty/fav', character)
//         const data = response.data;

//         return dispatch({
//             type: ADD_FAVORITE,
//             payload: data
//         })
//     }
// }

// export const getFavorites = () => {
//     return async (dispatch) => {
//         try {
//             await fetch('http://localhost:3001/rickandmorty/fav')
//             .then((res) => res.json())
//             .then((data) => dispatch({
//                 type: GET_FAVORITES,
//                 payload: data
//             }))
//         }  catch (err) {
//             console.error(new Error(err.message))
//         }
//     }
// }

// export const cleanFavorites = () => {
//     return{
//         type: CLEAN_FAVORITE
//     }
// }

// export const deleteFavorite = (id) => {
//     return async (dispatch) => {
//         const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//         const data = response.data;

//         return dispatch({
//             type: DELETE_FAVORITE,
//             payload: data
//         })
//     }
// }

// export const filterCards = (gender) => {
//     return { type: FILTER, payload: gender }
// }

// export const orderCards = (id) => {
//     return { type: ORDER, payload: id }
// }
