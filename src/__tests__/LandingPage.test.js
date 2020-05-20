import React from "react";
import { render, cleanup } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

afterEach(cleanup);

test("Renders without crashing", () => {
    const { getByText } = render(<LandingPage />);
    const landingPageTitle = getByText(/Hi Codecooler/i);

    expect(landingPageTitle).toBeInTheDocument();
});
