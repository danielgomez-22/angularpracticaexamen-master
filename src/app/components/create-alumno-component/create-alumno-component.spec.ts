import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAlumnoComponent } from './create-alumno-component';

describe('CreateAlumnoComponent', () => {
  let component: CreateAlumnoComponent;
  let fixture: ComponentFixture<CreateAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
