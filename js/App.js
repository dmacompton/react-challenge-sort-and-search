import React, { Component } from 'react';
import _ from 'lodash';
import {getJSON} from './function';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Нажми на кнопку!',
      searchString: 'Ethan',
      users: [],
      user: []
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
  
  sortByAlphabet() {
    // this.setState({users: _.sortBy(this.state.users, "name")})
  }
  
  sortByAge() {
    console.log(this);
  }
  
  userSearch(str) {
    // this.setState({users: str});
  }

  render() {
    console.log(this.state);
    return (
      <div className="app container-fluid">
        {this.state.users.length > 0 ? 
          <div className="row">
            <div className="col-sm-12">
              <SearchBar/>
              <ToolBar sortName={this.sortByAlphabet} sortAge={this.sortByAge} />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser user={this.state.user}/>
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <UserList searchString={this.state.searchString} users={this.state.users} onUserClick={user => this.setState({user})}/>
            </div>
          </div> : 
          <p className="text-center h2">LOADING</p>
        }
      </div>
    );
  }
}