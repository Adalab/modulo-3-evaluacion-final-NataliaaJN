import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import getApiData from "../services/api";
import ls from "../services/local-storage";

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
        <section>
          <form>
            <input type="text" />
            <select>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
            </select>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <img alt="imagen"/>
              <h2>Nombre</h2>
              <h3>Especie</h3>
            </li>
          </ul>
        </section>

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
