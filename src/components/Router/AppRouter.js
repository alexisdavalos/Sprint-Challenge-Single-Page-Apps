import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterPage from '../Characters/CharacterPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import LocationPage from '../Location/LocationPage';
function AppRouter() {
  return (
    <Router>
        <Switch>
            <Route path='/characters'>
                <CharacterPage/>
            </Route>
            <Route path='/locations'>
                <LocationPage/>
            </Route>
            <Route path='/'>    
                <WelcomePage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default AppRouter;
