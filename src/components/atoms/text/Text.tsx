import React, {FC} from "react"
import {IHasChildren} from "types/Types"

const Text: FC<IHasChildren> = ({children}) => {
    return (
        <span>
            {children}
        </span>
    )
}

export {Text}