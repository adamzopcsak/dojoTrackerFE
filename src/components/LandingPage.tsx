import React from "react";
import { Container } from "./styled-components/Reusables";
import styled from "styled-components";

const StyledLandingPage = styled(Container)`
    padding: 2rem 0;
`;

const LandingPage = () => {
    return (
        <StyledLandingPage data-testid="landing-readme">
            <h1>Hi Codecooler, and welcome to the Mastery Branch!</h1>
            <div>
                <p>
                    On this branch, you are going to do a lot of dojos to enhance your knowledge and skills in
                    programming. As these dojos can be found on different sites, tracking your progress is not that easy
                    as you might think. This is the reason why we created this awesome website for you, the one and only
                    DojoTracker!
                </p>
                <h2> Have you ever been here?</h2>
                <p>
                    If this is the first time on this site, you should hit that login button in the top right corner,
                    and register with your google account (choose the one you can log in to the Journey with). Now you
                    just need to be patient, a mentor is going to validate your registry - be sure to check your e-mails
                    frequently, as you will get a notification when your registry is approved!
                </p>
                <h2>How to use the site?</h2>
                <p>
                    Once you are logged in, you can find all of the dojos on the branch. Choose one, and solve it. If
                    you are done, don’t forget to copy your solution to DojoTracker and save it (you can pick your
                    language as well, we support Python, C#, Java and JavaScript at the moment). Once you have a
                    solution saved on the site, the dojo will be marked as “solved”, and you get your juicy points for
                    the dojo (the harder the dojo is, the more point you get).
                </p>
                <h2>Why is it good for you?</h2>
                <p>
                    First of all, DojoTracker (what a surprise) is tracking the dojos for you! What is more, you are
                    going to be able to:
                </p>
                <ul>
                    <li>See your statistics and progress</li>
                    <li>See your solutions in different languages</li>
                    <li>See other Codecoolers’ solutions (once you solved that dojo as well)</li>
                    <li>See the rankings of all Codecoolers on the Mastery Branch</li>
                    <li>Ask for a code review from a mentor</li>
                    <li>Go to the top of the high score table!</li>
                </ul>
                <p>
                    Please keep in mind that this site is currently under development, and some features have not been
                    implemented yet. You can read the patch notes from the current release on the “News” page, once you
                    are logged in.
                </p>
                <p>
                    If you notice any issues, instead of complaining to us, you may fix it yourself since the repos are
                    all public, you lazy bastard.
                </p>
                <p> May the code be with you!</p>
            </div>
        </StyledLandingPage>
    );
};

export default LandingPage;
