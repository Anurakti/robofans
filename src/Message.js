import React, { Component } from 'react';
import './App.css'

class Message extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}

export default Message
