import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Propiedad } from 'src/shared/models/propiedad.model';
import { UIService } from 'src/shared/services/ui.service';
import { NgForm } from '@angular/forms';
import { PropiedadService } from 'src/shared/services/propiedad.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-propiedad',
  templateUrl: './nueva-propiedad.component.html',
  styleUrls: ['./nueva-propiedad.component.css']
})
export class NuevaPropiedadComponent implements OnInit, OnDestroy {

  @ViewChild('radioButtonCasa') radioButtonCasa;
  @ViewChild('radioButtonDepto') radioButtonDepto;
  @ViewChild('radioButtonChalet') radioButtonChalet;
  @ViewChild('radioButtonLote') radioButtonLote;
  @ViewChild('radioButtonVenta') radioButtonVenta;
  @ViewChild('radioButtonAlquiler') radioButtonAlquiler;

  isLoading = false;
  private loadingSubs: Subscription;

  constructor ( private uiService: UIService,
                private propiedadService: PropiedadService,
                private toastr: ToastrService
              ) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe( (isLoading: boolean) => {
      this.isLoading = isLoading;
     });
  }

  onSubmit(formPropiedad: NgForm) {
    const propiedad = formPropiedad.value;
    propiedad.tipo = this.getTipo();
    propiedad.operacion = this.getOperacion();
    if (propiedad.patio === '') { propiedad.patio = false; }
    if (propiedad.parrilla === '') { propiedad.parrilla = false; }
    if (propiedad.wifi === '') { propiedad.wifi = false; }
    if (propiedad.tv === '') { propiedad.tv = false; }
    if (propiedad.tvcable === '') { propiedad.tvcable = false; }
    if (propiedad.ocean_view === '') { propiedad.ocean_view = false; }
    if (propiedad.oportunidad === '') { propiedad.oportunidad = false; }
    if (propiedad.mostrar === '') { propiedad.mostrar = false; }
    this.crearPropiedad(propiedad);
  }

  /****************************************************************************************/
  /** getTipo() retorna el tipo de propiedad de acuerdo con el radiobutton seleccionado ***/
  /****************************************************************************************/
  getTipo() {
    if (this.radioButtonCasa.checked)
    {
      return 'casa';
    } else if (this.radioButtonDepto) {
      return 'departamento';
    } else if (this.radioButtonChalet) {
      return 'chalet';
    } else if (this.radioButtonLote) {
      return 'lote';
    } else {
      return 'error';
    }
  }
  /*********************************************************************************************/
  /** getOperacion() retorna el tipo de operacion de acuerdo con el radiobutton seleccionado ***/
  /*********************************************************************************************/
  getOperacion() {
    if (this.radioButtonVenta.checked)
    {
      return 'venta';
    } else if (this.radioButtonAlquiler) {
      return 'alquiler';
    } else {
      return 'error';
    }
  }
  /*********************************************************************************************/
  /** crearPropiedad() crea una nueva propiedad y la almacena en la DB *************************/
  /*********************************************************************************************/
  crearPropiedad(p: Propiedad) {
    this.uiService.loadingStateChanged.next(true);
    this.propiedadService.create(p)
      .then( () => {
        this.uiService.loadingStateChanged.next(false);
        this.toastr.success('Propiedad creada!', 'Success');
        this.propiedadService.tabChanged.next(0);  // tab 0 = 'propiedades'
      })
      .catch( error => {
        this.toastr.error( error , 'Error, Intente nuevamente');
        this.uiService.loadingStateChanged.next(false);
      });
  }
  /*********************************************************************************************/
  /** On Destroy *******************************************************************************/
  /*********************************************************************************************/
  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
