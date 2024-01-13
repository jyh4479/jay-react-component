export type DateMode = "DAY" | "MONTH" | "YEAR";
export type FocusState = "NONE" | "LEFT" | "RIGHT";

export const SELECTED_MODE: Record<DateMode, DateMode> = {
    DAY: "DAY",
    MONTH: "MONTH",
    YEAR: "YEAR",
};

export const SELECTED_FOCUS: Record<FocusState, FocusState> = {
    NONE: "NONE",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
};
