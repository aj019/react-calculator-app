import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './components/numbers'
import Operations from './components/operations'
import {connect} from 'react-redux';
import Evaluators from './components/evaluators';
import DogsComponent from './components/dog-component'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Calculator App</h1>
        <input type="text" value={this.props.data.output}/>
        <br />
        <Numbers />
        <br />
        <Operations handleClick={this.modifyInput} />
        <br />
        <Evaluators handleClick={this.modifyInput} />
        <DogsComponent/>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return{
    data: state.outputReducer
  }
}

export default connect(mapStateToProps)(App);
