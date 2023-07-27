import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsupportviewComponent } from './support-app/views/requestsupportview/requestsupportview.component';
import { RequestlistComponent } from './support-app/components/requestlist/requestlist.component';

const routes: Routes = [
  {path: '', component: RequestlistComponent},
  {path: 'header', component: RequestlistComponent},
  {path: 'SupportAdd', component: RequestsupportviewComponent},
/*   { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", redirectTo: "" } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
