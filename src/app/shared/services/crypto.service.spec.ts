import { TestBed, inject, fakeAsync, flush } from '@angular/core/testing';
import { ApiService } from '@core/providers/api.service';
import { of } from 'rxjs/internal/observable/of';
import { CryptoService } from './crypto.service';

describe('Service: CryptoService', () => {
  let apiServiceSpy: jasmine.SpyObj<ApiService>;
  let mockApiGetService = { get: null } as unknown as ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CryptoService,
        { provide: ApiService, useValue: mockApiGetService },
      ]
    });

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should getCryptoList', fakeAsync(
    inject([CryptoService], (cryptoService: CryptoService) => {
      const expectedUrl = '/list';
      const apiResponse = [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          priceUsd: '45000.123456789',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          priceUsd: '3000.123456789',
        }
      ];
      const expectedObj = [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price: '45000.123456789',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price: '3000.123456789',
        }
      ];

      spyOn(apiServiceSpy, 'get').and.returnValue(of({
        data: apiResponse
      }));

      cryptoService.getCryptoList()
        .subscribe(res => {
          expect(apiServiceSpy.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(expectedObj);
        });
      flush();
    })
  ));

  it('should getCryptoDetail', fakeAsync(
    inject([CryptoService], (cryptoService: CryptoService) => {
      const expectedUrl = '/detail/bitcoin';
      const apiResponse = {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        priceUsd: '45000.123456789',
        rank: '1',
        marketCapUsd: '123456789.123456789',
        changePercent24Hr: '123456789.123456789',
      };
      const expectedObj = {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '45000.123456789',
        rank: '1',
        marketCap: '123456789.123456789',
        changePercent: 123456789.123456789,
      };

      spyOn(apiServiceSpy, 'get').and.returnValue(of({
        data: apiResponse
      }));

      cryptoService.getCryptoDetail('bitcoin')
        .subscribe(res => {
          expect(apiServiceSpy.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(expectedObj);
        });
      flush();
    })
  ));

  it('should getCryptoDetailHistory', fakeAsync(
    inject([CryptoService], (cryptoService: CryptoService) => {
      const expectedUrl = '/detail/bitcoin/history';
      const apiResponse = [
        {
          time: 1530403200000,
          priceUsd: '12345.12345',
        },
        {
          time: 1530489600000,
          priceUsd: '12987.12345',
        }
      ];
      const expectedObj = [
        {
          name: 'bitcoin',
          series: [
            {
              name: '1/7/2018',
              value: 12345.12345,
            },
            {
              name: '2/7/2018',
              value: 12987.12345,
            }
          ]
        }
      ];

      spyOn(apiServiceSpy, 'get').and.returnValue(of({
        data: apiResponse
      }));

      cryptoService.getCryptoDetailHistory('bitcoin')
        .subscribe(res => {
          expect(apiServiceSpy.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(expectedObj);
        });
      flush();
    })
  ));

  it('should getCryptoImage', fakeAsync(
    inject([CryptoService], (cryptoService: CryptoService) => {
      const expectedUrl = '/image/bitcoin';
      const apiResponse = [
        {
        webformatURL: 'image.png',
        }
      ];
      const expectedObj = 'image.png';

      spyOn(apiServiceSpy, 'get').and.returnValue(of({
        hits: apiResponse
      }));

      cryptoService.getCryptoImage('bitcoin')
        .subscribe(res => {
          expect(apiServiceSpy.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(expectedObj);
        });
      flush();
    })
  ));

  it('should getUsdEurChangeRatio', fakeAsync(
    inject([CryptoService], (cryptoService: CryptoService) => {
      const expectedUrl = '/usd-eur-change';
      const apiResponse = {
        USD: 1.17,
      };
      const expectedObj = 1.17;

      spyOn(apiServiceSpy, 'get').and.returnValue(of({
        rates: apiResponse
      }));

      cryptoService.getUsdEurChangeRatio()
        .subscribe(res => {
          expect(apiServiceSpy.get).toHaveBeenCalledWith(expectedUrl);
          expect(res).toEqual(expectedObj);
        });
      flush();
    })
  ));
});
