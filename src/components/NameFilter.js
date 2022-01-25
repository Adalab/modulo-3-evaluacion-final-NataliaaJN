const NameFilter = (props) => {
  const handleChangeNameInput = (ev) => {
    props.handleInputs({
      key: "name",
      value: ev.currentTarget.value,
    });
  };
  return (
    <label htmlFor="name">
      Buscar por personaje:
      <input
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChangeNameInput}
      />
    </label>
  );
};

export default NameFilter;
