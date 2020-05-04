import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import UserContextProvider from "./components/context/UserContextProvider";
import DojoContextProvider from "./components/context/DojoContextProvider";
import EditorThemeProvider from "./components/context/EditorThemeProvider";
import SolutionLanguageProvider from "./components/context/SolutionLanguageProvider";
import DojoDetailed from "./components/solution/DojoDetailed";
import DojoList from "./components/dojos/DojoList";

function App() {
    return (
        <Router basename="/">
            <UserContextProvider>
                <DojoContextProvider>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/dojos" component={DojoList} />
                        <SolutionLanguageProvider>
                            <EditorThemeProvider>
                                <Route path="/dojos/:id" component={DojoDetailed} />
                            </EditorThemeProvider>
                        </SolutionLanguageProvider>
                    </Switch>
                </DojoContextProvider>
            </UserContextProvider>
        </Router>
    );
}

export default App;
