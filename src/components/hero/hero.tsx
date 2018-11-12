import * as React from 'react';
import AspectContainer from './aspect-container';

export interface HeroGalleryProps {
	backgroundComp: JSX.Element;
	foregroundComp: JSX.Element;
	leftBtnLabel: string;
	rightBtnLabel: string;
	topHeader: string;
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
		const { backgroundComp, foregroundComp } = this.props;
		const { leftBtnLabel, rightBtnLabel, topHeader, subHeader } = this.props;
		return <div className="hero-gallery">
			<div className="bg-container">
				{backgroundComp}
			</div>
			<div className="hero-front-outer overlay-gradient">
				<AspectContainer ratioA={16} ratioB={9}
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
				>
					<div className="hero-front-inner">
						<div className="fg-container">
							{foregroundComp}
						</div>
						<div className="btns">
							<div className="prev">
								<span className="start"></span>
								<span className="mid">{leftBtnLabel}</span>
								<span className="end"></span>
							</div>
							<div className="nxt">
								<span className="start"></span>
								<span className="mid">{rightBtnLabel}</span>
								<span className="end"></span>
							</div>
						</div>
					</div>
				</AspectContainer>
			</div>

		</div>;
	}
}
