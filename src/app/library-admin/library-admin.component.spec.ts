import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminComponent } from './library-admin.component';

describe('LibraryAdminComponent', () => {
  let component: LibraryAdminComponent;
  let fixture: ComponentFixture<LibraryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
