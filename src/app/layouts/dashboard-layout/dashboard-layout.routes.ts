import { Routes } from '@angular/router';

export const DASHBOARD_LAYOUT_ROUTES: Routes = [
  {
    path: 'trending',
    loadComponent: () => import('@src/app/modules/gifs/pages/trending-page/trending-page.component')
  },
  {
    path: 'search',
    loadComponent: () => import('@src/app/modules/gifs/pages/search-page/search-page.component')
  },
  { path: '**', redirectTo: 'trending' }
];
