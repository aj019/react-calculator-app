import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doOperation} from '../actions';
import styled from 'styled-components';

const evaluators = ['clear','delete','='];
const StyledButton = styled.button`
    background-color:green;
    color:white;
    padding: 20px;
`;

class Evaluators extends Component {
    state = {  }
    render() { 
        return (
            evaluators.map((evaluator,index) =>{
                return <StyledButton key={index} onClick={() => this.props.doOperation(evaluator)}>{evaluator}</StyledButton>
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

 
export default connect(mapStateToProps,mapDispatchToProps)(Evaluators);
