import React, {FC, useCallback} from "react"
import {CounterProvider, useCounterContext} from "./CounterProvider"
import {CounterContextValue, IHasChildren} from "types/Types"
import {debouncedCallback} from "helpers/debounce"
import {Timer} from "helpers/timer"

const timer = new Timer()

const Counter: FC<IHasChildren> = ({children}) => {
    return (
        <CounterProvider>
            {children}
        </CounterProvider>
    )
}

const useDebouncedCounterActions = (): Omit<CounterContextValue, "count"> => {
    const {increment, decrement} = useCounterContext()

    const debouncedIncrement = useCallback(() => debouncedCallback(increment, 200, timer), [])
    const debouncedDecrement = useCallback(() => debouncedCallback(decrement, 200, timer), [])

    return {increment: debouncedIncrement, decrement: debouncedDecrement}
}

export {Counter, useDebouncedCounterActions}