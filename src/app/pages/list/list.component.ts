import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CryptoItemModel } from '@shared/models/crypto.model';
import { CryptoService } from '@shared/services/crypto.service';

@Component({
  selector: 'crypto-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  isLoading = false;
  cryptoList: CryptoItemModel[] | null = null;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCryptoList();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }

  getCryptoList(): void {
    this.isLoading = true;
    this.subscriptions.push(this.cryptoService.getCryptoList().subscribe(
      (data: CryptoItemModel[]) => {
        this.cryptoList = data;
        this.isLoading = false;
      },
      () => {
        this.cryptoList = null;
        this.isLoading = false;
      }
    ));
  }
}
