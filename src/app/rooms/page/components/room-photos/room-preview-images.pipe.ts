import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomPreviewImages',
})
export class RoomPreviewImagesPipe implements PipeTransform {
  transform(images: string[]): string[] {
    return images.length > 5 ? images.slice(1, 5) : images.slice(1);
  }
}
