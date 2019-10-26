import React from "react";
import { axiosWithAuth } from '../axiosWithAuth';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { CheckboxButton } from ".";

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

const Lists = props => {

  const deleteList = () => {
    axiosWithAuth()
      .delete(`/api/todos/${props.list.id}`)
      .then(res => {
        console.log('Delete Request: List: List: Result: ', res)
      })
      .catch(err => {
        console.log('Delete Request: List: List: Error: ', err)
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
    <Card>
      <Link
        to={`/my/list?id=${props.list.id}`}
      >
        <H3>{props.list.title}</H3>
        <TaskContainer>
          <TaskPlusCheckbox>
            <p>{props.list.task}</p>
            <CheckboxButton />
          </TaskPlusCheckbox>
          <DateContainer>
            <p>{props.list.setDate}</p>
          </DateContainer>
        </TaskContainer>
      </Link>
      <ButtonContainer>
        <Button onClick={deleteList}>Delete</Button>
        <Button onClick={editList}>Edit</Button>
      </ButtonContainer>
    </Card>
  );

};

export default Lists;
