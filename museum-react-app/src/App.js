import "./App.css";
import React from "react";
import TimeTable from "./components/TimeTable.js";
import SouvenirsTable from "./components/SouvenirsTable.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";




function App() {
  return (
    <Router>
      
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/souvenirs">Map</Link>
            </li>

            <li>
              <Link to="/timetable">TimeTable</Link>
            </li>

           

          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>

             
              <Route path="/timetable">
                <h1>TimeTable</h1>
                <TimeTable />
              </Route>

              <Route path="/souvenirs">
                <SouvenirsTable />
              </Route>

             

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function Map() {
  let location = useLocation();

  return (
    <div>
      <h2>Map</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}




export default App;