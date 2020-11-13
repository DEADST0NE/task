import axios from 'axios';

import { API_URL } from '../../../utils/constant';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_IN_ERROR
} from '../../actions';
import { userSuccess } from '../../user/actions';

type signInType = {
  email: string,
  password: string,
}

type responsType = {
  token: string,
}

const signInRequested = () => ({
  type: SIGN_IN_REQUEST
})

const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS,
})

const signInError = (errorMessage: string) => ({
  type: SIGN_IN_ERROR,
  payload: errorMessage,
}) 

const postSignIn = async (object: signInType) => {
  return axios.post(`${API_URL}auth/signIn`, object).then((response) => response.data);
}

const signInRequest = (object: signInType, historyPush: Function) => (dispatch: any) => {
  dispatch(signInRequested());
  postSignIn(object)
  .then((data: responsType) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('accessToken', `Bearer ${data.token}`);
    dispatch(signInSuccess());
    dispatch(userSuccess(data.token));
    historyPush('/home');
  })
  .catch((error) => dispatch(signInError(error.response.data)))
}

export default signInRequest;