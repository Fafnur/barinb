import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomBuildingComponent } from './admin-room-building.component';

describe('AdminRoomBuildingComponent', () => {
  let component: AdminRoomBuildingComponent;
  let fixture: ComponentFixture<AdminRoomBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
