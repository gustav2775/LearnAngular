import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { AuthState, SetAuthData } from '@store';
import { TruncateComponent } from '@shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule, RouterModule, TruncateComponent],
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private store = inject(Store);
  private el = inject(ElementRef);
  private readonly router = inject(Router);

  protected title = 'Hello, I\'m Shell';
  protected activeLink = '';
  protected theme = 'dark';
  protected isShowingNavigation = false;

  protected navigationList = [
    { link: '/', label: 'Home', icon: '🏠' },
    { link: '/welcome', label: 'Welcome App', icon: '👋' },
    { link: '/cds', label: 'CDS App', icon: '💿' },
    { link: '/long-pulling', label: 'Long Pulling Test', icon: '⏳' },
    { link: '/sse', label: 'SSE Test', icon: '📡' },
    { link: '/ws', label: 'WebSocket Test', icon: '🕸️' },
    { link: '/broadcast', label: 'Broadcast Channel Test', icon: '📢' },
  ];


  ngOnInit(): void {
    this.updateRoute();
    this.configureAuthState();

    this.el.nativeElement.setAttribute(`data-theme`, this.theme);
  }

  onRequest() {
    this.http.get<{ message: string }>('http://localhost:5050/ping').subscribe((response) => {
      console.log(response.message);
    });
  }

  showNavigation() {
    this.isShowingNavigation = !this.isShowingNavigation;
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.el.nativeElement.setAttribute(`data-theme`, this.theme);
  }

  private configureAuthState(): void {
    this.store.dispatch(new SetAuthData({
      id: 'Shell User',
      firstName: 'Shell User',
      lastName: 'Shell User',
      fullName: 'Shell User',
      email: 'Shell User',
      roles: ['admin', 'user']
    }));


    this.store.select(AuthState.getAuthData).subscribe((authData) => {
      console.log('Auth Data in Shell App:', authData);
    });
  }

  private updateRoute(): void {
    this.router.events
    .subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeLink = `/${val.url.split("/")[1]}`;
      }
    })
  }
}

