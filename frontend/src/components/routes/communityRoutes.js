import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityDashboard from "../views/communitypost/communityDashboard";


export const CommunityRouters = () => {
    return(
        <Router>
            <Switch>
                <Route path="/community" exact component={CommunityDashboard}/>
            </Switch>
        </Router>
    )
}