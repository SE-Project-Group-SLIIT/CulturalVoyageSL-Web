import {EventRouters} from "./components/routes/eventRoutes";
import {CommunityRouters} from "./components/routes/communityRoutes"
import { SiteRouters } from "./components/routes/siteRoutes";
import './App.css';
import { UserRouters } from "./components/routes/userRoutes";
import { PublicRouters} from "./components/routes/publicRoutes"

function App() {
  return (
    <div className="App">
      <PublicRouters/>
    </div>
  );
}

export default App;
