import Card from './Card';
import styled from 'styled-components';


const Contenedor = styled.div`
    width:350px;
    height: 90px;
    display: inline;
    /* float: left; */
 

    
                                                                  
`;

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

