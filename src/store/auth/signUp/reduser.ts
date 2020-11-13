import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_ERROR
} from '../../actions';

const INIT_STATE = { 
  loading: false,
  error: null,
};

type actionType = {
  type: string,
  payload: string
}

export default (state = INIT_STATE, action: actionType) => {
  switch (action.type) { 

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        userData: null,
        loading: false,
        error: action.payload,
      };
    default: 
      return{
        ...state
      }
  }
}