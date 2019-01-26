import React, { Component } from 'react';
import './Main.css';
import { MainProps, MainState } from './interfaces'


class Main extends Component<MainProps, MainState>{
    constructor(props: MainProps) {
        super(props)
        this.state = {
            running: false
        }
        this.startClick = this.startClick.bind(this);
        this.endClick = this.endClick.bind(this);
    }
    render() {
        const { start, end, clock } = this.props;
        const {running} = this.state;
        return (
            <div className="centered">
                <h1>{clock}</h1>
                <button className={"button" + ((start && running) ? " in" : "")} onClick={this.startClick}> Start</button>
                <button className={"button" + ((end && !running) ? " out" : "")} onClick={this.endClick}> End</button>
            </div>
        )
    }
    startClick(){
        const {inn} = this.props;
        this.setState({running: true});
        inn()
    }
    endClick(){
        const {out} = this.props;
        this.setState({running: false});
        out()
    }

}


export default Main;