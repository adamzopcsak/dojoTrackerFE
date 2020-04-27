import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

test("Renders without crashing", () => {
    const { getByText } = render(<App />);
    const landingPageTitle = getByText("ASD");

    expect(landingPageTitle).toBeInTheDocument();
});
