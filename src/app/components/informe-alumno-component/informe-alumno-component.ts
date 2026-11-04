import { Component, inject } from '@angular/core';
import { ServiceAlumnos } from '../../services/service-alumno';
import { Alumno } from '../../models/alumno';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-informe-alumno-component',
  standalone: false,
  styleUrl: './informe-alumno-component.css',
  templateUrl: './informe-alumno-component.html',
})
export class InformeAlumnoComponent {
  private _service: ServiceAlumnos = inject(ServiceAlumnos);

  generarDocumento(): void {
    // 1. Llamamos a la API para obtener todos los alumnos reales
    this._service.cargarAlumnos().subscribe((alumnos: Alumno[]) => {
      let doc: jsPDF = new jsPDF();
      
      // Título del documento
      doc.setFontSize(18);
      doc.text("Listado General de Alumnos", 14, 15);
      
      doc.setFontSize(12);
      
      // Cabeceras de la tabla adaptadas a las propiedades de tu modelo Alumno
      const headers = [["ID", "Nombre", "Apellidos", "Activo", "ID Curso"]];
      
      // 2. Mapeamos el array de alumnos que nos devuelve la API a un array de arrays para el body
      const data = alumnos.map(alumno => [
        alumno.idAlumno,
        alumno.nombre,
        alumno.apellidos,
        alumno.activo,
        alumno.idCurso
      ]);

      // 3. Generamos la tabla con jspdf-autotable
      autoTable(doc, {
        head: headers,
        body: data,
        startY: 25,
        theme: 'striped', // Opcional: da un toque de diseño alternado a las filas
        headStyles: { fillColor: [41, 128, 185] } // Opcional: color azul corporativo para la cabecera
      });

      // 4. Guardamos el archivo PDF resultante
      doc.save("listado-alumnos.pdf");
    });
  }
}
