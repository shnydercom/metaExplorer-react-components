import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ThreePartCardView, { ThreePartCardViewProps } from './card';
import { withKnobs, text } from '@storybook/addon-knobs';
import './card.scss';

const smallCardStyles = {
	height: "100px"
}

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);
let simpleCardViewProps: ThreePartCardViewProps = {
	frontContent: <div>front content</div>,
	middleContent: <div>middle content</div>,
	lastContent: <div>last content</div>
}
stories.add('cards/threepartcardview', () => (
	<ThreePartCardView style={smallCardStyles} {...simpleCardViewProps}>
		<div>{text("child content", "child Content")}</div>
	</ThreePartCardView>
));
