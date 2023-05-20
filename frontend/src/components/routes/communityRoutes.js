import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityDashboard from "../views/communitypost/communityDashboard";
import SearchDashBoard from "../views/communitypost/searchDashBoard";


export const CommunityRouters = () => {
    return(
        <Router>
            <Switch>
                <Route path="/community" exact component={CommunityDashboard}/>
                <Route path="/communitySearch" exact component={SearchDashBoard}/>
            </Switch>
        </Router>
    )
}