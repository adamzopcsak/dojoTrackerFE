import React from "react";
import { Container } from "../styled-components/Reusables";
import SignIn from "./SignIn";
interface Props {}

const LoginRedirect = (props: Props) => {
    return (
        <Container>
            <h3>You need to be logged in in order to view this page.</h3>

            <SignIn />
        </Container>
    );
};

export default LoginRedirect;
