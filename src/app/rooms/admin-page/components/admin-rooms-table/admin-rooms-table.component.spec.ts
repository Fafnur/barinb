import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomsTableComponent } from './admin-rooms-table.component';

describe('AdminRoomsTableComponent', () => {
  let component: AdminRoomsTableComponent;
  let fixture: ComponentFixture<AdminRoomsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
