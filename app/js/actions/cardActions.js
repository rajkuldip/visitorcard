export const getUserSuccess = (user) => {
  return {
    type: 'LOAD_USER_SUCCESS',
    user
  }
}
export const setCardDetail = (cardDetail) => {
  return {
    type: 'SET_CARD_DETAIL',
    cardDetail
  }
}
export const fetchSearchVisitor = (visitorName) => {
  return {
    type: 'TRACK_SEARCH_CHANGE',
    visitorName
  }
}
export const sortAscByName = () => {
  return {
    type: 'SORT_ASC'
  }
}
export const sortDescByName = () => {
  return {
    type: 'SORT_DESC'
  }
}
