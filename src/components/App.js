import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import getApiData from "../services/api";
import Filters from "./Filters";
import ls from "../services/local-storage";
import CharactersList from "./CharactersList";

const App = () => {
  // States
  const [charactersData, setCharactersData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("gryffindor");

  // Effects
  // Cojo los datos del api
  useEffect(() => {
    getApiData(houseFilter).then((data) => {
      setCharactersData(data); // filtro los resultados del api
    });
  }, []);

  // Functions

  const handleInputs = (value) => {
    setNameFilter(value);
  };

  // Filtro los personajes
  const filteredCharacter = charactersData.filter((eachCharacterData) => {
    return eachCharacterData.name
      .toLocaleLowerCase()
      .includes(nameFilter.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>Harry Potter</h1>
      <main>
        <Filters
          nameFilter={nameFilter}
          houseFilter={houseFilter}
          handleInputs={handleInputs}
        />
        {/* en vez de pasarle los datos de todos los personajes, se lo paso de los personajes ya filtrados */}
        <CharactersList charactersData={filteredCharacter} />

        {/* <Switch>
          <Route exact path="/">
            <h2>Inicio</h2>
          </Route>
        </Switch> */}
      </main>
    </div>
  );
};

export default App;
