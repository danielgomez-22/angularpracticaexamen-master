import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service-alumno';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-alumnos-curso-component',
  standalone: false,
  styleUrl: './alumnos-curso-component.css',
  templateUrl: './alumnos-curso-component.html',
})
export class AlumnosCursoComponent implements OnInit {
  public idCurso!: number;
  public alumnos!: Array<Alumno>;
  private _service: ServiceAlumnos = inject(ServiceAlumnos);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros: Params) => {
      this.idCurso = parseInt(parametros['idCurso']);

      this._service.cargarAlumnosCurso(this.idCurso).subscribe((response) => {
        this.alumnos = response;
        this._cdr.detectChanges();
      });
    });
  }
}
