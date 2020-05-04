import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navbar from "../components/navigation/Navbar";
import { UserContext } from "../components/context/UserContextProvider";
import { MemoryRouter, Route } from "react-router-dom";
import DojoList from "../components/dojos/DojoList";
import LandingPage from "../components/LandingPage";
import { DojoContext } from "../components/context/DojoContextProvider";

const NavigationMockComponent = ({ mockUser, mockDojo, entries }) => {
    const setter = (s) => {
        return;
    };

    return (
        <UserContext.Provider value={{ user: mockUser, setUser: setter }}>
            <DojoContext.Provider value={{ dojos: mockDojo, setDojos: setter }}>
                <MemoryRouter initialEntries={[entries]}>
                    <Navbar />
                    <Route exact path="/dojos" render={(renderProps) => <DojoList {...renderProps} />} />
                    <Route exact path="/" component={LandingPage} />
                </MemoryRouter>
            </DojoContext.Provider>
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
