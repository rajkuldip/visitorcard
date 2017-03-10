import React, { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <span className="navbar-brand">Visitor Card</span>
        </div>
      </div>
    </nav>
    )
  }
}
