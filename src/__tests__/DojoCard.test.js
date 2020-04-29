import React from "react";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DojoBasic from "../components/dojos/DojoBasic";

const MockDojoCard = (props) => {
    return (
        <MemoryRouter initialEntries={["/dojos"]}>
            <DojoBasic dojo={props.dojo} />
        </MemoryRouter>
    );
};

afterEach(cleanup);

describe("All dojo cards", () => {
    const mockDojo = { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true };

    test("should render without crashing ", () => {
        const { queryByTestId } = render(<MockDojoCard dojo={mockDojo} />);

        expect(queryByTestId("dojocard-container")).toBeInTheDocument;
    });

    test("should have a title", () => {
        const { queryByText } = render(<MockDojoCard dojo={mockDojo} />);

        expect(queryByText(/Testdojo/i)).toBeInTheDocument();
    });

    test("should have a checkbox", () => {
        const { queryByTestId } = render(<MockDojoCard dojo={mockDojo} />);

        expect(queryByTestId("dojo-checkbox")).toBeInTheDocument();
    });

    test("should have a button", () => {
        const { queryByText } = render(<MockDojoCard dojo={mockDojo} />);

        expect(queryByText("Attempt")).toBeInTheDocument();
    });
});

describe("When I click on", () => {
    const mockDojo = { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true };
});
