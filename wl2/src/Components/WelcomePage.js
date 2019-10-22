import React from "react";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const WelcomePage = () => {
    return(
        <div>
            <h1>Wunderlist 2.0</h1>
            <h2>Organize. Remind. Share</h2>

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

export default WelcomePage;