import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-java";
import "prismjs/components/prism-python";
import "../../../static/css/prism.css";
import styled from "styled-components";

const StyledSolutionCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    pre {
        width: 100%;
        max-height: 20rem;
    }
`;

interface Props {
    solution: string;
    language: string;
}

const SolutionCard = (props: Props) => {
    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0);
    }, []);

    return (
        <StyledSolutionCard>
            <pre className="line-numbers">
                <code className={`language-${props.language}`}>{props.solution}</code>
            </pre>
        </StyledSolutionCard>
    );
};

export default SolutionCard;
