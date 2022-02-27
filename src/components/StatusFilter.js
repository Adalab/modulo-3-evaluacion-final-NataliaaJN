import "../styles/components/form/StatusFilter.scss";
const StatusFilter = ({ label, status, statusFilter, handleInputs }) => {
  const handleChangeStatusFilter = (ev) => {
    handleInputs({
      key: "status",
      value: ev.currentTarget.checked,
    });
  };
  return (
    <label className="statusFilter__label" htmlFor="status">
      {label}
      <input
        className="statusFilter__label--input"
        type="checkbox"
        id="status"
        name="status"
        value={status}
        onChange={handleChangeStatusFilter}
        checked={statusFilter}
      />
    </label>
  );
};

export default StatusFilter;
