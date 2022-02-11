import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  @Input()
  templateRef?:any

  constructor() { }

  ngOnInit() {
  }
}
