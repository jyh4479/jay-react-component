import React from "react";
import HourSelector from "./HourSelector";
import MinuteSelector from "./MinuteSelector";
import SecondSelector from "./SecondSelector";

const TimeSelectorBody = () => {
    return (
        <>
            <HourSelector/>
            <MinuteSelector/>
            <SecondSelector/>
        </>
    )
}

export default TimeSelectorBody;