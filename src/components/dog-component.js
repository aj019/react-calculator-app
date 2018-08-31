import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDogs} from '../actions';

class DogsComponent extends Component {
    render() {
        const dog = this.props.apiResult.dog;
        const fetching = this.props.apiResult.fetching;
        const error = this.props.apiResult.error;
        console.log(this.props);
        return (
          <div className="App">
            <header className="App-header">
              <img src={dog} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to Dog Saga</h1>
            </header>
    
            {dog ? (
              <p className="App-intro">Keep clicking for new dogs</p>
            ) : (
              <p className="App-intro">Replace the React icon with a dog!</p>
            )}
    
            {fetching ? (
              <button disabled>Fetching...</button>
            ) : (
              <button onClick={this.props.getDogs}>Request a Dog</button>
            )}
    
            {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    
          </div>
        );
      }
}
 

const mapStateToProps = state => {
    return {
      apiResult: state.apiReducer,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({getDogs:getDogs},dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DogsComponent);