import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import ListContainer from '../containers/listContainer'


export default class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <Nav />
        <div className="content container">
          <h1>Contact Details</h1>
          <div className="details">
            <ListContainer />
          </div>
        </div>
      </div>
    );
  }
}
