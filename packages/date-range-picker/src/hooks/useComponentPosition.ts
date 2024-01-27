import {RefObject, useEffect, useState} from "react";

const useComponentPosition = (componentRef: RefObject<HTMLElement>) => {

    const [componentPosition, setComponentPosition] = useState({x: 0, y: 0});
    const [windowRelativePosition, setWindowRelativePosition] = useState("middle");

    const updateComponentPosition = () => {
        if (componentRef.current) {
            const currentComponentPosition = componentRef.current?.getBoundingClientRect();
            setComponentPosition({x: currentComponentPosition?.x ?? 0, y: currentComponentPosition?.y ?? 0});
        }
    }

    const updateWindowRelativePosition = () => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowMidPoint = window.scrollY + windowHeight / 2;

            if (rect.bottom < windowMidPoint) {
                setWindowRelativePosition('above');
            } else if (rect.top > windowMidPoint) {
                setWindowRelativePosition('below');
            } else {
                setWindowRelativePosition('middle');
            }
        }
    }

    useEffect(() => {
        console.log(windowRelativePosition);
    }, [windowRelativePosition])

    useEffect(() => {
        updateComponentPosition();
        updateWindowRelativePosition();
        const handleResize = () => {
            updateComponentPosition();
            updateWindowRelativePosition();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [componentRef])

    useEffect(() => {
        updateWindowRelativePosition();
        const handleScroll = () => {
            updateWindowRelativePosition();
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [componentRef])

    return componentPosition;
}

export default useComponentPosition;