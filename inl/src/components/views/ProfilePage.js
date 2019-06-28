import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ChangePasswordForm from '../forms/ChangePasswordForm'
import ChangeEmailForm from '../forms/ChangeEmailForm'
import ChangeContactInfoForm from '../forms/ChangeContactInfoForm'


class ProfilePage extends Component {


    render() {
        let currentUser = localStorage.getItem('currentUser')
        if (!currentUser) return <Redirect to='/' />

        return (
            <div className="container my-4">
                <div className="justify-content-center">
                    <div className="text-center"><h1 className="">Min Profil</h1></div>
                    <div className="text-center"><h2 className="">Uppdatera användaruppgifter</h2></div>
                </div>
                <div className="row mt-4 justify-content-center">
                    <div className="col-6">
                        <ChangeEmailForm />
                        <ChangePasswordForm />
                    </div>
                </div>
                <ChangeContactInfoForm />
            </div>
        )
    }

}

export default ProfilePage