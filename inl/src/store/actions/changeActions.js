import actions from './types'
import { alertActions } from './alertActions';
import authHeader from '../../components/helpers/authHeader'

const __apiurl = 'http://localhost:3001/api'
export const change = (credentials, id) => dispatch => {
    fetch(__apiurl + '/users/' + id, {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {

            if (res.success) {
                localStorage.setItem('currentUser', JSON.stringify(res));
                dispatch({
                    type: actions.CHANGE_CONTACT_INFO_SUCCESS,
                    name: res.firstname + ' ' +  res.lastname
                })
                dispatch(alertActions.success(res['message']));
            } else {
                dispatch({
                    type: actions.CHANGE_CONTACT_INFO_ERROR
                })
                dispatch(alertActions.error(res['message']));
            }
        })
        .catch((error) => {
            dispatch({
                type: actions.CHANGE_CONTACT_INFO_FATALERROR
            })
            dispatch(alertActions.error(error));
        })
}

//CHANGE PASSWORD

export const changePassword = (credentials, id) => dispatch => {
    fetch(__apiurl + '/users/changepassword/' + id, {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {

            if (res.success) {
                dispatch({
                    type: actions.CHANGE_PASSWORD_SUCCESS
                })
                dispatch(alertActions.success(res['message']));
            } else {
                dispatch({
                    type: actions.CHANGE_PASSWORD_ERROR
                })
                dispatch(alertActions.error(res['message']));
            }
        })
        .catch((error) => {
            dispatch({
                type: actions.CHANGE_PASSWORD_FATALERROR
            })
            dispatch(alertActions.error(error));
        })
}

//CHANGE EMAIL

export const changeEmail = (credentials, id) => dispatch => {
    fetch(__apiurl + '/users/changeemail/' + id, {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {

            if (res.success) {
                dispatch({
                    type: actions.CHANGE_EMAIL_ERROR
                })
                dispatch(alertActions.success(res['message']));
            } else {
                dispatch({
                    type: actions.CHANGE_EMAIL_ERROR
                })
                dispatch(alertActions.error(res['message']));
            }
        })
        .catch((error) => {
            dispatch({
                type: actions.CHANGE_EMAIL_FATALERROR
            })
            dispatch(alertActions.error(error));
        })
}