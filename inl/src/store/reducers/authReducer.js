
import actions from '../actions/types'
import initialState from '../store'


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.REGISTER_SUCCESS:
            return {
                ...state,
                authError: null,
                authSuccess: 'Registration was successful'
            }

        case actions.REGISTER_ERROR:
            return {
                ...state,
                authError: 'Registration failed',
                authSuccess: null
            }

        case actions.REGISTER_FATALERROR:
            return {
                ...state,
                authError: 'Registration fatal failed',
                authSuccess: null
            }

        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
                token: action.payload,
                name: action.name,
            }

        case actions.LOGIN_ERROR:
            return {

                ...state,
                authError: 'Login failed',
                token: null
            }
        case actions.LOGIN_FATALERROR:
            return {
                ...state,
                authError: 'Login fatal failed'
            }
        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                authError: null,
                token: null
            }

        case actions.LOGOUT_ERROR:
            return {
                ...state,

                authError: 'Logout failed'
            }
        case actions.LOGOUT_FATALERROR:
            return {
                ...state,

                authError: 'Logout failed'
            }
        default:
            return state
    }
}



export default authReducer