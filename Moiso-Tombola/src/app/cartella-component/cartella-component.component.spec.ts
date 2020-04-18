import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartellaComponentComponent } from './cartella-component.component';

describe('CartellaComponentComponent', () => {
  let component: CartellaComponentComponent;
  let fixture: ComponentFixture<CartellaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartellaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartellaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
