import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './content/carousel/carousel.component';
import { CarouselOportunidadItemComponent } from './content/carousel/carousel-oportunidad-item/carousel-oportunidad-item.component';
import { PropiedadService } from 'src/shared/services/propiedad.service';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { NuevaPropiedadComponent } from './admin/nueva-propiedad/nueva-propiedad.component';
import { UIService } from 'src/shared/services/ui.service';
import { PropiedadesComponent } from './admin/propiedades/propiedades.component';
import { PropiedadTableTemplateComponent } from './admin/propiedades/propiedad-table-template/propiedad-table-template.component';
import { UploadImgagesComponent } from './dialogs/upload-imgages/upload-imgages.component';
import { QuestionComponent } from './dialogs/question/question.component';
import { EditarComponent } from './admin/propiedades/editar/editar.component';
import { FeatureComponent } from './content/common/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    CarouselComponent,
    CarouselOportunidadItemComponent,
    FooterComponent,
    AdminComponent,
    NuevaPropiedadComponent,
    PropiedadesComponent,
    PropiedadTableTemplateComponent,
    UploadImgagesComponent,
    QuestionComponent,
    EditarComponent,
    FeatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [PropiedadService, UIService, ToastrService],
  bootstrap: [AppComponent],
  entryComponents: [
    UploadImgagesComponent,
    QuestionComponent
  ]

})
export class AppModule { }
