import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRepositorioComponent } from './consultar-repositorio.component';

describe('ConsultarRepositorioComponent', () => {
  let component: ConsultarRepositorioComponent;
  let fixture: ComponentFixture<ConsultarRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarRepositorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
