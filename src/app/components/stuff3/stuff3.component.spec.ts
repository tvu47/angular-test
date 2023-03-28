import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stuff3Component } from './stuff3.component';

describe('Stuff3Component', () => {
  let component: Stuff3Component;
  let fixture: ComponentFixture<Stuff3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stuff3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stuff3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
