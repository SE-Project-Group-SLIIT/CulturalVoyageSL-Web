import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityDashboard from "../views/communitypost/communityDashboard";
import SearchDashBoard from "../views/communitypost/searchDashBoard";
import CommunityMap from "../views/communitypost/communityMap"

import EventDashboard from "../views/eventDashboard";
import EventSingleView from "../views/eventSingleView";
import Events from "../views/Events";
import EventsCalendar from "../views/eventsCalendar";
import EventsManage from "../views/eventsManage";
import AddEventForm from "../views/AddEventForm";

import Login from "../views/login";
import Register from "../views/register";
import Profile from "../views/profile";
import NavBar from "../views/shared/NavBar";
import UserlList from "../views/userList";

export const PublicRouters = () => {
    return (
        <Router>
            <Switch>
                <Route path="/community" exact component={CommunityDashboard} />
                <Route path="/communitySearch" exact component={SearchDashBoard} />
                <Route path="/communityMap" exact component={CommunityMap} />

                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/admin" exact component={UserlList} />

                <Route path="/event" exact component={EventDashboard} />
                <Route path="/eventSingle" exact component={EventSingleView} />
                <Route path="/eventAll" exact component={Events} />
                <Route path="/eventCalendar" exact component={EventsCalendar} />
                <Route path="/eventManage" exact component={EventsManage} />
                <Route path="/addEvent" exact component={AddEventForm} />

            </Switch>
        </Router>
    )
}