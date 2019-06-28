import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../store/actions/authActions'


class RegistrationForm extends Component {

    state = {
        email: '',
        password: '',
        dob: '',
        firstname: '',
        lastname: '',
        addressline: '',
        zipcode: '',
        city: '',
        country: ''

    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.dob.length > 0 &&
            this.state.firstname.length > 0 &&
            this.state.lastname.length > 0 &&
            this.state.addressline.length > 0 &&
            this.state.zipcode.length > 0 &&
            this.state.city.length > 0 &&
            this.state.country.length > 0

        )
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const credentials = {
            email: this.state.email,
            password: this.state.password,
            dob: this.state.dob,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            addressline: this.state.addressline,
            zipcode: this.state.zipcode,
            city: this.state.city,
            country: this.state.country

        }

        this.props.register(credentials)
    }

    render() {
        const { email, password, dob, firstname, lastname, addressline,
            zipcode, city, country } = this.state;
        const { token, currentUser, statusMessage, errorMessage } = this.props;

        if (token && currentUser) return <Redirect to='/profile' />
        if (errorMessage) { console.log("ErrorMessage: " + errorMessage) }
        return (
            <div className="mt-4 container">
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="email">E-postadress: </label>
                        <input type="email" className="form-control" id="email" value={email} onChange={this.handleChange} />
                        <label htmlFor="password">Lösenord: </label>
                        <input type="password" className="form-control" id="password" value={password} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Födelsedatum: </label>
                        <input type="text" className="form-control" id="dob" value={dob} onChange={this.handleChange} />
                        <label htmlFor="firstname">Förnamn: </label>
                        <input type="text" className="form-control" id="firstname" value={firstname} onChange={this.handleChange} />
                        <label htmlFor="lastname">Efternamn: </label>
                        <input type="text" className="form-control" id="lastname" value={lastname} onChange={this.handleChange} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="addressline">Adress: </label>
                        <input type="text" className="form-control" id="addressline" value={addressline} onChange={this.handleChange} />
                        <label htmlFor="zipcode">Postnummer: </label>
                        <input type="text" className="form-control" id="zipcode" value={zipcode} onChange={this.handleChange} />
                        <label htmlFor="city">Stad: </label>
                        <input type="text" className="form-control" id="city" value={city} onChange={this.handleChange} />
                        <label htmlFor="country">Land: </label>
                        <input type="text" className="form-control" id="country" value={country} onChange={this.handleChange} />
                    </div>
                    <hr />

                    <button type="submit" className="btn btn-primary" disabled={!this.validateForm()}>Registrera</button>
                </form>
                <div className="my-5"> {statusMessage}</div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        currentUser: state.auth.currentUser,
        statusMessage: state.auth.statusMessage,
        errorMessage: state.auth.errorMessage      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials) => dispatch(register(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationForm)