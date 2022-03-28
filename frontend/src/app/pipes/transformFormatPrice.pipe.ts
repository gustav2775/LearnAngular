import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformFormatPrice'
})
export class TransformFormatPricePipe implements PipeTransform {
  transform(value: number, currency?: string): string {
    switch (currency) {
      case 'ru':
        return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + ' ₽';
      default:
        return String(value).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
  }
}
