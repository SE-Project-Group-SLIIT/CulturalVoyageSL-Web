import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDashboard from "../views/eventDashboard";
import EventSingleView from "../views/eventSingleView";
import Events from "../views/Events";
import EventsCalendar from "../views/eventsCalendar";
import AddEvents from "../views/addEvents";

export const EventRouters = () => {
    return(
        <Router>
            <Switch>
                <Route path="/event" exact component={EventDashboard}/>
                <Route path="/eventSingle" exact component={EventSingleView}/>
                <Route path="/eventAll" exact component={Events}/>
                <Route path="/eventCalendar" exact component={EventsCalendar}/>
                <Route path="/addEvent" exact component={AddEvents}/>

            </Switch>
        </Router>
    )
}