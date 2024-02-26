import {FocusState} from "../types/common";
import {Dispatch, SetStateAction, useState} from "react";
import {DatePickerContextType} from "../context";

const useSelectDateAndTime = (focusState: FocusState, setFocusState: Dispatch<SetStateAction<FocusState>>): DatePickerContextType => {

    const [selectedStartTimestamp, setSelectedStartTimestamp] = useState<number>(-1);
    const [selectedEndTimestamp, setSelectedEndTimestamp] = useState<number>(-1);

    const [selectedTempStartTimestamp, setSelectedTempStartTimestamp] = useState<number>(-1);
    const [selectedTempEndTimestamp, setSelectedTempEndTimestamp] = useState<number>(-1);

    const onClickDate = (timestamp: number) => {
        setSelectedStartTimestamp(prev => {
            const currentSelectedStartDate = new Date(prev);
            const inputDate = new Date(timestamp);

            currentSelectedStartDate.setFullYear(inputDate.getFullYear());
            currentSelectedStartDate.setMonth(inputDate.getMonth());
            currentSelectedStartDate.setDate(inputDate.getDate());

            return currentSelectedStartDate.getTime();
        })
    }

    const onClickHour = (hour: number) => {

    }

    const onClickMinute = (minute: number) => {

    }

    const onClickSecond = (second: number) => {

    }


    return {selectedStartTimestamp, selectedEndTimestamp, onClickDate, onClickHour, onClickMinute, onClickSecond};
}

export default useSelectDateAndTime;