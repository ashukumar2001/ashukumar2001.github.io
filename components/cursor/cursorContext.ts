import { createContext } from "react";

export const cursorContext = createContext<{
    cursorUtilsRef: {
        current: {
            xTo: gsap.QuickToFunc,
            yTo: gsap.QuickToFunc,
            scaleTo: (v: number) => void,
            followCursor: () => void,
            unfollowCursor: () => void
        } | null
    },
    cursorRef: React.MutableRefObject<HTMLDivElement | null> | null
}>({ cursorUtilsRef: { current: null }, cursorRef: null });