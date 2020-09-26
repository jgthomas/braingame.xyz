import React from "react";
import { render, cleanup } from "@testing-library/react";
import Word from "./Word";

afterEach(cleanup);

describe("Word Component", () => {
  it("should display the passed word", () => {
    const expectedWord = "doglets";
    const { getByTestId } = render(<Word word={expectedWord} />);

    expect(getByTestId("word-display")).toHaveTextContent(expectedWord);
  });
});
