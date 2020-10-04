import React from "react";
import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("button test", () => {
  it("focus and enter should fire handle click", () => {
    const handleFocus = jest.fn();
    const handleClick = jest.fn();
    const TEXT1 = "text";
    const ui = (
      <Button type="button" onFocus={handleFocus} onClick={handleClick}>
        {TEXT1}
      </Button>
    );
    const { container } = render(ui);
    const button = container.querySelector("button");

    fireEvent.focus(button);
    expect(handleFocus).toHaveBeenCalled();
    userEvent.type(screen.getByRole("button"), "{space}");
    expect(handleClick).toHaveBeenCalled();
  });
});
