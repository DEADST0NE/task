import axios from 'axios';

import { API_URL } from '../../../utils/constant';

import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_ERROR
} from '../../actions';
import { userSuccess } from '../../user/actions';

type signUpType = {
  email: string,
  password: string,
  fio: string,
  alias: string,
}

type responsType = {
  token: string,
}

const signUpRequested = () => ({
  type: SIGN_UP_REQUEST
})

const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
})

const signUpError = (errorMessage: string) => ({
  type: SIGN_UP_ERROR,
  payload: errorMessage,
}) 

const postSignUp = async (object: signUpType) => {
  return axios.post(`${API_URL}auth/signUp`, object).then((response) => response.data);
}

const signUpRequest = (object: signUpType, historyPush: Function) => (dispatch: any) => {
  console.log(object);
  dispatch(signUpRequested());
  postSignUp(object)
  .then((data: responsType) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('accessToken', `Bearer ${data.token}`);
    dispatch(signUpSuccess());
    dispatch(userSuccess(data.token));
    historyPush('/home');
  })
  .catch((error) => dispatch(signUpError(error.response.data)))
}

export default signUpRequest;