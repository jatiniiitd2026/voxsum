export interface Menu {
    path: string;
    title?: string;
    type?: string;
    icon?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    megaMenu?: boolean;
    megaMenuType?: string; // small, medium, large
    bookmark?: boolean;
    children?: Menu[];
}
