import { TestBed, async, inject } from '@angular/core/testing';
import { ApiService } from '@core/providers/api.service';
import { mockApiService } from 'src/app/tests/mocks';
import { CryptoService } from './crypto.service';

describe('Service: Crypto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CryptoService,
        { provide: ApiService, useValue: mockApiService },
      ]
    });
  });

  it('should ...', inject([CryptoService], (service: CryptoService) => {
    expect(service).toBeTruthy();
  }));
});
