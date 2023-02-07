import { ADD_PERSONAJE, DELETE_PERSONAJE, FILTER, ORDER, GET_FAVORITES, CLEAN_FAVORITE} from './actions_type'

const initialState={
    myFavorites: [],
    allFavorites:[],
}

const rootReducer = (state = initialState, { type, payload })=>{
    switch(type){
        case ADD_PERSONAJE:
            return {
                // ...state,
                myFavorites:[...state.allFavorites, payload],
                allFavorites: [...state.myFavorites, payload]
            }


            case GET_FAVORITES:
                return {
                    ...state,
                    myFavorites: [...state.myFavorites, ...payload],
                    allFavorites: [...state.myFavorites],   
                }
            case CLEAN_FAVORITE:
                return {
                    myFavorites: [],
                    allFavorites: []
                }
        case DELETE_PERSONAJE:
            // return {
            //     ...state,
            //     myFavorites: state.myFavorites.filter(char => char.id !== payload) // filtro todos los personajes y me quedo con el que es igual al que quiero eliminar y lo elimino
            // }
           
            const filtered = state.myFavorites.filter(character=>{
                 return character.id !== payload
            });
            return{
                ...state,
                myFavorites: filtered,
                allCharacters: filtered,
            }
         
            

        case FILTER:
            // return {
            //     ...state,
            //     myFavorites: state.allFavorites.filter(char => char.gender === payload)
            // }

            const filterCopy = state.myFavorites;
            const filter = filterCopy.filter(character => character.gender === payload);
            return {
                ...state,
                myFavorites: filter
            }


    
            case ORDER:
                return {
                  ...state,
                  myFavorites: 
                    payload === "Ascendente" 
                    ? state.myFavorites.sort((a, b) => a.id > b.id ? 1 : - 1) 
                    : payload === "Descendente" 
                    ? state.myFavorites.sort((a, b) => a.id > b.id ? -1 : 1)
                    : payload === "All"
                    ? state.myFavorites
                    : state.myFavorites
                }; 






        // case ORDER:
        //     const orderCopy = [...state.allFavorites];
        //     const order = orderCopy.sort((a, b)=> {
        //         if(a.id > b.id) {
        //             return"Ascendente" === payload ? 1: -1;
        //         }
        //         if(a.id < b.id) {
        //             return"Descendente" === payload ? 1: -1;
        //         }
        //         return 0;
        //     });
        //     return{
        //         ...state,
        //         myFavorites: order,
        //     };
        // case RESET:
        //     return {
        //         ...state,
        //         myFavorites: [...state.allFavorites]
        //     }
          
    
        default :
             return{...state}
    }
}
export default rootReducer;


















// import { ADD_FAVORITE, CLEAN_FAVORITE, DELETE_FAVORITE, FILTER, GET_FAVORITES, ORDER } from "./action-types";

// const initialState = {
//     myFavorites: [],
//     allCharacters: [],
// }
// const reducer = (state = initialState, { type, payload }) => {
//     switch(type){
//         case ADD_FAVORITE:
//             return {
//                 ...state,
//             }
//         case GET_FAVORITES:
//             return {
//                 ...state,
//                 myFavorites: [...state.myFavorites, ...payload],
//                 allCharacters: [...state.myFavorites],   
//             }
//         case CLEAN_FAVORITE:
//             return {
//                 myFavorites: [],
//                 allCharacters: []
//             }

//         case DELETE_FAVORITE:
//             return {
//                 ...state,
//                 myFavorites: state.myFavorites.filter(char => char.id !== payload)
//             }

//         case FILTER:
//             const myFavorites = state.myFavorites;
//             const myFavoritesFiltered = myFavorites.filter(char => char.gender === payload)
//             return{
//                 ...state,
//                 myFavorites: myFavoritesFiltered
//             }

//             case ORDER:
//                 return {
//                   ...state,
//                   myFavorites: 
//                     payload === "Ascendente" 
//                     ? state.myFavorites.sort((a, b) => a.id > b.id ? 1 : - 1) 
//                     : payload === "Descendente" 
//                     ? state.myFavorites.sort((a, b) => a.id > b.id ? -1 : 1)
//                     : payload === "All"
//                     ? state.myFavorites
//                     : state.myFavorites
//                 };
              

//         default: 
//             return {...state}
//     }
// }


// export default reducer;