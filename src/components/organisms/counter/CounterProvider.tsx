import React, {createContext, FC, useContext} from "react"
import useCounter from './hooks/useCounter';
import {CounterContextValue, IHasChildren} from "types"

const CounterContext = createContext<CounterContextValue | undefined>(undefined);

const CounterProvider: FC<IHasChildren> = ({ children }) => {
    const counter = useCounter();

    return (
        <CounterContext.Provider value={counter}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounterContext = (): CounterContextValue => {
    const context = useContext(CounterContext);
    if (!context) throw new Error('Контекст не найден');
    return context;
};

export {CounterProvider};