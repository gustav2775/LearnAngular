import { Component } from '@angular/core';
import { CommonComponent } from '../../pages/common/common.component';

@Component({
  imports: [CommonComponent],
  selector: 'app-cds-entry',
  template: `<app-cds-common />`,
})
export class RemoteEntry {}
