import { connect, dispatch } from 'react-redux'
import thunk from 'redux-thunk'
import List from '../components/List'
import { getUserSuccess, setCardDetail, sendUserDetail, fetchSearchVisitor, sortAscByName, sortDescByName } from '../actions/cardActions'

const fetchUserAPI = () => {
  return fetch(`http://jsonplaceholder.typicode.com/users`)
  .then (
    response => Promise.all([response, response.json()])
  ).then (
    ([response, json]) => {
      return json
    }
  )
    .catch(error => {
      throw error;
    })
};

const fetchUserDetails = () => {
  return dispatch => {
   return fetchUserAPI()
      .then(user => {
        dispatch(getUserSuccess(user))
      })
      .catch(error => {
        throw error
   })
  }
}

const setCardDetails= (cardDetail) => {
  return dispatch => {
    dispatch(setCardDetail(cardDetail))
  }
}

const sendUserDetails= (userDetail) => {
  return dispatch => {
    dispatch(sendUserDetail(userDetail))
  }
}
const fetchSearch= (visitorName) => {
  return dispatch => {
    dispatch(fetchSearchVisitor(visitorName))
  }
}
const sortAsc= () => {
  return dispatch => {
    dispatch(sortAscByName())
  }
}
const sortDesc= () => {
  return dispatch => {
    dispatch(sortDescByName())
  }
}

const mapStateToProps = (state) =>  ({ user: state.userReducer, cardDetail: state.cardDetailReducer});

const mapDispatchToProps = (dispatch) => ({
  fetchUserDetails: (username) => dispatch(fetchUserDetails()),
  setCardDetails: (cardDetail) => dispatch(setCardDetails(cardDetail)),
  sendUserDetails: (userDetail) => dispatch(sendUserDetails(userDetail)),
  fetchSearch: (visitorName) => dispatch(fetchSearch(visitorName)),
  sortAsc: () => dispatch(sortAsc()),
  sortDesc: () => dispatch(sortDesc())

})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
