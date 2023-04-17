import { useDispatch, useSelector } from "react-redux";
// import Card from "./Card";
import styled from "styled-components";
import {
  getFavorites,
  cleanFavorites,
  filterCards,
  orderCards,
  reset,
} from "../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contenedor = styled.div`
  background-color: rgb(56, 120, 80);
  margin-bottom: 2%;
  width: 100%;
`;

const Favorites = () => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state); // como ya se que el estado global en un ibj hago entre llaves

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  useEffect(() => {
    dispatch(cleanFavorites());
    dispatch(getFavorites());
  }, []);

  const handleFilter = (event) => {
    const { name, value } = event.target;
    dispatch(filterCards(value));
  };

  return (
    <Contenedor>
      <div className={styled.card}>
        <div>
          <select name="order" defaultValue={"DEFAULT"} onChange={handleOrder}>
            <option selected="true" value="DEFAULT" disabled="disabled">
              Select Order
            </option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>

          <select
            name="filter"
            defaultValue={"DEFAULT"}
            onChange={handleFilter}
          >
            <option selected="true" value="DEFAULT" disabled="disabled">
              Select Filter
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>{/* <button onClick={()=>dispatch(reset)}>RESET</button> */}</div>
        {myFavorites.map((props) => {
          // recorro cada personaje
          return (
            // copio abajo lo mismo que tengo en card
            <div>
              {/* <button onClick={props.onClose}>X</button> */}
              <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
                <h3>{props.id}</h3>
                <h3>{props.species}</h3>
                <h3>{props.gender}</h3>
                <img src={props.image} alt={props.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </Contenedor>
  );
};
export default Favorites;
