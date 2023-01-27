//este card hace una card reutilizable, por eso hace props y no directamente una persona.
// import ParseOptions from "eleventy-plugin-toc/src/ParseOptions";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { deletePersonaje, addPersonaje } from "../redux/actions";
import { useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from "react";




const Rick = styled.div`
   background-image: url('https://i.pinimg.com/564x/8e/a8/10/8ea810170b28962b33fb228706a99149.jpg');
   margin-bottom: 2%;
   width: 100%;

   

 button{
   margin-top: 8px;
   margin-left: 8px;
   margin-bottom: 8px;
   display:flex;
   font-size: 15px;
   background-image: -webkit-linear-gradient(top,  #302d2f, #6fff91);
   background-image: -moz-linear-gradient(top, #302d2f, #6fff91);
   background-image: -ms-linear-gradient(top, #302d2f, #6fff91);
   background-image: -o-linear-gradient(top,  #302d2f, #6fff91);
   background-image: linear-gradient(to bottom,  #302d2f, #6fff91);
 
 }


 h2 {
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 35px;
  background:rgb(31, 74, 48); ;color:black; padding:10px;border:2px;
  
 }

 h3 {
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-size: 20px;

  }

 img {
   background-image: url ('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
   background-size: cover; 
   border-radius: 50%; 
   
 }
  
 /* :hover { */
  
   /* img{
      transition-property: 5s;
      border-radius: 250px;
      filter: drop-shadow(2);
      border:ridge 10px;
      border-color: #347f726d;
      color:  #0c1715;
      
   }
      /* filter: drop-shadow(1); */
      /* border:solid 5px;
      color: #0c1715; 
      border-color: #347f72;  
         
   } */
`;


 function Card({ name, gender, onClose, species, image, id }) { // name={Rick.name}species={Rick.species},etc SON LAS PROPS.
   
   const [isFav, setIsFav] = useState(false);
   
   const dispatch = useDispatch(); // despacha actions
   
   const myFavorites = useSelector(state=>state.myFavorites); // del estado globar quiero traer myfavorites

   const handleFavorite = () => {
      if(isFav){ // si es true
         setIsFav(false) // lo pasa a false
         dispatch(deletePersonaje(id))// cuando lo pasa a false aplica el delete
      }else{
         setIsFav(true) // sino lo pasa a true
         dispatch(addPersonaje({ name, gender, onClose, species, image, id })) // cuando lo pasa a true aplica el add
      }
   }
   
   // useEffect(() => {
      // for(let i = 0; i < props.favo.length; i++){
      //     props.favo[i].id === props.id && setIsFav(true)}
           // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [props.favo]);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
    <Rick>
      <div className={styled.card}>  
       {
         isFav ? ( // si es true va a ejecutar el boton handlefavorite
         <button onClick={handleFavorite}>❤️</button> ) : ( // si no, me muestro el otro boton
         <button onClick={handleFavorite}>🤍</button>)} 
   

         {/* <button onClick={()=>{props.onClose(props)}}>X</button> */}
         <button onClick={onClose}>X</button>


         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            {/* <h3>{id}</h3> */}
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={image} alt={image} />
         </Link>
      </div>
    </Rick>
   );
   
         }



export default Card;
  