import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButton } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MockComponents, MockPipes } from 'ng-mocks';

import { CarouselComponent } from '@app/ui/carousel';

import { RoomPhotosDialogComponent } from '../room-photos-dialog/room-photos-dialog.component';
import { RoomPhotosComponent } from './room-photos.component';
import { RoomPreviewImagesPipe } from './room-preview-images.pipe';

describe('RoomPhotosComponent', () => {
  let component: RoomPhotosComponent;
  let fixture: ComponentFixture<RoomPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [
        RoomPhotosComponent,
        MockPipes(RoomPreviewImagesPipe),
        MockComponents(RoomPhotosDialogComponent, CarouselComponent, MatIcon, MatButton),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
