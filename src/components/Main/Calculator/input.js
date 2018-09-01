import React, { Component } from 'react';
import {connect} from 'react-redux';

class Input extends Component {
    render() { 
        return ( <input type="text" value={this.props.data.output}/> );
    }
}


function mapStateToProps(state){
    return{
      data: state.outputReducer
    }
  }
  
  export default connect(mapStateToProps)(Input);