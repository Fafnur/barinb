import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EnvironmentService } from '@app/core/environments';

@Injectable()
export class GoogleMapsService {
  private loaded = false;

  constructor(private readonly httpClient: HttpClient, private readonly environmentService: EnvironmentService) {}

  load(): Observable<boolean> {
    return !this.loaded
      ? this.httpClient
          .jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.environmentService.getEnvironments().gmapsApiKey}`, 'callback')
          .pipe(
            tap(() => (this.loaded = true)),
            map(() => true),
            catchError(() => of(false))
          )
      : of(this.loaded);
  }
}
