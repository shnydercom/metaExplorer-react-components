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
    constructor(props?: any);
    render(): JSX.Element;
}
