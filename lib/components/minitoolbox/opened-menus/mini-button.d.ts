import * as React from 'react';
export interface MiniButtonProps {
    iconSrc: string;
    onClick: (event: any) => void;
    className?: string;
    btnRef?: any;
    btnStyle?: any;
}
export declare const MiniButton: React.FC<MiniButtonProps>;
