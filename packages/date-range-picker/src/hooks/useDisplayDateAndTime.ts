import {dateDisplayFromTimestamp} from "../utils/date";

const useDisplayDateAndTime = (timestamp: number) => {
    return timestamp > 0 ? dateDisplayFromTimestamp(timestamp) : '';
}

export default useDisplayDateAndTime;