import React, { useState } from "react";
import {
  Header,
  // ,ScheduledItems
  Lists,
  CreateListDialog,
  Footer,
  SearchDialog,
  SetReminderDialog,
  Item,
  ListItem
} from "./";

const Main = props => {
  const [lists, setLists] = useState([]);
  const [scheduledItems, setScheduledItems] = useState([]);

  let user = {
    token: localStorage.getItem("token"),
    userID: localStorage.getItem("userID"),
    message: localStorage.getItem("message")
  };
  // console.log('user: ', user);

  if (!user.token) {
    console.log("Token not found in local storage... Redirecting to Signin.");
    localStorage.clear();
    props.history.push("/");
  }

  let headerMessage = user.message;

  const deleteList = id => {
    const newArray = lists.filter(list => {
      return list.id !== id;
    });
    setLists(newArray);
  };

  return (
    <React.Fragment>
      <Header {...props} message={headerMessage} />
      <section className="mainContent">
        {(!user || (user && !lists)) && (
          <div className="noData">
            <h2>Welcome to Wunderlist!</h2>
            <h3>Click the + button below to add your first list.</h3>
          </div>
        )}
        {user && lists && (
          <div className="hasData">
            {scheduledItems && <h2 className="subSectionTitle">Scheduled</h2>}
            {/* <p className="item">Lorem ipsum dolor sit amet.</p> */}
            {<h2 className="subSectionTitle">My Lists</h2>}
            {lists.map(list => {
              return <Item list={list} />;
            })}
            {/* <p className="item">Lorem ipsum dolor.</p> */}
          </div>
        )}
        <div>
          <CreateListDialog
            lists={lists}
            setLists={setLists}
            hideCreateListDialog={props.hideCreateListDialog}
          />
          {/* {lists.map(list => {
            return <Lists key={list.id} list={list} deleteList={deleteList} />;
          })} */}
        </div>
      </section>
      <Footer
        {...props}
        showSearch={true}
        lists={lists}
        setLists={setLists}
        plusAction={props.showCreateListDialog}
      />
    </React.Fragment>
  );
};

export default Main;
