import {RefObject, useLayoutEffect, useRef, useState} from "react";
import {Direction} from "../types/common";

type ScrollDirection = "UP" | "DOWN";

const useDialogDirection = (componentRef: RefObject<HTMLElement>, trigger: Array<any>) => {

    const [direction, setDirection] = useState<Direction>("BELOW");

    const scrollDirection = useRef<ScrollDirection>("DOWN");
    const prevScrollY = useRef<number>(0);

    const updateScrollDirection = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY.current) {
            scrollDirection.current = "DOWN";
        } else if (currentScrollY < prevScrollY.current) {
            scrollDirection.current = "UP";
        }

        prevScrollY.current = currentScrollY;
    }

    useLayoutEffect(() => {
        if (!componentRef?.current) return;

        const updateDialogDirection = () => {

            updateScrollDirection();

            const currentComponentPosition = componentRef.current?.getBoundingClientRect();

            if (!currentComponentPosition) return;

            if (currentComponentPosition.bottom > window.innerHeight && scrollDirection.current === "UP") setDirection("ABOVE");
            else if (currentComponentPosition.top < 0 && scrollDirection.current === "DOWN") setDirection("BELOW");
        }

        updateDialogDirection();

        window.addEventListener("scroll", updateDialogDirection);

        return () => {
            window.removeEventListener("scroll", updateDialogDirection);
        }

    }, [componentRef?.current])

    useLayoutEffect(() => {
        if (!componentRef?.current) return;

        const currentComponentPosition = componentRef.current?.getBoundingClientRect();

        if (currentComponentPosition.bottom > window.innerHeight) setDirection("ABOVE");
        else if (currentComponentPosition.top) setDirection("BELOW");

    }, [componentRef?.current, ...trigger])

    return direction;
}

export default useDialogDirection;