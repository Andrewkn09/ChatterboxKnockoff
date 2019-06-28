import React, { Component } from 'react';
import MessageEntry from './MessageEntry';
const Messages = ({ messages }) => {
  return (
    <div className='chats'>
      {messages.map(message => {
        return <MessageEntry key={message._id} content={message} />;
      })}
    </div>
  );
};

export default Messages;
