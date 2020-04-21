import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoList from "./components/dojos/DojoList";
import UserContextProvider from "./components/context/UserContextProvider";

function App() {
    return (
        <Router>
            <UserContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dojos" component={DojoList} />
                </Switch>
            </UserContextProvider>
        </Router>
    );
}

export default App;
