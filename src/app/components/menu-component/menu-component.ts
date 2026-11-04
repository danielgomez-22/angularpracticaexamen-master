import { Component, inject } from '@angular/core';
import { ServiceAuth } from '../../services/service-auth';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _service: ServiceAuth = inject(ServiceAuth);
  public usuario = this._service.usuarioIniciado;


  cerrarSesion(): void{
    this._service.cerrarSesion();
  }
}
