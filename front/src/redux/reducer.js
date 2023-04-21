import {
  ADD_PERSONAJE,
  DELETE_PERSONAJE,
  FILTER,
  ORDER,
  GET_FAVORITES,
  CLEAN_FAVORITE,
} from "./actions_type";

const initialState = {
  myFavorites: [],
  allFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PERSONAJE:
      return {
        // ...state,
        myFavorites: [...state.allFavorites, payload],
        allFavorites: [...state.myFavorites, payload],
      };

    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, ...payload],
        allFavorites: [...state.myFavorites],
      };
    case CLEAN_FAVORITE:
      return {
        myFavorites: [],
        allFavorites: [],
      };
    case DELETE_PERSONAJE:
      const filtered = state.myFavorites.filter((character) => {
        return character.id !== payload;
      });
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered,
      };

    case FILTER:
      const filterCopy = state.myFavorites;
      const filter = filterCopy.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1))
            : payload === "Descendente"
            ? state.myFavorites.sort((a, b) => (a.id > b.id ? -1 : 1))
            : payload === "All"
            ? state.myFavorites
            : state.myFavorites,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
