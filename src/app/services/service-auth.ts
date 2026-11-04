import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ServiceAuth {
  url = environment.urlApiEjemplos;
  private _http: HttpClient = inject(HttpClient);
  private _router: Router = inject(Router);
  public usuarioIniciado = signal<string | null>(null);

  iniciarSesionToken(login: Login): Observable<any> {
    let request = "api/auth/login";
    return this._http.post(this.url + request, login);
  }

  iniciarSesion(usuario: string){
     this.usuarioIniciado.set(usuario);
  }

  cerrarSesion(): void{
    sessionStorage.removeItem("TOKEN");
    this.usuarioIniciado.set(null);
    this._router.navigate(['/login']);
  }
}
