import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../views/login";
import Register from "../views/register";
import Profile from "../views/profile";
import NavBar from "../views/shared/NavBar";
import UserlList from "../views/userList";

export const UserRouters = () => {
    return(
        
        <Router>
            <NavBar/>
            <Switch>
                
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/admin" exact component={UserlList}/>
        
            </Switch>
        </Router>
    )
}