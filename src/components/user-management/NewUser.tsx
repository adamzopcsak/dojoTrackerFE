import React from "react";
import { Container } from "../styled-components/Reusables";

const NewUser = () => {
    return (
        <Container>
            <h1>Thank you for your registration</h1>
            <p>
                Once your registration is approved by the site admins, you will receive an email confirmation. If you
                fail to receive a confirmation email please contact us at trackthatdojo@gmail.com
            </p>
        </Container>
    );
};

export default NewUser;
