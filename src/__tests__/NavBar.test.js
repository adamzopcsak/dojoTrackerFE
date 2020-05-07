import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../components/navigation/Navbar";
import { MemoryRouter } from "react-router-dom";
import { LoginContext } from "../components/context/LoginContextProvider";

const LoggedInStateMockComponent = ({ isLoggedIn }) => {
    const setter = (s) => {
        return;
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setter }}>
            <MemoryRouter initialEntries={["/"]}>
                <Navbar />
            </MemoryRouter>
        </LoginContext.Provider>
    );
};

afterEach(cleanup);

describe("While not logged in", () => {
    const isLoggedIn = false;

    test("Disabled menus don't render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const dojoMenu = queryByText("Dojos");

        expect(dojoMenu).not.toBeInTheDocument();
    });

    test("Sign-in button renders correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const signInBtn = queryByText("Sign in");

        expect(signInBtn).toBeInTheDocument();
    });

    test("Log-out button doesn't render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const logOutBtn = queryByText("Log out");

        expect(logOutBtn).not.toBeInTheDocument();
    });
});

describe("While logged in", () => {
    const isLoggedIn = true;

    test("Navlinks render correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const dojoMenu = queryByText("Dojos");

        expect(dojoMenu).toBeInTheDocument();
    });

    test("Sign-in button does not render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const signInBtn = queryByText("Sign in");

        expect(signInBtn).not.toBeInTheDocument();
    });

    test("Log-out renders correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent isLoggedIn={isLoggedIn} />);
        const logOutBtn = queryByText("Log out");

        expect(logOutBtn).toBeInTheDocument();
    });
});
