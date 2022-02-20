import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformsvg'
})
export class TransformInSvg implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string | undefined): SafeHtml | '' {
    return value ? this.sanitizer.bypassSecurityTrustHtml(value) : '';
  }
}
