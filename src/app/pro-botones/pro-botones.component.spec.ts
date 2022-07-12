import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBotonesComponent } from './pro-botones.component';

describe('ProBotonesComponent', () => {
  let component: ProBotonesComponent;
  let fixture: ComponentFixture<ProBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
