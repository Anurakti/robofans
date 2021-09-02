import React, { Component } from 'react';
import './App.css'
import Message from './Message';

class Login extends Component {
    constructor(){
        super()
        this.state={
            subMessage: 'Welcome and please subscribe',
            logMessage: 'You are now logged in',
            buttonName: 'Logout'
        }
    }
    subscribed = () =>{
        this.setState({
            subMessage:'You have subscribed successfully'
        })
    }
    logout = () =>{
        if(this.state.buttonName==='Logout'){
            this.setState({
                logMessage: 'You are logged out',
                buttonName:'Login'
            })
        }
        else{
            this.setState({
                logMessage: 'You are logged in',
                buttonName:'Logout'
            })
        }
    }
    render() {
        return (
            <div className={this.state.buttonName==='Logout'? 'green':'red'}>
                {/* <h1>{this.state.subMessage} </h1>
                <h2>{this.state.logMessage} </h2> */}
                <Message message= {this.state.subMessage} />
                <Message message ={this.state.logMessage} />
                <button onClick={this.subscribed}>Subscribe</button>
                <button onClick={this.logout}>{this.state.buttonName}</button>
            </div>
        )
    }
}

export default Login
