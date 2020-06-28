import React from "react";
import { render, cleanup } from "@testing-library/react";
import Word from "./Word";

afterEach(cleanup);

describe("Word Component", () => {
  it("should display the passed word", () => {
    const expectedWord = "doglets";
    const expectedClass = "word";
    const { getByTestId, getByText } = render(<Word word={expectedWord} />);

    expect(getByTestId("word-display")).toHaveTextContent(expectedWord);
    expect(getByText(expectedWord)).toHaveClass(expectedClass);
  });
});
