import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./common/layouts/dashboard-layout/dashboard-layout.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component')
      },
      { path: '**', redirectTo: 'trending' }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',

  }
];
