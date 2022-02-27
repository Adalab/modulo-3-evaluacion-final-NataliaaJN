import { Link } from "react-router-dom";
import "../styles/components/characters/CharacterDetail.scss";
import giantIcon from "../images/giant.png";
const CharacterDetail = ({ character }) => {
  const getAlternateName = () =>
    character.alternate_names
      ? character.alternate_names.map((alternate_name) => (
          <p className="alternateName"> {alternate_name} </p>
        ))
      : "";

  const getGender = () =>
    character.gender === "male" ? (
      <span>
        Hombre <i className="fas fa-mars"></i>
      </span>
    ) : (
      <span>
        Mujer <i className="fas fa-venus"></i>
      </span>
    );

  const getStatus = () => {
    if (character.status && character.gender === "male") {
      return "Vivo";
    } else if (character.status && character.gender === "female") {
      return "Viva";
    } else if (!character.status && character.gender === "male") {
      return "Muerto";
    } else if (!character.status && character.gender === "female") {
      return "Muerta";
    }
  };

  const getSpecies = () => {
    // species: human, half-giant, werewolf, ghost
    if (character.species === "human") {
      return (
        <span>
          Humano <i className="fas fa-user-alt"></i>
        </span>
      );
    } else if (character.species === "ghost") {
      return (
        <span>
          Fantasma <i className="fas fa-ghost"></i>
        </span>
      );
    } else if (character.species === "werewolf") {
      return (
        <span>
          Hombre Lobo
          <img
            className="specieIcon"
            alt="werewolf icon"
            src="https://img.icons8.com/ios-filled/50/000000/werewolf.png"
          />
        </span>
      );
    } else if (character.species === "half-giant") {
      return (
        <span>
          Semi gigante
          <img className="specieIcon" alt="half-giant icon" src={giantIcon} />
        </span>
      );
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
            title={character.name}
            alt={character.name}
            src={character.image}
          />
        </div>
        <div className="characterDetailContainer__characterWrapper">
          <h2 className="characterDetailContainer__name">{character.name}</h2>

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
                Casa: {character.house}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
