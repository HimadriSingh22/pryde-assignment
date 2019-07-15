import React,{Component} from 'react';
import Home from './home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './login/Login';
class Controller extends Component{
    constructor(props){
        super(props);
        this.state={
            baseUrl:"https://randomuser.me/api/"
        }
    }
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path='/home' render={(props)=><Home {...props} baseUrl={this.baseUrl}/>}/>
           <PrivateRoute exact path='/' component={Login} baseUrl={this.baseUrl}/>
           
                </Switch>
                
            </Router>
        )
    }
}
export default Controller;