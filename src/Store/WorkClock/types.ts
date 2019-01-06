import { WorkClockReducer } from "./interfaces";


export const WorkClockActionTypes = {
    WORK_START : '&&WorkClock/WORK_START',
    WORK_END : '&&WorkClock/WORK_END',
    WORK_CLOCK: '&&WorkClock/WORK_CLOCK',
}


export const workClockInitialState:WorkClockReducer = {
    start: "",
    end: "",
    clock: 0
}
