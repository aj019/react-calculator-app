import React, { Component } from 'react';
import {DropTarget} from 'react-dnd'
import styled from 'styled-components'
const TYPES = {
    ITEM : 'item1'
}

const itemTarget = {
    drop(props,monitor,component){
        // console.log('Dropped Inside',monitor);
        // console.log(monitor.didDrop())
        return { name: 'Dustbin' }
    }

}

function collect(connect,monitor){
     return{
        connectDropTarget: connect.dropTarget(),
        hovered : monitor.isOver(),
        didDrop: monitor.didDrop()
     }   
}

const StyledDiv = styled.div`
    width: 100px;
    height: 100px;
    margin-top:100px;
    background-color: ${props => props.hovered ? 'green': 'yellow'};

`;

class Target extends Component {
    
    render() { 
        const { connectDropTarget,didDrop,hovered } = this.props
        const backgroundColor = hovered ? 'green' : 'red';
        console.log(didDrop);
        
        return connectDropTarget(
            <div style={{backgroundColor:'blue'}} >
            <StyledDiv style={{backgroundColor}}></StyledDiv>
            </div>
        ); 
    }
}
 
export default DropTarget(TYPES.ITEM,itemTarget,collect)(Target);