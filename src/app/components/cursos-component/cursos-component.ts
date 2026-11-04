import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ServiceAlumnos } from '../../services/service-alumno';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos-component',
  standalone: false,
  styleUrl: './cursos-component.css',
  templateUrl: './cursos-component.html',
})
export class CursosComponent implements OnInit{
  public cursos!: Array<number>;

  private _service: ServiceAlumnos = inject(ServiceAlumnos);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this._service.cargarCursos().subscribe((response) => {
      this.cursos = response;
      this._cdr.detectChanges();
    })
  }
}
