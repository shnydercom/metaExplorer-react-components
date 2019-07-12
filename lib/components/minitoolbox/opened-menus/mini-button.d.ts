import * as React from 'react';
export interface MiniButtonProps {
    iconSrc: string;
    onClick: (event: any) => void;
    onMouseEnter?: (event: any) => void;
    onMouseOut?: (event: any) => void;
    className?: string;
    btnRef?: any;
    btnStyle?: React.CSSProperties;
}
export declare const MiniButton: React.FC<MiniButtonProps>;
