import React, {useContext} from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";
import DatePickerContext from "../../../../../context";

const HourSelector = () => {

    const {onClickHour} = useContext(DatePickerContext);
    const hoursList = Array.from({length: 24}, (_, index) => index)

    return (
        <TimeSelectorComponent timeType={"HOUR"} timeList={hoursList} timeOnClick={onClickHour}/>
    )
}

export default HourSelector;