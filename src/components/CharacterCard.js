import { Link } from "react-router-dom";
import "../styles/components/characters/CharacterCard.scss";

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
      <Link className="cardLinkContainer" to={`/character/${props.eachCharacterData.id}`}>
        <div className="cardLinkContainer__cardImageContainer">
        <img className="cardLinkContainer__cardImageContainer--cardImage"
          alt={props.eachCharacterData.name}
          src={props.eachCharacterData.image}
        /></div>
        <h2 className="cardLinkContainer__cardName">{props.eachCharacterData.name}</h2>
        <p className="cardLinkContainer__cardSpecies">{getSpecies()}</p>
      </Link>
    </>
  );
};

export default CharacterCard;
