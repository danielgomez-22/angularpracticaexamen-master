import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service-alumno';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-alumno-component',
  standalone: false,
  styleUrl: './alumno-component.css',
  templateUrl: './alumno-component.html',
})
export class AlumnoComponent implements OnInit {
  public idAlumno!: number;
  public alumno!: Alumno;
  private _service: ServiceAlumnos = inject(ServiceAlumnos);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros: Params) => {
      this.idAlumno = parseInt(parametros['idAlumno']);

      this._service.cargarAlumnoId(this.idAlumno).subscribe((response) => {
        console.log(response);
        this.alumno = response;
        this._cdr.detectChanges();
      });
    });
  }
}
