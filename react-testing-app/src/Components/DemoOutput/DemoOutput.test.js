import { render, screen } from "@testing-library/react";
import DemoOutput from "./DemoOutput";

test("renders heading element with 'DemoOutput component loaded' text", () => {
  // Arrange
  render(<DemoOutput />);
  const headingEl = screen.getByText("DemoOutput component loaded");

  // Assert
  expect(headingEl).toBeInTheDocument();
});
