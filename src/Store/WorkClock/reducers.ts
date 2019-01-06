import { WorkClockActionTypes, workClockInitialState } from './types';
import { WorkClockAction } from './interfaces';

export default function workClockReducer(state = workClockInitialState, action:WorkClockAction){
    switch(action.type){
        case WorkClockActionTypes.WORK_START: return {
            ...state,
            start: action.payload
        };
        case WorkClockActionTypes.WORK_END: return {
            ...state,
            end: action.payload
        };
        case WorkClockActionTypes.WORK_CLOCK: return {
            ...state,
            clock: action.payload
        };
        default: return state;
    }
}