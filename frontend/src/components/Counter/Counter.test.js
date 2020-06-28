import React from "react";
import { render, cleanup } from "@testing-library/react";
import Counter from "./Counter";
import Status from "../../signals/Status";

afterEach(cleanup);

describe("Counter Component", () => {
  it("should display the count using the correct style", () => {
    const expectedValue = 8;
    const expectedStyle = "score";
    const expectedTitle = "Score";
    const expectedContents = `${expectedTitle} ${expectedValue}`;

    const { getByText } = render(
      <Counter
        value={expectedValue}
        status={Status.GOOD}
        title={expectedTitle}
      />
    );

    expect(getByText(expectedContents)).toBeInTheDocument();
    expect(getByText(expectedContents)).toHaveClass(expectedStyle);
  });
});
