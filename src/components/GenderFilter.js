import "../styles/components/form/GenderFilter.scss";
const GenderFilter = (props) => {
  const handleChangeGenderFilter = (ev) => {
    props.handleInputs({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
      <label className="form__genderFilter--genderLabel" htmlFor="gender">
        {props.label}
        <input
          className="form__genderFilter--genderLabel--input"
          type="radio"
          name="gender"
          id="gender"
          value={props.gender}
          onChange={handleChangeGenderFilter}
          checked={props.genderFilter === props.gender}
        />
      </label>
  );
};

export default GenderFilter;
