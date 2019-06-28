import actions from '../actions/types'

const initialState = {
    authSuccess: '',
    authError: '',
}

const changeReducer = ( state = initialState, action) => {
    switch(action.type) {
        case actions.CHANGE_CONTACT_INFO_ERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_CONTACT_INFO_FATALERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_CONTACT_INFO_SUCCESS:
            return {
                ...state,
                authError: 'Ändringen lyckades',
                authSuccess: null,
                name: action.name
            }
        case actions.CHANGE_EMAIL_ERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_EMAIL_FATALERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_EMAIL_SUCCESS:
            return {
                ...state,
                authError: 'Ändringen lyckades',
                authSuccess: null
            }
        case actions.CHANGE_PASSWORD_ERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_PASSWORD_FATALERROR:
            return {
                ...state,
                authError: 'Ändringen misslyckades',
                authSuccess: null
            }
        case actions.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                authError: 'Ändringen lyckades',
                authSuccess: null
            }

        default:
            return state
    }
}


export default changeReducer