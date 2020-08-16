import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

describe("Header Component", () => {
  it("should display the game title", () => {
    const expectedTitle = "Fun Word Game";

    const { getByText } = render(<Header gameName={expectedTitle} />);

    expect(getByText(expectedTitle)).toBeInTheDocument();
  });
});
