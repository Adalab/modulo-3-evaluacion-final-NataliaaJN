import { Link } from "react-router-dom";
import "../styles/components/characters/CharacterCard.scss";

const CharacterCard = ({eachCharacterData}) => {
  const getSpecies = () => {
    // species: human, half-giant, werewolf, ghost
    if (eachCharacterData.species === "human") {
      return "Humano";
    } else if (eachCharacterData.species === "ghost") {
      return "Fantasma";
    } else if (eachCharacterData.species === "werewolf") {
      return "Hombre Lobo";
    } else {
      return "Semi gigante";
    }
  };
  return (
    <>
      <Link className="cardLinkContainer" to={`/character/${eachCharacterData.name}`}>
        <div className="cardLinkContainer__cardImageContainer">
        <img className="cardLinkContainer__cardImageContainer--cardImage"
          alt={eachCharacterData.name}
          src={eachCharacterData.image}
        /></div>
        <h2 className="cardLinkContainer__cardName">{eachCharacterData.name}</h2>
        <p className="cardLinkContainer__cardSpecies">{getSpecies()}</p>
      </Link>
    </>
  );
};

export default CharacterCard;
