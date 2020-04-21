import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { UserContext } from "../context/UserContextProvider";

interface Props {}

const SignIn = (props: Props) => {
    const [user, setUser] = useContext(UserContext);

    const responseGoogle = (response: any) => {
        const res = response.profileObj;

        localStorage.setItem("userData", JSON.stringify(res));

        const dummyUser = require("../../static/test data/users.json");

        setUser(dummyUser);
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
