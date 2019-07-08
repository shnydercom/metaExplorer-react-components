import * as React from 'react';
import { MiniButtonProps } from './mini-button';
export interface WatchProps {
    btnProps: MiniButtonProps[];
    watchStyle?: any;
    watchClass?: string;
}
export declare const Watch: React.FC<WatchProps>;
