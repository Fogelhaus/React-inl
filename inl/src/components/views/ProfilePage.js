import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import http from 'axios'
import ChangePasswordForm from '../forms/ChangePasswordForm'
import authHeader from '../helpers/authHeader'
import ChangeEmailForm from '../forms/ChangeEmailForm'
import ChangeContactInfoForm from '../forms/ChangeContactInfoForm'


class ProfilePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            user: {},
        }
    }


    render() {
        const { user } = this.state
        let currentUser = localStorage.getItem('currentUser')
        if (!currentUser) return <Redirect to='/' />

        return (
            <div className="container my-4">
                <div className="text-center"><h1 className="">Min Profil</h1></div>
                <div className="row justify-content-center text-center">
                    <h2 className="font-weight-light">Välkommen till din sida <span className="">{user.firstname}</span>.</h2>
                </div>
                <div id="contactArea">
                    <div id="Contact" className=" my-4 ">

                        <div className="row mt-4 justify-content-center">
                            <div className="col-md-8">
                                <div className="">
                                    <h4 className="font-weight-light">Användaruppgifter</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item font-weight-light text-muted"> Namn: </li>
                                    <li className="list-group-item">{user.firstname} {user.lastname}</li>
                                    <li className="list-group-item font-weight-light text-muted"> E-postadress: </li>
                                    <li className="list-group-item">{user.email}</li>
                                    <li className="list-group-item font-weight-light text-muted"> Födelsedatum: </li>
                                    <li className="list-group-item">{user.dob}</li>
                                    <li className="list-group-item font-weight-light text-muted"> Gatudress: </li>
                                    <li className="list-group-item">{user.addressline}</li>
                                    <li className="list-group-item font-weight-light text-muted"> Postnummer: </li>
                                    <li className="list-group-item">{user.zipcode}</li>
                                    <li className="list-group-item font-weight-light text-muted"> Stad: </li>
                                    <li className="list-group-item">{user.city}</li>
                                    <li className="list-group-item font-weight-light text-muted"> Land: </li>
                                    <li className="list-group-item">{user.country}</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>




                    

                    <div id="changeContact" className="col-10 mt-4 ">
                        <div className=" my-4">
                            <div className="d-flex justify-content-center">
                                <h4 className="font-weight-light offset-1">Ändra Användaruppgifter</h4>
                            </div>
                            <ChangeEmailForm />
                            <ChangePasswordForm />
                            <ChangeContactInfoForm />
                        </div>
                        
                    </div>
                </div>

            </div>
        )

    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (currentUser) {
            http.get('http://localhost:3001/api/users/' + currentUser.id, {
                headers: authHeader()
            })
                .then(res => this.setState({ user: res.data }))
                .catch(() => {
                   
                    
                    localStorage.clear()
                    window.location.reload(true)
                })
        }
    }

}

export default ProfilePage