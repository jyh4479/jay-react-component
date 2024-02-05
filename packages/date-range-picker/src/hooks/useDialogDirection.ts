import {RefObject, useLayoutEffect, useState} from "react";
import {Direction} from "../types/common";

const useDialogDirection = (componentRef: RefObject<HTMLElement>, trigger: Array<any>) => {

    const [direction, setDirection] = useState<Direction>("BELOW");

    useLayoutEffect(() => {
        if (!componentRef?.current) return;
        const updateDirection = () => {

            const {bottom} = componentRef.current?.getBoundingClientRect();
            const {innerHeight} = window;

            console.log(bottom, innerHeight);

            if (bottom < innerHeight) setDirection("BELOW");
            else setDirection("ABOVE");
        }

        window.addEventListener("scroll", updateDirection);

        return () => {
            window.removeEventListener("scroll", updateDirection);
        }

    }, [componentRef?.current, ...trigger])

    return direction;
}

export default useDialogDirection;