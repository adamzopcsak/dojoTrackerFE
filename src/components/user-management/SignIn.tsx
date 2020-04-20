import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";

const StyledLoginButton = styled.button`
    color: black;
    background-color: inherit;
    font-weight: bold;
    border: solid;
    border-width: 1px;
    border-radius: 4px;
    padding: 1vh 1vw;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`;

interface Props {}

const SignIn = (props: Props) => {
    const responseGoogle = (response: any) => {
        const res = response.profileObj;

        console.log(res);
    };

    return (
        <div>
            <GoogleLogin
                clientId="314849626272-joeuug43b7lrbgvgqt71kqbarvn8nnes.apps.googleusercontent.com"
                buttonText="Sign in"
                render={(renderProps) => (
                    <StyledLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Sign in
                    </StyledLoginButton>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={true}
            />
        </div>
    );
};

export default SignIn;
