import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SolutionContext } from "../components/context/SolutionContextProvider";
import { MemoryRouter } from "react-router-dom";
import Solution from "../components/solution/Solution";
import { SolutionLanguageContext } from "../components/context/SolutionLanguageProvider";
import { EditorThemeContext } from "../components/context/EditorThemeProvider";
import { UserContext } from "../components/context/UserContextProvider";

const MockSolutionPage = (props) => {
    const mockDojo = { id: 1, title: "Testdojo 1", description: "", difficulty: 1, url: "google.com", isDone: true };
    const mockUser = { email: "email@email.com", firstName: "Béla", lastName: "Mock", id: "1", rank: "1" };
    const mockSolution = { dojoId: 1, userId: 1, language: "python", code: "Code" };
    const mockLanguage = "python";
    const mockTheme = "monokai";

    const mockSetter = () => {
        return;
    };

    return (
        <MemoryRouter initialEntries={["/dojos/1"]}>
            <UserContext.Provider value={{ user: mockUser, setUser: mockSetter }}>
                <EditorThemeContext.Provider value={{ editorTheme: mockTheme, setEditorTheme: mockSetter }}>
                    <SolutionLanguageContext.Provider value={{ language: mockLanguage, setLanguage: mockSetter }}>
                        <SolutionContext.Provider
                            value={{
                                solution: mockSolution.code,
                                setSolution: mockSetter,
                                setDojoId: mockSetter,
                                postSolution: mockSetter,
                            }}
                        >
                            <Solution dojo={mockDojo} />
                        </SolutionContext.Provider>
                    </SolutionLanguageContext.Provider>
                </EditorThemeContext.Provider>
            </UserContext.Provider>
        </MemoryRouter>
    );
};

afterEach(cleanup);

describe("When the solutionpage is opened", () => {
    test("should contain the dojo title", () => {
        const { queryByText } = render(<MockSolutionPage />);

        expect(queryByText("Testdojo 1")).toBeInTheDocument();
    });

    test("should contain the save button", () => {
        const { queryByText } = render(<MockSolutionPage />);

        expect(queryByText(/Save/i)).toBeInTheDocument();
    });

    test("should contain the attempt button", () => {
        const { queryByText } = render(<MockSolutionPage />);

        expect(queryByText(/Attempt/i)).toBeInTheDocument();
    });

    test("should contain the theme setter drowpdown", () => {
        const { queryByTestId } = render(<MockSolutionPage />);

        expect(queryByTestId("theme-dropdown")).toBeInTheDocument();
    });

    test("should contain the language setter drowpdown", () => {
        const { queryByTestId } = render(<MockSolutionPage />);

        expect(queryByTestId("language-dropdown")).toBeInTheDocument();
    });
});
