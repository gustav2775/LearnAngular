import { LoadingService } from './../../core/servises/myLoading.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'nav-loader',
  templateUrl: './nav-loader.component.html',
  styleUrls: ['./nav-loader.component.scss']
})
export class NavLoaderComponent {
  constructor(@Inject('loadingService') public LoadingService:LoadingService) { 
  }
}
