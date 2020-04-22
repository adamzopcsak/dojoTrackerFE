import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoList from "./components/dojos/DojoList";
import UserContextProvider from "./components/context/UserContextProvider";
import DojoContextProvider from "./components/context/DojoContextProvider";
import DojoDetailed from "./components/dojos/DojoDetailed";
import SolutionLanguageProvider from "./components/context/SolutionLanguageProvider";
import EditorThemeProvider from "./components/context/EditorThemeProvider";

function App() {
    return (
        <Router>
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
