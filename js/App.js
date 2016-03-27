import React, { Component } from 'react';
import {getJSON} from './function';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      users: [],
      user: [],
      sortByName: false,
      sortByAge: false
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

    var sortedUsers = [];
    if (this.state.sortByName) {
      sortedUsers = this.state.users.sort(function(e, t) {
        return e.name > t.name ? -1 : 1;
      });
    } else {
      sortedUsers = this.state.users.sort(function(e, t) {
        return e.name > t.name ? 1 : -1;
      });
    }
    
    this.setState({
      users: sortedUsers,
      sortByName: !this.state.sortByName
    });
  }

  sortByAge() {
    var sortedUsers = [];
    if (this.state.sortByAge) {
      sortedUsers = this.state.users.sort(function(e, t) {
        return e.age > t.age ? -1 : 1;
      }); 
    } else {
      sortedUsers = this.state.users.sort(function(e, t) {
        return e.age > t.age ? 1 : -1;
      });
    }
    
    this.setState({
      users: sortedUsers,
      sortByAge: !this.state.sortByAge
    });
  }

  searchBarChange(e) {
    var str = e.target.value;
    this.setState({searchString: str})
  }
  
  activeUser(user) {
    this.setState({user});
  }

  render() {
    var searchString = this.state.searchString.trim().toLowerCase();
    var user = this.state.user;
    var usersList = this.state.users;

    if(searchString.length > 0){
      usersList = [];
      this.state.users.map((u) => {
        if (u.name.toLowerCase().indexOf( searchString.toLowerCase() ) !== -1) {
          usersList.push(u);
        }
      });
      // user = usersList[0];
    }

    return (
      <div className="app container-fluid">
        {this.state.users.length > 0 ?
          <div className="row">
            <div className="col-sm-12">
              <SearchBar inputChange={e => this.searchBarChange(e)}/>
              <ToolBar sortName={ e => this.sortByAlphabet() } sortAge={ e => this.sortByAge() } />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser user={this.state.user}/>
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <UserList users={usersList} onUserClick={ user => this.activeUser(user) }/>
            </div>
          </div> :
          <p className="text-center h2">LOADING</p>
        }
      </div>
    );
  }
}