import * as React from 'react';
import { MiniButtonProps } from './mini-button';
export interface PhoneProps {
    btnProps: MiniButtonProps[];
    phoneRef?: any;
    phoneStyle?: any;
    phoneClass?: string;
}
export declare const Phone: React.FC<PhoneProps>;
