import { WorkClockActionTypes } from './types';

const time = () => new Date().toLocaleTimeString();

export function logIn() {
    return{
        type: WorkClockActionTypes.WORK_START,
        payload: time()
    };
}

export function logOut() {
    return{
        type: WorkClockActionTypes.WORK_END,
        payload: time()
    };
}

