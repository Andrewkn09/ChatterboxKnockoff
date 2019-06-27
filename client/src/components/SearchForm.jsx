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
    Axios.post('/messages/', { message, username, roomname })
      .then(result => {
        handleUpdate();
      })
      .then(result => {
        this.setState({ message: '' });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='search'>
          <input
            type='text'
            className='message'
            onChange={this.handleChange}
            value={this.state.message}
            placeholder='Enter message'
          />
          <input type='submit' value='Submit' className='submit' />
        </form>
      </div>
    );
  }
}
