export interface MenuTitle {
    name: string;
    parentName?: string;
}
export interface MenuTitleMap {
    [key: string]: MenuTitle;
}
