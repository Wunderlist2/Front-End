import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../axiosWithAuth';

export default function Register(props) {
    const [signUpData, setSignUpData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = e => {        
        e.preventDefault();
        setIsLoading(true);

        axiosWithAuth()
            .post('/api/auth/register', signUpData)
            .then(res => {
                localStorage.setItem('token', res);
                setIsLoading(false);
                props.history.push('/profile');
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
                                    autoComplete="fname"
                                    name="firstName"
                                    id="firstName"
                                    label="First Name"
                                    onChange={handleChanges}
                                />
                                </div>
                                <div>
                                <input
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleChanges}
                                />
                                </div>
                                <div>
                                <input
                                    id="email"
                                    type="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChanges}
                                />
                                </div>
                                <div>
                                <input
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChanges}
                                />
                                </div>
                                <div>
                                    <p>
                                        <span>By signing up, you agree to Wunderlist's <font color="FF4081"><a href="https://getfeasting.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>, <a href="https://getfeasting.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> <font color="757575">and</font> <a href="https://getfeasting.com/cookie" target="_blank" rel="noopener noreferrer">Cookie Policy</a></font></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                        >
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