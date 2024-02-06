import React, {ForwardedRef, forwardRef, MutableRefObject, ReactNode, RefObject, useRef} from "react";
import "./index.css";
import {useComponentPosition, useComponentSize, useDialogDirection, useDialogPosition} from "../hooks";

type PropsType = {
    display?: boolean
    parentComponentRef?: RefObject<HTMLElement>
    children?: ReactNode
}

const Dialog = forwardRef((props: PropsType, ref: ForwardedRef<HTMLDivElement>) => {

    const {display = true, parentComponentRef, children} = props;
    const internalRef = useRef<HTMLDivElement>(null);

    const parentComponentPosition = useComponentPosition(parentComponentRef, [display]);
    const parentComponentSize = useComponentSize(parentComponentRef, []);
    const dialogSize = useComponentSize(internalRef, [display]);

    const dialogDirection = useDialogDirection(internalRef, [display]);
    const dialogPosition = useDialogPosition(parentComponentPosition, parentComponentSize, dialogSize, dialogDirection);

    return (
        <div
            ref={el => {
                if (ref && el) {
                    (ref as MutableRefObject<HTMLDivElement>).current = el;
                }

                if (el) {
                    (internalRef as MutableRefObject<HTMLDivElement>).current = el;
                }
            }}
            className={`dialog-layout ${display ? '' : 'hide'}`}
            style={{top: dialogPosition.y, left: dialogPosition.x}}
        >
            {children}
        </div>
    )
});

export default Dialog;