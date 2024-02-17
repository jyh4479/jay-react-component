import React from "react";
import "./index.css";
import TimeSelectorHeader from "./TimeSelectorHeader";
import TimeSelectorBody from "./TimeSelectorBody";

const TimeSelector = () => {
    return (
        <>
            <div className={"time-selector-header"}>
                <TimeSelectorHeader/>
            </div>
            <div className={"time-selector-body"}>
                <TimeSelectorBody/>
            </div>
        </>
    )
}

export default TimeSelector;