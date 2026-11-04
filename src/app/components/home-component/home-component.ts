import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { ServiceAlumnos } from '../../services/service-alumno';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit{
  public alumnos!: Array<Alumno>;
  private _service : ServiceAlumnos = inject(ServiceAlumnos);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this._service.cargarAlumnos().subscribe((response) => {
      this.alumnos = response;
      this._cdr.detectChanges();
    })
  }

}
