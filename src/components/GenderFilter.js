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
        type="radio"
        name="gender"
        id="gender"
        value={props.gender}
        onChange={handleChangeGenderFilter}
        defaultChecked={props.genderFilter === props.gender}
      />
    </label>
  );
};

export default GenderFilter;
