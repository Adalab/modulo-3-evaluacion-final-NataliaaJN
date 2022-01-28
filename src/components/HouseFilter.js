import "../styles/components/form/HouseFilter.scss";
import PropTypes from "prop-types";

const HouseFilter = ({houseFilter, handleInputs}) => {
    const handleChangeHouseSelect = (ev) => {
        handleInputs({
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
        value={houseFilter}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};

HouseFilter.propTypes={
  houseFilter: PropTypes.string,
  handleInputs: PropTypes.func.isRequired,
};

export default HouseFilter;
