import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'



class Navigation extends Component {

    state = {
        _id: '',
        user: {},
    }
    
    userLogout() {
        this.props.logout()
    }

    render() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //localStorage.setItem('uName',this.props.name)
        
        const { name } = this.props
        // var welcome = `Welcome, {name.firstname}`

        if (!currentUser) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            The inlämningsuppgift page 
                    </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div id="navbarNav" className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink exact to="/" activeClassName="active" className="nav-link">Hem</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/login" activeClassName="active" className="nav-link">Logga in</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/register" activeClassName="active" className="nav-link">Registrera</NavLink>
                                </li>
                             
                              
                                
                            </ul>
                        </div>

                    </div>
                </nav>
            )
        }
        else {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                    {name ? name : currentUser.firstname + ' ' + currentUser.lastname}
                </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Hem</NavLink>
                            </li>
                            <li id="navLogout"className="nav-item">
                                <a onClick={() => this.userLogout()}  className="nav-link">Logga ut</a>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/profile" activeClassName="active" className="nav-link">Min Profil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/cases" activeClassName="active" className="nav-link">Ärenden</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/customers" activeClassName="active" className="nav-link">Kunder</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
        }
    }
}



const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        token: state.auth.token,
        currentUser: state.auth.user,
        name: state.change.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navigation)