import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { CryptoDetailModel } from '@shared/models/crypto.model';
import { CryptoService } from '@shared/services/crypto.service';

/* Sizes to line chart */
const PADDING = 40;
const WIDTH = 600;
const HEIGH = 400;
const HEIGH_MOBILE = 300;

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

  hideHistory = false;
  view: [number, number] = [WIDTH, HEIGH];
  colorScheme = {
    domain: ['#EEB501'],
  };
  dataset: never[] | null = [];

  constructor(private activatedRoute: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.view = (window.innerWidth >= WIDTH + PADDING) ? [WIDTH, HEIGH] : [window.innerWidth - PADDING, HEIGH_MOBILE];
    this.activatedRoute.params.subscribe(params => {
      this.getCryptoInfo(params.id);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }

  onResize(): void {
    this.view = (window.innerWidth >= WIDTH + PADDING) ? [WIDTH, HEIGH] : [window.innerWidth - PADDING, HEIGH_MOBILE];
  }

  getCryptoInfo(id: string): void {
    this.subscriptions.push(forkJoin([
      this.cryptoService.getCryptoDetail(id),
      this.cryptoService.getCryptoImage(id),
      this.cryptoService.getCryptoDetailHistory(id),
      this.cryptoService.getUsdEurChangeRatio(),
    ]).subscribe(([cryptoDetailModel, image, dataset, usdEurChangeRatio]) => {
      this.cryptoData = cryptoDetailModel;
      this.cryptoData.priceEur = `${parseFloat(this.cryptoData.price) / usdEurChangeRatio}`;
      this.cryptoImage = image;
      this.dataset = dataset as unknown as never[];
      this.isLoading = false;
    },
    () => {
      this.isLoading = false;
      this.cryptoData = null;
      this.cryptoImage = null;
      this.dataset = null;
    }));
  }
}
