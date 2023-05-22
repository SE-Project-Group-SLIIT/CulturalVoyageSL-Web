import {EventRouters} from "./components/routes/eventRoutes";
import {CommunityRouters} from "./components/routes/communityRoutes"
import './App.css';
import { UserRouters } from "./components/routes/userRoutes";

function App() {
  return (
    <div className="App">
      {/* <CommunityRouters/> */}
      {/* <UserRouters/> */}
      <EventRouters/>
    </div>
  );
}

export default App;
