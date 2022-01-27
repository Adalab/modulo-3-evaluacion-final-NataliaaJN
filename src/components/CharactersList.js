import "../styles/components/characters/CharactersList.scss";
import CharacterCard from "./CharacterCard";

const CharactersList = ({charactersData}) => {
  const characterElements = charactersData.map(
    (eachCharacterData, index) => {
      return (
        <li className="charactersListContainer__charactersList--item" key={index}>
          <CharacterCard eachCharacterData={eachCharacterData} />
        </li>
      );
    }
  );

  return (
    <section className="charactersListContainer">
      <ul className="charactersListContainer__charactersList">
        {characterElements}
      </ul>
    </section>
  );
};

export default CharactersList;
