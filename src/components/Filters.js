import ButtonResetFilters from "./ButtonResetFilters";
import GenderFilter from "./GenderFilter";
import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    // props.handleForm(ev)
    ev.preventDefault();
  }
  return (
    <section>
      <form onSubmit = {handleSubmit} >
        <ButtonResetFilters resetFilters={props.resetFilters} />
        <NameFilter
          nameFilter={props.nameFilter}
          handleInputs={props.handleInputs}
        />
        <HouseFilter
          houseFilter={props.houseFilter}
          handleInputs={props.handleInputs}
        />

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
        
      </form>
    </section>
  );
};

export default Filters;
