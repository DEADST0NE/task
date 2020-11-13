import {
  USER_SUCCESS,
  USER_DELETE
} from '../actions';

const userSuccess = (userInfo: string) => ({
  type: USER_SUCCESS,
  payload: userInfo,
})

const userDelete = (errorMessage: string) => ({
  type: USER_DELETE,
  payload: errorMessage,
}) 

export {
  userSuccess,
  userDelete
}