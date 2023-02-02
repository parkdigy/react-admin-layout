import React from 'react';
export interface TitleProps {
    title: string;
    icon?: string;
    headTitle?: string;
    headIcon?: string;
}
declare const Title: React.FC<TitleProps>;
export default Title;
