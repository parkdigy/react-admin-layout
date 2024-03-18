import { MenuItem } from '../DefaultLayout.types';
import { BadgeProps } from '@mui/material';
export interface SideMenuListItemProps {
    info: MenuItem;
    badgeVariant?: BadgeProps['variant'];
    onClick?(menuItem: MenuItem): void;
}
