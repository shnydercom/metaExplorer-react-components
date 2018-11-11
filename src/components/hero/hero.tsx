import * as React from 'react';

export interface HeroGalleryProps {
	backgroundComp: JSX.Element;
	foregroundComp: JSX.Element;
	leftBtnLabel: string;
	rightBtnLabel: string;
	subHeader: string;
}
export interface HeroGalleryState {
}

export default class HeroGallery extends React.Component<HeroGalleryProps, HeroGalleryState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		};
	}
	render() {
		const {backgroundComp, foregroundComp} = this.props;
		const {leftBtnLabel, rightBtnLabel, subHeader} = this.props;
		return <div className="hero-gallery">
			<div className="bg-container">
				{backgroundComp}
			</div>
			<div className="hero-front-outer overlay-gradient">
				<div className="hero-front-inner" ref="innerDiv">
					<div>
						<div className="fg-container">
							{foregroundComp}
						</div>
						<div className="btns">
							<div className="prev">
								<div className="start"></div>
								<div className="mid">{leftBtnLabel}</div>
								<div className="end"></div>
							</div>
							<div className="nxt">
								<div className="start"></div>
								<div className="mid">{rightBtnLabel}</div>
								<div className="end"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero-text">
				<h4>{subHeader}</h4>
			</div>
		</div>;
	}
}
