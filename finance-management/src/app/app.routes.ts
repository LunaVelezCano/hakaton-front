import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then((routes) => routes.authRoutes),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.routes').then((routes) => routes.homeRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
