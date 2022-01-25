import ButtonResetFilters from "./ButtonResetFilters";
import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

const Filters = (props) => {
  return (
    <section>
      <form>
        <ButtonResetFilters resetFilters={props.resetFilters} />
        <NameFilter
          nameFilter={props.nameFilter}
          handleInputs={props.handleInputs}
        />
        <HouseFilter
          houseFilter={props.houseFilter}
          handleInputs={props.handleInputs}
        />
      </form>
    </section>
  );
};

export default Filters;
