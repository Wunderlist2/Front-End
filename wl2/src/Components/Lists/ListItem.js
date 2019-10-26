import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { axiosWithAuth } from "../../axiosWithAuth";

import { Modal } from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      listID: '',
      list: {},
      tasks: [],
      taskTitle: '',
      setDate: '',
      modal: false,
      modalState: 'add',
    }
  }

  componentDidMount() {

    axiosWithAuth()
      .get(`/api/users/${localStorage.getItem('userID')}`)
      .then(res => {
        this.setState({
          user: res.data,
        })
        this.getListID()
      })
      .then(() => {
        axiosWithAuth()
          .get(`/api/todos/${this.state.listID}`)
          .then(res => {
            this.setState({
              list: res.data,
            })
            console.log('Get Request: ListItem.js: Result: ', res)
          })
          .catch(err => {
            console.log('Get Request: ListItem.js: Error: ', err)
          })
      })
      .catch(err => {
        console.log('Get Request: Main: User Data: Error: ', err)
      })

  }

  getListID = () => {
    const urlParams = new URLSearchParams(window.location.search)
    this.setState({
      listID: urlParams.get('id')
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    })
  }

  deleteList = () => {
    axiosWithAuth()
      .delete(`/api/todos/${this.state.list.id}`)
      .then(res => {
        console.log('Delete Request: ListItem.js: Result: ', res)
        this.props.history.push('/my')
      })
      .catch(err => {
        console.log('Delete Request: ListItem.js: Error: ', err)
      })
  }

  editList = () => {
    axiosWithAuth()
      .put(`/api/todos/${this.state.list.id}`, {
        title: this.state.listTitle,
        task: 'task',
        setDate: 'today',
      })
      .then(res => {
        console.log('Put Request: ListItem.js: Result: ', res)
        this.setState({
          lists: this.state.lists,
        })
      })
      .catch(err => {
        console.log('Put Request: ListItem.js: Error: ', err)
      })
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const obj = {
      taskTitle: this.state.taskTitle,
      setDate: this.state.setDate,
    }
    this.state.tasks.push(obj)
    this.setState({
      tasks: this.state.tasks,
    })
    this.toggle()
  }

  handleNameSubmit = e => {
    e.preventDefault()
    this.editList()
  }

  Tasks = () => {
    return (
      <div className="tasks">
        <form
          onSubmit={this.handleNameSubmit}
          className="myTasks"
        >
          <input
            id="listTitle"
            label="Type to name the to-do"
            name="listTitle"
            placeholder={`${this.state.list.title}`}
            className="taskTitleInput"
            onChange={this.handleChanges}
          />
        </form>

        {this.state.tasks.map(task => {
          return (
            <div key={task.id} className="taskEntryContainer">
              <div className="taskEntryWithArrow">
                <div className="taskEntry">
                  <div className="taskEntryTitle">{task.taskTitle}</div>
                  <div className="taskEntryDate">{task.setDate}</div>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="faIcon" />
              </div>
            </div>
          );
        })}

      </div>
    );
  }

  Modal = () => {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="centeredModal">
          <div className="modalDiv">
            <div>
              <input
                id="listTitle"
                label="Type to name the to-do"
                name="taskTitle"
                placeholder="Type to create a to-do"
                className="modalInput"
                autoFocus
                onChange={this.handleChanges}
              />
              <input
                type="date"
                id="form-input"
                name="setDate"
                className="modalInput"
                onChange={this.handleChanges}
              />
            </div>
            <div className="modalButtonDiv">
              <button className="cancelNewListButton" onClick={this.toggle}>Cancel</button>
              <button className="createNewListButton" onClick={this.handleSubmit}>Create</button>{' '}
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <>
        <header className="listItemHeader">
          <div className="headerCtn">
            <div className="headerLeftIconCtn">
              <NavLink to="/my">
                <FontAwesomeIcon icon={faArrowLeft} className="faIcon" />
              </NavLink>
            </div>
            <div onClick={this.deleteList} className="headerRightIconCtn button">
              <FontAwesomeIcon icon={faTrashAlt} className="faIcon" />
            </div>
          </div>
        </header>
        <this.Tasks />
        <this.Modal />
        <footer>
          <div className="footerListItem">
            <div onClick={this.toggle}>
              <FontAwesomeIcon icon={faPlus} className="button createButton" />
            </div>
          </div>
        </footer>
      </>
    );
  }

}

export default ListItem;