import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Login } from '../../models/login';
import { ServiceAuth } from '../../services/service-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;
  private _serviceAuth: ServiceAuth = inject(ServiceAuth);
  private _router: Router = inject(Router);

  login(){
    let usuario = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(usuario,password);

    this._serviceAuth.iniciarSesionToken(login).subscribe((response) => {
      sessionStorage.setItem("TOKEN", response.response);
      this._serviceAuth.iniciarSesion(usuario);
      this._router.navigate(['/']);
    })
  }
}
