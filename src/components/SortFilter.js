import "../styles/components/form/SortFilter.scss";
const SortFilter = ({ sortFilter, handleInputs }) => {
  const handleChangeSortInput = (ev) => {
    handleInputs({
      key: "sort",
      value: ev.currentTarget.checked,
    });
  };

  return (
    <label className="sortFilter__label" htmlFor="sort">
      <i className="fa-solid fa-arrow-down-a-z"></i>
      <input
        className="sortFilter__label--input"
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
