import "../styles/components/form/Filters.scss";
import ButtonResetFilters from "./ButtonResetFilters";
import GenderFilter from "./GenderFilter";
import HouseFilter from "./HouseFilter";
import NameFilter from "./NameFilter";

import PropTypes from "prop-types";
import SortFilter from "./SortFilter";

const Filters = ({handleForm, handleInputs, resetFilters, nameFilter, houseFilter, genderFilter, sortFilter}) => {
  const handleSubmit = (ev) => {
    handleForm(ev)
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__nameAndHouseFilter">
          <NameFilter
            nameFilter={nameFilter}
            handleInputs={handleInputs}
          />
          <HouseFilter
            houseFilter={houseFilter}
            handleInputs={handleInputs}
          />
        </div>
        <div className="form__genderFilter">
          <GenderFilter
            genderFilter={genderFilter}
            handleInputs={handleInputs}
            label="Todos"
            gender="all"
          />
          <GenderFilter
            genderFilter={genderFilter}
            handleInputs={handleInputs}
            label="Hombre"
            gender="male"
          />
          <GenderFilter
            genderFilter={genderFilter}
            handleInputs={handleInputs}
            label="Mujer"
            gender="female"
          />
          <SortFilter sortFilter={sortFilter} handleInputs={handleInputs} />
        </div>
      <ButtonResetFilters resetFilters={resetFilters} />
      </form>
    </section>
  );
};

Filters.propTypes = {
  handleForm: PropTypes.func.isRequired,
  handleInputs: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
  houseFilter: PropTypes.string,
  genderFilter: PropTypes.string,
};

export default Filters;
