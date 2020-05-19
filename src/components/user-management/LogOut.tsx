import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { UserDataContext } from "../context/UserDataContextProvider";

interface Props {}

const LogOut = (props: Props) => {
    const { setIsLoggedIn } = useContext(LoginContext);

    const { setUser } = useContext(UserDataContext);

    const history = useHistory();

    const logout = () => {
        axios.post(`/api/user/logout`).then((response: AxiosResponse<any>) => {
            sessionStorage.setItem("dta-login-state", JSON.stringify({ isLoggedIn: false }));
            setIsLoggedIn(false);
            setUser(null);
        });
        window.location.href = "/";
    };

    return (
        <div>
            <GoogleLogout
                clientId="314849626272-joeuug43b7lrbgvgqt71kqbarvn8nnes.apps.googleusercontent.com"
                render={(renderProps) => (
                    <EmptyButton danger onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Log out
                    </EmptyButton>
                )}
                onLogoutSuccess={logout}
                onFailure={() => history.push("/error")}
            />
        </div>
    );
};

export default LogOut;
