import {Timer} from "helpers/timer"

export function debouncedCallback(callBack: () => void, timeout: number, timerFactory: Timer) {
    if (timerFactory.timer) {
        clearTimeout(timerFactory.timer)
    }
    timerFactory.timer = setTimeout(() => {
        callBack()
    }, timeout)
}