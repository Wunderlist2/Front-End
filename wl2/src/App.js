import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import {
  WelcomePage,
  Register,
  Signin,
  Profile,
  Main,
  // , Item
  // , List
  ListItem,
  // , Task
  TaskItem
  // , Dialog
  // , Reminder
  // , Search
} from "./Components";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={Signin} />
      <Route path="/my" component={Main} />
      <Route path="/my/profile" component={Profile} />
      <Route path="/my/list/:listid" component={ListItem} />
      <Route path="/my/list/:listid/task/:taskid" component={TaskItem} />
    </div>
  );
}

export default App;
