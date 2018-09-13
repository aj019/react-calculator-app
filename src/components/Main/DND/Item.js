import React, { Component } from 'react';
import {DragSource} from 'react-dnd'

const TYPES = {
    ITEM : 'item1'
}

const itemSource = {
    beginDrag(props){
        console.log('Begin Drag',props);
        return({id: 1});
    },
    endDrag(props,monitor,component){
        if(!monitor.didDrop()){
            return;
        }
        const dropResult = monitor.getDropResult()

		if (dropResult) {
			alert(`You dropped into ${dropResult.name}!`)
		}  
    }
}

function collect(connect,monitor){
     return{
         connectDragSource : connect.dragSource(),
         isDragging : monitor.isDragging()

     }   
}

class Item extends Component {
    
    render() { 
        const { isDragging, connectDragSource } = this.props
        return connectDragSource(
            <button>Hello</button>
        ); 
    }
}
 
export default DragSource(TYPES.ITEM,itemSource,collect)(Item);