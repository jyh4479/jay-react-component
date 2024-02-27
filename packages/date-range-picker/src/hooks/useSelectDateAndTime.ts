import {FocusState} from "../types/common";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {DatePickerContextType} from "../context";

const useSelectDateAndTime = (focusState: FocusState, setFocusState: Dispatch<SetStateAction<FocusState>>): DatePickerContextType => {

    const [selectedStartTimestamp, setSelectedStartTimestamp] = useState<number>(-1);
    const [selectedEndTimestamp, setSelectedEndTimestamp] = useState<number>(-1);

    const [selectedTempStartTimestamp, setSelectedTempStartTimestamp] = useState<number>(-1);
    const [selectedTempEndTimestamp, setSelectedTempEndTimestamp] = useState<number>(-1);

    //TODO: focus 상태를 확인하여 start, end 중 어떤 시간을 수정할지 결정하기 - 최대한 분기 태워서 처리하지 않기
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
        setSelectedStartTimestamp(prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setHours(hour);
            return currentSelectedStartDate.getTime();
        })
    }

    const onClickMinute = (minute: number) => {
        setSelectedStartTimestamp(prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setMinutes(minute);
            return currentSelectedStartDate.getTime();
        })
    }

    const onClickSecond = (second: number) => {
        setSelectedStartTimestamp(prev => {
            const currentSelectedStartDate = new Date(prev);
            currentSelectedStartDate.setSeconds(second);
            return currentSelectedStartDate.getTime();
        })
    }

    return {selectedStartTimestamp, selectedEndTimestamp, onClickDate, onClickHour, onClickMinute, onClickSecond};
}

export default useSelectDateAndTime;