import { MenuItem } from '../DefaultLayout.types';
import { BadgeProps } from '@mui/material';

export interface SideMenuListProps {
  list: MenuItem[];
  badgeVariant?: BadgeProps['variant'];
}
