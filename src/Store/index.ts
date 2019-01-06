import {combineReducers, Dispatch, Reducer, Action, AnyAction} from 'redux';
import workClockReducer from './WorkClock/reducers';


const combined =  combineReducers({
    workClock: workClockReducer    
} as any);

export default combined;