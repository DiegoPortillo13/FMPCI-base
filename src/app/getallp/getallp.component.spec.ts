import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpComponent } from './getallp.component';

describe('GetallpComponent', () => {
  let component: GetallpComponent;
  let fixture: ComponentFixture<GetallpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
