const ButtonResetFilters = (props) => {
  const reset = (ev) => {
props.resetFilters(ev);
  };
  return <button onClick={reset}>Borrar filtros</button>;
};

export default ButtonResetFilters;
