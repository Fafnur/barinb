import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MockComponents, MockPipes } from 'ng-mocks';

import { RoomPreviewImagesPipe } from '@app/rooms/shared';
import { CarouselComponent } from '@app/ui/carousel';

import { RoomPhotoComponent } from './room-photo.component';

describe('RoomPhotoComponent', () => {
  let component: RoomPhotoComponent;
  let fixture: ComponentFixture<RoomPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [RoomPhotoComponent, MockComponents(CarouselComponent, MatButton, MatIcon), MockPipes(RoomPreviewImagesPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
