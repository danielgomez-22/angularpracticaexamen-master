import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceAlumnos {
  private _http: HttpClient = inject(HttpClient);
  url = environment.urlApiEjemplos;

  cargarAlumnos(): Observable<Alumno[]> {
    let request = 'api/alumnos/alumnostoken';

    return this._http.get<Alumno[]>(this.url + request);
  }

  cargarCursos(): Observable<any[]> {
    let request = 'api/alumnos/cursostoken';

    return this._http.get<any[]>(this.url + request);
  }

  cargarAlumnosCurso(idCurso: number): Observable<Alumno[]> {
    let request = 'api/alumnos/filtrarcursotoken/' + idCurso;

    return this._http.get<Alumno[]>(this.url + request);
  }

  cargarAlumnoId(idAlumno: number): Observable<Alumno> {
    let request = 'api/alumnos/findAlumnoToken/' + idAlumno;

    return this._http.get<Alumno>(this.url + request);
  }

  crearAlumno(alumno: Alumno): Observable<any> {
    let request = 'api/alumnos/insertalumnotoken';

    return this._http.post(this.url + request, alumno);
  }

  modificarAlumno(alumno: Alumno): Observable<any> {
    let request = 'api/alumnos/updatealumnotoken';

    return this._http.put(this.url + request, alumno);
  }
}
