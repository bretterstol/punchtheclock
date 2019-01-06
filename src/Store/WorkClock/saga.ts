import {put, takeEvery, call, apply} from 'redux-saga/effects';
import {WorkClockActionTypes} from './types';

let number = 0;

function* startTimer(){
    yield apply(interval, interval.set, [() => {
        number++
    }, 1000]);
    yield put({
        type: WorkClockActionTypes.WORK_CLOCK,
        payload: number
    });
}


function* stopTimer(){
    const stopper = yield apply(interval, interval.clear);
}

const interval = {
    id: 0,
    set: function(f = (a:any) => a, delay:number){
        if(this.id) this.clear();
        this.id = window.setInterval(f, delay);
    },
    clear: function(){
        window.clearInterval(this.id);
    }
}

export function* time(){
    yield takeEvery(WorkClockActionTypes.WORK_START, startTimer);
    yield takeEvery(WorkClockActionTypes.WORK_END, stopTimer);
} 