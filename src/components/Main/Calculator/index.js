import React, { Component } from 'react'
import Numbers from './numbers';
import Operations from './operations';
import Evaluators from './evaluators';
import Input from './input'

const Calculator = () => {
    return (
    <React.Fragment>
        <h1>Calculator App</h1>
        <Input />
        <Numbers />
        <Operations />
        <Evaluators />
    </React.Fragment>);
}

export default Calculator;