import {RefObject, useLayoutEffect, useState} from "react";
import {Direction} from "../types/common";

const useDialogDirection = (componentRef: RefObject<HTMLElement>, trigger: Array<any>) => {

    const [direction, setDirection] = useState<Direction>("BELOW");

    useLayoutEffect(() => {
        if (!componentRef?.current) return;
        const updateDirection = () => {

            const currentComponentPosition = componentRef.current?.getBoundingClientRect();

            if (!currentComponentPosition) return;

            if (currentComponentPosition.bottom > window.innerHeight) setDirection("ABOVE");
            else if (currentComponentPosition.top < 0) setDirection("BELOW");
        }

        window.addEventListener("scroll", updateDirection);

        return () => {
            window.removeEventListener("scroll", updateDirection);
        }

    }, [componentRef?.current, ...trigger])

    return direction;
}

export default useDialogDirection;