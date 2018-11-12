import * as React from 'react';
import AspectContainer from './aspect-container';

export interface HeroGalleryProps {
	backgroundComp: JSX.Element;
	foregroundComp: JSX.Element;
	leftBtnLabel: string;
	rightBtnLabel: string;
	topHeader: string;
	subHeader: string;
	onLeftBtnClick: () => void;
	onRightBtnClick: () => void;
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
			<div className="overlay-gradient"></div>
			<div className="hero-front-outer">
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
							<div className="prev hero-btn" onClick={() => this.props.onLeftBtnClick()}>
								<span className="start">
									<svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox="-12 0 24 24">
										<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" className="chevron-left" />
										<path d="M0 0h24v24H0z" fill="none" />
									</svg>
								</span>
								<span className="mid">{leftBtnLabel}</span>
								<span className="end"></span>
							</div>
							<div className="nxt hero-btn" onClick={() => this.props.onRightBtnClick()}>
								<span className="start"></span>
								<span className="mid">{rightBtnLabel}</span>
								<span className="end">
									<svg xmlns="http://www.w3.org/2000/svg" width="200%" height="100%" viewBox="0 0 48 24">
										<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" className="chevron-right" />
										<path d="M0 0h24v24H0z" fill="none" />
									</svg>
								</span>
							</div>
						</div>
					</div>
				</AspectContainer>
			</div>

		</div>;
	}
}
