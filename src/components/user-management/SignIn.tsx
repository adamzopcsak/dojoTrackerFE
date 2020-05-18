import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { LoginContext } from "../context/LoginContextProvider";
import { useHistory, useLocation } from "react-router-dom";

interface Props {}

const SignIn = (props: Props) => {
    const { setIsLoggedIn } = useContext(LoginContext);
    const history = useHistory();

    const location = useLocation();

    const { from }: any = location.state || { from: { pathname: "/" } };

    const responseGoogle = (response: any) => {
        const res = response.profileObj;

        axios.post(`/api/user/login`, res).then((response: AxiosResponse<any>) => {
            response.data.status === "newUser" ? redirectNewUser() : signInUser();
        });
    };

    const redirectNewUser = () => {
        history.push("/register");
    };

    const signInUser = () => {
        sessionStorage.setItem("dta-login-state", JSON.stringify({ isLoggedIn: true }));
        setIsLoggedIn(true);
        redirectUser();
    };

    const redirectUser = () => {
        if (location.pathname === "/login") {
            history.replace(from);
        }

        return;
    };

    return (
        <div>
            <GoogleLogin
                clientId="314849626272-joeuug43b7lrbgvgqt71kqbarvn8nnes.apps.googleusercontent.com"
                buttonText="Sign in"
                render={(renderProps) => (
                    <EmptyButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Sign in
                    </EmptyButton>
                )}
                cookiePolicy={"single_host_origin"}
                onSuccess={responseGoogle}
                isSignedIn={true}
                onFailure={() => console.log("?????????????")}
            />
        </div>
    );
};

export default SignIn;
