import React from "react";

const handleChange = event => {};

const handleSubmit = event => {};

const SetReminderDialog = props => {
  return (
    <div className="setReminderDialogContainer">
      <h4>Remind Me On:</h4>
      <form className="setReminderDialogForm" onSubmit={handleSubmit}>
        <input
          type="date"
          id="form-input"
          name="setDate"
          value={props.list.setDate}
          onChange={handleChange}
        />
        <button
          className="setReminderDialogButton"
          onClick={props.toggleSearchDialog}
        >
          Hide
        </button>
      </form>
    </div>
  );
};

export default SetReminderDialog;
