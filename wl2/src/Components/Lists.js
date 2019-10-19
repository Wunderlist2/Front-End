import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 20px 20px;
`;

const TitleContainer = styled.div`
  text-align: left;
  margin-left: 5%;
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
  return (
    <Card>
      <H3>{props.list.title}</H3>

      <TaskContainer>
        <TaskPlusCheckbox>
          <p>{props.list.task}</p>
          <input type="radio" id="checkbox" name="checkbox" />
        </TaskPlusCheckbox>
        <DateContainer>
          <p>{props.list.setDate}</p>
        </DateContainer>
      </TaskContainer>
      <ButtonContainer>
        <Button onClick={() => props.deleteList(props.list.id)}>Delete</Button>
        <Button>Edit</Button>
      </ButtonContainer>
    </Card>
  );
};

export default Lists;
