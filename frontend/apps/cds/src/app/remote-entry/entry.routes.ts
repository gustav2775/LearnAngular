import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { ChildRouterComponent } from '../../features/child-router/child-router.component';
export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [{
      path: '',
      component: ChildRouterComponent
    }]
  }
];
