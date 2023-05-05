import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAdminComponent } from './root-admin.component';

describe('RootAdminComponent', () => {
  let component: RootAdminComponent;
  let fixture: ComponentFixture<RootAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
