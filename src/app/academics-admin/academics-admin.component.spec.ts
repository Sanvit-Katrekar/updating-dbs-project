import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsAdminComponent } from './academics-admin.component';

describe('AcademicsAdminComponent', () => {
  let component: AcademicsAdminComponent;
  let fixture: ComponentFixture<AcademicsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
