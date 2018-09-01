import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doOperation} from '../../../actions';
import styled from 'styled-components'

const numbers = [['1','2','3'],['4','5','6'],['7','8','9']];
const StyledButton = styled.button`
    background-color:blue;
    color:white;
    padding: 20px;
`;
class Numbers extends Component {
    state = {  }
    render() { 
        return (
            numbers.map((row) => {
                console.log(this.props.data.output);
                return (
                    <div>
                    {
                        row.map( number => <StyledButton key={number} onClick={() => this.props.doOperation(number)}>{number}</StyledButton>)
                    }
                    <br />
                    </div>
                );
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

 
export default connect(mapStateToProps,mapDispatchToProps)(Numbers);
