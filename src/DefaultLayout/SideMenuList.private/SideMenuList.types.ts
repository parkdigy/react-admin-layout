import { type MenuItem } from '../DefaultLayout.types';
import { type BadgeProps } from '@mui/material';

export interface SideMenuListProps {
  list: MenuItem[];
  badgeVariant?: BadgeProps['variant'];
}
