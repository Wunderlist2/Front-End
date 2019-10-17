import React from "react";
import { NavLink } from "react-router-dom";
import {
  // ScheduledItems
  SearchButton
  ,CreateList
} from "./";

const Main = (props) => {
    return(
        <React.Fragment>
          <header>
              <div className="Greeting">
                <h1>Hello{props.user && ` , ${props.user.firstName}`}!</h1>
              </div>
              {props.user && <div>
                <NavLink to="/profile"><img src={props.user.photo} alt="User"/></NavLink>
              </div>}
          </header>
          <section>
            {!props.user &&
              <div className="NoData">
                <h2>Welcome to Wunderlist!</h2>
                <h3>Click the + button below to add your first list.</h3>
              </div>
            }
          </section>
          <footer>
            <div className="footerItems">
              <SearchButton/>
              <CreateList/>
              <div>&copy;2019 Wunderlist</div>
            </div>
          </footer>
        </React.Fragment>
    )
}

export default Main;