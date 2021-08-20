import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { ApiService } from '@core/providers/api.service';
import {
  CryptoDetailApiResponse,
  CryptoDetailHistoryApiResponse,
  CryptoDetailModel,
  CryptoHistoryDataset,
  CryptoHistoryDatasetData,
  CryptoImageApiResponse,
  CryptoItemApiResponse,
  CryptoItemDetailHistoryApiResponse,
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

  getCryptoDetailHistory(id: string): Observable<CryptoHistoryDataset[]> {
    return this.apiService.get(`/detail/${id}/history`).pipe(map((response: CryptoDetailHistoryApiResponse) => {
      const dataset: CryptoHistoryDataset = {
        name: id,
        series: response.data.map((historyItem: CryptoItemDetailHistoryApiResponse) =>
          ({
            name: new Date(historyItem.time).toLocaleDateString(),
            value: parseFloat(historyItem.priceUsd),
          }) as CryptoHistoryDatasetData
        ),
      };
      return [dataset];
    }
    ));
  }

  getCryptoImage(id: string): Observable<string> {
    return this.apiService.get(`/image/${id}`).pipe(map((response: CryptoImageApiResponse) =>
      response?.hits[Math.floor(Math.random() * response.hits.length)]?.webformatURL
    ));
  }

  getUsdEurChangeRatio(): Observable<number> {
    return this.apiService.get('/usd-eur-change').pipe(map((response: CryptoUsdEurChangeRatioApiResponse) =>
      response?.rates?.USD
    ));
  }
}
