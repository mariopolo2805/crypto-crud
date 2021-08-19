import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { ApiService } from '@core/providers/api.service';
import {
  CryptoDetailApiResponse,
  CryptoDetailModel,
  CryptoImageApiResponse,
  CryptoItemApiResponse,
  CryptoItemListApiResponse,
  CryptoItemModel,
  CryptoUsdEurChangeRatioApiResponse,
} from '@shared/models/crypto.model';

@Injectable()
export class CryptoService {

  constructor(private apiService: ApiService) { }

  getCryptoList(): Observable<CryptoItemModel[]> {
    return this.apiService.get('/list').pipe(map((response: CryptoItemListApiResponse) =>
      response.data.map((cryptoItem: CryptoItemApiResponse) =>
        ({
          id: cryptoItem.id,
          name: cryptoItem.name,
          symbol: cryptoItem.symbol,
          price: cryptoItem.priceUsd,
        })
      )
    ));
  }

  getCryptoDetail(id: string): Observable<CryptoDetailModel> {
    return this.apiService.get(`/detail/${id}`).pipe(map((response: CryptoDetailApiResponse) =>
      ({
        id: response.data.id,
        rank: response.data.rank,
        name: response.data.name,
        symbol: response.data.symbol,
        price: response.data.priceUsd,
        marketCap: response.data.marketCapUsd,
        changePercent: parseFloat(response.data.changePercent24Hr),
      })
    ));
  }

  getCryptoImage(id: string): Observable<string> {
    return this.apiService.get(`/image/${id}`).pipe(map((response: CryptoImageApiResponse) =>
      response?.hits[Math.floor(Math.random() * response.hits.length)]?.webformatURL
    ));
  }

  // usd-eur-change
  getUsdEurChangeRatio(): Observable<number> {
    return this.apiService.get('/usd-eur-change').pipe(map((response: CryptoUsdEurChangeRatioApiResponse) =>
      response?.rates?.USD
    ));
  }
}
