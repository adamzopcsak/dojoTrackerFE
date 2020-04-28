import React from "react";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../components/navigation/Navbar";
import { UserContext } from "../components/context/UserContextProvider";
import { MemoryRouter } from "react-router-dom";

const LoggedInStateMockComponent = (props) => {
    return (
        <UserContext.Provider value={[props.mockUser]}>
            <MemoryRouter initialEntries={["/"]}>
                <Navbar />
            </MemoryRouter>
        </UserContext.Provider>
    );
};

afterEach(cleanup);

describe("While not logged in", () => {
    const mockUser = "";

    test("Disabled menus don't render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const dojoMenu = queryByText("Dojos");

        expect(dojoMenu).not.toBeInTheDocument();
    });

    test("Sign-in button renders correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const signInBtn = queryByText("Sign in");

        expect(signInBtn).toBeInTheDocument();
    });

    test("Log-out button doesn't render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const logOutBtn = queryByText("Log out");

        expect(logOutBtn).not.toBeInTheDocument();
    });
});

describe("While logged in", () => {
    const mockUser = { email: "email@email.com", firstName: "Béla", lastName: "Mock", id: "1", rank: "1" };

    test("Navlinks render correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const dojoMenu = queryByText("Dojos");

        expect(dojoMenu).toBeInTheDocument();
    });

    test("Sign-in button does not render", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const signInBtn = queryByText("Sign in");

        expect(signInBtn).not.toBeInTheDocument();
    });

    test("Log-out renders correctly", () => {
        const { queryByText } = render(<LoggedInStateMockComponent mockUser={mockUser} />);
        const logOutBtn = queryByText("Log out");

        expect(logOutBtn).toBeInTheDocument();
    });
});
