import { MenuItem } from '../DefaultLayout.types';
export interface SideMenuListItemProps {
    info: MenuItem;
    onClick?(menuItem: MenuItem): void;
}
