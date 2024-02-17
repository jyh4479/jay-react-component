import React from "react";
import "./index.css";
import DateSelectorHeader from "./DateSelectorHeader";
import DateSelectorBody from "./DateSelectorBody";

const DateSelector = () => {
    return (
        <>
            <div className={"date-selector-header"}>
                <DateSelectorHeader/>
            </div>
            <div className={"date-selector-body"}>
                <DateSelectorBody/>
            </div>
        </>

    )
}

export default DateSelector;