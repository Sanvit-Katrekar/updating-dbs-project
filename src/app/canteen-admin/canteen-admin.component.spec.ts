import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanteenAdminComponent } from './canteen-admin.component';

describe('CanteenAdminComponent', () => {
  let component: CanteenAdminComponent;
  let fixture: ComponentFixture<CanteenAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
