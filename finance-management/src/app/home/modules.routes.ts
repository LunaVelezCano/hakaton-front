import { Routes } from '@angular/router';
import { PresupuestosComponent } from '../presupuestos/presupuestos.component';
import { GestionComponent } from '../gestion/gestion.component';
import { HistorialComponent } from '../historial/historial.component';

export const modulesRoutes: Routes = [
  {
    path: 'budgets',
    title: 'Presupuestos',
    component: PresupuestosComponent,
  },
  {
    path: 'history',
    component: HistorialComponent,
    title: 'Historial',
  },
  {
    path: 'manage',
    component: GestionComponent,
    title: 'Gestion',
  },
];
