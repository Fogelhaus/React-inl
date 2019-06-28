import React, { Component } from 'react'
import { connect } from 'react-redux'
import { change } from '../../store/actions/changeActions'

class ChangeContactInfoForm extends Component {
    state = {
        dob: '',
        firstname: '',
        lastname: '',
        addressline: '',
        zipcode: '',
        city: '',
        country: '',

        submitted: false
    }


    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const user = {
            dob: this.state.dob,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            addressline: this.state.addressline,
            zipcode: this.state.zipcode,
            city: this.state.city,
            country: this.state.country,
        }

        const { firstname, lastname, addressline, zipcode, city, country } = this.state
        this.setState({ submitted: true })
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (firstname.length > 0 && lastname.length > 0 && addressline.length > 0 && zipcode.length > 0 && city.length > 0 && country.length > 0) {
            this.props.change(user, currentUser.id)
        }

    }





    render() {

        const { dob, firstname, lastname, addressline, zipcode, city, country, submitted } = this.state

        return (
            <div className="row mt-4 justify-content-center">
                <div className="col-6">
                <div className="text-center"><h3 className="">Uppdatera personuppgifter</h3></div>
                    <form noValidate onSubmit={this.handleSubmit}>

                        <div className={"form-group col-md-4" + (submitted && !dob ? " has-error" : "")}>
                            <label htmlFor="dob">Födelsedatum</label>
                            <input type="text" className={"form-control" + (submitted && !dob ? " is-invalid" : "")} id="dob" placeholder="YYYYMMDD" value={dob} onChange={this.handleChange} />
                            {submitted && !dob &&
                                <div className="invalid-feedback">Du måste fylla i födelsedatum</div>
                            }
                        </div>
                        <div className={"form-group col-md-6" + (submitted && !firstname ? " has-error" : "")}>
                            <label htmlFor="firstname">Förnamn</label>
                            <input type="text" className={"form-control" + (submitted && !firstname ? " is-invalid" : "")} id="firstname" placeholder="Förnamn" value={firstname} onChange={this.handleChange} />
                            {submitted && !firstname &&
                                <div className="invalid-feedback">Du måste fylla i förnamn</div>
                            }
                        </div>
                        <div className={"form-group col-md-6" + (submitted && !lastname ? " has-error" : "")}>
                            <label htmlFor="lastname">Efternamn</label>
                            <input type="text" className={"form-control" + (submitted && !lastname ? " is-invalid" : "")} id="lastname" placeholder="Efternamn" value={lastname} onChange={this.handleChange} />
                            {submitted && !lastname &&
                                <div className="invalid-feedback">Du måste fylla i efternamn</div>
                            }
                        </div>


                            <div className={"form-group col-md-8" + (submitted && !addressline ? " has-error" : "")}>
                                <label htmlFor="addressline">Gatuadress</label>
                                <input type="text" className={"form-control" + (submitted && !addressline ? " is-invalid" : "")} id="addressline" placeholder="Gatuadress" value={addressline} onChange={this.handleChange} />
                                {submitted && !addressline &&
                                    <div className="invalid-feedback">Du måste fylla i adress</div>
                                }
                            </div>
                            <div className={"form-group col-md-3" + (submitted && !zipcode ? " has-error" : "")}>
                                <label htmlFor="zipcode">Postnummer</label>
                                <input type="text" className={"form-control" + (submitted && !zipcode ? " is-invalid" : "")} id="zipcode" placeholder="XXXXX" value={zipcode} onChange={this.handleChange} />
                                {submitted && !zipcode &&
                                    <div className="invalid-feedback">Du måste fylla i postnummer</div>
                                }
                            </div>
                            <div className={"form-group col-md-5" + (submitted && !city ? " has-error" : "")}>
                                <label htmlFor="city">Stad</label>
                                <input type="text" className={"form-control" + (submitted && !city ? " is-invalid" : "")} id="city" placeholder="Stad" value={city} onChange={this.handleChange} />
                                {submitted && !city &&
                                    <div className="invalid-feedback">Du måste fylla i stad</div>
                                }
                            </div>
                            <div className={"form-group col-md-5" + (submitted && !country ? " has-error" : "")}>
                                <label htmlFor="country">Land</label>
                                <input type="text" className={"form-control" + (submitted && !country ? " is-invalid" : "")} id="country" placeholder="Land" value={country} onChange={this.handleChange} />
                                {submitted && !country &&
                                    <div className="invalid-feedback">Du måste fylla i land</div>
                                }
                            </div>
                        <button type="submit" className="btn btn-dark">Uppdatera personuppgifter</button>
                    </form>
                </div>
            </div>
        )


    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (credentials, id) => dispatch(change(credentials, id))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ChangeContactInfoForm)