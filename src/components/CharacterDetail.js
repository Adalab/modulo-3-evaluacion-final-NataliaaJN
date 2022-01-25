import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  const getGender = () =>
    props.character.gender === "male" ? "Hombre" : "Mujer";

  const getAlternateName = () =>
    props.character.alternate_names ? (
      <p>{props.character.alternate_names}</p>
    ) : (
      ""
    );
  return (
    <>
      <Link to="/">Volver</Link>
      <img alt={props.character.name} src={props.character.image} />
      <h2>{props.character.name}</h2>
      
      <ul>
        {getAlternateName()}
        <li><p>Estatus: {getGender()}</p></li>
        <li><p>Especie: {props.character.species}</p></li>
        <li><p>Género: {props.character.gender}</p></li>
        <li><p>Casa: {props.character.house}</p></li>
      </ul>
    </>
  );
};

export default CharacterDetail;
