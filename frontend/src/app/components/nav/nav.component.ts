import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

interface INav {
  id: number | null;
  link: string;
  name: string;
  icon?: string | undefined;
  active?: boolean
}

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private navActive: INav = {
    id: null,
    link: '',
    name: '',
    active: false
  };
  navList: INav[] = [
    {
      id: 1,
      link: '/',
      name: "Index",
      icon:
        `<svg width="30" height="30" viewBox="0 0 50 50">
          <path id="rect2879" d="m25 9.0937l-17.719 16.281h5.563v15.531h24.312v-15.531h5.563l-17.719-16.281z" />
        </svg>`
    },
    {
      id:2,
      link: '/todos',
      name: "Todos"
    },
    {
      id: 3,
      link: '/examples',
      name: "examples"
    },
    {
      id:4,
      link: '/users',
      name: "User list"
    },
    {
      id:5,
      link: '/product',
      name: "Products list"
    }
  ]
  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.updateRoute();
  }
  updateRoute():void{
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.navList.find(item => {
          if (item.link === `/${val.url.split("/")[1]}`) {
            this.navActive.active = false;
            this.navActive = item;
            item.active = true;
          }
        })
      }
    })
  }
  isActiveNav(nav: INav): void {
    nav.active = true;
    this.navActive = nav;
  }
  isEnterNav(nav: INav) {
    this.navActive.active = false;
    nav.active = true;
  }
  isLeaveNav(nav: INav) {
    nav.active = false;
    this.navActive.active = true;
  }
  defaultIcon = (): SafeHtml => this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L9.34708 6.1459H13.7063L10.1796 8.7082L11.5267 12.8541L8 10.2918L4.47329 12.8541L5.82037 8.7082L2.29366 6.1459H6.65292L8 2Z"/></svg>`)
  getSVG(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
  trackByNav(index: number, nav: INav) {
    return nav.id
  }
}
