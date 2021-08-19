/* ---- API Models ---- */
export interface CryptoItemListApiResponse {
  data: CryptoItemApiResponse[];
  timestamp: number;
}

export interface CryptoDetailApiResponse {
  data: CryptoItemApiResponse;
  timestamp: number;
}

export interface CryptoItemApiResponse {
  changePercent24Hr: string;
  explorer?: string | null;
  id: string;
  marketCapUsd: string;
  maxSupply: string | null;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string | null;
}

export interface CryptoImageApiResponse {
  hits: { webformatURL: string }[];
}

export interface CryptoUsdEurChangeRatioApiResponse {
  rates: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    USD: number;
  };
}

/* ---- APP Models ---- */
export interface CryptoItemModel {
  id: string;
  name: string;
  symbol: string;
  price: string;
}

export interface CryptoDetailModel {
  id: string;
  rank: string;
  name: string;
  symbol: string;
  price: string;
  priceEur?: string;
  marketCap: string;
  changePercent: number;
}
