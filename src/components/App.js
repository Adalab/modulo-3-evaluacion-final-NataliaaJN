import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import getApiData from "../services/api";
import Filters from "./Filters"
import ls from "../services/local-storage";
import CharactersList from "./CharactersList";

const App = () => {
  // States
  const [charactersData, setCharactersData] = useState([]);
  const [houseFilter, setHouseFilter] = useState("gryffindor");

  // Effects
  // Cojo los datos del api
  useEffect(() => {
    getApiData(houseFilter).then((data) => {
      console.log(data);
      setCharactersData(data); // filtro los resultados del api
    });
  }, []);

  // Functions

  return (
    <div>
      <h1>Harry Potter</h1>
      <main>
        <Filters />
        <CharactersList charactersData={charactersData} />
        

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
