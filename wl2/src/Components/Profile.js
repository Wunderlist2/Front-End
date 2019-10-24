import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait, faCog, faBell, faVolumeDown, faEnvelope, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import defaultPhoto from '../generic-user-icon.jpg';

library.add(faPortrait, faCog, faBell, faVolumeDown, faEnvelope, faWindowClose)

let userData = {
  name: localStorage.getItem('username') || 'broken',
  photo: localStorage.getItem('photo') || defaultPhoto
};

const Profile = (props) => {

    let firstName = userData.name

    return(
        <div style={{top: '0', background: 'white', position: 'absolute', right: '0', zIndex: '11', padding: '20px'}}>
          <div style={{textAlign: 'left', top: '10px', fontSize: '25px'}}><FontAwesomeIcon icon={faWindowClose} alt='test'/></div>
          <div style={{display: "flex"}}>
            <div>
              <h2>Hello, { firstName }!</h2>
              <h4 style={{textAlign: 'left'}}>Sign Out</h4>
            </div>
            <img src={userData.photo} alt='profile portrait' style={{height: '100px', width: '100px'}}/>
          </div>
          <br/>
          <div>
            <div style={{display: 'flex', alignItems: 'center', margin: '10px, auto', fontWeight: 'bold'}}><FontAwesomeIcon icon={faPortrait} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Account</div>
          </div>
          <hr/>
          <div>
            <div style={{display: 'flex', alignItems: 'center', margin: '10px, auto', fontWeight: 'bold'}}><FontAwesomeIcon icon={faCog} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Settings</div>
          </div>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', margin: '10px, auto', fontWeight: 'bold'}}><FontAwesomeIcon icon={faBell} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Notifications</div><div><input class="apple-switch" type="checkbox"/></div>
          </div>
          <hr/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', margin: '10px, auto', fontWeight: 'bold'}}><FontAwesomeIcon icon={faVolumeDown} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Sounds</div><div><input class="apple-switch" type="checkbox"/></div>
          </div>
          <hr/>
          <div>
            <div style={{display: 'flex', alignItems: 'center', margin: '10px, auto', fontWeight: 'bold'}}><FontAwesomeIcon icon={faEnvelope} alt='test' style={{height: '30px', width: '30px', marginRight: '15px'}}/>
            Email</div>
          </div>
        </div>
    )
}

export default Profile;
