import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  WelcomePage,
  Register,
  Signin,
  ForgotPassword,
  Signout,
  Profile,
  Main,
  ListItem,
  TaskItem,
  IndividualList,
} from "./Components";

const showDialog = dialog => {
  let d = document.querySelector(`.${dialog}`);
  if (d) {
    d.classList.remove("hidden");
  } else {
    console.log("Unknown dialog specified to Main.js toggleDialog function.");
  }
};
const hideDialog = dialog => {
  let d = document.querySelector(`.${dialog}`);
  if (d) {
    d.classList.add("hidden");
  } else {
    console.log("Unknown dialog specified to Main.js toggleDialog function.");
  }
};

const showCreateListDialog = () => {
  showDialog("CreateListDialog");
};
const hideCreateListDialog = () => {
  hideDialog("CreateListDialog");
};
const showSearchDialog = () => {
  showDialog("SearchDialog");
};
const hideSearchDialog = () => {
  hideDialog("SearchDialog");
};

const showSetReminderDialog = () => {
  showDialog("SetReminderDialog");
};
const hideSetReminderDialog = () => {
  hideDialog("SetReminderDialog");
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="Front-End">
        <Route exact path="/" component={WelcomePage} />

        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/forgot" component={ForgotPassword} />
        <Route exact path="/signout" component={Signout} />

        <PrivateRoute
          exact
          path="/my"
          component={Main}
          showDialog={showDialog}
          hideDialog={hideDialog}
          showCreateListDialog={showCreateListDialog}
          hideCreateListDialog={hideCreateListDialog}
        />
        <PrivateRoute path="/my/profile" component={Profile} />
        <PrivateRoute exact path="/my/list" component={ListItem} />
        <PrivateRoute exact path="/my/list/task" component={TaskItem} />

      </BrowserRouter>
    </div>
  );
}

export default App;
