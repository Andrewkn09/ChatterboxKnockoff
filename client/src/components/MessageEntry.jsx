import React, { Component } from 'react';

export default class MessageEntry extends Component {
  render() {
    const { username, message } = this.props.content;
    return (
      <div className='chat'>
        <h5 className='username'>{username}:</h5>
        <div>{message}</div>
      </div>
    );
    5;
  }
}
