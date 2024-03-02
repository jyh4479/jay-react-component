import {FocusState} from "../types/common";
import {Dispatch, SetStateAction, useState} from "react";
import {DatePickerContextType} from "../context";

const useSelectDateAndTime = (focusState: FocusState, setFocusState: Dispatch<SetStateAction<FocusState>>): DatePickerContextType => {

    const [selectedStartTimestamp, setSelectedStartTimestamp] = useState<number>(0);
    const [selectedEndTimestamp, setSelectedEndTimestamp] = useState<number>(0);

    const [selectedTempStartTimestamp, setSelectedTempStartTimestamp] = useState<number>(0);
    const [selectedTempEndTimestamp, setSelectedTempEndTimestamp] = useState<number>(0);

    const timestampSetter: Record<Exclude<FocusState, "NONE">, Dispatch<SetStateAction<number>>> = {
        "LEFT": setSelectedStartTimestamp,
        "RIGHT": setSelectedEndTimestamp
    }

    const onClickDate = (timestamp: number) => {

        if (focusState === "NONE") return;

        timestampSetter[focusState](prev => {
            const currentSelectedStartDate = new Date(prev);
            const inputDate = new Date(timestamp);

            currentSelectedStartDate.setFullYear(inputDate.getFullYear());
            currentSelectedStartDate.setMonth(inputDate.getMonth());
            currentSelectedStartDate.setDate(inputDate.getDate());

            return currentSelectedStartDate.getTime();
        })
    }

    const onClickHour = (hour: number) => {

        if (focusState === "NONE") return;

        timestampSetter[focusState](prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setHours(hour);
            return currentSelectedStartDate.getTime();
        })
    }

    const onClickMinute = (minute: number) => {

        if (focusState === "NONE") return;

        timestampSetter[focusState](prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setMinutes(minute);
            return currentSelectedStartDate.getTime();
        })
    }

    const onClickSecond = (second: number) => {

        if (focusState === "NONE") return;

        timestampSetter[focusState](prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setSeconds(second);
            return currentSelectedStartDate.getTime();
        })
    }

    return {selectedStartTimestamp, selectedEndTimestamp, onClickDate, onClickHour, onClickMinute, onClickSecond};
}

export default useSelectDateAndTime;