import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BroadcastChanelService } from '@shared';
@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.html',
  styleUrls: ['./broadcast.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastComponent {
  private broadcastChannelService = inject(BroadcastChanelService);

  postMessage() {
    this.broadcastChannelService.postMessage('app-channel', 'Hello from Broadcast Channel!');
  }
}
