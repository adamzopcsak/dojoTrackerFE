import React, { useContext, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import { UserDataContext } from "../context/UserDataContextProvider";

interface Props {
    children: ReactNode;
    [k: string]: any;
}

function AdminRoute({ children, ...rest }: Props) {
    const { checkForLoginStatus } = useContext(LoginContext);
    const { user } = useContext(UserDataContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkForLoginStatus() && user.isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/noaccess",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;
