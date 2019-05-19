import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ContentComponent } from './content/content.component';
import { AdminComponent } from './admin/admin.component';
import { EditarComponent } from './admin/propiedades/editar/editar.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'admin-resar', component: AdminComponent},
  { path: 'admin-resar/edit/:id', component: EditarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
