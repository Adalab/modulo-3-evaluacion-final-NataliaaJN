import "../styles/components/form/HouseFilter.scss";
const HouseFilter = (props) => {
    const handleChangeHouseSelect = (ev) => {
        props.handleInputs({
            key: "house",
            value: ev.target.value,
        });
    };
  return (
    <label className="form__houseLabel" htmlFor="house">
      Selecciona la casa:
      <select
      className="form__houseLabel--select"
        name="house"
        id="house"
        onChange={handleChangeHouseSelect}
        value={props.houseFilter}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};

export default HouseFilter;
