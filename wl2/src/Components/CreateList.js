import React, { useState } from "react";
import axios from "axios";

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
    <div className="form-container">
      <form className="main-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="title">Title</label> */}
        <input
          type="text"
          id="title"
          name="title"
          placeholder="type to name your list"
          value={list.title}
          onChange={handleChange}
        />
        {/* <label htmlFor="task">Task</label> */}
        <input
          type="text"
          id="task"
          name="task"
          placeholder="task"
          value={list.task}
          onChange={handleChange}
        />
        {/* <label htmlFor="setDate">Due Date</label> */}
        <input
          type="date"
          id="setDate"
          name="setDate"
          value={list.setDate}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateList;
