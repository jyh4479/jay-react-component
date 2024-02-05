import {RefObject, useEffect, useLayoutEffect, useState} from "react";

const useComponentPosition = (componentRef: RefObject<HTMLElement> | undefined, trigger: Array<any>) => {

    const [componentPosition, setComponentPosition] = useState({x: 0, y: 0});

    const updateComponentPosition = () => {
        if (!componentRef?.current) return;

        const currentComponentPosition = componentRef.current?.getBoundingClientRect();
        setComponentPosition({x: currentComponentPosition?.x ?? 0, y: currentComponentPosition?.y ?? 0});
    }

    useLayoutEffect(() => {
        updateComponentPosition();
        const handleResize = () => {
            updateComponentPosition();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [componentRef?.current, ...trigger])

    return componentPosition;
}

export default useComponentPosition;