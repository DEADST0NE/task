import {
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_ERROR
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

    case SIGN_IN_SUCCESS:
      return {
        ...state, 
        loading: false,
      };

    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_IN_ERROR:
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