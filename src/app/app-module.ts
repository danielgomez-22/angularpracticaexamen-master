import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { AlumnoComponent } from './components/alumno-component/alumno-component';
import { UpdateAlumnoComponent } from './components/update-alumno-component/update-alumno-component';
import { CreateAlumnoComponent } from './components/create-alumno-component/create-alumno-component';
import { DeleteAlumnoComponent } from './components/delete-alumno-component/delete-alumno-component';
import { InformeAlumnoComponent } from './components/informe-alumno-component/informe-alumno-component';
import { AuthGuard } from './guards/auth-guard';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServiceAlumnos } from './services/service-alumno';
import { ServiceAuth } from './services/service-auth';
import { errorInterceptor } from './interceptors/error-interceptor';
import { tokenInterceptor } from './interceptors/token-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error-component/error-component';
import { CursosComponent } from './components/cursos-component/cursos-component';
import { AlumnosCursoComponent } from './components/alumnos-curso-component/alumnos-curso-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    UpdateAlumnoComponent,
    CreateAlumnoComponent,
    DeleteAlumnoComponent,
    InformeAlumnoComponent,
    ErrorComponent,
    CursosComponent,
    AlumnosCursoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    AuthGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
    provideToastService(),
    ServiceAlumnos,
    ServiceAuth,
  ],
  bootstrap: [App],
})
export class AppModule {}
