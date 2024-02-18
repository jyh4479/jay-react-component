import React from "react";
import "./index.css";
import {Time} from "../../../../../types/common";

type PropsType = {
    timeType?: Time
    timeList: number[]
    timeOnClick: Function
}

const TimeSelectorComponent = (props: PropsType) => {

    const {timeType, timeList, timeOnClick} = props;

    return (
        <div className={"time-picker-scroll-layout"}>
            {timeList.map(time => <div key={`${timeType}-${time}`} className={"time-picker-scroll-cell"}
                                       onClick={() => timeOnClick(time)}>{time}</div>)}
        </div>
    )
}

export default TimeSelectorComponent;