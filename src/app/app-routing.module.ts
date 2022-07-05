import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
{path: '', redirectTo: 'proyectos', pathMatch: 'full'},
{path: 'proyectos', component: ProyectosComponent},
{path: 'cotizaciones', component: CotizacionesComponent},
{path: 'inventario', component: InventarioComponent},
{path: 'empresa', component: EmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
