import React from "react";
import { render } from "@testing-library/react";
import Word from "./Word";
import { act } from "react-dom/test-utils";

describe("Word Component", () => {
  it("should display the passed word", () => {
    const expectedWord = "doglets";
    const { getByText } = render(<Word word={expectedWord} />);
  });
});
