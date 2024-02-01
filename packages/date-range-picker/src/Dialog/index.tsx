import React, {FunctionComponent, ReactNode} from "react";
import "./index.css";

type Position = {
    x: number
    y: number
}

type PropsType = {
    display?: boolean
    parentComponentPosition?: Position
    children?: ReactNode
}

const Dialog: FunctionComponent<PropsType> = (props) => {

    const {display = true, parentComponentPosition, children} = props;

    return (
        <div className={`dialog-layout ${display ? '' : 'hide'}`}
             style={{top: parentComponentPosition?.y, left: parentComponentPosition?.x}}
        >
            {children}
        </div>
    )
}

export default Dialog;