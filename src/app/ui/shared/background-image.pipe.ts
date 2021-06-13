import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundImage',
})
export class BackgroundImagePipe implements PipeTransform {
  transform(image: string | null | undefined): Record<string, any> | null {
    return typeof image === 'string' && image.length ? { backgroundImage: `url(${image})` } : null;
  }
}
