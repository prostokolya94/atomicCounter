import React, {FC} from "react"
import {IButton} from "types/Types"

const Button: FC<IButton> = ({onClick, children}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export {Button}