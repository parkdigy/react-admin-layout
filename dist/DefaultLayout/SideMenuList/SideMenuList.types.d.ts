import { MenuItem } from '../DefaultLayout.types';
export interface SideMenuListProps {
    list: MenuItem[];
    onClick?(menuItem: MenuItem): void;
}
