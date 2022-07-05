import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdpComponent } from './updp.component';

describe('UpdpComponent', () => {
  let component: UpdpComponent;
  let fixture: ComponentFixture<UpdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
