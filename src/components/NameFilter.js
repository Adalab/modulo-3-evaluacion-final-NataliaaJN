import "../styles/components/form/NameFilter.scss";
const NameFilter = (props) => {
  const handleChangeNameInput = (ev) => {
    ev.preventDefault();
    props.handleInputs({
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
        value={props.nameFilter}
        placeholder="Ej: Harry Potter"
        onChange={handleChangeNameInput}
        onKeyUp={(ev) => ev.preventDefault()}
      />
    </label>
  );
};

export default NameFilter;
