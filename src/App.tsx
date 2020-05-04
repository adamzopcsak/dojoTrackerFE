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
import SolutionContextProvider from "./components/context/SolutionContextProvider";

function App() {
    return (
        <Router basename="/">
            <UserContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <DojoContextProvider>
                        <SolutionLanguageProvider>
                            <EditorThemeProvider>
                                <SolutionContextProvider>
                                    <Route exact path="/dojos" component={DojoList} />
                                    <Route path="/dojos/:id" component={DojoDetailed} />
                                </SolutionContextProvider>
                            </EditorThemeProvider>
                        </SolutionLanguageProvider>
                    </DojoContextProvider>
                </Switch>
            </UserContextProvider>
        </Router>
    );
}

export default App;
