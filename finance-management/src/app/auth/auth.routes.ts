import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    loadChildren: () =>
      import('./modules.routes').then((routes) => routes.modulesRoutes),
  },
];
