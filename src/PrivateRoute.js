import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute=({component:Component,...rest})=>{
    return(
        <Route
        {...rest}
        render={props=>(sessionStorage.getItem('uuid')!==null)?
    <Component {...props} {...rest}/>
:<Redirect to={{pathname:'/',state:{from:props.location}}}/>}/>
    )
}
export default PrivateRoute;