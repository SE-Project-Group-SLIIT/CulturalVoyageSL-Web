import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDashboard from "../views/eventDashboard";


export const EventRouters = () => {
    return(
        <Router>
            <Switch>
           
                <Route path="/event" exact component={EventDashboard}/>
            </Switch>
        </Router>
    )
}