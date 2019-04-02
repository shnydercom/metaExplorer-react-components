import * as React from 'react';
export interface TreeEntry {
    subEntries: TreeEntry[];
    label: string;
    flatContent: JSX.Element[];
}
export interface TreeViewProps {
    entry: TreeEntry;
}
export interface TreeViewState {
}
export default class TreeView extends React.Component<TreeViewProps, TreeViewState> {
    constructor(props?: any);
    render(): JSX.Element;
}
