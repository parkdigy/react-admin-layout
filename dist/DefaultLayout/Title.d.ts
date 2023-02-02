import React, { ReactNode } from 'react';
export interface TitleProps {
    title: ReactNode;
    headTitle?: ReactNode;
}
declare const Title: React.FC<TitleProps>;
export default Title;
