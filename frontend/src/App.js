import {EventRouters} from "./components/routes/eventRoutes";
import {CommunityRouters} from "./components/routes/communityRoutes"
import { SiteRouters } from "./components/routes/siteRoutes";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CommunityRouters/> */}
      {/* <EventRouters/> */}
      <SiteRouters/>
    </div>
  );
}

export default App;
