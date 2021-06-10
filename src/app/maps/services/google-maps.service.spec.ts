import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { anything, mock, when } from 'ts-mockito';

import { CONFIG_DEFAULT, ConfigService } from '@app/core/config';
import { providerOf } from '@app/core/testing';

import { GoogleMapsService } from './google-maps.service';

describe('GoogleMapsService', () => {
  let service: GoogleMapsService;
  let configServiceMock: ConfigService;
  let httpClientMock: HttpClient;

  beforeEach(() => {
    configServiceMock = mock(ConfigService);
    httpClientMock = mock(HttpClient);
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [providerOf(ConfigService, configServiceMock), providerOf(HttpClient, httpClientMock), GoogleMapsService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    service = TestBed.inject(GoogleMapsService);
    when(configServiceMock.getConfig()).thenReturn(CONFIG_DEFAULT);

    when(httpClientMock.jsonp(anything(), 'callback')).thenReturn(
      hot('a|', {
        a: true,
      })
    );
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    expect(service.load()).toBeObservable(cold('a|', { a: true }));
  });
});
