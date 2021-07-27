import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe("Checkbox functions as expected", () => {
    test("Checkbox is unchecked and button is enabled by default", () => {
        render(<SummaryForm />);
        const button = screen.getByRole('button', { name: 'Confirm Order' });
        const checkbox = screen.getByRole('checkbox', { name: 'Terms and Conditions'});
        expect(button).toBeDisabled();
        expect(checkbox).not.toBeChecked();
    });
    test("Clicking checkbox disables button", () => {
        render(<SummaryForm />);

        const button = screen.getByRole('button', { name: 'Confirm Order' });
        const checkbox = screen.getByRole('checkbox', { name: 'Terms and Conditions'});

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
        expect(button).toBeEnabled();

        fireEvent.click(checkbox);

        expect(checkbox).not.toBeChecked();
        expect(button).toBeDisabled();
    });
})