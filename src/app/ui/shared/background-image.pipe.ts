import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage',
})
export class BackgroundImagePipe implements PipeTransform {
  transform(image: string | null): Record<string, any> | null {
    return image ? { backgroundImage: `url(${image})` } : null;
  }
}
