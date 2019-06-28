import actions from './types'
import authHeader from '../../components/helpers/authHeader'
import { alertActions } from '../actions/alertActions'

const __apiUrl = 'http://localhost:3001/api'

export const fetchCustomers = () => dispatch => {
    fetch(`${__apiUrl}/customers/all`, {
        method: 'GET',
        headers: authHeader()
    })
        .then(res => res.json())
        .then(customers => dispatch({
            type: actions.FETCH_CUSTOMERS,
            payload: customers
        }))
        .catch(() => {
            localStorage.removeItem('currentUser')
            window.location.reload(true)
        })

}

export const newCustomer = (customerData) => dispatch => {
    fetch(`${__apiUrl}/customers/`, {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(customerData)
    })

        .then(res => res.json())
        .then(res => dispatch({
            type: actions.NEW_CUSTOMER,
            payload: res.data
        }))
        .then(() => dispatch(alertActions.success('Ärendet har registrerats')))
        
}

