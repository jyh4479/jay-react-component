import React, {FunctionComponent} from "react";
import "./index.css";
import {FocusState} from "../types/common";

type PropsType = {
    focusState: FocusState
}

const ActiveBar: FunctionComponent<PropsType> = (props) => {

    const {focusState} = props;

    return (
        <div className={"active-bar"}>bar</div>
    )
}

export default ActiveBar;