import React, {Component} from "react";
import UserData from "./UserData";

export default class UserList extends Component {
  render() {

    
    var searchString = this.props.searchString.trim().toLowerCase();
    var users = this.props.users;

    if(searchString.length > 0){
      users = users.filter((u) => {
        return u.namegit .toLowerCase().match( searchString );
      });
    }
    var usersList = users.map(
      (user) => <UserData key={user.id} user={user} onUserClick={this.props.onUserClick} />
    );
    
    return (
      <table className="user-list table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody> 
          { usersList }
        </tbody>
      </table>
    );
  }
}