import "../styles/components/form/Filters.scss";
import ButtonResetFilters from "./ButtonResetFilters";
import GenderFilter from "./GenderFilter";
import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    // props.handleForm(ev)
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__nameAndHouseFilter">
          <NameFilter
            nameFilter={props.nameFilter}
            handleInputs={props.handleInputs}
          />
          <HouseFilter
            houseFilter={props.houseFilter}
            handleInputs={props.handleInputs}
          />
        </div>
        <div className="form__genderFilter">
          <GenderFilter
            genderFilter={props.genderFilter}
            handleInputs={props.handleInputs}
            label="Todos"
            gender="all"
          />
          <GenderFilter
            genderFilter={props.genderFilter}
            handleInputs={props.handleInputs}
            label="Hombre"
            gender="male"
          />
          <GenderFilter
            genderFilter={props.genderFilter}
            handleInputs={props.handleInputs}
            label="Mujer"
            gender="female"
          />
        </div>
        <ButtonResetFilters resetFilters={props.resetFilters} />
      </form>
    </section>
  );
};

export default Filters;
