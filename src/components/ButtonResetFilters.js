import PropTypes from 'prop-types';
import "../styles/components/form/ButtonResetFilters.scss";
const ButtonResetFilters = (props) => {
  const reset = (ev) => {
    props.resetFilters(ev);
  };
  return (
    <button type="reset" className="form__btnReset" onClick={reset}>
      Borrar filtros <i className="fa-solid fa-filter-circle-xmark"></i>
    </button>
  );
};

ButtonResetFilters.propTypes={
  resetFilters: PropTypes.func.isRequired
}

export default ButtonResetFilters;
