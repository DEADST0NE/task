import { combineReducers } from 'redux';

import signIn from './auth/signIn/reduser';
import signUp from './auth/signUp/reduser';
import user from './user/reduser';
const reduccers = combineReducers({
  signIn,
  signUp,
  user,
})

export type AppStateType = ReturnType<typeof reduccers>; 

export default reduccers;