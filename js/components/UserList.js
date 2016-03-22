import React, {Component} from "react";
import UserData from "./UserData";

export default class UserList extends Component {
  render() {
    var users = this.props.users.map(
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
          { users }
        </tbody>
      </table>
    );
  }
}