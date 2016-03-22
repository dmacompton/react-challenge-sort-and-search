import React, { Component } from 'react';

export default class UserData extends Component {
  render() {
    return (
      <tr onClick={() => this.props.onUserClick(this.props.user)}>
        <td><img src={`images/${this.props.user.image}.svg`} alt={this.props.user.name} className="user-image"/></td>
        <td>{this.props.user.name}</td> 
        <td>{this.props.user.age}</td> 
        <td>{this.props.user.phone}</td> 
      </tr>
    )
  }
}