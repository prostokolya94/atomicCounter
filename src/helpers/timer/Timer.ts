export class Timer {
    private _timer: NodeJS.Timeout | null = null

    get timer(): NodeJS.Timeout | null {
        return this._timer
    }

    set timer(value: NodeJS.Timeout | null) {
        this._timer = value
    }
}