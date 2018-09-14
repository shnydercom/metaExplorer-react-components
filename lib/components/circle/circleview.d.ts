import * as React from 'react';
export interface CircleViewProps {
    className?: string;
}
export interface CircleViewState {
    height: number;
    width: number;
}
export default class CircleView extends React.Component<CircleViewProps, CircleViewState> {
    constructor(props?: any);
    divElement: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
