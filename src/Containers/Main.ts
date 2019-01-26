import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Main from '../Components/Main';
import {logIn, logOut} from '../Store/WorkClock/actions';

import {State} from '../interfaces';
import { WorkClockReducer } from '../Store/WorkClock/interfaces';
import { func } from 'prop-types';

const mapStateToProps = (state: State) => {
    return {
        start: state.workClock.start,
        end: state.workClock.end,
        clock: formatTimer(state.workClock.clock),
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        inn: () => {
            dispatch(logIn())
        },
        out: () =>{ 
            dispatch(logOut())
        },
    }
}

function formatTimer(num:number){
    const sec = num % 60;
    const min = (num / 60) % 60;
    const hour = (num / 60 / 60) % 24;
    return [hour,min,sec].map(val => {
        const floored = Math.floor(val);
        return addZero(floored);
    }).join(":"); 
}

function addZero(num:number){
    if(num < 10) return "0"+num;
    else return num;
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);