import { type CSSProperties, type ReactNode } from 'react';
import { type BadgeProps } from '@mui/material';
import { type SxProps } from '@mui/system';
import { type Theme } from '@mui/material/styles';

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

export interface DefaultLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  logo: ReactNode;
  badgeVariant?: BadgeProps['variant'];
  menu?: MenuItem[];
  appBarControl?: ReactNode;
  menuHideScreen?: 'xs' | 'sm' | 'md' | 'lg';
}
