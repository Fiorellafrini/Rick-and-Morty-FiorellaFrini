import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styled from 'styled-components';
import { filterCards, orderCards, reset } from "../redux/actions";
// import { Link } from "react-router-dom";

const Contenedor = styled.div`
  background-color:rgb(56, 120, 80);
   margin-bottom: 2%;
   width: 100%;
   
`;



const  Favorites=()=>{

const dispatch = useDispatch();
const { myFavorites } = useSelector(state => state);

const handleOrder = (event)=>{
    dispatch(orderCards(event.target.value))
}

const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value))
}


return(
        <Contenedor>
            
            <div className={styled.card}>
               <div>
                  <select name="order" defaultValue={"DEFAULT"} onChange={handleOrder}>
                     <option selected="true" value="DEFAULT" disabled="disabled">Select Order</option>
                     <option value="Ascendente">Ascendente</option>
                     <option value="Descendente">Descendente</option>
                  </select>

                  
                  <select name="filter" defaultValue={"DEFAULT"} onChange={handleFilter}>
                     <option selected="true" value="DEFAULT" disabled="disabled">Select Filter</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     <option value="Genderless">Genderless</option>
                     <option value="unknown">Unknown</option>
                  </select>
               </div>
               <div>
                  <button onClick={()=>dispatch(reset)}>RESET</button>
               </div>

         {
         myFavorites.map(props =>{
            return (
               
             <Card
             
                key={props.id}
               id={props.id}
               name={props.name}
               species={props.species}
               gender={props.gender} 
               image={props.image}
            //    onClose={onClose}
               // onClose={() => window.alert('Esmulamos que se cierra la card')}
            />   
            

            );  
          
         })
        } 
      </div>
      
    </Contenedor>
    )
 }
 export default Favorites;
