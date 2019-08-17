import { storiesOf } from "@storybook/react";
import * as React from 'react';
import './dnd.scss';

import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { DragContainer } from './drag/dragContainer';
import { DropContainer, StylableDropContainerProps } from './drop/dropContainer';
import { TransitComponent } from './transit/transitComponent';
import { DragItem, StylableDragItemProps, StylableTransitComponentProps } from "./interfaces";
import { MiniToolBox } from './../minitoolbox/dnd/minitoolbox';
import { withKnobs, boolean, select} from '@storybook/addon-knobs';

const stories = storiesOf('dnd', module);
stories.addDecorator(withKnobs);

type TestItemTypes = "typeA" | "typeB";

const ColorSwappingDIV = (props) => {
	const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	return (<div style={{
		height: '100%', width: '100%',
		backgroundColor: randomColor
	}}>{props.children}</div>);
}

const testDataDragItem: DragItem<TestItemTypes> = {
	id: 'a',
	left: 0,
	top: 0,
	type: 'typeA',
	sourceBhv: 'sCopy',
	targetBhv: 'tCopy'
}

const testStylableDragItem: StylableDragItemProps<TestItemTypes> = {
	...testDataDragItem,
	isWithDragHandle: true,
	className: 'dragcontainer'
}
let DNDBackend = HTML5Backend;

stories.add('dragContainer', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer {...testStylableDragItem}>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
	</DndProvider>
));

stories.add('dragContainers', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer
			{...testStylableDragItem}
			isWithDragHandle={false}>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
		<DragContainer
			{...testStylableDragItem}
			id="b"
			top={200}
			left={300}>
			<ColorSwappingDIV>testing a drag container "b"</ColorSwappingDIV>
		</DragContainer>
	</DndProvider>
));

const testDropContainerProps: StylableDropContainerProps<TestItemTypes> = {
	onlyAppearOnDrag: false,
	acceptedItemTypes: ['typeA'],
	className: 'dropcontainer'
}

stories.add('dropContainer', () => (
	<DndProvider backend={DNDBackend}>
		<DropContainer {...testDropContainerProps}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

stories.add('dropContainers', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			top={80}
			left={200}
			sourceBhv={'sGone'}
		>
			<ColorSwappingDIV>typeA drag container is accepted, sBhv sGone</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			top={80}
			left={200}
			sourceBhv={'sCopy'}
		>
			<ColorSwappingDIV>typeA drag container is accepted, sBhv sCopy</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type={'typeB'}
			top={50}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv='sGone'
			left={300}>
			<ColorSwappingDIV>typeB drag container is not accepted, sourceBhv sGone</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type={'typeB'}
			top={50}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv='sCopy'
			left={300}>
			<ColorSwappingDIV>typeB drag container is not accepted, sourceBhv sCopy</ColorSwappingDIV>
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

stories.add('minitoolbox', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			top={50}
			isWithDragHandle={false}
			left={300}>
			<MiniToolBox className='minitoolbox' />
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

const testTransitCompProps: StylableTransitComponentProps<TestItemTypes> = {
	className: 'transit',
	transitComponents: [
		{
			forType: 'typeA',
			componentFactory: (dragItem) => (props) => (<div>id: {dragItem.id}</div>)
		},
		{
			forType: 'typeB',
			componentFactory: (dragItem) => (props) => (<div>type: {dragItem.type}</div>)
		}
	]
}

stories.add('transit', () => (
	<DndProvider backend={DNDBackend}>
		<TransitComponent {...testTransitCompProps}/>
		
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type='typeB'
			top={50}
			isWithDragHandle={true}
			left={300}>
			<ColorSwappingDIV>a drag container typeB</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			top={50}
			isWithDragHandle={false}
			left={300}>
			<ColorSwappingDIV>a drag container typeA</ColorSwappingDIV>
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
		<DropContainer {...testDropContainerProps} onlyAppearOnDrag={true} acceptedItemTypes={['typeB']}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
		<DragContainer<TestItemTypes>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			top={200}
			isWithDragHandle={false}
			left={100}>
			<MiniToolBox className='minitoolbox' />
		</DragContainer>
	</DndProvider>
));