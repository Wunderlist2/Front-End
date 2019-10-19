import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: gray;
  width: 30%;
`;

const TitleContainer = styled.div`
  text-align: left;
  margin-left: 5%;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3%;
`;

const Lists = props => {
  return (
    <Card>
      <TitleContainer>
        <h3>{props.list.title}</h3>
      </TitleContainer>
      <TaskContainer>
        <p>{props.list.task}</p>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <p>{props.setDate}</p>
      </TaskContainer>
      <button onClick={() => props.deleteList(props.list.id)}>Delete</button>
    </Card>
  );
};

export default Lists;
