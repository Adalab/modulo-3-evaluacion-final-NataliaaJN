import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

const Filters = () => {
  return (
    <section>
      <form>
        <NameFilter />
        <HouseFilter />
      </form>
    </section>
  );
};

export default Filters;
