import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDashboard from "../views/eventDashboard";
import EventSingleView from "../views/eventSingleView";

export const EventRouters = () => {
    return(
        <Router>
            <Switch>
                <Route path="/event" exact component={EventDashboard}/>
                <Route path="/eventSingle" exact component={EventSingleView}/>
            </Switch>
        </Router>
    )
}