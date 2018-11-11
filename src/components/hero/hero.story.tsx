import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import './hero.scss';
import HeroGallery, { HeroGalleryProps } from './hero';

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);

const basicGalleryProps: HeroGalleryProps = {
	backgroundComp: <div style={{color:"red"}}>this is text inside a div in the background</div>,
	foregroundComp: <div style={{color: "blue"}}>this is text inside a div in the foreground</div>,
	leftBtnLabel: "left label",
	rightBtnLabel: "right label",
	subHeader: "sub header"
}


stories.add('hero/itpt-designer-demo', () => (
	<div style={{ width: "100%", height: "100%", backgroundColor: "#000" }}>
		<HeroGallery {...basicGalleryProps}>

		</HeroGallery>
	</div>
));