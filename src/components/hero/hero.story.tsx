import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import './hero.scss';
import HeroGallery, { HeroGalleryProps } from './hero';
import { container50pxStyle, redStyle, container100pxStyle, containerH50pxW100pxStyle, containerH100pxW50pxStyle, containerUnevenWPadding, containerUnevenWMargin, blueStyle } from '../circle/circleview.story';

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);

const basicGalleryProps: HeroGalleryProps = {
	backgroundComp: <div style={{ color: "red" }}>this is text inside a div in the background</div>,
	foregroundComp: <div style={{ color: "blue" }}>this is text inside a div in the foreground</div>,
	leftBtnLabel: "left label",
	rightBtnLabel: "right label",
	subHeader: "sub header",
	topHeader: "top header",
	onLeftBtnClick: () => { console.log("left clicked") },
	onRightBtnClick: () => { console.log("right clicked")}

}


stories.add('hero/smallersqaure', () => {
	return (
		<div style={{ width: "100%", height: "100%", backgroundColor: "#aaa" }}>
			<div style={containerH100pxW50pxStyle}>
				<div className="hero-h-square">
					<svg viewBox='0 0 1 1'></svg>
					<div className="hero-h-inner" style={redStyle}>
						<div className="hero-v-square">
							<svg viewBox='0 0 1 1'></svg>
							<div className="hero-v-inner" style={blueStyle}>
								a div
						</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ ...containerH50pxW100pxStyle, display: "flex" }}>
				<div style={{ height: "50%", width: "150px" }} className="hero-v-square">
					<svg viewBox='0 0 1 1'></svg>
					<div className="hero-v-inner" style={blueStyle}>
						a div
						</div>
				</div>
			</div>
			<div style={containerH100pxW50pxStyle}>
				<div className="hero-h-square">
					<svg viewBox='0 0 1 1'></svg>
					<div className="hero-h-inner" style={redStyle}>
						<div className="hero-v-square">
							<svg viewBox='0 0 16 9'></svg>
							<div className="hero-v-inner" style={blueStyle}>
								a div with 16/9 aspect ratio
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
});

stories.add('hero/singleGalleryTest', () => (
	<>
		<div style={{ height: "66vh", width: "66vw" }}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div></>
));

stories.add('hero/microview', () => (
	<>
		<div style={container50pxStyle}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
		<div style={container100pxStyle}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
		<div style={containerH50pxW100pxStyle}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
		<div style={containerH100pxW50pxStyle}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
		<div style={containerUnevenWPadding}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
		<div style={containerUnevenWMargin}>
			<HeroGallery {...basicGalleryProps}>

			</HeroGallery>
		</div>
	</>
));