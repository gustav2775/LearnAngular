import { Component, OnInit, ViewContainerRef, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-examples-page',
  templateUrl: './examples-page.component.html',
  styleUrls: ['./examples-page.component.scss']
})
export class ExamplesPage implements OnInit {
  @ContentChild(TemplateRef)
  templates?: [TemplateRef<any>];
  constructor() { }

  ngOnInit() {
  }

}
