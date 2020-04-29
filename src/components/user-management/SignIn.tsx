import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { UserContext } from "../context/UserContextProvider";
import axios, { AxiosResponse } from "axios";
import { IBasicUserInfo } from "../../static/util/interfaces";

interface Props {}

const SignIn = (props: Props) => {
    const { setUser } = useContext(UserContext);

    const responseGoogle = (response: any) => {
        const res = response.profileObj;
        console.log(res);

        axios.get(`http://localhost:5000/user?email=${res.email}`).then((response: AxiosResponse<IBasicUserInfo>) => {
            localStorage.setItem("dta-user-state", JSON.stringify(response.data));

            setUser(response.data);
        });
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
            />
        </div>
    );
};

export default SignIn;
