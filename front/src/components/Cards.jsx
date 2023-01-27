import Card from './Card';
import styled from 'styled-components';


const Contenedor = styled.div`
  background-color:rgb(56, 120, 80);
   margin-bottom: 2%;
   width: 100%;
   
`;

// export default function Cards(props) {
//    const { characters } = props; //characters es un array de personajes

//    return (
//       <Contenedor>
//       <div className={styled.card}>
//          {characters.map((characters)=>{
//             return (
//              <Card
//              key={characters.id}
//                id={characters.id}
//                name={characters.name}
//                species={characters.species}
//                gender={characters.gender}
//                image={characters.image}
//                onClose={() => props.onClose(characters.id)}
//                // onClose={() => window.alert('Esmulamos que se cierra la card')}
//             />   
//             );  
//          })} 
//       </div>
//       </Contenedor>
//    )
// }
function Cards({ characters, onClose }) {
// export default function Cards(props) {
   // const { characters } = props;
   

   return (
            <Contenedor>
            <div className={styled.card}>
         {
            characters.map(({id, name, species, gender, image}) => {

         // characters.map(({name,species,gender,image, id}, index)=>{
            return (
            <Card
            id={id}
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={() => onClose(id)}

            />
            )
         })
      }
   </div>;
</Contenedor>
)
}
export default Cards;

