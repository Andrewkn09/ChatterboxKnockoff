import React, { Component } from 'react';

export default class MessageEntry extends Component {
  render() {
    const { username, message } = this.props.content;
    return (
      <div className='chat'>
        <div className='username'>{username}:</div>
        <div>{message}</div>
      </div>
    );
  }
}
