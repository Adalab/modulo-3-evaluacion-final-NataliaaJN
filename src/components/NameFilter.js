import "../styles/components/form/NameFilter.scss";
const NameFilter = (props) => {
  const handleChangeNameInput = (ev) => {
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
        type="text"
        name="name"
        id="name"
        value={props.nameFilter}
        onChange={handleChangeNameInput}
      />
    </label>
  );
};

export default NameFilter;
