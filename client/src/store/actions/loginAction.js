import axios from 'axios';
import errorAction from './errorAction';
import setToken from '../../utils/setToken';
import jwt_decode from 'jwt-decode';
import { initialState } from '../store';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    user: decoded
  };
};
export const logoutAction = decoded => {
  return {
    type: LOGOUT,
    user: decoded
  };
};
export const logout = (history) => dispatch => {
  localStorage.removeItem('jwtToken');

  setToken(false);
  dispatch(logoutAction([]))
  history.push('/')

}

export const login = (r,history) => (dispatch) => {
  console.log(history);
  axios.post('/api/users/login/')
  .then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    setToken(token);

    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    history.push('/') 
  })
  .catch(err => dispatch(errorAction(err)))
}   

export const loginByFb = (r,history) => (dispatch) => {
  axios.get('/api/users/auth/facebook')
  .then(res => console.log(res))
  .catch(err => dispatch(errorAction(err)))
}   

export const getCurrentUser  = () => dispatch => {
  
 dispatch(setCurrentUser(jwt_decode(localStorage.getItem('jwtToken', 'token'))))
}
export default {
  logout,
  login,
  getCurrentUser,
  loginByFb
} 