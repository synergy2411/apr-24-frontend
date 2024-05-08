import { render, screen } from "@testing-library/react";
import DemoOutput from "./DemoOutput";

describe("DemoOutput Component", () => {
  test("renders heading element with 'DemoOutput component loaded' text", () => {
    // Arrange
    render(<DemoOutput />);
    const headingEl = screen.getByText("DemoOutput component loaded");

    // Assert
    expect(headingEl).toBeInTheDocument();
  });

  test("renders paragraph with 'Toggle is False' when button is NOT clicked", () => {
    render(<DemoOutput />);

    // const paragraphEl = screen.queryByText("toggle is false", { exact: false });
    const paragraphEl = screen.queryByText(/toggle is false/i);

    expect(paragraphEl).not.toBeNull();
  });
});
