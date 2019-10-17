import React from "react";
import { NavLink } from "react-router-dom";
import {
  // ScheduledItems
} from "./";

const Main = (props) => {
    return(
        <header>
            <div className="Greeting">
              <h1>Hello{props.user && ` , ${props.user.firstName}`}!</h1>
            </div>
            {props.user && <div>
              <NavLink to="/profile"><img src={props.user.photo} alt="User"/></NavLink>
            </div>}
            {!props.user &&
              <div className="NoData">
                <h2>Welcome to Wunderlist!</h2>
                <h3>Click the + button below to add your first list.</h3>
              </div>
            }
        </header>
    )
}

export default Main;