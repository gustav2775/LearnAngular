import { MyLoaderDirective } from './loader/my-loader.directive';
import { ValidateLoginDirective } from './validate-login/validate-login.directive';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ValidateLoginDirective,
        MyLoaderDirective,
    ],
    exports:[
        ValidateLoginDirective,
        MyLoaderDirective,
    ]
})
export class DirectiveModule { }