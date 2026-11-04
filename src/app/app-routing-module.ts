import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/login-component/login-component';
import { AlumnoComponent } from './components/alumno-component/alumno-component';
import { CreateAlumnoComponent } from './components/create-alumno-component/create-alumno-component';
import { UpdateAlumnoComponent } from './components/update-alumno-component/update-alumno-component';
import { DeleteAlumnoComponent } from './components/delete-alumno-component/delete-alumno-component';
import { InformeAlumnoComponent } from './components/informe-alumno-component/informe-alumno-component';
import { ErrorComponent } from './components/error-component/error-component';
import { CursosComponent } from './components/cursos-component/cursos-component';
import { AlumnosCursoComponent } from './components/alumnos-curso-component/alumnos-curso-component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateAlumnoComponent, canActivate: [AuthGuard] },
  { path: 'delete', component: DeleteAlumnoComponent, canActivate: [AuthGuard] },
  { path: 'informe', component: InformeAlumnoComponent, canActivate: [AuthGuard] },
  { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: 'alumno/:idAlumno', component: AlumnoComponent, canActivate: [AuthGuard] },
  { path: 'alumnosCurso/:idCurso', component: AlumnosCursoComponent, canActivate: [AuthGuard] },
  { path: 'update/:idAlumno', component: UpdateAlumnoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
