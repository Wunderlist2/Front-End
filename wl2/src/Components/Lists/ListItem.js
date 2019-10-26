import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "../../axiosWithAuth";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px 20px;
`;

const H3 = styled.h3`
  text-align: left;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10%;
`;

const TaskPlusCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -25px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

const Button = styled.button`
  font-weight: bold;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 10%;
  padding: 5px 3px;
  width: 20%;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;

const ListItem = props => {

  const urlParams = new URLSearchParams(window.location.search)
  const [ID] = useState(urlParams.get('id'));
  const [list, setList] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/todos/${ID}`)
      .then(res => {
        setList(res.data)
        console.log('Get Request: ListItem.js: Result: ', res)
      })
      .catch(err => {
        console.log('Get Request: ListItem.js: Error: ', err)
      })
  }, [])

  const deleteList = () => {
    axiosWithAuth()
      .delete(`/api/todos/${props.list.id}`)
      .then(res => {
        console.log('Delete Request: ListItem.js: Result: ', res)
      })
      .catch(err => {
        console.log('Delete Request: ListItem.js: Error: ', err)
      })
  }

  const editList = () => {
    props.showModal()
    // axiosWithAuth()
    //     .put(`/api/todos/${props.list.id}`)
    //     .then(res => {
    //         console.log('Put Request: List: List: Result: ', res)
    //     })
    //     .catch(err => {
    //         console.log('Put Request: List: List: Error: ', err)
    //     })
  }

  return (
    <div>
      <Link to={`/my`} style={{ position: 'fixed', top: '16px', left: '16px', }}>
        <div>Go Back</div>
      </Link>
      <Card>
        <H3>{list.title}</H3>
        <TaskContainer>
          <TaskPlusCheckbox>
            <p>{list.task}</p>
            <input type="radio" id="checkbox" name="checkbox" />
          </TaskPlusCheckbox>
          <DateContainer>
            <p>{list.setDate}</p>
          </DateContainer>
        </TaskContainer>
        <ButtonContainer>
          <Button onClick={deleteList}>Delete</Button>
          <Button onClick={editList}>Edit</Button>
        </ButtonContainer>
      </Card>
    </div>
  );
}

export default ListItem;
