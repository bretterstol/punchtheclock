import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Main from '../Components/Main';
import {logIn, logOut} from '../Store/WorkClock/actions';

import {State} from '../interfaces';
import { WorkClockReducer } from '../Store/WorkClock/interfaces';

const mapStateToProps = (state: State) => {
    return {
        start: state.workClock.start,
        end: state.workClock.end,
        clock: state.workClock.clock,
        ...isStopped(state.workClock) 
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        in: () => {
            dispatch(logIn())
        },
        out: () =>{ 
            dispatch(logOut())
        },
    }
}

function isStopped({start, end}:WorkClockReducer){
    if(end.length > 0 && end >= start) return {stopped: true, started: true};
    else if(start.length > 0) return {stopped: false, started:  true}
    else return {stopped: false, started: false};
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);