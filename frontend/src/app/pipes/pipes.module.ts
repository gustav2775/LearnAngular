import { TransformInSvg } from './transform-in-svg.pipe';

import { NgModule } from '@angular/core';
import { TransformFormatPricePipe } from './transformFormatPrice.pipe';

@NgModule({
    declarations: [
        TransformInSvg,
        TransformFormatPricePipe
    ],
    exports: [
        TransformInSvg,
        TransformFormatPricePipe
    ],
})
export class PipeModule { }