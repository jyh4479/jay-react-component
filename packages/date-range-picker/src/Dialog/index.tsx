import React, {ForwardedRef, forwardRef, MutableRefObject, ReactNode, useEffect, useRef, useState} from "react";
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

const Dialog = forwardRef((props: PropsType, ref: ForwardedRef<HTMLDivElement>) => {

    const {display = true, parentComponentPosition, children} = props;
    const internalRef = useRef<HTMLDivElement>(null);
    const dialogDirection = useState("below");

    useEffect(() => {
        console.log(internalRef.current?.getBoundingClientRect());
    }, [display])

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
            style={{top: parentComponentPosition?.y, left: parentComponentPosition?.x}}
        >
            {children}
        </div>
    )
});

export default Dialog;