const HouseFilter = () => {
  return (
    <label htmlFor="house">
      Selecciona la casa:
      <select
        name="house"
        id="house"
        // onChange={handleChange}
        // value={props.filterGender}
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
