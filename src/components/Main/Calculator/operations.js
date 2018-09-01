import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doOperation} from '../../../actions';

const operators = ['+','-','/','*'];

class Operations extends Component {
    state = {  }
    render() { 
        return(
            operators.map((operator,index) =>{
                return <button key={index} onClick={() => this.props.doOperation(operator)}>{operator}</button>
            })
        );
    }
}

function mapStateToProps(state){
    return{
        data:state.outputReducer
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({doOperation:doOperation},dispatch);
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Operations);