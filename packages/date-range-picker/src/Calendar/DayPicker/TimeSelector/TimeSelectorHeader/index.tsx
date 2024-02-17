import React, {useState} from "react";

const TimeSelectorHeader = () => {

    const [tempTimeStamp,] = useState(new Date().getTime());

    return (
        <div>{`${new Date(tempTimeStamp).getHours()}:${new Date(tempTimeStamp).getMinutes()}:${new Date(tempTimeStamp).getSeconds()}`}</div>
    )
}

export default TimeSelectorHeader;