import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import {
  WelcomePage
  , Register
  , Signin
  , Profile
  , Main
  // , Item
  // , List
  , ListItem
  // , Task
  , TaskItem
  // , Dialog
  // , Reminder
  // , Search
} from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="Front-End">
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/register" component={Register}/>
        <Route path="/signin" component={Signin}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/my" component={Main}/>
        <PrivateRoute path="/my/list/:listid" component={ListItem}/>
        <PrivateRoute path="/my/list/:listid/task/:taskid" component={TaskItem}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
