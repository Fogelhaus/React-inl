import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeEmail } from '../../store/actions/changeActions'


class ChangeEmailForm extends Component {

    state = {
        email: '',
        submitted: false
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const user = {
            email: this.state.email,
        }

        const { email } = this.state
        this.setState({ submitted: true })
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (email.length > 0) {
            this.props.changeEmail(user, currentUser.id)
        }
        
    }

    render() {

        const { email, submitted } = this.state

        return (
            <div className="col offset-1">
                                    <form noValidate onSubmit={this.handleSubmit}>
                    <div className="">
                            <div className={"form-group " + (submitted && !email ? " has-error" : "")}>
                                <label htmlFor="email">Email</label>
                                <input type="email" className={"form-control" + (submitted && !email ? " is-invalid" : "")} id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                {submitted && !email &&
                                <div className="invalid-feedback">Email måste fyllas i</div>
                                }
                            </div>
                            </div>
                        <button type="submit" className="btn btn-dark">Ändra e-mail</button>
                    </form>
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
        changeEmail: (credentials, id) => dispatch(changeEmail(credentials, id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmailForm)