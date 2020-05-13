import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoContextProvider from "./components/context/DojoContextProvider";
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
import UserStatContextProvider from "./components/context/UserStatContextProvider";
import AdminPage from "./components/admin/AdminPage";

function App() {
    return (
        <Router basename="/">
            <LoginContextProvider>
                <Navbar />
                <SearchContextProvider>
                    <DojoContextProvider>
                        <Switch>
                            <PrivateRoute exact path="/dojos">
                                <DojoList />
                            </PrivateRoute>
                            <PrivateRoute exact path="/dojos/:id">
                                <SolutionContextProvider>
                                    <SolutionContainer />
                                </SolutionContextProvider>
                            </PrivateRoute>
                            <PrivateRoute exact path="/dojos/:id/sucess">
                                <PostSucess />
                            </PrivateRoute>
                            <PrivateRoute exact path="/admin">
                                <UserStatContextProvider>
                                    <AdminPage />
                                </UserStatContextProvider>
                            </PrivateRoute>
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/register" component={NewUser} />
                            <Route exact path="/login" component={LoginRedirect} />
                            <Route component={NoPageFound} />
                        </Switch>
                    </DojoContextProvider>
                </SearchContextProvider>
            </LoginContextProvider>
        </Router>
    );
}

export default App;
