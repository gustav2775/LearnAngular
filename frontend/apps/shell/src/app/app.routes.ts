
import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { Store } from '@ngxs/store';
import { CommonComponent } from '../pages/common/common';

export const appRoutes: Route[] = [
  {
    path: '',
    component: CommonComponent
  },
  {
    path: 'welcome',
    loadChildren: () => import('welcome/Routes').then((m) => m!.remoteRoutes),
    canMatch: [
      (route, segments) => {
        inject(Store).dispatch({ type: '[Welcome] canMatch', payload: { segments } });
        return true;
      }
    ],
    canActivate:  [
      (route, state) => {
        // корректно диспатчим действие (обычно объект action) и возвращаем boolean
        inject(Store).dispatch({ type: '[Welcome] canActivate', payload: { state, activate: true } });
        return true
      },
      (route, state) => {
        inject(Store).dispatch({ type: '[Welcome] canActivate 2', payload: { state } });
        return true;
      }
    ],
    resolve: {
      data: () => {
        inject(Store).dispatch({ type: '[Welcome] Resolve' })
        return { resolved: false };
      }
    },
    canDeactivate: [
      (component, currentRoute, currentState, nextState) => {
        inject(Store).dispatch({ type: '[Welcome] canDeactivate', payload: { currentState, nextState } });
        return true;
      }
    ],
  },
  {
    path: 'cds',
    loadChildren: () => import('cds/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'long-pulling',
    loadChildren: () => import('../pages/long-pulling/routes').then((m) => m!.Routes),
  },
  {
    path: 'sse',
    loadChildren: () => import('../pages/sse/routes').then((m) => m!.Routes),
  },
  {
    path: 'ws',
    loadChildren: () => import('../pages/ws/routes').then((m) => m!.Routes),
  },
  {
    path: 'broadcast',
    loadChildren: () => import('../pages/broadcast/routes').then((m) => m!.Routes),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
