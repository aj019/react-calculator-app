import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
