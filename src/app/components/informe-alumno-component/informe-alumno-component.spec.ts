import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformeAlumnoComponent } from './informe-alumno-component';

describe('InformeAlumnoComponent', () => {
  let component: InformeAlumnoComponent;
  let fixture: ComponentFixture<InformeAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformeAlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformeAlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
