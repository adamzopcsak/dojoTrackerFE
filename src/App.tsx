import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoContextProvider from "./components/context/DojoContextProvider";
import EditorThemeProvider from "./components/context/EditorThemeProvider";
import SolutionLanguageProvider from "./components/context/SolutionLanguageProvider";
import SolutionContainer from "./components/solution/SolutionContainer";
import DojoList from "./components/dojos/DojoList";
import SolutionContextProvider from "./components/context/SolutionContextProvider";
import LoginContextProvider from "./components/context/LoginContextProvider";
import NewUser from "./components/user-management/NewUser";
import SearchContextProvider from "./components/context/SearchContextProvider";
import PostSucess from "./components/solution/PostSucess";
import NoPageFound from "./components/routing/NoPageFound";
import LoginRedirect from "./components/user-management/LoginRedirect";
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
    return (
        <Router basename="/">
            <LoginContextProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/register" component={NewUser} />
                    <SearchContextProvider>
                        <DojoContextProvider>
                            <SolutionLanguageProvider>
                                <EditorThemeProvider>
                                    <SolutionContextProvider>
                                        <PrivateRoute exact path="/dojos">
                                            <DojoList />
                                        </PrivateRoute>
                                        <PrivateRoute exact path="/dojos/:id">
                                            <SolutionContainer />
                                        </PrivateRoute>
                                        <PrivateRoute exact path="/dojos/:id/sucess">
                                            <PostSucess />
                                        </PrivateRoute>
                                        <Route exact path="/login" component={LoginRedirect} />
                                        <Route path="*" component={NoPageFound} />
                                    </SolutionContextProvider>
                                </EditorThemeProvider>
                            </SolutionLanguageProvider>
                        </DojoContextProvider>
                    </SearchContextProvider>
                </Switch>
            </LoginContextProvider>
        </Router>
    );
}

export default App;
