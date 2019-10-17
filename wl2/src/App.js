import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
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
        <Route path="/profile" component={Profile}/>
        <Route path="/my" component={Main}/>
        <Route path="/my/list/:listid" component={ListItem}/>
        <Route path="/my/list/:listid/task/:taskid" component={TaskItem}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
