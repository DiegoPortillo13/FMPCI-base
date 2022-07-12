import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { InventarioComponent } from './inventario/inventario.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AddpComponent } from './addp/addp.component';
import { DelpComponent } from './delp/delp.component';
import { GetallpComponent } from './getallp/getallp.component';
import { GetpComponent } from './getp/getp.component';
import { UpdpComponent } from './updp/updp.component';
import { BodyComponent } from './body/body.component';
import { TablaComponent } from './tabla/tabla.component';
import { ProBodyComponent } from './pro-body/pro-body.component';
import { ProBotonesComponent } from './pro-botones/pro-botones.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProyectosComponent,
    CotizacionesComponent,
    InventarioComponent,
    EmpresaComponent,
    EstadisticasComponent,
    AddpComponent,
    DelpComponent,
    GetallpComponent,
    GetpComponent,
    UpdpComponent,
    BodyComponent,
    TablaComponent,
    ProBodyComponent,
    ProBotonesComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
