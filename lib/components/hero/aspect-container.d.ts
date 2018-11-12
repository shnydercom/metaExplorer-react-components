import * as React from 'react';
export interface AspectContainerProps {
    ratioA: number;
    ratioB: number;
    topTitle: JSX.Element;
    subTitle: JSX.Element;
}
export interface AspectContainerState {
}
export default class AspectContainer extends React.Component<AspectContainerProps, AspectContainerState> {
    constructor(props?: AspectContainerProps);
    render(): JSX.Element;
}
