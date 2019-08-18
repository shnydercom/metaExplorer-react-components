import * as React from 'react';
export interface ITabProps {
    index: number;
    label: string;
    className: string;
    isSelected: boolean;
    onTabClicked: (index: number) => void;
}
export declare const Tab: React.FC<ITabProps>;
