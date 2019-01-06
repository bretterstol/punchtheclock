
export interface WorkClockAction {
    type: string,
    payload?: string
}

export interface WorkClockReducer {
    start: string,
    end: string,
    clock: number
}