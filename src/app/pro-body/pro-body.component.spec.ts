import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBodyComponent } from './pro-body.component';

describe('ProBodyComponent', () => {
  let component: ProBodyComponent;
  let fixture: ComponentFixture<ProBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
