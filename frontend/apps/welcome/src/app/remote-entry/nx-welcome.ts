import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { AuthState, SetAuthData } from '@store';
import { HttpClient } from '@angular/common/http';
import { BroadcastChanelService } from '@shared';

@Component({
  selector: 'app-nx-welcome',
  template: `
    <div id="welcome">
      <h1>
        <span> Hello there, {{ fullname$ | async}}</span> |
        Welcome  👋
      </h1>
      <button (click)="onIncrement()">+</button>
      <button (click)="postMessage()">Post Broadcast Message</button>
    </div>
    `,
  styles: [],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {
  private http = inject(HttpClient);
  private store = inject(Store);
  private broadcastChannelService = inject(BroadcastChanelService);

  fullname$ = this.store?.select?.(AuthState.getFullname);

  ngOnInit() {
    this.store.select(AuthState.getAuthData).subscribe((authData) => {
      console.log('Auth Data in Welcome App:', authData);
    });
  }

  onIncrement() {
    this.store.dispatch(new SetAuthData({
      id: 'Welcome User',
      firstName: 'Welcome User',
      lastName: 'Welcome User',
      fullName: 'Welcome User',
      email: 'Welcome User',
      roles: ['user']
    }));

    this.http.get<{ message: string }>('http://localhost:5050/ping').subscribe((response) => {
      console.log(response.message);
    });
  }

  postMessage() {
    this.broadcastChannelService.postMessage('app-channel', 'Hello from Welcome App!');
  }
}
