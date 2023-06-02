/*
*  Interface for Homepage Slider.
* - Desktop: This value points to translation variable for desktop image.
* - Mobile: This value points to translation variable for mobile image.
* - routerLink: This value is added to router link.
* - position: Tailwind CSS classes for button positions.
* */
export interface BannerModel {
    desktop: string;
    mobile: string;
    position?: string;
    buttonVisible?: boolean;
    link:string
}
