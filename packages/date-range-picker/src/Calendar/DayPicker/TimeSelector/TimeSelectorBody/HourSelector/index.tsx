import React from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";

const HourSelector = () => {

    const hoursList = Array.from({length: 24}, (_, index) => index);
    const hourOnClick = (time: number) => {
        console.log(time);
    }

    return (
        <TimeSelectorComponent timeType={"HOUR"} timeList={hoursList} timeOnClick={hourOnClick}/>
    )
}

export default HourSelector;