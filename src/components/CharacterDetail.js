import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  const getAlternateName = () =>
    props.character.alternate_names ? (
      <p>{props.character.alternate_names}</p>
    ) : (
      ""
    );
  const getGender = () =>
    props.character.gender === "male" ? "Hombre" : "Mujer";

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
      return "Humano";
    } else if (props.character.species === "ghost") {
      return "Fantasma";
    } else if (props.character.species === "werewolf") {
      return "Hombre Lobo";
    } else {
      return "Semi gigante";
    }
  };

  return (
    <>
      <Link to="/">Volver</Link>
      <img alt={props.character.name} src={props.character.image} />
      <h2>{props.character.name}</h2>

      <ul>
        {getAlternateName()}
        <li>
          <p>Estatus: {getStatus()}</p>
        </li>
        <li>
          <p>Especie: {getSpecies()}</p>
        </li>
        <li>
          <p>Género: {getGender()}</p>
        </li>
        <li>
          <p>Casa: {props.character.house}</p>
        </li>
      </ul>
    </>
  );
};

export default CharacterDetail;
