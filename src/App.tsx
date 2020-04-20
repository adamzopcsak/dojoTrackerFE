import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </Router>
    );
}

export default App;
