import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import './hero.scss';
import HeroGallery, { HeroGalleryProps } from './hero';
import { container50pxStyle, redStyle, container100pxStyle, containerH50pxW100pxStyle, containerH100pxW50pxStyle, containerUnevenWPadding, containerUnevenWMargin, blueStyle } from '../circle/circleview.story';
import AspectContainer from './aspect-container';

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);

stories.add('hero/aspect-container', () => {
	let topHeader = "top Header val";
	let subHeader = "sub Header val";
	return <AspectContainer ratioA={4} ratioB={3}
		topTitle={
			<div className="hero-text">
				<h4>{topHeader}</h4>
			</div>
		}
		subTitle={
			<div className="hero-text">
				<h4>{subHeader}</h4>
			</div>
		}
	><div>someContent</div></AspectContainer>
});

stories.add('hero/aspect-container2', () => {
	let topHeader = "top Header val";
	let subHeader = "sub Header val";
	return <div className="hero-front-outer">
		<AspectContainer ratioA={4} ratioB={3}
			topTitle={
				<div className="hero-text">
					<h4>{topHeader}</h4>
				</div>
			}
			subTitle={
				<div className="hero-text">
					<h4>{subHeader}</h4>
				</div>
			}
		><div>someContent</div></AspectContainer>
	</div>
});

