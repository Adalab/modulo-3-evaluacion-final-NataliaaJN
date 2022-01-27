import { Link } from "react-router-dom";
import "../styles/components/NotFound.scss";
const NotFound = () => {
  return (
    <>
      <Link className="homeLink" to="/">Volver a Howarts</Link>
      <div className="characterNotFoundContainer" >
          <div className="characterNotFoundContainer__textContainer">
        <p className="characterNotFoundContainer__textContainer--paragraph1">No hemos encontrado ese personaje, puede que no exista o que se haya perdido por Howarts... </p>
        <p className="characterNotFoundContainer__textContainer--paragraph2">Puedes buscarlo en el Mapa del Merodeador o volver a Howarts e intentarlo de nuevo</p></div>
      </div>
    </>
  );
};

export default NotFound;
