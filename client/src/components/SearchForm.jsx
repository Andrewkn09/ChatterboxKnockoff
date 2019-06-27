import React, { Component } from 'react';
import Axios from 'axios';
export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username, roomname, handleUpdate } = this.props;
    const { message } = this.state;
    console.log(this.props.username);
    Axios.post('/messages/', { message, username, roomname })
      .then(result => {
        handleUpdate();
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.message}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
