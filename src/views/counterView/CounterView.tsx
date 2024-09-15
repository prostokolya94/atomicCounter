import React from "react"
import {useCounterContext, useDebouncedCounterActions} from "components/organisms/counter"
import {ButtonText} from "components/molecules/buttonText"

const CounterView: React.FC = () => {
    const {count} = useCounterContext()
    const {increment, decrement} = useDebouncedCounterActions()

    return (
        <ButtonText count={count} onDecrement={decrement} onIncrement={increment}/>
    )

}

export {CounterView}