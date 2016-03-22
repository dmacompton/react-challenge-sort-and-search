import React, { Component } from 'react';
import {getJSON} from './function';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';

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
      (data) => this.setState({users: data, user: data[0]}),
      (data) => console.error(data)
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="app container-fluid">
        {this.state.users.length > 0 ? 
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser user={this.state.user}/>
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <UserList users={this.state.users} onUserClick={user => this.setState({user})}/>
            </div>
          </div> : 
          <p className="text-center h2">LOADING</p>
        }
      </div>
    );
  }
}