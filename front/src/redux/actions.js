import { ADD_PERSONAJE, DELETE_PERSONAJE, FILTER, ORDER, RESET } from './actions_type';
import axios from "axios";


export const addPersonaje = (character) => {
    // return {type: ADD_PERSONAJE, payload: character}
    return async (dispatch) => {
       const response = await axios.post('http://localhost:3001/rickandmorty/fav', character)
       const data = response.data;
      
       return dispatch ({
        type: ADD_PERSONAJE, payload: data 
       })
    }
}

export const deletePersonaje = (id) => {
    // return { type: DELETE_PERSONAJE, payload: id}
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        const data = response.data;

        return dispatch({
            type: DELETE_PERSONAJE, payload: data
        })
    }
}

export const filterCards = (status) => {
    return {type: FILTER, payload: status}
    // return async (dispatch) => {
    //     const response = await axios.filterCards
    }


export const orderCards = (id) => {
    return { type: ORDER, payload: id}
}
export const reset = () => {
    return { type: RESET}
}
