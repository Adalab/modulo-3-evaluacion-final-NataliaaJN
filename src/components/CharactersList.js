import CharacterCard from "./CharacterCard";

const CharactersList = (props) => {
  const characterElements = props.charactersData.map((eachCharacterData, index) => {
    return (
      <li key={index}>
        <CharacterCard eachCharacterData={eachCharacterData} />
      </li>
    );
  });

  return (
    <section>
      <ul>
          {characterElements}
      </ul>
    </section>
  );
};

export default CharactersList;
