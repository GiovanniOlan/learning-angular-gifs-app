import { Routes } from '@angular/router';
import { DASHBOARD_LAYOUT_ROUTES } from './common/layouts/dashboard-layout/dashboard-layout.routes';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./common/layouts/dashboard-layout/dashboard-layout.component'),
    children: DASHBOARD_LAYOUT_ROUTES
  },
  {
    path: '**',
    redirectTo: 'dashboard',

  }
];
