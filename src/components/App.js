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
  //                           STATES                               //
  const [charactersData, setCharactersData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [genderFilter, setGenderFilter] = useState("all");

  //                           EFFECTS                              //
  // Cojo los datos del api
  useEffect(() => {
    getApiData(houseFilter).then((data) => {
      setCharactersData(data); // filtro los resultados del api
    });
  }, [houseFilter]);


  //                           FUNCTIONS                            //

  // El parámetro data es un objeto al que le voy a pasar:
  // - un key, que es el nombre del input que voy a cambiar
  // - un value, que es el valor que voy a asignar a ese key
  const handleInputs = (data) => {
    if (data.key === "name") {
      // si el key del objeto data es "name"
      setNameFilter(data.value); // cambio el nameFilter por el valor que recibe en el objeto data
    }
    if (data.key === "house") {
      // si el key del objeto data es "name"
      setHouseFilter(data.value); // cambio el nameFilter por el valor que recibe en el objeto data
    } else if (data.key === "gender") {
      setGenderFilter(data.value);
    }
  };

  // const handleForm = (ev) => {
  //   ev.preventDefault();
  // };

  // Filtro los personajes
  const filteredCharacter = charactersData
    .filter((eachCharacterData) => {
      return eachCharacterData.name
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    }) // ordenar alfabéticamente el array filtrado
    .filter((eachCharacterData) => eachCharacterData.house === houseFilter)
    .filter((eachCharacterData) =>
      genderFilter === "all" ? true : eachCharacterData.gender === genderFilter
    )
    .sort(function (a, b) {
      if (a.name < b.name) {
        return -1; //  es mayor que 0, se sitúa b en un indice menor que a -> b viene primero
      } else if (a.name > b.name) {
        return 1; //lo que retorna es menor que 0-> se sitúa a en un indice menor que b -> a viene primero.
      }
      return 0; // si retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes
    });
    


  // Ir a la página con información detallada de cada personaje
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.characterId;
    const foundCharacter = charactersData.find(
      (characterData) => characterData.id === routeId
    );
    return !foundCharacter ? (
      <NotFound />
    ) : (
      <CharacterDetail character={foundCharacter} />
    );
  };

  // Eliminar filtros
  const resetFilters = (ev) => {
    ev.preventDefault();
    setNameFilter("");
    setHouseFilter("Gryffindor");
    setGenderFilter("all");
  };

  //                          RENDER                  //

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
              genderFilter={genderFilter}
              // handleForm={handleForm}
              handleInputs={handleInputs}
              resetFilters={resetFilters}
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
