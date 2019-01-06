import React, {Component} from 'react';
import './Main.css';
import {MainProps} from './interfaces'

class Main extends Component<MainProps> {
    render(){
        const {stopped, started} = this.props;
        return(
            <div className="centered">
            <h1>{this.props.clock}</h1>
            <button className={"button" + ((started && !stopped) ? " in" : "")} onClick={this.props.in}> Start</button>
            <button className={"button" + (stopped ? " out" : "")} onClick={this.props.out}> End</button>
            </div>
        );
    }
}


export default Main;