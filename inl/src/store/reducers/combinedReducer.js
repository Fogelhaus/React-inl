import { combineReducers } from 'redux'
import authReducer from './authReducer'
import changeReducer from './changeReducer'
import {alert} from './alertReducer'
import customerReducer from './customerReducer'


 const combinedReducer = combineReducers({
    auth: authReducer,
    change: changeReducer,
    alert: alert,
    customers: customerReducer
})

export default combinedReducer;