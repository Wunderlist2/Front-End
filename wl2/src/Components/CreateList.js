import React, { useState } from "react";
import axios from "axios";
import Dialog from "./Dialog";
import styled from "styled-components";

const CreateList = props => {
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
      //   url: "https://wunderlist-2.herokuapp.com/api/todos/",
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
    <FormDiv className="form-container">
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
    </FormDiv>
  );
};

const FormDiv = styled.div`
  //   display: none;
  padding-top: 20px;
  background: #3d3d3d;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-top: 50px solid black;
  height: 50vh;
  width: 30%;
`;

export default CreateList;
