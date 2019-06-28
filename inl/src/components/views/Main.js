import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ProfilePage from './ProfilePage'
import Cases from './Cases'
import Customers from './Customers'
 export default class Main extends Component{

constructor(props){
    super(props)
    this.state ={

    }
}

     render(){
         return(
             <main>
                 <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/login' component={Login} />
                     <Route exact path='/register' component={Register} />
                     <Route path='/profile' component={ ProfilePage } />
                     <Route path='/cases' component={ Cases } />
                     <Route path='/customers' component={ Customers } />
                 </Switch>
             </main>
         )
     }
 }