export const getDateOfCurrentMonth = (timestamp: number): number[] => {
    const currentDate = new Date(timestamp);
    const currentMonth = currentDate.getMonth();
    const startDate = new Date(currentDate.getFullYear(), currentMonth, 1, 0, 0, 0, 0);
    const endDate = new Date(currentDate.getFullYear(), currentMonth + 1, 0, 0, 0, 0, 0);

    const datesArray = [];

    // Add dates of the previous month
    const prevMonthEndDate = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();
    const prevMonthStartDate = new Date(currentDate.getFullYear(), currentMonth - 1, prevMonthEndDate - startDate.getDay() + 1);
    for (let i = 0; i < startDate.getDay(); i++) {
        datesArray.push(new Date(prevMonthStartDate.getTime() + i * 24 * 60 * 60 * 1000).getTime());
    }

    // Add dates of the current month
    for (let i = 1; i <= endDate.getDate(); i++) {
        datesArray.push(new Date(currentDate.getFullYear(), currentMonth, i).getTime());
    }

    // Add dates of the next month
    const nextMonthDaysToAdd = 42 - datesArray.length;
    for (let i = 1; i <= nextMonthDaysToAdd; i++) {
        datesArray.push(new Date(currentDate.getFullYear(), currentMonth + 1, i).getTime());
    }

    return datesArray;
}

export const isToday = (timeStamp: number): boolean => {
    const currentDate = new Date().getTime();

    if (new Date(currentDate).getFullYear() !== new Date(timeStamp).getFullYear()) return false;
    if (new Date(currentDate).getMonth() !== new Date(timeStamp).getMonth()) return false;
    if (new Date(currentDate).getDate() !== new Date(timeStamp).getDate()) return false;

    return true;
}

export const isSameMonthInYear = (firstTimestamp: number, secondTimestamp: number): boolean => {
    const firstDateObject = new Date(firstTimestamp);
    const secondDateObject = new Date(secondTimestamp);

    if (firstDateObject.getFullYear() !== secondDateObject.getFullYear()) return false;
    if (firstDateObject.getMonth() !== secondDateObject.getMonth()) return false;

    return true;
}

export const dateDisplayFromTimestamp = (timestamp: number) => {
    const dateObject = new Date(timestamp);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth();
    const date = dateObject.getDate();

    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    const second = dateObject.getSeconds();

    return `${year}/${addLeadingZero(month)}/${addLeadingZero(date)} ${addLeadingZero(hour)}:${addLeadingZero(minute)}:${addLeadingZero(second)}`;
}

const addLeadingZero = (number: number) => {
    return number < 10 ? `0${number}` : number;
}