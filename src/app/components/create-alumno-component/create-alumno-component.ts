import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service-alumno';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-create-alumno-component',
  standalone: false,
  styleUrl: './create-alumno-component.css',
  templateUrl: './create-alumno-component.html',
})
export class CreateAlumnoComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaapellidos") cajaApellidos!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("cajaactivo") cajaActivo!: ElementRef;
  @ViewChild("cajaidcurso") cajaIdCurso!: ElementRef;

  private _service: ServiceAlumnos = inject(ServiceAlumnos);
  private _router: Router = inject(Router);

  crearAlumno(): void {
    let idAlumno = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let apellidos = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = parseInt(this.cajaActivo.nativeElement.value);
    let idCurso = parseInt(this.cajaIdCurso.nativeElement.value);

    let alumno = new Alumno(idAlumno, nombre, apellidos, imagen, activo, idCurso);

    this._service.crearAlumno(alumno).subscribe((response) => {
      this._router.navigate(['/']);
    })
  }
}
