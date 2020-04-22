import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { UserContext } from "../context/UserContextProvider";

interface Props {}

const LogOut = (props: Props) => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem("userData");

        setUser(null);
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
            />
        </div>
    );
};

export default LogOut;
