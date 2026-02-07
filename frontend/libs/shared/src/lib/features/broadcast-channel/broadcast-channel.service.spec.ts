/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BroadcastChanelService } from './broadcastChanel.service';

describe('Service: BroadcastChanel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastChanelService]
    });
  });

  it('should ...', inject([BroadcastChanelService], (service: BroadcastChanelService) => {
    expect(service).toBeTruthy();
  }));
});
