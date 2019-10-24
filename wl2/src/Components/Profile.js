import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait, faCog, faBell, faVolumeDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import defaultPhoto from '../generic-user-icon.jpg';

library.add(faPortrait, faCog, faBell, faVolumeDown, faEnvelope)

let userPhoto = {
  photo: localStorage.getItem('photo') || defaultPhoto
};

const Profile = (props) => {

    return(
        <div>
          <div style={{display: "flex"}}>
            <img src={userPhoto.photo} alt='profile portrait' style={{height: '100px', width: '100px'}}/>
            <div>
              <h2>Hello, Adric!</h2>
              <h4 style={{textAlign: 'left'}}>Sign Out</h4>
            </div>
          </div>
          <br/>
          <div style={{display: "flex"}}>
            <p><FontAwesomeIcon icon={faPortrait} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Account</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <p><FontAwesomeIcon icon={faCog} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Settings</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <p><FontAwesomeIcon icon={faBell} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Notifications</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <p><FontAwesomeIcon icon={faVolumeDown} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Sounds</p>
          </div>
          <hr/>
          <div style={{display: "flex"}}>
            <p><FontAwesomeIcon icon={faEnvelope} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Email</p>
          </div>
        </div>
    )
}

export default Profile;

// <h2>Hello, {props.user.firstName}!</h2>
//<img className="fas fa-portait" alt='test' style={{height: '100px', width: '100px'}}/>
