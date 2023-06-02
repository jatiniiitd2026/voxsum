import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT, Location} from "@angular/common";
import {AppConstants} from "@core/constants/app-constants";
import {Menu} from "@data/schema/menu.model";
import {NavigationEnd, Router} from "@angular/router";
import {PageScrollService} from "ngx-page-scroll-core";
import {StorageService} from "@core/services/storage.service";
import {LoggedService} from "@data/services/logged.service";
import {NavigationItems} from "@layout/header/navigation-items";
declare const chrome: any;

declare const AOS: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    logo = AppConstants.mainLogo;
    public activeItem: string = 'home';
    isHamburgerOpen: boolean = false;
    hoverLinkRoute: string = this.location.path();
    @ViewChild('navMenu') navMenu: ElementRef | undefined;

    menuLinks: Menu[] = []

    constructor(private router: Router,
                private location: Location,
                private pageScrollService: PageScrollService,
                private loggedService: LoggedService,
                private storageService: StorageService,
                @Inject(DOCUMENT) private document: any) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.hoverLinkRoute = this.location.path() !== '/home' ? this.location.path() : this.hoverLinkRoute;
            }
        });
        this.loggedService.loggedIn.subscribe(response => {
            if (response) {
                this.menuLinks = NavigationItems.navigation.navigationLogged
            } else {
                this.menuLinks = NavigationItems.navigation.navigationNotLogged
            }
        });
    }

    toggle() {
        this.isHamburgerOpen = !this.isHamburgerOpen;
        this.navMenu && this.navMenu.nativeElement.classList.toggle('navmenu-opacity');
    }

    setActive(menuItem: string = 'home') {
        this.activeItem === menuItem ? this.activeItem = '' : this.activeItem = menuItem;
    }

    isMenuActive(menuItem: string = '') {
        return this.activeItem === menuItem;
    }

    openExtension():void{
        chrome.runtime.sendMessage('ojiopopijanmdafdakfmokdgphdmaehh',{action:"open"},function(response:any){

        });
    }

    clickHandle(links: Menu) {
        this.hoverLinkRoute = links.path;
        this.navMenu && this.navMenu.nativeElement.classList.remove('navmenu-opacity');

        switch (links.type) {
            case 'scroll':
                this.scrollToAnchor(links.path)
                break;
            case 'sub-menu':
                this.setActive(links.title ?? 'home')
                break;
            case 'logout':
                this.userLogout();
                this.router.navigateByUrl(links.path)
                break;
            default:
                this.isHamburgerOpen = false;
                this.router.navigateByUrl(links.path)
                scrollTo(0, 0);
                break;
        }
    }

    userLogout() {
        this.storageService.removeItemFromSessionStorage('user');
        this.loggedService.isLoggedInValue(false);
    }

    scrollToAnchor(anchorId: string) {
        this.isHamburgerOpen = false;
        const scrollPage = () => {
            AOS.refresh();
            this.pageScrollService.scroll({
                document: this.document,
                scrollTarget: anchorId,
                scrollOffset: window.innerWidth < 1024 ? 80 : 148,
            });
        }

        if (this.router.url === 'home') {
            scrollPage();
            return
        }

        this.router.navigateByUrl('/home');
        setTimeout(() => scrollPage(), 500);
    }
}
