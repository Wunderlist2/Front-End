import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  // ScheduledItems
  SearchButton,
  CreateList
} from "./";
import Lists from "./Lists";

const Main = props => {
  const [lists, setLists] = useState([]);
  return (
    <React.Fragment>
      <header>
        <div className="Greeting">
          <h1>Hello{props.user && ` , ${props.user.firstName}`}!</h1>
        </div>
        {props.user && (
          <div>
            <NavLink to="/profile">
              <img src={props.user.photo} alt="User" />
            </NavLink>
          </div>
        )}
      </header>
      <section>
        {(!props.user || (props.user && !props.lists)) && (
          <div className="NoData">
            <h2>Welcome to Wunderlist!</h2>
            <h3>Click the + button below to add your first list.</h3>
          </div>
        )}
        {props.user && props.lists && (
          <div className="HasData">
            {props.scheduledItems && <h2>Scheduled</h2>}
            {<h2>Lists</h2>}
          </div>
        )}
      </section>
      <footer>
        <div className="footerItems">
          <SearchButton />
          <CreateList lists={lists} setLists={setLists} />
          <div>&copy;2019 Wunderlist</div>
        </div>
        <div>
          {lists.map((list, index) => {
            return <p key={index}>{list.title}</p>;
          })}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Main;
