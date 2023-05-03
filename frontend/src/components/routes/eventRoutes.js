import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDashboard from "../views/eventDashboard";
import EventSingleView from "../views/eventSingleView";
import Events from "../views/Events";

export const EventRouters = () => {
    return(
        <Router>
            <Switch>
                <Route path="/event" exact component={EventDashboard}/>
                <Route path="/eventSingle" exact component={EventSingleView}/>
                <Route path="/eventAll" exact component={Events}/>
            </Switch>
        </Router>
    )
}