import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateAlumnoComponent } from './update-alumno-component';

describe('UpdateAlumnoComponent', () => {
  let component: UpdateAlumnoComponent;
  let fixture: ComponentFixture<UpdateAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAlumnoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateAlumnoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
