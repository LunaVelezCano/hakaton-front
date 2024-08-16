import { Routes } from '@angular/router';
import { PresupuestosComponent } from '../presupuestos/presupuestos.component';

export const modulesRoutes: Routes = [
  {
    path: 'register',
    title: 'Registrarse',
    component: PresupuestosComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: PresupuestosComponent,
  },
];
