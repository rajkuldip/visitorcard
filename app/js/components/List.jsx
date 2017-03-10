import React, { Component } from 'react'
import _ from 'lodash'

export default class List extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchUserDetails();
  }
  handleUserDetail(event) {
    event.preventDefault();
    let id = event.target.title;
    const { user } = this.props;
    user.map((value,key)=>{
      if(id != value.id) return;
      this.props.setCardDetails(value);
    })
  }
  changeHandler() {
    this.props.fetchSearch(this.username.value);
  }
  printList(user) {
    let newArr = [];
    let visitor = user[user.length-1].visitor;
    if(visitor.length == 0) {
      newArr = user.concat();
    } else {
      _.map(user, (value, key)=> {
        if (_.includes(_.lowerCase(value.name), _.lowerCase(visitor))) {
          newArr.push(value);
        }
      })
    }
    return _.map(newArr, (value, i)=>{
      if(_.isUndefined(newArr[i+1]) && visitor.length == 0) return;
      return (
        <li key={i}><a href={value.id} onClick={this.handleUserDetail.bind(this)} title={value.id}>{value.name}</a></li>
      );
    })
  }
  printCard(cardDetail) {
    return(
      <div className="cardHolder">
        <div className="basicInfo">
            <h2><span>{cardDetail.name.split(' ')[0]}</span> {cardDetail.name.split(' ')[1]}</h2>
            <h2 className="shadow"><span>{cardDetail.name.split(' ')[0]}</span> {cardDetail.name.split(' ')[1]}</h2>
            <p>{cardDetail.company.name}</p>
        </div>
        <div className="otherInfo">
            <p>
              <span>{cardDetail.company.bs.split(' ')[0]}</span>
              <span>{cardDetail.company.bs.split(' ')[1]}</span>
              <span>{cardDetail.company.bs.split(' ')[2]}</span>
            </p>
            <p className="contact">
              <span><strong>Phone: </strong>{cardDetail.phone.split(' ')[0].split('-').join('.')}</span>
              <span><strong>Email: </strong>{cardDetail.email}</span>
              <span><strong>URL: </strong>{cardDetail.website}</span>
            </p>
        </div>
      </div>
    )
  }
  sortAsc(event) {
    event.preventDefault();
    this.props.sortAsc();
  }
  sortDesc(event) {
    event.preventDefault();
    this.props.sortDesc();
  }

  render() {
    const { user, cardDetail } = this.props;
    if(_.isEmpty(user) ) return null;
      return (
        <div className="row">
          <div className="col-lg-4">
            <div className="sort">
                <p>
                Sort By:
                <a href="#" onClick={this.sortAsc.bind(this)} > &#8681;</a> |
                <a href="#" onClick={this.sortDesc.bind(this)}> &#8679; </a>
                </p>

            </div>
            <div className="search">
              <input type="text" ref={(ref) => this.username = ref} placeholder="Search Name" id="search" onChange={this.changeHandler.bind(this)}/>
            </div>
            <div className="list">
              <ul>{this.printList(user)}</ul>
            </div>
          </div>
          <div className="col-lg-8">
            { (_.isEmpty(cardDetail) ) ? '' : this.printCard(cardDetail)}
          </div>
        </div>
      )
    }
}
