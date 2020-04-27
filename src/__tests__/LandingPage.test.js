import React from "react";
import { render, getByText } from "@testing-library/react";
import LandingPage from "../components/LandingPage";
import App from "../App";

test("Renders without crashing", () => {
    const { getByText } = render(<App />);
    const landingPageTitle = getByText("ASD");

    expect(landingPageTitle).toBeInTheDocument();
});

describe("While not logged in", () => {
    test("Disabled menus don't render", () => {
        const { queryByText } = render(<App />);
        const dojoMenu = queryByText("Dojos");

        expect(dojoMenu).not.toBeInTheDocument();
    });

    test("Sign-in button renders correctly", () => {
        const { queryByText } = render(<App />);
        const signInBtn = queryByText("Sign in");

        expect(signInBtn).toBeInTheDocument();
    });

    test("Log-out button doesn't render", () => {
        const { queryByText } = render(<App />);
        const logOutBtn = queryByText("Log out");

        expect(logOutBtn).not.toBeInTheDocument();
    });
});
