import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelAdminComponent } from './hostel-admin.component';

describe('HostelAdminComponent', () => {
  let component: HostelAdminComponent;
  let fixture: ComponentFixture<HostelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
