import React from 'react';
import { axiosWithAuth } from "../axiosWithAuth";
import { UserContext } from "../contexts/UserContext";
import { Link, NavLink } from "react-router-dom";

import { Modal } from 'reactstrap';

import defaultPhoto from '../generic-user-icon.jpg';
import {faArrowRight, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            lists: [],
            modal: false,
            listTitle: '',
        }
    }

    componentDidMount() {

        axiosWithAuth()
            .get(`/api/users/${localStorage.getItem('userID')}`)
            .then(res => {
                this.setState({
                    user: res.data,
                })
                console.log(res.data)
            })
            .catch(err => {
                console.log('Get Request: Main: User Data: Error: ', err)
            })

        axiosWithAuth()
            .get(`/api/todos/`)
            .then(res => {
                this.setState({
                    lists: res.data.reverse(),
                })
            })
            .catch(err => {
                console.log('Get Request: Main: Todo List: Error: ', err)
            })

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    handleChanges = e => {
        this.setState({
            listTitle: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/todos/', {
                title: this.state.listTitle,
                task: 'task',
                setDate: 'today',
            })
            .then(res => {
                console.log('Post Request: MainPage: Result: ', res.data)
                this.state.lists.unshift(res.data)
                this.setState({
                    lists: this.state.lists,
                    modal: !this.state.modal,
                })
            })
            .catch(err => console.log('Post Request: MainPage: Error: ', err))
    }

    Lists = () => {
        if (this.state.lists.length >= 1) {
            return (
                <div style={{ margin: '0 32px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 600, marginBottom: '56px', textAlign: 'left' }}>My Lists</div>
                    {this.state.lists.map(list => {
                        return (
                            <div key={list.id} style={{ width: '50%', margin: '0 64px 32px', }}>
                                <Link to={`/my/list?id=${list.id}`} >
                                    <div  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'block', marginRight: '16px', textAlign: 'left' }}>
                                            <div style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 600 }}>{list.title}</div>
                                            <div style={{ fontSize: '16px', fontWeight: 400, color: '#757575' }}>task count</div>
                                        </div>
                                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '24px' }} />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else {
            return (
                <div className="noData" style={{ width: '90%', margin: '0 auto 112px', }}>
                    <div style={{ fontSize: '32px', fontWeight: 600, marginBottom: '56px', textAlign: 'left' }}>Welcome to Wunderlist!</div>
                    <div style={{ fontSize: '24px', fontWeight: 400, color: '#757575', textAlign: 'left' }}>Click the plus button below to add your first list.</div>
                </div>
            );
        }
    }

    Modal = () => {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.54)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="createListModal">
                        <div>
                            <input
                                id="listTitle"
                                label="Type to name your list"
                                name="listTitle"
                                placeholder="Type to name your list"
                                className="listTitleInput"
                                autoFocus
                                onChange={this.handleChanges}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
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
            <UserContext.Provider user={this.state.user}>
                <header>
                    <div className="title">
                        <span className="titleMessage">
                            {`Hello,  ${this.state.user.first_name}!`}
                        </span>
                        <span className="userPhoto">
                            <NavLink to="/my/profile">
                                <img src={defaultPhoto} alt="User" />
                            </NavLink>
                        </span>
                    </div>
                </header>
                <this.Modal />
                <this.Lists />
                <footer>
                    <div className="footerItems">
                        <div>
                            <FontAwesomeIcon icon={faSearch} className="button searchButton" />
                        </div>
                        <div onClick={this.toggle}>
                            <FontAwesomeIcon icon={faPlus} className="button createButton" />
                        </div>
                    </div>
                </footer>
            </UserContext.Provider>
        );
    }

}

export default MainPage;