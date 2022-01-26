import "../styles/components/form/GenderFilter.scss";
const GenderFilter = (props) => {
  const handleChangeGenderFilter = (ev) => {
    props.handleInputs({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <label htmlFor="gender">{props.label}
      <input
      className=""
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
