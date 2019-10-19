import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register(props) {
  const [signUpData, setSignUpData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post('https://wunderlist-02.herokuapp.com/api/auth/register', signUpData)
      .then(res => {
        console.log('res: ', res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('message', res.data.message);
        localStorage.setItem('userID', res.data.userID);
        setIsLoading(false);
        props.history.push('/my');
      })
      .catch(err => console.log('Sign Up Error: ', err))
  }

  const handleChanges = e => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoading === true) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  else {
    return (
      <div>
        <div>
          <div>
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div>
                  <input
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    autoComplete="fname"
                    onChange={handleChanges}
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    autoComplete="lname"
                    onChange={handleChanges}
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    id="username"
                    name="username"
                    label="Username"
                    type="username"
                    autoComplete="username"
                    onChange={handleChanges}
                    placeholder="Username"
                  />
                </div>
                <div>
                  <input
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChanges}
                    placeholder="Password"
                  />
                </div>
                <div>
                  <p>
                    <span>By signing up, you agree to Wunderlist's <font color="FF4081"><a href="https://getfeasting.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>, <a href="https://getfeasting.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> <font color="757575">and</font> <a href="https://getfeasting.com/cookie" target="_blank" rel="noopener noreferrer">Cookie Policy</a></font></span>
                  </p>
                </div>
              </div>
            </div>
            <button type="submit">
              Sign Up
            </button>
            <div>
              <div>
                <Link to={`/signin`} >
                  Already have an account? Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}