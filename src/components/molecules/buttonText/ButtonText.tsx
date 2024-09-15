import React, {FC, memo} from "react"
import "./style.css"
import {Text} from "components/atoms/text"
import {Button} from "components/atoms/button"

interface IButtonText {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const ButtonText: FC<IButtonText> = memo(({count, onDecrement, onIncrement}) => {
    return (
        <div className={"button-text-wrapper"}>
            <Text children={count}/>
            <div className={"buttons-container"}>
                <Button onClick={onIncrement} key="incrementButton">Increment</Button>
                <Button onClick={onDecrement} key="decrementButton">Decrement</Button>
            </div>
        </div>
    )
})

export {ButtonText}