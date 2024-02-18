import React from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";

const SecondSelector = () => {

    const secondList = Array.from({length: 60}, (_, index) => index);
    const secondOnClick = (time: number) => {
        console.log(time);
    }

    return (
        <TimeSelectorComponent timeType={"SECOND"} timeList={secondList} timeOnClick={secondOnClick}/>
    )
}

export default SecondSelector;