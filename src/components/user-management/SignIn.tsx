import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { EmptyButton } from "../styled-components/Reusables";
import { UserContext } from "../context/UserContextProvider";
import { AxiosResponse } from "axios";
import { IBasicUserInfo } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";

interface Props {}

const SignIn = (props: Props) => {
    const { setUser } = useContext(UserContext);

    const responseGoogle = (response: any) => {
        const res = response.profileObj;

        axios.post(`http://localhost:5000/api/user/login`, res).then((response: AxiosResponse<IBasicUserInfo>) => {
            console.log("THIS ISNT IMPLEMENTED YET YO");
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
