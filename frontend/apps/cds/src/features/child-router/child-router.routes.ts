import { Routes } from "@angular/router";
import { ChildRouterComponent } from "./child-router.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ChildRouterComponent
  }
];
