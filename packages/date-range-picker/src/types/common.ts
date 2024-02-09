export type Position = {
    x: number
    y: number
}

export type Size = {
    w: number
    h: number
}

export type Direction = "BELOW" | "ABOVE"

export const SELECTED_FOCUS: Record<FocusState, FocusState> = {
    NONE: "NONE",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
}

export type DateMode = "DAY" | "MONTH" | "YEAR";
export type FocusState = "NONE" | "LEFT" | "RIGHT";

export const SELECTED_MODE: Record<DateMode, DateMode> = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR",
}
