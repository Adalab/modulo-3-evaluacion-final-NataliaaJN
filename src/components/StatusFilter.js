const StatusFilter = ({ label, status, statusFilter, handleInputs }) => {
    const handleChangeStatusFilter = (ev) => {
        handleInputs({
            key: "status",
            value: ev.currentTarget.checked,
        })
    }
  return (
    <label htmlFor="status">
      {label}
      <input
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
