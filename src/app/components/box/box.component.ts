import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdComponent } from '../ad.component';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnDestroy{
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) appAd!: AdDirective;
  interval: number|undefined;
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    console.log("ads length: "+ this.ads.length)
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.appAd.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
