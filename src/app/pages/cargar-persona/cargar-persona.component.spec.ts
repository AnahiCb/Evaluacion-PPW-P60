import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPersonaComponent } from './cargar-persona.component';

describe('CargarPersonaComponent', () => {
  let component: CargarPersonaComponent;
  let fixture: ComponentFixture<CargarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
