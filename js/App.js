import React, { Component } from 'react';
import {getJSON} from './function';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      users: []
    };
    this.setNewUsers();
  }
  
  setNewUsers() {
    getJSON(
      'data.json',
      (data) => this.setState({users: data}),
      (data) => console.error(data)
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <UserList users={this.state.users}/>
      </div>
    );
  }
}