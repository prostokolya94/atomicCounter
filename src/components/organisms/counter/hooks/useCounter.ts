import {useCallback, useState} from "react"
import {CounterContextValue} from "types/Types"

const useCounter = (): CounterContextValue => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => setCount(prevCount => prevCount + 1), [])
    const decrement = useCallback(() => setCount(prevCount => prevCount - 1), [])

    return {count, increment, decrement}
}

export default useCounter