import actions from './types'
import http from 'axios'
import {history} from '../../components/helpers/history'
import { alertActions } from './alertActions';

const __apiurl = 'http://localhost:3001/api'

export const login = (credentials) => dispatch => {

    fetch(__apiurl + '/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                localStorage.setItem('currentUser', JSON.stringify(res));
                localStorage.setItem('token', JSON.stringify(res['token']));
                history.push('/profile')
                dispatch({
                    type: actions.LOGIN_SUCCESS,
                    payload: res.token,
                    name: res.firstname + ' ' + res.lastname
                })

            } else {
                dispatch({
                    type: actions.LOGIN_ERROR
                })
                dispatch(alertActions.error(res['message']));
            }
        })
        .catch((error) => {
            dispatch({
                type: actions.LOGIN_FATAL_ERROR
            })
            dispatch(alertActions.error(error));
        })


}

export const register = (credentials) => dispatch => {
    fetch(__apiurl + '/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: actions.REGISTER_SUCCESS,
                })
                dispatch(alertActions.success(res['message']));
            } else {
                dispatch({
                    type: actions.REGISTER_ERROR,
                    
                })
                dispatch(alertActions.error(res['message']));
            }
        })
        .catch(errorMessage => {
            dispatch({
                type: actions.REGISTER_FATALERROR,
                
            })
            dispatch(alertActions.error(errorMessage));
        })
}

export const logout = (userinfo) => dispatch => {
   
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    dispatch({
        type: actions.LOGOUT_SUCCESS
    })
    dispatch(alertActions.success('You logged out!'))
    history.push('/')

}

export const getUserById = (userData) => dispatch => {
    http.get(__apiurl + '/users/', + userData, {
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + userData.token
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: actions.LOGOUT_SUCCESS
                })
            } else {
                dispatch({
                    type: actions.LOGOUT_ERROR
                })
            }
        })
        .catch(() => {
            dispatch({
                type: actions.LOGOUT_ERROR
            })
        })
}