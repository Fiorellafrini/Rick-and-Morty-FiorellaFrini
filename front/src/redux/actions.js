import { ADD_PERSONAJE, DELETE_PERSONAJE, FILTER, ORDER, RESET } from './actions_type'


export const addPersonaje = (character) => {
    return {type: ADD_PERSONAJE, payload: character}
}

export const deletePersonaje = (id) => {
    return { type: DELETE_PERSONAJE, payload: id}
}

export const filterCards = (status) => {
    return {type: FILTER, payload: status}
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id}
}
export const reset = () => {
    return { type: RESET}
}
