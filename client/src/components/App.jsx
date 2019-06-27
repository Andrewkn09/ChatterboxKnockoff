import React, { Component } from 'react';
import Axios from 'axios';
import Messages from './Messages.jsx';
import SearchForm from './SearchForm';
import RoomForm from './RoomForm';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: 'anonymous',
      currentRoom: 'lobby'
    };
    this.updateMessages = this.updateMessages.bind(this);
  }

  updateMessages() {
    return Axios.get(`/messages/${this.state.currentRoom}`).then(({ data }) => {
      this.setState({
        messages: data
      });
    });
  }

  componentDidMount() {
    while (!currentUser) {
      var currentUser = prompt('Enter username');
    }
    Axios.post('/users', { currentUser }).catch(err =>
      console.log('User exists already')
    );
    this.setState({ currentUser }, this.updateMessages);
  }

  render() {
    const { messages, currentUser, currentRoom } = this.state;
    return (
      <div>
        <h1>Chatterbox</h1>
        <div>
          <RoomForm />
          <SearchForm
            username={currentUser}
            roomname={currentRoom}
            handleUpdate={this.updateMessages}
          />
          <Messages messages={messages} />
        </div>
      </div>
    );
  }
}
