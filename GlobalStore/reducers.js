import { fromJS } from 'immutable';

import { SET_USER } from './constants'


const initialState =  fromJS({
  accessToken: '',
  user:null,
  notification_sound:'default'
});


function GlobalReducer (state = initialState, action) {
  switch (action.type) {

    case SET_USER:
      return state
        .set('accessToken',action.accessToken)
        .set('user', action.user); 

    default:
      return state
  }
}

export default GlobalReducer;
