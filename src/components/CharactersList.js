import "../styles/components/characters/CharactersList.scss";
import CharacterCard from "./CharacterCard";
import hogwartsShield from "../images/hogwartsShield.png";

const CharactersList = ({ charactersData }) => {
  const characterElements = charactersData.map((eachCharacterData, index) => {
    return (
      <div className="hoverContainer">
        <li
          className="charactersListContainer__charactersList--item front "
          key={index}
        >
          <CharacterCard eachCharacterData={eachCharacterData} />
        </li>
        <li className="back">
          <img
            className="back__hogwartsShield"
            alt="Escudo de Hogwarts"
            src={hogwartsShield}
          />
        </li>
      </div>
    );
  });

  return (
    <section className="charactersListContainer">
      <ul className="charactersListContainer__charactersList">
        {characterElements}
      </ul>
    </section>
  );
};

export default CharactersList;
