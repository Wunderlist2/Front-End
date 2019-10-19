import React, { useState } from "react";
import { axiosWithAuth } from '../axiosWithAuth';
import  { Link } from 'react-router-dom';

export default function Signin(props) {
    const [logInData, setLogInData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);     

    const handleSubmit = e => {        
        e.preventDefault();
        setIsLoading(true);

        axiosWithAuth()
            .post('/api/auth/login', logInData)
            .then(res => {
                localStorage.setItem('token', res);
                setIsLoading(false);
                props.history.push('/profile');
            })
            .catch(err => console.log('Log In Error: ', err))
    }

    const handleChanges = e => {
        setLogInData({
            ...logInData,
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
            <div >
                <div >
                    <div>
                        <h1>Sign in</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <input
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChanges}
                            />
                            <input
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChanges}
                            />
                        </div>                        
                        <button
                            type="submit"
                        >
                            Sign In
                        </button>                        
                        <div>
                            <div>
                                <Link to={`/forgot-password`}>
                                    Forgot password?
                                </Link>
                            </div>
                            <div>
                                <Link to={`/register`}>
                                    {"New to WunderList? Sign Up"}
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}