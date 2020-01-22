import React, { Component } from 'react';

export default class Login extends Component{
    constructor() {
    super();
    
    this.state = {
        username: '',
        password: ''
        };

    this.alertMsg = this.alertMsg.bind(this);
    }

    handleUsernameChange(name) {
        this.setState({ username: name });
    }
    
    handlePasswordChange(pass) {
        this.setState({ password: pass });
    }

    alertMsg(username, password) {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input className="username" onChange={e => this.handleUsernameChange(e.target.value)}></input>
                <input className="login" onChange={e => this.handlePasswordChange(e.target.value)}></input>
                <button onClick={() => { this.alertMsg()}}>Login</button>
            </div>
        )
    }
}