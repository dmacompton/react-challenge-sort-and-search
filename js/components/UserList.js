import React, {Component} from "react";
import UserData from "./UserData";

export default class UserList extends Component {
  render() {
    if (!this.props.users) { return (<p>Loading...</p>); }

    var usersList = this.props.users.map(
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