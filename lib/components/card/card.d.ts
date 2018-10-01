import * as React from 'react';
export interface ThreePartCardViewProps {
    className?: string;
    style?: React.CSSProperties;
    frontContent: JSX.Element;
    middleContent: JSX.Element;
    lastContent: JSX.Element;
    onMiddleContentClick: React.MouseEventHandler;
}
export interface ThreePartCardViewState {
}
export default class ThreePartCardView extends React.Component<ThreePartCardViewProps, ThreePartCardViewState> {
    constructor(props?: any);
    render(): JSX.Element;
}
