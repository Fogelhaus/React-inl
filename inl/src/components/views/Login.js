import React, { Component } from 'react'
import LoginForm from '../forms/loginForm'


class Login extends Component {


    render() {
        return(
            <div>
                <h1>Login</h1>
                <LoginForm />
            </div>   
        )
    }

}

export default Login