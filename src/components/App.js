import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import getApiData from "../services/api";
import ls from "../services/local-storage";

import Filters from "./Filters";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import Header from "./Header";
import PageNotFound from "./PageNotFound";

const App = () => {
  //                           STATES                               //
  const [charactersData, setCharactersData] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState([]);
  const [nameFilter, setNameFilter] = useState(ls.get("nameFilter", ""));
  const [houseFilter, setHouseFilter] = useState(
    ls.get("houseFilter", "Gryffindor")
  );
  const [genderFilter, setGenderFilter] = useState(
    ls.get("genderFilter", "all")
  );
  const [sortFilter, setSortFilter] = useState(ls.get("sortFilter", false));

  const [loader, setLoader] = useState(true); // lo utilizo para que al recargar la página no me muestre otro resultado hasta que me devuelva los datos del api

  //                           EFFECTS                              //
  // Cojo los datos del api
  useEffect(() => {
    getApiData(houseFilter)
      .then((data) => {
        setCharactersData(data); // filtro los resultados del api
        filterCharacters(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
      });
  }, [houseFilter]);

  useEffect(() => {
    ls.set("nameFilter", nameFilter);
    ls.set("houseFilter", houseFilter);
    ls.set("genderFilter", genderFilter);
    ls.set("sortFilter", sortFilter);
    filterCharacters(charactersData);
  }, [nameFilter, houseFilter, genderFilter, sortFilter]);

  //                           FUNCTIONS                            //

  // El parámetro data es un objeto al que le voy a pasar:
  // - un key, que es el nombre del input que voy a cambiar
  // - un value, que es el valor que voy a asignar a ese key
  const handleInputs = (data) => {
    if (data.key === "name") {
      // si el key del objeto data es "name"
      setNameFilter(data.value.trimStart()); // cambio el nameFilter por el valor que recibe en el objeto data y utilizo la función trim() para que el usuario no pueda meter espacios en blanco al principio
    }
    if (data.key === "house") {
      // si el key del objeto data es "name"
      setHouseFilter(data.value); // cambio el nameFilter por el valor que recibe en el objeto data
    } else if (data.key === "gender") {
      setGenderFilter(data.value);
    } else if (data.key === "sort") {
      setSortFilter(data.value);
    }
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  // Filtro los personajes
  const filterCharacters = (currentCharactersData) => {
    const newFilteredCharacter = currentCharactersData
      .filter((eachCharacterData) => {
        return eachCharacterData.name
          .toLocaleLowerCase()
          .includes(nameFilter.toLocaleLowerCase());
      })
      .filter((eachCharacterData) => eachCharacterData.house === houseFilter)
      .filter((eachCharacterData) =>
        genderFilter === "all"
          ? true
          : eachCharacterData.gender === genderFilter
      ); // ordenar alfabéticamente el array filtrado
    if (sortFilter) {
      newFilteredCharacter.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredCharacter(newFilteredCharacter);
  };
  // Pintar resultados
  const renderSearchResults = () => {
    if (!nameFilter.trim()) {
      return (
        <>
          <p className="characterNotFound">
            Introduce una búsqueda válida para filtrar por nombre
          </p>
          <CharactersList charactersData={filteredCharacter} />
        </>
      );
    } else if (nameFilter !== "" && filteredCharacter.length === 0) {
      return (
        <p className="searchMessage">
          No se han encontrado personajes que coincidan con {nameFilter}
        </p>
      );
    } else {
      {
        /* en vez de pasarle los datos de todos los personajes, se lo paso de los personajes ya filtrados */
      }
      return <CharactersList charactersData={filteredCharacter} />;
    }
  };

  // Ir a la página con información detallada de cada personaje
  const routeCharacterData = useRouteMatch("/character/:characterId");

  const routeCharacterDetail = () => {
    if (routeCharacterData && !loader) {
      const routeCharacterName = routeCharacterData.params.characterId;
      const foundCharacter = charactersData.find(
        (characterData) => characterData.name === routeCharacterName
      );
      return !foundCharacter ? (
        <NotFound />
      ) : (
        <CharacterDetail character={foundCharacter} />
      );
    }
  };

  // Eliminar filtros
  const resetFilters = (ev) => {
    ev.preventDefault();
    setNameFilter("");
    setHouseFilter("Gryffindor");
    setGenderFilter("all");
    setSortFilter(false);
  };

  //                          RENDER                  //

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/">
          <main className="main">
            <Filters
              nameFilter={nameFilter}
              houseFilter={houseFilter}
              genderFilter={genderFilter}
              sortFilter={sortFilter}
              handleForm={handleForm}
              handleInputs={handleInputs}
              resetFilters={resetFilters}
            />
            {renderSearchResults()}
          </main>
        </Route>
        <Route path="/character/:characterId">{routeCharacterDetail()}</Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
