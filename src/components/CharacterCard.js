import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const getSpecies = () => {
    // species: human, half-giant, werewolf, ghost
    if (props.eachCharacterData.species === "human") {
      return "Humano";
    } else if (props.eachCharacterData.species === "ghost") {
      return "Fantasma";
    } else if (props.eachCharacterData.species === "werewolf") {
      return "Hombre Lobo";
    } else {
      return "Semi gigante";
    }
  };
  return (
    <>
      <Link to="/character/:characterId">
        <img
          alt={props.eachCharacterData.name}
          src={props.eachCharacterData.image}
        />
        <h2>{props.eachCharacterData.name}</h2>
        <p>{getSpecies()}</p>
      </Link>
    </>
  );
};

export default CharacterCard;
