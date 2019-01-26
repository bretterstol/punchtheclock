import {put, takeEvery, call, apply, select, cancelled, cancel, fork, take} from 'redux-saga/effects';
import {WorkClockActionTypes} from './types';


const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

function* startTimer() {
    const { workClock } = yield select();
    let number = workClock.clock;
    try {
        while (true) {
            yield put({
                type: WorkClockActionTypes.WORK_CLOCK,
                payload: number
            });
            yield delay(1000);
            number++;
        }
    } finally {
        yield cancelled()
    }
}

function* time(){
    while(yield take(WorkClockActionTypes.WORK_START)){
        const timer = yield fork(startTimer);
        if(yield take(WorkClockActionTypes.WORK_END)){
            yield cancel(timer)
        }
    }
}

export default time;