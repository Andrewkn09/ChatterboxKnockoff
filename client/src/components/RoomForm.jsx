import React, { Component } from 'react';
import Axios from 'axios';
export default class RoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'lobby',
      roomList: []
    };
    this.updateRooms = this.updateRooms.bind(this);
    this.updateCurrentRoom = this.updateCurrentRoom.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.updateRooms();
  }

  updateRooms() {
    Axios.get('/rooms').then(({ data }) => {
      this.setState({ roomList: data });
    });
  }

  updateCurrentRoom(roomname) {
    this.setState({ value: roomname }, () => {
      this.props.handleUpdate(roomname);
    });
  }
  handleChange(e, roomname) {
    var roomname = e.target.value || roomname;
    this.updateCurrentRoom(roomname);
  }

  handleSubmit(e) {
    e.preventDefault();
    var roomname = prompt('enter roomname');
    Axios.post('/rooms', { roomname })
      .then(result => {
        return this.updateRooms();
      })
      .then(result => {
        this.updateCurrentRoom(roomname);
      })
      .catch(err => console.log('Room already added'));
  }
  render() {
    const { value, roomList } = this.state;
    return (
      <form>
        <label>Room: </label>
        <select value={value} onChange={this.handleChange}>
          {roomList.map(({ id, roomname }) => {
            return (
              <option key={id} value={roomname}>
                {roomname}
              </option>
            );
          })}
        </select>
        <input type='submit' value='Add room' onClick={this.handleSubmit} />
      </form>
    );
  }
}
