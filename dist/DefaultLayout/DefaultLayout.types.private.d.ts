export interface MenuTitle {
    name: string;
    icon?: string;
    parentName?: string;
    parentIcon?: string;
}
export interface MenuTitleMap {
    [key: string]: MenuTitle;
}
