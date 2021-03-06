import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './componentes/template/template.component';
import { ReactivoComponent } from './componentes/reactivo/reactivo.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

//Formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactivoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
