import React from "react";
import Image from '../generic-user-icon.jpg';

const Profile = (props) => {

    return(
        <div>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '100px', width: '100px'}}/>
            <div>
              <h2>Hello, Adric!</h2>
              <h3>Sign Out</h3>
            </div>
          </div>
          <br/>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '20px', width: '20px'}}/>
            <p>Account</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '20px', width: '20px'}}/>
            <p>Settings</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '20px', width: '20px'}}/>
            <p>Notifications</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '20px', width: '20px'}}/>
            <p>Sounds</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <img src={Image} alt='test' style={{height: '20px', width: '20px'}}/>
            <p>Email</p>
          </div>
        </div>
    )
}

export default Profile;

// <h2>Hello, {props.user.firstName}!</h2>
