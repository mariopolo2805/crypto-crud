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

  constructor(private activatedRoute: ActivatedRoute, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCryptoInfo(params.id);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
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
