import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 2rem;
`;

interface Props {}

const LandingPage = (props: Props) => {
    return (
        <StyledLandingPage>
            <h1>ASD</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi asperiores assumenda fuga quibusdam at
                possimus nam commodi minus culpa, tenetur odio minima autem vitae fugiat, repellat, sint quidem sunt ad?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem repellendus dicta voluptas
                consectetur voluptate facere aliquid nemo nihil distinctio nam, quibusdam dolores! Magnam vero sunt
                dicta eveniet id repellendus.
            </p>
        </StyledLandingPage>
    );
};

export default LandingPage;
