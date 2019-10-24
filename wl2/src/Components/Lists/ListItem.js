import React from "react";

const ListItem = props => {
  return (
    <div className="listItemContainer">
      <div className="listsPageContainer">
        <div className="listsContainer">
          <h3>title</h3>
          <div className="taskContainer">
            <div className="taskPlusCheckbox">
              <p>task</p>
              <input type="checkbox" id="checkbox" name="checkbox" />
            </div>
            <div className="dateContainer">
              <p>date</p>
            </div>
          </div>
          <div className="buttonContainer">
            <button
              className="listsButton"
              onClick={() => props.deleteList(props.list.id)}
            >
              Delete
            </button>
            <button className="listsButton">Edit</button>
          </div>
        </div>
      </div>
      <div className="listsPageContainer">
        <div className="listsContainer">
          <h3>Completed</h3>
          <div className="taskContainer">
            <div className="taskPlusCheckbox">
              <p>task</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
