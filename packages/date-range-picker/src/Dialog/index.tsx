import React, {forwardRef, ReactNode} from "react";
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

const Dialog = forwardRef<HTMLDivElement, PropsType>((props, ref) => {

    const {display = true, parentComponentPosition, children} = props;

    return (
        <div
            ref={ref}
            className={`dialog-layout ${display ? '' : 'hide'}`}
            style={{top: parentComponentPosition?.y, left: parentComponentPosition?.x}}
        >
            {children}
        </div>
    )
});

export default Dialog;