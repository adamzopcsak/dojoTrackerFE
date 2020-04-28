import React from "react";
import { render, cleanup } from "@testing-library/react";
import DojoList from "../components/dojos/DojoList";
import { MemoryRouter } from "react-router-dom";

const MockDojoList = (props) => {
    return (
        <MemoryRouter initialEntries={["/dojos"]}>
            <DojoList dojos={props.dojos} />
        </MemoryRouter>
    );
};

afterEach(cleanup);

describe("When I open the dojolist page", () => {
    test("it renders without errors ", () => {
        const mockDojo = [
            { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true },
            { id: 2, title: "Testdojo 2", description: "", difficulty: 1, url: "google.com", isDone: true },
        ];
        const { queryByText } = render(<MockDojoList dojos={mockDojo} />);

        expect(queryByText("Testdojo 1")).toBeInTheDocument();
    });

    test("it renders all dojos in the list ", () => {
        const mockDojo = [
            { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true },
            { id: 2, title: "Testdojo 2", description: "", difficulty: 1, url: "google.com", isDone: true },
        ];

        const { queryAllByText } = render(<MockDojoList dojos={mockDojo} />);

        expect(queryAllByText(/Testdojo/i)).toHaveLength(2);
    });

    test("it renders without crashing with only a single item in list", () => {
        const mockDojo = [
            { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true },
        ];

        const { queryByText } = render(<MockDojoList dojos={mockDojo} />);

        expect(queryByText(/Testdojo/i)).toBeInTheDocument();
    });

    test("it renders without crashing if the dojo list is empty", () => {
        const { queryByTestId } = render(<MockDojoList dojos={null} />);

        expect(queryByTestId("dojolist-container")).toBeInTheDocument();
    });
});
