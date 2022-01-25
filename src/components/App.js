import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import getApiData from "../services/api";
import ls from "../services/local-storage";

import Filters from "./Filters";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";

const App = () => {
  // States
  const [charactersData, setCharactersData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [genderFilter, setGenderFilter] = useState("");

  // Effects
  // Cojo los datos del api
  useEffect(() => {
    getApiData(houseFilter).then((data) => {
      setCharactersData(data); // filtro los resultados del api
    });
  }, [houseFilter]);

  // Functions
  // El parámetro data es un objeto al que le voy a pasar:
  // - un key, que es el nombre del input que voy a cambiar
  // - un value, que es el valor que voy a asignar a ese key
  const handleInputs = (data) => {
    if (data.key === "name") {
      // si el key del objeto data es "name"
      setNameFilter(data.value); // cambio el nameFilter por el valor que recibe en el objeto data
    } else {
      setHouseFilter(data.value);
    }
  };

  // Filtro los personajes
  const filteredCharacter = charactersData
    .filter((eachCharacterData) => {
      return eachCharacterData.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    })
    .filter((eachCharacterData) => eachCharacterData.house === houseFilter);
  // console.log(filteredCharacter);

  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = charactersData.find(
      (characterData) => characterData.id === routeId
    );
    console.log(foundCharacter);
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              nameFilter={nameFilter}
              houseFilter={houseFilter}
              handleInputs={handleInputs}
            />
            {/* en vez de pasarle los datos de todos los personajes, se lo paso de los personajes ya filtrados */}
            <CharactersList charactersData={filteredCharacter} />
          </Route>

          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
