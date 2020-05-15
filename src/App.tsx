import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
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
import NoPageFound from "./components/error/NoPageFound";
import LoginRedirect from "./components/user-management/LoginRedirect";
import PrivateRoute from "./components/routing/PrivateRoute";
import UserStatContextProvider from "./components/context/UserStatContextProvider";
import AdminPage from "./components/admin/AdminPage";
import DojoStatContextProvider from "./components/context/DojoStatContextProvider";
import UnexpectedError from "./components/error/UnexpectedError";
import { setup } from "./static/util/axiosConfig";
import customHistory from "./static/util/customHistory";

function App() {
    setup.setupInterceptors();

    return (
        <Router history={customHistory}>
            <LoginContextProvider>
                <Navbar />
                <SearchContextProvider>
                    <DojoContextProvider>
                        <SolutionContextProvider>
                            <Switch>
                                <PrivateRoute exact path="/dojos">
                                    <DojoList />
                                </PrivateRoute>
                                <PrivateRoute exact path="/dojos/:id">
                                    <SolutionContainer />
                                </PrivateRoute>
                                <PrivateRoute exact path="/dojos/:id/sucess">
                                    <PostSucess />
                                </PrivateRoute>
                                <PrivateRoute exact path="/admin">
                                    <UserStatContextProvider>
                                        <DojoStatContextProvider>
                                            <AdminPage />
                                        </DojoStatContextProvider>
                                    </UserStatContextProvider>
                                </PrivateRoute>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/register" component={NewUser} />
                                <Route exact path="/login" component={LoginRedirect} />
                                <Route exact path="/error" component={UnexpectedError} />
                                <Route component={NoPageFound} />
                            </Switch>
                        </SolutionContextProvider>
                    </DojoContextProvider>
                </SearchContextProvider>
            </LoginContextProvider>
        </Router>
    );
}

export default App;
