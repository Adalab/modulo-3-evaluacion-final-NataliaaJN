import "../styles/components/form/ButtonResetFilters.scss"
const ButtonResetFilters = (props) => {
  const reset = (ev) => {
props.resetFilters(ev);
  };
  return <button className="form__btnReset" onClick={reset}>Borrar filtros</button>;
};

export default ButtonResetFilters;
