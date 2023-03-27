import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidadosComponent } from './validadoscomponent';

describe('Pantalla5Component', () => {
  let component: ValidadosComponent;
  let fixture: ComponentFixture<ValidadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
