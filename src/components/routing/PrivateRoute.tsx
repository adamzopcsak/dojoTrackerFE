import React, { useContext, ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";

interface Props {
    children: ReactNode;
    [k: string]: any;
}

function PrivateRoute({ children, ...rest }: Props) {
    const { checkForLoginStatus } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                checkForLoginStatus() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
