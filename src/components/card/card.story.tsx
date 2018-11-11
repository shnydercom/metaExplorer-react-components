import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThreePartCardView, { ThreePartCardViewProps } from './card';
import { withKnobs, text } from '@storybook/addon-knobs';
import './card.scss';

const smallCardStyles = {
	height: "100px"
}
const fourByThreeStyles = {
	height: "300px",
	width: "400px",
	padding: "16px"
}

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);
let simpleCardViewProps: ThreePartCardViewProps = {
	frontContent: <div>front content</div>,
	middleContent: <div>middle content</div>,
	lastContent: <div>last content</div>,
	onMiddleContentClick: () => {}
}
let emptyfirst: ThreePartCardViewProps = {
	frontContent: null,
	middleContent: <div>middle, first null</div>,
	lastContent: <div>last content</div>,
	onMiddleContentClick: () => {}
}

let secondEmpty:  ThreePartCardViewProps = {
	frontContent: <div>front, 2nd null</div>,
	middleContent: null,
	lastContent: <div>last content</div>,
	onMiddleContentClick: () => {}
}
let thirdEmpty: ThreePartCardViewProps = {
	frontContent: <div>front content</div>,
	middleContent: <div>middle content, last null</div>,
	lastContent: null,
	onMiddleContentClick: () => {}
}
let onlyFront: ThreePartCardViewProps = {
	frontContent: <div>only front</div>,
	middleContent: null,
	lastContent: null,
	onMiddleContentClick: () => {}
}
let onlyMiddle: ThreePartCardViewProps = {
	frontContent: null,
	middleContent: <div>only middle</div>,
	lastContent: null,
	onMiddleContentClick: () => {}
}
let onlyLast: ThreePartCardViewProps = {
	frontContent: null,
	middleContent: null,
	lastContent: <div>only last</div>,
	onMiddleContentClick: () => {}
}
stories.add('cards/threepartcardview', () => (
	<>
		<ThreePartCardView style={smallCardStyles} {...simpleCardViewProps}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
		<ThreePartCardView style={fourByThreeStyles} {...simpleCardViewProps}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>

		<ThreePartCardView style={fourByThreeStyles} {...emptyfirst}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
		<ThreePartCardView style={fourByThreeStyles} {...secondEmpty}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
		<ThreePartCardView style={fourByThreeStyles} {...thirdEmpty}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>

		<ThreePartCardView style={fourByThreeStyles} {...onlyFront}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
		<ThreePartCardView style={fourByThreeStyles} {...onlyMiddle}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
		<ThreePartCardView style={fourByThreeStyles} {...onlyLast}>
			<div>{text("child content", "child Content")}</div>
		</ThreePartCardView>
	</>
));
