import React from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";

const StyledLogOutBtn = styled.button`
    color: red;
    background-color: inherit;
    font-weight: bold;
    border: solid;
    border-width: 1px;
    border-radius: 4px;
    padding: 1vh 1vw;
    cursor: pointer;

    &:hover {
        background-color: pink;
    }
`;

interface Props {}

const LogOut = (props: Props) => {
    const logout = () => {
        localStorage.removeItem("userData");
    };

    return (
        <div>
            <GoogleLogout
                clientId="314849626272-joeuug43b7lrbgvgqt71kqbarvn8nnes.apps.googleusercontent.com"
                render={(renderProps) => (
                    <StyledLogOutBtn onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Log out
                    </StyledLogOutBtn>
                )}
                onLogoutSuccess={logout}
            />
        </div>
    );
};

export default LogOut;
