import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { HistorialComponent } from './historial/historial.component';
import { GestionComponent } from './gestion/gestion.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio',
  },
  {
    path: '',
    component: PresupuestosComponent,
    title: 'Presupuestos',
  },
  {
    path: '',
    component: HistorialComponent,
    title: 'Historial',
  },
  {
    path: '',
    component: GestionComponent,
    title: 'Gestion',
  },

];
