import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepHomeComponent } from './cep-home.component';

describe('CepHomeComponent', () => {
  let component: CepHomeComponent;
  let fixture: ComponentFixture<CepHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
