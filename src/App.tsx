import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoList from "./components/dojos/DojoList";

function App() {
    return (
        <Router basename="/">
            <Navbar />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dojos" component={DojoList} />
            </Switch>
        </Router>
    );
}

export default App;
