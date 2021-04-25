import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { EnvironmentService } from '@app/core/environments';

@Injectable()
export class GoogleMapsService {
  constructor(private readonly httpClient: HttpClient, private readonly environmentService: EnvironmentService) {}

  load(): Observable<boolean> {
    return this.httpClient
      .jsonp(`https://maps.googleapis.com/maps/api/js?key=${this.environmentService.getEnvironments().gmapsApiKey}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
