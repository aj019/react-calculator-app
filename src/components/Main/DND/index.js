import React, { Component } from 'react'
import styled from 'styled-components'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Item from './Item'
import Target from './Target'

const StyledDiv = styled.div`
    width: 500px;
    height: 500px;
    background-color: grey;

`;

const boxTarget = {
	drop(props,	monitor,component	) {
		if (!component) {
			return
		}
		const item = monitor.getItem()
		const delta = monitor.getDifferenceFromInitialOffset()
		const left = Math.round(item.left + delta.x)
		const top = Math.round(item.top + delta.y)

		component.moveBox(item.id, left, top)
	},
}



class Container extends Component {
    
    constructor(props) {
		super(props)
		this.state = {
			boxes: {
				a: { top: 20, left: 80, title: 'Drag me around' },
				b: { top: 180, left: 20, title: 'Drag me too' },
			},
		}
    }
    
    render() { 
        return ( 
            <StyledDiv>
                <Item />    
                <Target />
            </StyledDiv>
         );
    }
}
 
export default DragDropContext(HTML5Backend)(Container);