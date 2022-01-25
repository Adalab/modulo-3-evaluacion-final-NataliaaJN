import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

const Filters = (props) => {
  return (
    <section>
      <form>
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
