import React, { Component } from 'react';
import Axios from 'axios';
import Messages from './Messages.jsx';
import SearchForm from './SearchForm';
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
    this.setState({ currentUser }, this.updateMessages);
    Axios.post('/users', { currentUser }).catch(err => console.log(err));
  }

  render() {
    const { messages, currentUser, currentRoom } = this.state;
    return (
      <div>
        <h1>Chatterbox</h1>
        <div>
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
