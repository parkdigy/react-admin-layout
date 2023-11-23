import { ReactNode } from 'react';
import { CommonSxProps } from '../@types';
import { BadgeProps } from '@mui/material';
export interface SubMenuItem {
    id: string;
    name: string;
    depth: number;
    uri: string;
    badge?: number;
    badgeVariant?: BadgeProps['variant'];
}
export interface MenuItem {
    id: string;
    name: string;
    depth: number;
    uri?: string;
    icon?: string;
    badge?: number;
    badgeVariant?: BadgeProps['variant'];
    items?: SubMenuItem[];
}
export interface DefaultLayoutProps extends CommonSxProps {
    logo: ReactNode;
    badgeVariant?: BadgeProps['variant'];
    menu?: MenuItem[];
    appBarControl?: ReactNode;
    menuHideScreen?: 'xs' | 'sm' | 'md' | 'lg';
    onMenuClick?(menuItem: MenuItem): void;
}
