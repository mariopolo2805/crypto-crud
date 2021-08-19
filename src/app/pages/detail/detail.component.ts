import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { CryptoDetailModel } from '@shared/models/crypto.model';
import { CryptoService } from '@shared/services/crypto.service';

@Component({
  selector: 'crypto-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  isLoading = true;
  cryptoData!: CryptoDetailModel | null;
  cryptoImage!: string | null;

  hideHistoric = false;
  view: [number, number] = [600, 400];
  colorScheme = {
    domain: ['#EEB501'],
  };
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000,
        },
        {
          name: '2010',
          value: 73000000,
        },
        {
          name: '2011',
          value: 89400000,
        },
        {
          name: '2012',
          value: 92000000,
        },
        {
          name: '2013',
          value: 95000000,
        },
        {
          name: '2014',
          value: 102400000,
        },
      ],
    },
  ];

  constructor(private activatedRoute: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.view = (window.innerWidth >= 640) ? [600, 400] : [window.innerWidth - 40, 300];
    this.activatedRoute.params.subscribe(params => {
      this.getCryptoInfo(params.id);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }

  onResize(): void {
    this.view = (window.innerWidth >= 640) ? [600, 400] : [window.innerWidth - 40, 300];
  }

  getCryptoInfo(id: string): void {
    this.subscriptions.push(forkJoin([
      this.cryptoService.getCryptoDetail(id),
      this.cryptoService.getCryptoImage(id),
      this.cryptoService.getUsdEurChangeRatio(),
    ]).subscribe(([cryptoDetailModel, image, usdEurChangeRatio]) => {
      this.cryptoData = cryptoDetailModel;
      this.cryptoData.priceEur = `${parseFloat(this.cryptoData.price) / usdEurChangeRatio}`;
      this.cryptoImage = image;
      this.isLoading = false;
    },
    () => {
      this.isLoading = false;
      this.cryptoData = null;
      this.cryptoImage = null;
    }));
  }
}
