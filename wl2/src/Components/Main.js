import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../axiosWithAuth';
import { UserContext } from "../contexts/UserContext";
import { Header, Lists, CreateListDialog } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SearchDialog from "./Dialogs/SearchDialog";
import styled from "styled-components";

library.add(faPlus);
library.add(faSearch);

const MaskDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
`;

const FormContainerDiv = styled.div`
  // padding-top: 20px;
  // min-height: 100px;
  height: 175px;
  // max-height: 150px;
  width: 400px;
  border-radius: 30px;
  border-top: 1px solid black;
  background: black;
`;

const Main = props => {

  const [user, setUser] = useState({})
  const [lists, setLists] = useState([]);
  const [list, setList] = useState({});
  const [search, setSearch] = useState('');
  const [scheduledItems, setScheduledItems] = useState([]);
  const [showSearchDialog, setShowSearchDialog] = useState(false);

  const toggleSearchDialog = () => {
      setShowSearchDialog(!showSearchDialog);
  };

  const editList = () => {

  }

  const handleSearchChange = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log('Search: ', search)
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    return (
        lists.filter(task => {
            task.title.includes(search)
            console.log(task)
        })
    );
  };

  const handleCreateChange = e => {
      setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleCreateSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
          .post('/api/todos/', list)
          .then(res => {
              lists.push(res.data)
              props.hideCreateListDialog();
          })
          .catch(err => console.log('Post Request: CreateListDialog: Error: ', err))

  };

  useEffect(() => {
      axiosWithAuth()
          .get(`/api/users/${localStorage.getItem('userID')}`)
          .then(res => {
              setUser(res.data)
          })
          .catch(err => {
              console.log('Get Request: Main: User Data: Error: ', err)
          })

      axiosWithAuth()
          .get(`/api/todos/`)
          .then(res => {
              setLists(res.data.reverse())
          })
          .catch(err => {
              console.log('Get Request: Main: Todo List: Error: ', err)
          })
  }, [])

  return (
      <UserContext.Provider user={user}>
          <Header {...props} message={``} />
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
              </div>
            )}
            <div>
            <MaskDiv
                className="Dialog CreateListDialog hidden"
            >
                <FormContainerDiv className="form-container">
                    <span
                        className="button close-dialog"
                        onClick={() => props.hideCreateListDialog()}
                    >
                      X
                    </span>
                    <form className="main-form" onSubmit={handleCreateSubmit}>
                        {/* <label htmlFor="title">Title</label> */}
                        <input
                            type="text"
                            id="form-input"
                            name="title"
                            placeholder="type to name your list"
                            value={list.title}
                            onChange={handleCreateChange}
                        />
                        {/* <label htmlFor="task">Task</label> */}
                        <input
                            type="text"
                            id="form-input"
                            name="task"
                            placeholder="task"
                            value={list.task}
                            onChange={handleCreateChange}
                        />
                        {/* <label htmlFor="setDate">Due Date</label> */}
                        <input
                            type="date"
                            id="form-input"
                            name="setDate"
                            value={list.setDate}
                            onChange={handleCreateChange}
                        />
                        <button className="form-button" type="submit">
                            Add new list +
                        </button>
                    </form>
                </FormContainerDiv>
            </MaskDiv>
              {lists.map(list => {
                return <Lists key={list.id} list={list} showModal={props.showCreateListDialog} />;
              })}
            </div>
          </section>
          <footer>
              <div className="footerItems">
                  <div onClick={toggleSearchDialog}>
                      <FontAwesomeIcon icon={faSearch} className="button searchButton" />
                      {showSearchDialog && <SearchDialog />}
                  </div>
                  <div onClick={props.showCreateListDialog}>
                      <FontAwesomeIcon icon={faPlus} className="button createButton" />
                  </div>
              </div>
          </footer>
      </UserContext.Provider>
  );

};

export default Main;
