import { type MenuItem } from '../DefaultLayout.types';
import { type BadgeProps } from '@mui/material';

export interface SideMenuListItemProps {
  info: MenuItem;
  badgeVariant?: BadgeProps['variant'];
  expandedBackgroundColor?: string;
}
