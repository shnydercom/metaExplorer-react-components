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
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

const stories = storiesOf('dnd', module);
stories.addDecorator(withKnobs);

type TestItemTypes = "typeA" | "typeB";
type TestDataType = string;

const ColorSwappingDIV = (props) => {
	const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	return (<div style={{
		height: '100%', width: '100%',
		backgroundColor: randomColor
	}}>{props.children}</div>);
}

const testDataDragItem: DragItem<TestItemTypes, TestDataType> = {
	id: 'a',
	type: 'typeA',
	sourceBhv: 'sCopy',
	targetBhv: 'tCopy',
	data: ''
}

const testStylableDragItem: StylableDragItemProps<TestItemTypes, TestDataType> = {
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
			id="b">
			<ColorSwappingDIV>testing a drag container "b"</ColorSwappingDIV>
		</DragContainer>
	</DndProvider>
));

const testDropContainerProps: StylableDropContainerProps<TestItemTypes, TestDataType> = {
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
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv={'sGone'}
		>
			<ColorSwappingDIV>typeA drag container is accepted, sBhv sGone</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv={'sCopy'}
		>
			<ColorSwappingDIV>typeA drag container is accepted, sBhv sCopy</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type={'typeB'}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv='sGone'>
			<ColorSwappingDIV>typeB drag container is not accepted, sourceBhv sGone</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type={'typeB'}
			isWithDragHandle={boolean('isWithDragHandle', true)}
			sourceBhv='sCopy'>
			<ColorSwappingDIV>typeB drag container is not accepted, sourceBhv sCopy</ColorSwappingDIV>
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

stories.add('minitoolbox', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			isWithDragHandle={false}>
			<MiniToolBox className='minitoolbox' />
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

const testTransitCompProps: StylableTransitComponentProps<TestItemTypes, TestDataType> = {
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
		<TransitComponent {...testTransitCompProps} />

		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type='typeB'
			isWithDragHandle={true}>
			<ColorSwappingDIV>a drag container typeB</ColorSwappingDIV>
		</DragContainer>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			isWithDragHandle={false}>
			<ColorSwappingDIV>a drag container typeA</ColorSwappingDIV>
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
		<DropContainer {...testDropContainerProps} onlyAppearOnDrag={true} acceptedItemTypes={['typeB']}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
		<DragContainer<TestItemTypes, TestDataType>
			{...testStylableDragItem}
			id="b"
			type='typeA'
			isWithDragHandle={false}>
			<MiniToolBox className='minitoolbox' />
		</DragContainer>
	</DndProvider>
));