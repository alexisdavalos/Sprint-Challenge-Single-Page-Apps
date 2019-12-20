import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterPage from '../Characters/CharacterPage'
import WelcomePage from '../WelcomePage/WelcomePage';
function AppRouter() {
  return (
    <Router>
        <Switch>
            <Route path='/characters'>
                <CharacterPage/>
            </Route>
            <Route path='/locations'>
                <CharacterPage/>
            </Route>
            <Route path='/'>    
                <WelcomePage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default AppRouter;
