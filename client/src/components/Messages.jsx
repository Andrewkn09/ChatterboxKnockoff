import React, { Component } from 'react';
import MessageEntry from './MessageEntry';
const Messages = ({ messages }) => {
  return (
    <div id='chats'>
      {messages.map(message => {
        return <MessageEntry key={message.id} content={message} />;
      })}
    </div>
  );
};

export default Messages;
