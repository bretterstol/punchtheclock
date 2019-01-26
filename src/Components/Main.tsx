import React, { Component } from 'react';
import './Main.css';
import { MainProps } from './interfaces'


const Main = ({ started, stopped, clock, inn, out }: MainProps) => (
    <div className="centered">
        <h1>{clock}</h1>
        <button className={"button" + ((started && !stopped) ? " in" : "")} onClick={inn}> Start</button>
        <button className={"button" + (stopped ? " out" : "")} onClick={out}> End</button>
    </div>
)


export default Main;