import { ADD_PERSONAJE, DELETE_PERSONAJE, FILTER, ORDER, RESET } from './actions_type'

const initialState={
    myFavorites: [],
    allFavorites:[],
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PERSONAJE:
            return {
                ...state,
                // myFavorites:[...state.myFavorites, action.payload],
                myFavorites:[...state.allFavorites, action.payload],
                allFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_PERSONAJE:
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(char => char.id !== action.payload) // filtro todos los personajes y me quedo con el que es igual al que quiero eliminar y lo elimino
            // }
            const filtered = state.myFavorites.filter(character=>{
                return character.id !== action.payload
            });
            return{
                ...state,
                myFavorites: filtered,
                allCharacters: filtered,
            }
         
            

        case FILTER:
            // return {
            //     ...state,
            //     myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
            // }

            const filterCopy = [...state.allFavorites];
            const filter = filterCopy.filter(character => character.gender === action.payload);
            return {
                ...state,
                myFavorites:filter,
            }

        case ORDER:
            const orderCopy = [...state.allFavorites];
            const order = orderCopy.sort((a, b)=> {
                if(a.id > b.id) {
                    return"Ascendente" === action.payload ? 1: -1;
                }
                if(a.id < b.id) {
                    return"Descendente" === action.payload ? 1: -1;
                }
                return 0;
            });
            return{
                ...state,
                myFavorites: order,
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allFavorites]
            }
          
    
        default :
             return{...state}
    }
}
export default rootReducer;