import "../styles/components/form/NameFilter.scss";
import PropTypes from "prop-types";

const NameFilter = ({nameFilter, handleInputs}) => {
  const handleChangeNameInput = (ev) => {
    ev.preventDefault();
    handleInputs({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <label className="form__nameLabel" htmlFor="name">
      Buscar por personaje:
      <input
        className="form__nameLabel--input"
        type="search"
        name="name"
        id="name"
        value={nameFilter}
        placeholder="Ej: Harry Potter"
        onChange={handleChangeNameInput}
      />
    </label>
  );
};

NameFilter.propTypes={
  handleInputs: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};

export default NameFilter;
