import { LoadingState } from './core/directive/loader/my-loader.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public state: LoadingState|any;
}
