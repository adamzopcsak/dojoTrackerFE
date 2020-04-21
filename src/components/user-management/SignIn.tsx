import React from "react";
import GoogleLogin from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";

interface Props {}

const SignIn = (props: Props) => {
    const responseGoogle = (response: any) => {
        const res = response.profileObj;

        localStorage.setItem("userData", JSON.stringify(res));
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
                onSuccess={responseGoogle}
                onFailure={() => console.log("?????????????")}
                isSignedIn={true}
            />
        </div>
    );
};

export default SignIn;
