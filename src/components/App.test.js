import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

describe("app", () => {
  test("renders the app", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("app")).toHaveTextContent("Starter Code");
  });
});
