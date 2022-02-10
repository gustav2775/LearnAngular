import { ServiceModule } from './core/servises/service.module';
import { PageModule } from './pages/pages.module';
import { ComponentModule } from './components/component.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    ComponentModule,
    PageModule,
    ServiceModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
