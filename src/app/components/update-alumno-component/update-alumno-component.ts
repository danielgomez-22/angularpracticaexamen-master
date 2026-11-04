import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceAlumnos } from '../../services/service-alumno';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-update-alumno-component',
  standalone: false,
  styleUrl: './update-alumno-component.css',
  templateUrl: './update-alumno-component.html',
})
export class UpdateAlumnoComponent implements OnInit {
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidos!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaactivo') cajaActivo!: ElementRef;
  @ViewChild('cajaidcurso') cajaIdCurso!: ElementRef;

  private _service: ServiceAlumnos = inject(ServiceAlumnos);
  private _router: Router = inject(Router);
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this._route.params.forEach((params) => {
      let id = parseInt(params['idAlumno']);
      if (id) {
        this._service.cargarAlumnoId(id).subscribe((response) => {
          this.cajaId.nativeElement.value = response.idAlumno;
          this.cajaNombre.nativeElement.value = response.nombre;
          this.cajaApellidos.nativeElement.value = response.apellidos;
          this.cajaImagen.nativeElement.value = response.imagen;
          this.cajaActivo.nativeElement.value = response.activo;
          this.cajaIdCurso.nativeElement.value = response.idCurso;
          
          this._cdr.detectChanges();
        });
      }
    });
  }

  modificarAlumno(): void {
    let idAlumno = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let apellidos = this.cajaApellidos.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let activo = parseInt(this.cajaActivo.nativeElement.value);
    let idCurso = parseInt(this.cajaIdCurso.nativeElement.value);

    let alumno = new Alumno(idAlumno, nombre, apellidos, imagen, activo, idCurso);

    this._service.modificarAlumno(alumno).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}