import React from "react"
import "./App.css"
import {CounterView} from "views/counterView"
import {Counter} from "components/organisms/counter"

function App() {
    return (
        <div className={"app"}>
            <Counter>
                <CounterView/>
            </Counter>
        </div>)
}

export default App
