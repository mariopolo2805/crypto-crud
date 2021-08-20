import { ApiService } from "@core/providers/api.service";
import { CryptoService } from "@shared/services/crypto.service";
import { of } from "rxjs/internal/observable/of";

export const mockApiService = jasmine.createSpyObj('ApiService', {
  get: of({ }),
  put: of({ }),
  post: of({ }),
  delete: of({ }),
  export: of({ }),
}) as ApiService;

export const mockCryptoService = jasmine.createSpyObj('CryptoService', {
  getCryptoList: of([
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
  ]),
  getCryptoDetail: of(
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '45000.123456789',
      rank: '1',
      marketCap: '123456789.123456789',
      changePercent: '123456789.123456789',
    }
  ),
  getCryptoDetailHistory: of([
    {
      name: 'bitcoin',
      series: [
        {
          name: '1/1/2020',
          value: 12345.12345,
        },
        {
          name: '1/2/2020',
          value: 12987.12345,
        }
      ]
    }
  ]),
  getCryptoImage: of('image.png'),
  getUsdEurChangeRatio: of(1.17),
}) as CryptoService;
