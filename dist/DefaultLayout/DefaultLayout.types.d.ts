import { ReactNode } from 'react';
import { CommonSxProps } from '../@types';
export interface SubMenuItem {
    id: string;
    name: string;
    depth: number;
    uri: string;
}
export interface MenuItem {
    id: string;
    name: string;
    depth: number;
    uri?: string;
    icon?: string;
    items?: SubMenuItem[];
}
export interface DefaultLayoutProps extends CommonSxProps {
    logo: ReactNode;
    menu?: MenuItem[];
    appBarControl?: ReactNode;
    menuHideScreen?: 'xs' | 'sm' | 'md' | 'lg';
    onMenuClick?(menuItem: MenuItem): void;
}
