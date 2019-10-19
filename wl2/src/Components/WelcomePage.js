import React from "react";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
    return(
        <div>
            <h1>Wunderlist 2.0</h1>
            <h2>Organize. Remind. Share</h2>

            <NavLink className="button-SignUp" to="/register">Sign up</NavLink><br/>
            <NavLink className="button-SignIn" to="/signin">Sign in</NavLink><br/>
        </div>
    )
}

export default WelcomePage;