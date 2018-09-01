import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDogs} from '../../../actions';
import {createSelector} from 'reselect';
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
 

const getDog = (state) => state.apiReducer.get('dog');
const getFetching = (state) => state.apiReducer.get('fetching');
const getError = (state) => state.apiReducer.get('error');

const getApiResultState = createSelector(
    [getDog],
    [getFetching],
    [getError],
    (dog,fetching,error) => ({
        dog,
        fetching,
        error
    })
)

const mapStateToProps = state => {
    return {
      apiResult: getApiResultState(state)
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({getDogs:getDogs},dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DogsComponent);