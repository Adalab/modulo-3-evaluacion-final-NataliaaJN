import "../styles/components/form/GenderFilter.scss";
import PropTypes from "prop-types";
const GenderFilter = ({ genderFilter, handleInputs, label, gender }) => {
  const handleChangeGenderFilter = (ev) => {
    handleInputs({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <label className="form__genderFilter--genderLabel" htmlFor="gender">
      {label}
      <input
        className="form__genderFilter--genderLabel--input"
        type="radio"
        name="gender"
        id="gender"
        value={gender}
        onChange={handleChangeGenderFilter}
        checked={genderFilter === gender}
      />
    </label>
  );
};

GenderFilter.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  label: PropTypes.string,
  gender: PropTypes.string,
};

export default GenderFilter;
