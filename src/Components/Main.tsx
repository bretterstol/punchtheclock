import React, { Component } from 'react';
import './Main.css';
import { MainProps, MainState } from './interfaces'


class Main extends Component<MainProps, MainState>{
    constructor(props: MainProps) {
        super(props)
        this.state = {
            running: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.callRedux = this.callRedux.bind(this);
    }
    render() {
        const { start, end, clock } = this.props;
        const {running} = this.state;
        return (
            <div className="centered">
                <h1>{clock}</h1>
                <button className={"button" + ((start && running) ? " in" : "")} onClick={this.handleClick}> Start</button>
                <button className={"button" + ((end && !running) ? " out" : "")} onClick={this.handleClick}> End</button>
            </div>
        )
    }
    handleClick(){
        this.setState((prev) => ({running: !prev.running}),this.callRedux)
    }
    callRedux(){
        const {inn, out} = this.props;
        const {running} = this.state;
        running ? inn() : out();
    }

}


export default Main;