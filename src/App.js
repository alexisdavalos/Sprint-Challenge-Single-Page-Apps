import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import CharacterPage from './components/Characters/CharacterPage'
import WelcomePage from './components/WelcomePage/WelcomePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function App() {


  return (
    <div className="App">
      <Switch>
          <Route path='/characters'>
            <CharacterPage/>
          </Route>
          <Route path='/locations'>
            <CharacterPage/>
          </Route>
          <Route path='/'>    
            <Header />
            <WelcomePage/>
          </Route>
      </Switch>
    </div>
    
  );
}
