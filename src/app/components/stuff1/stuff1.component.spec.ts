import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuff1Component } from './stuff1.component';

describe('Stuff1Component', () => {
  let component: Stuff1Component;
  let fixture: ComponentFixture<Stuff1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stuff1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuff1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
