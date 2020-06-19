import React from "react";
import { CenteredContainer } from "../styled-components/Reusables";
import styled from "styled-components";
import IssueReport from "./IssueReport";

const StyledNewsPage = styled(CenteredContainer)`
    h3 {
        color: #dc3545;
    }

    line-height: 1.5rem;
`;

interface Props {}

const NewsPage = (props: Props) => {
    return (
        <StyledNewsPage>
            <div>
                <h1>V 0.1</h1>
                <h3>New features:</h3>
                <ul>
                    <li>Solutions can now be deleted by the user</li>
                    <li>News page added</li>
                    <li>
                        Report an issue added - send us an email through the link at the top of the page if have any
                        errors to report or suggestions
                    </li>
                    <li>Menu on profile page now indicates which page you are currently viewing</li>
                </ul>
                <h3>Bug fixes:</h3>
                <ul>
                    <li>
                        Adding and deleting a solution now correctly triggers re-render of status indicator checkbox.
                    </li>
                </ul>
                <h3>Previously added:</h3>
                <ul>
                    <li>See list of currently available dojos.</li>
                    <li>Add your own solution to a dojo</li>
                    <li>Support multiple languages (python, java, C#, javascript)</li>
                    <li>Change slution editor theme (light {"&"} dark mode)</li>
                    <li>See how you rank up versus other users</li>
                    <li>See solutions for a dojo by other users once you have submitted your own.</li>
                    <li>Simple profile with your solutions listed for completed dojos</li>
                    <li>Browse other users' profiles and see their completed dojos {"&"} solutions.</li>
                    <li>Administrator menu to see simple statistics about users and dojos</li>
                    <li>Administrator menu to add new dojos</li>
                </ul>
            </div>
            <IssueReport />
        </StyledNewsPage>
    );
};

export default NewsPage;
