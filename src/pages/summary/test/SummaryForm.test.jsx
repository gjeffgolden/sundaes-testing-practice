import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Checkbox functions as expected", () => {
  test("Checkbox is unchecked and button is enabled by default", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button", { name: "Confirm Order" });
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
  });
  test("Clicking checkbox disables button", () => {
    render(<SummaryForm />);

    const button = screen.getByRole("button", { name: "Confirm Order" });
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
