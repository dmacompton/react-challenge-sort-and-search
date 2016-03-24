import React, { Component } from 'react';
import Button from './Button';

export default class ToolBar extends Component {
  render() {
    return (
      <div className="toolbar">
        <Button title="Sort by name" icon="fa-sort-alpha-asc" update={this.props.sortName}/>
        <Button title="Sort by age" icon="fa-sort-numeric-desc" update={this.props.sortAge}/>
      </div>
    )
  }
}