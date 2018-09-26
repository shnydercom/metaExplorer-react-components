import * as React from 'react';
export interface ThreePartCardViewProps {
	className?: string;
	style?: React.CSSProperties;
	frontContent: JSX.Element;
	middleContent: JSX.Element;
	lastContent: JSX.Element;
}
export interface ThreePartCardViewState {
}

export default class ThreePartCardView extends React.Component<ThreePartCardViewProps, ThreePartCardViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { children, className, frontContent, middleContent, lastContent, style } = this.props;
		return <div style={style} className={className ? className : null}>
			<div className={"mdc-card card"}>
				{frontContent ?
					<div className="mdc-card__actions front">
						{frontContent}
					</div>
					: null}
				{middleContent ?
					<div className="mdc-card__primary-action middle">
						{middleContent}
						{children}
					</div>
					: null}
				{lastContent ?
					<div className="mdc-card__actions last">
						{lastContent}
					</div>
					: null}
			</div>
		</div>
	}
}