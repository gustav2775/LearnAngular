import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChanelService {
  private channels = new Map<string, BroadcastChannel>();

  getChannel(channelName: string): BroadcastChannel {
    if (this.channels.has(channelName)) {
      return this.channels.get(channelName)!;
    }

    const channel = new BroadcastChannel(channelName);
    this.channels.set(channelName, channel);

    return channel;
  }

  closeChannels(): void {
    this.channels.forEach((channel) => channel.close());
    this.channels.clear();
  }

  closeChannel(channelName: string): void {
    const channel = this.channels.get(channelName);

    if (channel) {
      channel.close();
      this.channels.delete(channelName);
    }
  }

  postMessage<T>(channelName: string, message: T): void {
    const channel = this.getChannel(channelName);

    channel.postMessage(message);
  }
}
