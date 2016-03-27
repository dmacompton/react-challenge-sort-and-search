import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    console.log(this.props.user);
    if(this.props.user !== undefined) {
      return (
        <div className="thumbnail">
          <img src={`images/${this.props.user.image}.svg`} alt={this.props.user.name}/>
          <div className="thumbnail-caption">
            <h3>{this.props.user.name}</h3>
            <table className="user-info table table-responsive">
              <tbody>
                <tr>
                  <td>Age:</td>
                  <td>{this.props.user.age}</td>
                </tr>
                <tr>
                  <td>Favorite animal:</td>
                  <td>{this.props.user.image}</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{this.props.user.phone}</td>
                </tr>
              </tbody>
            </table>
            <p>
              <b>Favorite phrase:</b>{' '}<span>{this.props.user.phrase}</span>
            </p>
          </div>
        </div>
      );
    } else {
      return (
          <p>No data!</p>
      )
    }
  }
}