import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCustomers } from '../../store/actions/customerActions'
import CustomerForm from '../forms/CustomerForm'


class Customers extends Component {


    render() {
        let currentUser = localStorage.getItem('currentUser')
        if (!currentUser) return <Redirect to='/' />
        return(
            <div>
                <CustomerForm></CustomerForm>
            </div>   
        )
    }

}

const mapStateToProps = state => ({
    customers: state.customers.customers,
    newCustomer: state.customers.customer
})

export default connect(mapStateToProps, { fetchCustomers })(Customers)