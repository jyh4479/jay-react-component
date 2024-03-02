import {createContext} from "react";

export interface DatePickerContextType {
    selectedStartTimestamp: number;
    selectedEndTimestamp: number;
    onClickDate: Function;
    onClickHour: Function;
    onClickMinute: Function;
    onClickSecond: Function;
}

const datePickerDefaultContext = {
    selectedStartTimestamp: 0,
    selectedEndTimestamp: 0,
    onClickDate: () => null,
    onClickHour: () => null,
    onClickMinute: () => null,
    onClickSecond: () => null,
}

const DatePickerContext = createContext<DatePickerContextType>(datePickerDefaultContext);

export default DatePickerContext;
