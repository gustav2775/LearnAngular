import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BroadcastChanelService } from '@shared';

@Component({
  selector: 'app-common',
  templateUrl: './common.html',
  styleUrls: ['./common.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonComponent implements OnInit {
  private broadcastChannelService = inject(BroadcastChanelService);
  private cdr = inject(ChangeDetectorRef);

  messageChannel = '';

  ngOnInit() {
    this.listenMessages();
  }

  listenMessages() {
    this.broadcastChannelService.getChannel('app-channel').onmessage = (event) => {
      this.messageChannel = event.data;
      alert('Channel message: ' + this.messageChannel);
      this.cdr.markForCheck();
    };
  }
}
