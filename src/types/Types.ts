import React, {ReactNode} from "react"

export interface IHasChildren {
    children: ReactNode;
}

export interface IButton extends IHasChildren {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CounterContextValue {
    count: number;
    increment: () => void;
    decrement: () => void;
}
