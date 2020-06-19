import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from "react-router";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navigation/Navbar";
import DojoContextProvider from "./components/context/DojoContextProvider";
import SolutionContainer from "./components/solution/self/SolutionContainer";
import DojoList from "./components/dojos/DojoList";
import LoginContextProvider from "./components/context/LoginContextProvider";
import NewUser from "./components/user-management/NewUser";
import SearchContextProvider from "./components/context/SearchContextProvider";
import PostSucess from "./components/solution/self/PostSucess";
import NoPageFound from "./components/error/NoPageFound";
import LoginRedirect from "./components/user-management/LoginRedirect";
import PrivateRoute from "./components/routing/PrivateRoute";
import UserStatContextProvider from "./components/context/UserStatContextProvider";
import AdminStatisticsPage from "./components/admin/statistics/AdminStatisticsPage";
import DojoStatContextProvider from "./components/context/DojoStatContextProvider";
import UnexpectedError from "./components/error/UnexpectedError";
import { setup } from "./static/util/axiosConfig";
import customHistory from "./static/util/customHistory";
import UserDataContextProvider from "./components/context/UserDataContextProvider";
import AdminRoute from "./components/routing/AdminRoute";
import NoAccess from "./components/error/NoAccess";
import RankingPage from "./components/ranking/RankingPage";
import RankingContextProvider from "./components/context/RankingContextProvider";
import AdminMenu from "./components/admin/AdminMenu";
import AddDojo from "./components/admin/dojo/AddDojo";
import AddSucess from "./components/admin/dojo/AddSucess";
import MobileNav from "./components/navigation/MobileNav";
import SolutionEditorContextProvider from "./components/context/SolutionEditorContextProvider";
import SolutionContextProvider from "./components/context/SolutionContextProvider";
import SolutionsContainer from "./components/solution/other_users/SolutionsContainer";
import ProfileContainer from "./components/user-profile/ProfileContainer";
import ProfilePageContextProvider from "./components/context/ProfilePageContextProvider";
import ConfirmDelete from "./components/solution/self/ConfirmDelete";
import NewsPage from "./components/news/NewsPage";
import IssueReportPage from "./components/news/IssueReportPage";
import IssueContextProvider, { IssueContext } from "./components/context/IssueContextProvider";
import ReportSuccess from "./components/news/ReportSuccess";

function App() {
    setup.setupInterceptors();

    return (
        <Router history={customHistory}>
            <LoginContextProvider>
                <UserDataContextProvider>
                    <SearchContextProvider>
                        <DojoContextProvider>
                            <Navbar />
                            <MobileNav />
                            <AdminMenu />
                            <Switch>
                                <PrivateRoute exact path="/dojos">
                                    <DojoList />
                                </PrivateRoute>
                                <PrivateRoute exact path="/dojos/:id">
                                    <SolutionEditorContextProvider>
                                        <SolutionContainer />
                                    </SolutionEditorContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/dojos/:id/sucess">
                                    <PostSucess />
                                </PrivateRoute>
                                <PrivateRoute exact path="/ranking">
                                    <RankingContextProvider>
                                        <RankingPage />
                                    </RankingContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/solutions/:id">
                                    <SolutionContextProvider>
                                        <SolutionsContainer />
                                    </SolutionContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/user/:userName">
                                    <ProfilePageContextProvider>
                                        <ProfileContainer />
                                    </ProfilePageContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/solutions/delete/:dojoId">
                                    <SolutionEditorContextProvider>
                                        <ConfirmDelete />
                                    </SolutionEditorContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/news">
                                    <NewsPage />
                                </PrivateRoute>
                                <PrivateRoute exact path="/report">
                                    <IssueContextProvider>
                                        <IssueReportPage />
                                    </IssueContextProvider>
                                </PrivateRoute>
                                <PrivateRoute exact path="/report/success">
                                    <ReportSuccess />
                                </PrivateRoute>
                                <AdminRoute exact path="/admin/statistics">
                                    <UserStatContextProvider>
                                        <DojoStatContextProvider>
                                            <AdminStatisticsPage />
                                        </DojoStatContextProvider>
                                    </UserStatContextProvider>
                                </AdminRoute>
                                <AdminRoute exact path="/admin/new-dojo">
                                    <AddDojo />
                                </AdminRoute>
                                <AdminRoute exact path="/newDojo">
                                    <AddSucess />
                                </AdminRoute>
                                <Route exact path="/" component={LandingPage} />
                                <Route exact path="/register" component={NewUser} />
                                <Route exact path="/login" component={LoginRedirect} />
                                <Route exact path="/noaccess" component={NoAccess} />
                                <Route exact path="error" component={UnexpectedError} />
                                <Route component={NoPageFound} />
                            </Switch>
                        </DojoContextProvider>
                    </SearchContextProvider>
                </UserDataContextProvider>
            </LoginContextProvider>
        </Router>
    );
}

export default App;
