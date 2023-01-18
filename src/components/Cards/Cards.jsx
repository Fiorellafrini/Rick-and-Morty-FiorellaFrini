import style from "./Cards.module.css";
import Card from '../Card/Card';

function Cards({ characters, onClose }) { // [{...}, {...}, {...}]

   return (
      <div className={style.container}>
         {
            characters.map(({id, name, species, gender, image}) => {
              return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               id={id}
               onClose={() => onClose(id)}
              />
            })
         }
      </div>
   )
}

export default Cards;