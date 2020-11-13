import jwtDecode from 'jwt-decode';

import {
  USER_SUCCESS,
  USER_DELETE
} from '../actions';

const INIT_STATE = null;

interface  actionType {
  type: string,
  payload: string
}

export default (state = INIT_STATE, action: actionType) => {
  switch (action.type) { 

    case USER_SUCCESS:
      return jwtDecode(action.payload).data; 

    case USER_DELETE:
      return null; 
    
      default: 
      return state
  }
}