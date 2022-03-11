import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {person: ""};
    }

    componentDidMount() {
        this.UserList();
    }

    UserList=()=> {

        axios.get('https://yuban.banyu.guru/api/userlist')
            .then(response=>{
                console.log(response);
                this.setState({ person: response.data})
                })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (

            <div id="layout-content" className="layout-content-wrapper">
                <a>test</a>
                <div className="panel-list">{  this.state.person }</div>
            </div>
        );
    }
}