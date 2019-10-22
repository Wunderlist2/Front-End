import React from "react";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

library.add(fab);

const WelcomePage = props => {
  return (
    <div className="welcomepage-container">
      <Container>
        <TextDiv>
          <H1>Wunderlist 2.0</H1>
          <H2>
            Organize. Remind. <br />
            Share
          </H2>
        </TextDiv>
        <BlackButton onClick={() => props.history.push("/register")}>
          Sign Up
        </BlackButton>
        <WhiteButton onClick={() => props.history.push("/signin")}>
          Sign In
        </WhiteButton>
      </Container>
    </div>
  );
};


            <NavLink className="formWidth button dark textBold" to="/register">Sign up</NavLink><br/>
            <NavLink className="formWidth button light" to="/signin">Sign in</NavLink><br/>
            <NavLink className="forgotPassword" to="/forgot">Forgot Password?</NavLink><br/>

            or sign in with:&nbsp;
              <FontAwesomeIcon icon={['fab', 'twitter-square']}/>&nbsp;
              <FontAwesomeIcon icon={['fab', 'facebook']}/>&nbsp;
              <FontAwesomeIcon icon={['fab', 'google-plus']}/>
        </div>
    )
}

//styled components for welcome page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-right: 7%;
  margin-bottom: 200px;
`;

const TextDiv = styled.div`
  text-align: left;
  margin-left: 9%;
`;

const H1 = styled.h1`
  font-size: 5.5rem;
`;

const H2 = styled.h2`
  font-size: 4.5rem;
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
  margin-left: 10%;
  padding: 15px 3px;
  width: 400px;
  border: 2px solid black;

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
  margin-left: 10%;
  padding: 15px 3px;
  width: 400px;
  border: 2px solid black;

  &:hover {
    opacity: 0.7;
  }
`;

export default WelcomePage;
