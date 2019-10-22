import React, { useState } from "react";
import axios from "axios";
// import Dialog from "./Dialogs/Dialog";
import styled from "styled-components";

const CreateListDialog = props => {
  const [list, setList] = useState({ title: "", task: "", setDate: "" });

  const addList = list => {
    const newList = {
      id: Date.now(),
      title: list.title,
      task: list.task,
      setDate: list.setDate
    };
    props.setLists([newList, ...props.lists]);
  };

  const handleChange = event => {
    setList({ ...list, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newList = {
      //   id: list.length,
      title: list.title,
      task: list.task,
      setDate: list.setDate
    };

    axios({
      method: "post",
      // url: "https://wunderlist-2.herokuapp.com/api/todos/",
      url: "https://reqres.in/api/users/",
      headers: {
        Authorization: localStorage.getItem("token")
      },
      data: newList
    })
      .then(response => {
        addList(response.data);
      })
      .catch(error => {
        console.log(error, "error");
      });
    setList({ title: "", task: "", setDate: "" });
  };

  return (
    <MaskDiv
      className="Dialog CreateListDialog hidden"
      onClick={() => props.hideCreateListDialog()}
    >
      <FormContainerDiv className="form-container">
        <span
          className="button close-dialog"
          onClick={() => props.hideCreateListDialog()}
        >
          X
        </span>
        <form className="main-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="title">Title</label> */}
          <input
            type="text"
            id="form-input"
            name="title"
            placeholder="type to name your list"
            value={list.title}
            onChange={handleChange}
          />
          {/* <label htmlFor="task">Task</label> */}
          <input
            type="text"
            id="form-input"
            name="task"
            placeholder="task"
            value={list.task}
            onChange={handleChange}
          />
          {/* <label htmlFor="setDate">Due Date</label> */}
          <input
            type="date"
            id="form-input"
            name="setDate"
            value={list.setDate}
            onChange={handleChange}
          />
          <button className="form-button" type="submit">
            +
          </button>
        </form>
      </FormContainerDiv>
    </MaskDiv>
  );
};

const MaskDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
`;

const FormContainerDiv = styled.div`
  // padding-top: 20px;
  // min-height: 100px;
  height: 175px;
  // max-height: 150px;
  width: 400px;
  border-radius: 30px;
  border-top: 1px solid black;
  background: black;
`;

export default CreateListDialog;
