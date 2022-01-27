import { Link } from "react-router-dom";
import "../styles/components/PageNotFound.scss";
import broom from "../images/broom.png"
const PageNotFound = () => {
    return (
        <article className="pageNotFound">
            <h2 className="pageNotFound__title">Error 404: página no encontrada</h2>
          <h3 className="pageNotFound__subtitle">
            ¡Ups! Parece que has excedido los límites de Howarts, aquí no podemos protegerte de los dementores
          </h3>
          
          <Link  className="pageNotFound__link" to="/">
            
              Volver volando a Howarts
              <img className="pageNotFound__link--broomImg" alt="broom" src={broom} />
            
          </Link>
        </article>
      );
};

export default PageNotFound;