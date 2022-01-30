const SortFilter = ({sortFilter, handleInputs}) => {
    const handleChangeSortInput = (ev) =>{
        handleInputs({
            key: "sort",
            value: ev.currentTarget.checked,
        })
    };

  return (
    <label htmlFor="sort">
      Ordenar alfabéticamente:
      <input
        type="checkbox"
        name="sort"
        id="sort"
        value={sortFilter}
        checked={sortFilter}
        onChange={handleChangeSortInput}
      />
    </label>
  );
};

export default SortFilter;
