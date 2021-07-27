import React, { useState } from 'react'

export default function SummaryForm() {
    const [disableButton, setDisableButton] = useState(true);

    const handleClick = () => setDisableButton(!disableButton);

    return (
        <div>
            <button disabled={disableButton}>Confirm Order</button>
            <label htmlFor="terms-checkbox">Terms and Conditions</label>
            <input onClick={handleClick} type="checkbox" id="terms-checkbox"></input>
        </div>
    )
}
