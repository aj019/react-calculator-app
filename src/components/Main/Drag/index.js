import * as React from 'react'
import {
	DropTarget,
	DragDropContext,
	ConnectDropTarget,
	DropTargetMonitor,
	XYCoord,
} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box'
import flow from 'lodash/flow'
import update from 'immutability-helper'


const styles = {
	width: 500,
	height: 500,
	border: '1px solid black',
	position: 'relative',
}

const boxTarget = {
	drop(props,monitor,component) {
		console.log(props);
		
		if (!component) {
			return
		}
		
		const item = monitor.getItem()
		const delta = monitor.getDifferenceFromInitialOffset()
		console.log('Delta X : '+ delta.x + ' Delta Y : ' + delta.y);
		const left = Math.round(item.left + delta.x)
		const top = Math.round(item.top + delta.y)

		component.moveBox(item.id, left, top)
	},
}




class Container extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			boxes: {
				a: { top: 0, left: 0, topP: 0+'%', leftP: 0+'%',title: 'Drag me around' },
				b: { top: 0, left: 0, topP: 0+'%', leftP: 0+'%', title: 'Drag me too' },
			},
		}
	}

	moveBox = (id, left, top) => {

	
		let leftP = {...this.state.leftP};
		let topP = {...this.state.topP};
		leftP = ((left)/500) * 100 + '%';
		topP = ((top)/500) * 100 + '%';
		this.setState(
			update(this.state, {
				boxes: {
					[id]: {
						$merge: { left, top, leftP, topP },
					},
				},
			}),
		)
	}

    render() {
		const { hideSourceOnDrag, connectDropTarget } = this.props
		const { boxes } = this.state
		console.log(boxes);
		
		return (
			connectDropTarget(
				<div style={styles}>
					
					{Object.keys(boxes).map(key => {
						const { left, top,leftP,topP, title } = boxes[key]
						return (
							<Box
								key={key}
								id={key}
								left={left}
								top={top}
								hideSourceOnDrag={hideSourceOnDrag}
							>
								{title}
							</Box>
						)
					})}

					
				</div>,
				<div>
					
				{Object.keys(boxes).map(key => {
					const { left, top,leftP,topP, title } = boxes[key]
					return (
						<Box
							key={key}
							id={key}
							left={left}
							top={top}
							hideSourceOnDrag={hideSourceOnDrag}
						>
							{title}
						</Box>
					)
				})}

				
			</div>,
			)
		)
	}
}
	

	


export default flow(
	DropTarget('box', boxTarget, (connect) => ({
		connectDropTarget: connect.dropTarget(),
	})),
	DragDropContext(HTML5Backend)
	
  )(Container);