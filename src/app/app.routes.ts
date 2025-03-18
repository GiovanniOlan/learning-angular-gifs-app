import { Routes } from '@angular/router';
import { DASHBOARD_LAYOUT_ROUTES } from './layouts/dashboard-layout/dashboard-layout.routes';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./layouts/dashboard-layout/dashboard-layout.component'),
    children: DASHBOARD_LAYOUT_ROUTES
  },
  {
    path: '**',
    redirectTo: 'dashboard',

  }
];
