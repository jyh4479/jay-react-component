import {RefObject, useLayoutEffect, useState} from "react";

const useComponentSize = (componentRef: RefObject<HTMLElement> | undefined, trigger: Array<any>) => {

    const [componentSize, setComponentSize] = useState({w: 0, h: 0});

    useLayoutEffect(() => {
        if (!componentRef?.current) return;

        const currentComponentSize = componentRef.current?.getBoundingClientRect();

        setComponentSize({w: currentComponentSize.width, h: currentComponentSize.height});
    }, [componentRef?.current, ...trigger])

    return componentSize;
}

export default useComponentSize;