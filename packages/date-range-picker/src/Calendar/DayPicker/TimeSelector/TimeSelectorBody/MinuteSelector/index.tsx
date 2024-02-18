import React from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";

const MinuteSelector = () => {

    const minuteList = Array.from({length: 60}, (_, index) => index);
    const minuteOnClick = (time: number) => {
        console.log(time);
    }

    return (
        <TimeSelectorComponent timeType={"MINUTE"} timeList={minuteList} timeOnClick={minuteOnClick}/>
    )
}

export default MinuteSelector;