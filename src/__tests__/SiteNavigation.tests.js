import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navbar from "../components/navigation/Navbar";
import { UserContext } from "../components/context/UserContextProvider";
import { MemoryRouter, useMemoryHistory, Route } from "react-router-dom";
import { DojoContext } from "../components/context/DojoContextProvider";
import DojoList from "../components/dojos/DojoList";
import LandingPage from "../components/LandingPage";

const NavigationMockComponent = (props) => {
    return (
        <UserContext.Provider value={[props.mockUser]}>
            <MemoryRouter initialEntries={[props.entries]}>
                <Navbar />
                <Route
                    exact
                    path="/dojos"
                    render={(renderProps) => <DojoList {...renderProps} dojos={props.mockDojo} />}
                />
                <Route exact path="/" component={LandingPage} />
            </MemoryRouter>
        </UserContext.Provider>
    );
};

afterEach(cleanup);

describe("When I click on", () => {
    const mockUser = { email: "email@email.com", firstName: "Béla", lastName: "Mock", id: "1", rank: "1" };

    const mockDojo = [
        { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true },
        { id: 2, title: "Testdojo 2", description: "", difficulty: 1, url: "google.com", isDone: true },
    ];

    test("the dojos navlink the site renders the dojos page", () => {
        const { queryByText } = render(
            <NavigationMockComponent mockUser={mockUser} mockDojo={mockDojo} entries={"/"} />
        );

        fireEvent.click(queryByText("Dojos"));

        expect(queryByText("Testdojo 1")).toBeInTheDocument();
    });

    test("the title or logo the site renders the frontpage", () => {
        const { queryByText } = render(
            <NavigationMockComponent mockUser={mockUser} mockDojo={mockDojo} entries={"/dojos"} />
        );

        fireEvent.click(queryByText("Dojo Tracker"));

        expect(queryByText("ASD")).toBeInTheDocument();
    });
});
