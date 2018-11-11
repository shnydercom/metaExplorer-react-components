import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CircleView from './circleview';
import './circleview.scss';

const stories = storiesOf('plain components', module);

export const container50pxStyle = {
	height: "50px",
	width: "50px",
	display: "flex"
}
export const container100pxStyle = {
	height: "100px",
	width: "100px",
	display: "flex"
}
export const containerH50pxW100pxStyle = {
	height: "50px",
	width: "100px",
	display: "block",
	backgroundColor: "grey"
}
export const containerH100pxW50pxStyle = {
	height: "100px",
	width: "50px",
	display: "block",
	backgroundColor: "grey"
}
export const containerUnevenWPadding = {
	height: "50px",
	width: "100px",
	display: "flex",
	padding: "20px"
}
export const containerUnevenWMargin = {
	height: "50px",
	width: "100px",
	display: "flex",
	margin: "20px"
}
export const redStyle = {
	backgroundColor: "red",
	flex: 1,
	width: "100%",
	height: "100%",
}

export const blueStyle = {
	backgroundColor: "blue",
	flex: 1,
	width: "100%",
	height: "100%",
}
stories.add('circle/circleView', () => (
	<>
		<div style={container50pxStyle}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
		<div style={container100pxStyle}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
		<div style={containerH50pxW100pxStyle}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
		<div style={containerH100pxW50pxStyle}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
		<div style={containerUnevenWPadding}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
		<div style={containerUnevenWMargin}>
			<CircleView><div style={redStyle} /></CircleView>
		</div>
	</>
));

stories.add('circle/divTest', () => (<>
	<p>css-hacks: vertically by padding, horizontally by svg</p>
	<div style={containerH100pxW50pxStyle}>
		<div className='circle-container-inner'>
			<div className='circle-content-inner'>
				<div className='outer'>
					<svg viewBox='0 0 1 1'></svg>
					<div style={redStyle}>abc</div>
				</div>
			</div>
		</div>
	</div>
	<div style={containerH50pxW100pxStyle}>
		<div className='circle-container-inner'>
			<div className='circle-content-inner'>
				<div className='outer'>
					<svg viewBox='0 0 1 1'></svg>
					<div style={redStyle}>abc</div>
				</div>
			</div>
		</div>
	</div>
</>
));