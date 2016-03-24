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
      searchString: '',
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
  
  searchBarChange(e) {
    var str = e.target.value;
    this.setState({searchString: str})
  }

  render() {
    var searchString = this.state.searchString.trim().toLowerCase();
    var users = this.state.users;

    var user = this.state.user;
    if(searchString.length > 0){
      users = users.filter((u) => {
        return u.name.toLowerCase().match( searchString );
      });
      user = users[0];
    }
    
    return (
      <div className="app container-fluid">
        {this.state.users.length > 0 ? 
          <div className="row">
            <div className="col-sm-12">
              <SearchBar inputChange={e => this.searchBarChange(e)}/>
              <ToolBar sortName={this.sortByAlphabet} sortAge={this.sortByAge} />
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2">
              <ActiveUser user={user}/>
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <UserList searchString={this.state.searchString} users={users} onUserClick={user => this.setState({user})}/>
            </div>
          </div> : 
          <p className="text-center h2">LOADING</p>
        }
      </div>
    );
  }
}