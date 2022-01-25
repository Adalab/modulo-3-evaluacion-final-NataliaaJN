const HouseFilter = (props) => {
    const handleChangeHouseSelect = (ev) => {
        props.handleInputs(ev.currentTarget.value);
    };
  return (
    <label htmlFor="house">
      Selecciona la casa:
      <select
        name="house"
        id="house"
        onChange={handleChangeHouseSelect}
        value={props.houseFilter}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};

export default HouseFilter;
