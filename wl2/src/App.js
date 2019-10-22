import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import {
  WelcomePage
  ,Register
  ,Signin
  ,ForgotPassword
  ,Signout
  ,Profile
  ,Main
  ,ListItem
  ,TaskItem
} from "./Components";

const showDialog = (dialog) => {
  console.log('dialog: ', dialog);
  let d = document.querySelector(`.${dialog}`);
  console.log('d: ', d);
  if (d) {
    d.classList.remove('hidden');
  } else {
    console.log('Unknown dialog specified to Main.js toggleDialog function.');
  }
}
const hideDialog = (dialog) => {
  console.log('dialog: ', dialog);
  let d = document.querySelector(`.${dialog}`);
  console.log('d: ', d);
  if (d) {
    d.classList.add('hidden');
  } else {
    console.log('Unknown dialog specified to Main.js toggleDialog function.');
  }
}

const showCreateListDialog = () => {
  showDialog('CreateListDialog');
}
const hideCreateListDialog = () => {
  hideDialog('CreateListDialog');
}

const showSearchDialog = () => {
  showDialog('SearchDialog');
}
const hideSearchDialog = () => {
  hideDialog('SearchDialog');
}

const showSetReminderDialog = () => {
  showDialog('SetReminderDialog');
}
const hideSetReminderDialog = () => {
  hideDialog('SetReminderDialog');
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="Front-End">
        <Route exact path="/" component={WelcomePage}/>

        <Route path="/register" component={Register}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/forgot" component={ForgotPassword}/>
        <Route path="/signout" component={Signout}/>

        <PrivateRoute path="/my" component={Main}
          showDialog={showDialog}
          hideDialog={hideDialog}
          showCreateListDialog={showCreateListDialog}
          hideCreateListDialog={hideCreateListDialog}
        />
        <PrivateRoute path="/my/profile" component={Profile}/>
        <PrivateRoute path="/my/list/:listid" component={ListItem}/>
        <PrivateRoute path="/my/list/:listid/task/:taskid" component={TaskItem}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
