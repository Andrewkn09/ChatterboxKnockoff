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
  //update messages and currentroom depending on the room passed in
  updateMessages(roomname = this.state.currentRoom) {
    Axios.get(`/messages/${roomname}`)
      .then(({ data }) => {
        this.setState({
          messages: data,
          currentRoom: roomname
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    while (!username) {
      var username = prompt('Enter a Username');
    }
    Axios.post('/users', { username }).catch(err =>
      console.log('User exists already')
    );
    this.setState({ currentUser: username }, this.updateMessages);
  }

  render() {
    const { messages, currentUser, currentRoom } = this.state;
    return (
      <div className='container'>
        <h1>Chatterbox</h1>
        <div>
          <RoomForm handleUpdate={this.updateMessages} />
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
