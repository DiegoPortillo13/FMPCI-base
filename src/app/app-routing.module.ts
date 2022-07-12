import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpComponent } from './addp/addp.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GetallpComponent } from './getallp/getallp.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UpdpComponent } from './updp/updp.component';

const routes: Routes = [
{path: '', redirectTo: 'proyectos/getallp', pathMatch: 'full'},
{path: 'proyectos', component: ProyectosComponent, 
children:[
{path: 'addp', component: AddpComponent},
{path: 'getallp', component: GetallpComponent},
{path: 'updp', component: UpdpComponent},
]},
{path: 'cotizaciones', component: CotizacionesComponent},
{path: 'inventario', component: InventarioComponent},
{path: 'empresa', component: EmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
