import React from "react";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

library.add(fab);

const WelcomePage = props => {
  return (
    <div className="welcomepage-container">
      <Container className="inner-container">
        <TextDiv>
          <H1>Wunderlist 2.0</H1>
          <H2>Organize. Remind. Share.</H2>
        </TextDiv>
        <BlackButton onClick={() => props.history.push("/register")}>
          Sign Up
        </BlackButton>
        <WhiteButton onClick={() => props.history.push("/signin")}>
          Sign In
        </WhiteButton>
        <br />
        <div className="welcomepage-socialmedia-container">
          or sign in with:&nbsp;
          <FontAwesomeIcon className="button" icon={["fab", "twitter-square"]} />
          &nbsp;
          <FontAwesomeIcon className="button" icon={["fab", "facebook"]} />
          &nbsp;
          <FontAwesomeIcon className="button" icon={["fab", "google-plus"]} />
        </div>
      </Container>
    </div>
  );
};

//styled components for welcome page//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextDiv = styled.div`
  text-align: left;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 5.5rem;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: lighter;
  margin-top: -15px;
`;

const BlackButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  background: black;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 15px 3px;
  width: 400px;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const WhiteButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  background: white;
  color: black;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px 3px;
  width: 400px;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default WelcomePage;
