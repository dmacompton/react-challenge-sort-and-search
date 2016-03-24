import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar form-group">
          <input onChange={this.props.inputChange} className="form-control" placeholder="Search people by name..." type="text"/>
      </div>
    )
  }
}