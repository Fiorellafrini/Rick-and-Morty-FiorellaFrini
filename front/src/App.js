import "./App.css";
import Cards from "./components/Cards.jsx";
import H1 from "./components/H1.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import Detail from "./components/Detail.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]); //creo el estado de personajes
  const [access, setAccess] = useState(false);

  const username = "ejemplo@gmail.com";
  const password = "1password";

  const login = (userData) => {
    // esta fn la pasamos al form para que chequee
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json()) // .then(response) es la respuesta, el plan de accion. response.json es la respuesta que saca de json
      .then((data) => {
        console.log(data); //toma la informacion (data)
        if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]); //setea el estado, que es una copia (...oldChars(guarda los datos viejos) + la data(y almacename los nuevos))
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => console.log(err));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <H1 />
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
      {/* si el location es igual a barra no lo muestres, sino si */}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}
export default App;
