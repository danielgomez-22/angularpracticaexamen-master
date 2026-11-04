import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoComponent } from './alumno-component';

describe('AlumnoComponent', () => {
  let component: AlumnoComponent;
  let fixture: ComponentFixture<AlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
