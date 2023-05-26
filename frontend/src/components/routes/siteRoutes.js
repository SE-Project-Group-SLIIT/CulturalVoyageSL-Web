import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SiteDashboard from "../views/sites/siteDashboard";
import AllSites from "../views/sites/allSites";
import HistoricalSites from "../views/sites/historicalSites";
import ReligiousSites from "../views/sites/religiousSites";
import OtherSites from "../views/sites/otherSites";
import AddSite from "../views/sites/addSite";
import ViewSite from "../views/sites/viewSite";
import ViewAllSites from "../views/sites/viewAllSites";
import AdminHome from "../views/AdminHome";

export const SiteRouters = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sites" exact component={SiteDashboard} />
        <Route path="/allSites" exact component={AllSites} />
        <Route path="/allHistorical" exact component={HistoricalSites} />
        <Route path="/allReligious" exact component={ReligiousSites} />
        <Route path="/allOther" exact component={OtherSites} />
        <Route path="/addSite" exact component={AddSite} />
        <Route path="/viewSite" exact component={ViewSite} />
        <Route path="/viewAll" exact component={ViewAllSites} />
        <Route path="/homeA" exact component={AdminHome} />
        
      </Switch>
    </Router>
  );
};
