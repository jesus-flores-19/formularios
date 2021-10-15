import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivoComponent } from './componentes/reactivo/reactivo.component';
import { TemplateComponent } from './componentes/template/template.component';

const routes: Routes = [
  {path: "template", component: TemplateComponent},
  {path: "reactivo", component: ReactivoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
