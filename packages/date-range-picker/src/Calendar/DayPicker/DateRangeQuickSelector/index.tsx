import React from "react";
import "./index.css";

const DateRangeQuickSelector = () => {
    return (
        <ul className={"quick-selector-list"}>
            <li>Now ~ EOD</li>
            <li>Last 7 Days</li>
            <li>Last 14 Days</li>
            <li>Last 30 Days</li>
            <li>Last 90 Days</li>
        </ul>
    )
}

export default DateRangeQuickSelector;