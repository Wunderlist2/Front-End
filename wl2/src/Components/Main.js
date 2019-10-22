import React, { useState } from "react";
import {
  Header,
  // ,ScheduledItems
  Lists,
  CreateListDialog,
  Footer
} from "./";

const Main = props => {
  // const [user, setUser] = useState({
  //   token: "",
  //   userID: "",
  //   message: ""
  // });
  const [lists, setLists] = useState([]);
  const [scheduledItems, setScheduledItems] = useState([]);

  // setUser({
  //   ...user,
  //   token: localStorage.getItem('token'),
  //   userID: localStorage.getItem('userID'),
  //   message: localStorage.getItem('message')
  // });

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
            <p className="item">Lorem ipsum dolor sit amet.</p>
            <p className="item">Earum velit aperiam dignissimos quis.</p>
            <p className="item">Enim molestiae libero odit, illum.</p>
            <p className="item">Lorem ipsum dolor.</p>
            <p className="item">Sint, facilis, ex.</p>
            <p className="item">A, reprehenderit, pariatur!</p>
            <p className="item">Iusto, debitis, dolore.</p>
            <p className="item">Est vitae, distinctio!</p>
            {<h2 className="subSectionTitle">Lists</h2>}
            <p className="item">Lorem ipsum dolor.</p>
            <p className="item">Sint, facilis, ex.</p>
            <p className="item">A, reprehenderit, pariatur!</p>
            <p className="item">Iusto, debitis, dolore.</p>
            <p className="item">Est vitae, distinctio!</p>
            <p className="item">Lorem ipsum dolor sit amet.</p>
            <p className="item">Earum velit aperiam dignissimos quis.</p>
            <p className="item">Enim molestiae libero odit, illum.</p>
            <p className="item">Lorem ipsum dolor.</p>
            <p className="item">Sint, facilis, ex.</p>
            <p className="item">A, reprehenderit, pariatur!</p>
            <p className="item">Iusto, debitis, dolore.</p>
            <p className="item">Est vitae, distinctio!</p>
          </div>
        )}
        <div>
          <CreateListDialog
            lists={lists}
            setLists={setLists}
            hideCreateListDialog={props.hideCreateListDialog}
          />
          {lists.map(list => {
            return <Lists key={list.id} list={list} deleteList={deleteList} />;
          })}
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
