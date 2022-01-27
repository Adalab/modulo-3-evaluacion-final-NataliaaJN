import { Link } from "react-router-dom";
import "../styles/components/characters/CharacterDetail.scss";
import giantIcon from "../images/giant.png"
const CharacterDetail = (props) => {
  const getAlternateName = () =>
    props.character.alternate_names ? (
      <p> {props.character.alternate_names} </p>
    ) : (
      ""
    );
  const getGender = () =>
    props.character.gender === "male" ? (
      <span>
        Hombre <i className="fas fa-mars"></i>
      </span>
    ) : (
      <span>
        Mujer <i className="fas fa-venus"></i>
      </span>
    );

  const getStatus = () => {
    if (props.character.status && props.character.gender === "male") {
      return "Vivo";
    } else if (props.character.status && props.character.gender === "female") {
      return "Viva";
    } else if (!props.character.status && props.character.gender === "male") {
      return "Muerto";
    } else if (!props.character.status && props.character.gender === "female") {
      return "Muerta";
    }
  };

  const getSpecies = () => {
    // species: human, half-giant, werewolf, ghost
    if (props.character.species === "human") {
      return (
        <span>
          Humano <i className="fas fa-user-alt"></i>
        </span>
      );
    } else if (props.character.species === "ghost") {
      return (
        <span>
          Fantasma <i className="fas fa-ghost"></i>
        </span>
      );
    } else if (props.character.species === "werewolf") {
      return (
        <span>
          Hombre Lobo
          <img
            alt="werewolf icon"
            src="https://img.icons8.com/ios-filled/50/000000/werewolf.png"
          />
        </span>
      );
    } else if (props.character.species === "half-giant") {
      <span>
        Semi gigante
        <img alt="half-giant icon" src={giantIcon} />
      </span>;
    }
  };

  return (
    <div className="mainCharacterDetail">
      <Link className="link" to="/">
        Volver
      </Link>
      <div className="characterDetailContainer">
        <div className="characterDetailContainer__imageContainer">
          <img
            className="characterDetailContainer__imageContainer--image"
            title={props.character.name}
            alt={props.character.name}
            src={props.character.image}
          />
        </div>
        <div>
          <h2 className="characterDetailContainer__name">
            {props.character.name}
          </h2>

          <ul className="characterDetailContainer__detailsList">
            {getAlternateName()}
            <li>
              <p className="characterDetailContainer__detailsList--detailInfo ">
                Estatus: {getStatus()} <i className="fas fa-heartbeat"></i>
              </p>
            </li>
            <li>
              <p className="characterDetailContainer__detailsList--detailInfo">
                Especie: {getSpecies()}
              </p>
            </li>
            <li>
              <p className="characterDetailContainer__detailsList--detailInfo">
                Género: {getGender()}
              </p>
            </li>
            <li>
              <p className="characterDetailContainer__detailsList--detailInfo">
                Casa: {props.character.house}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
