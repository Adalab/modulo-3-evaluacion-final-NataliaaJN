const NameFilter = () => {
    return(
        <label htmlFor="name">
          Buscar por personaje:
          <input
            type="text"
            name="name"
            id="name"
            // value={props.filterName}
            // onChange={handleInput}
          />
        </label>
    )
};

export default NameFilter;