import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import LandingPage from "./page/landingpage/landingpage"

import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <LandingPage />
    </div>
  );
}

export default App;
