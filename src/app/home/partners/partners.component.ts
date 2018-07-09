import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-partners',
  template: `
  <div class="row">
    <div class="col-12 mx-sm-auto my-sm-5 my-md-5 my-lg-5 text-center">
      <h2>{{ 'home.partners.title' | translate }}</h2>
      <small class="text-center">{{ 'home.partners.slogan' | translate }}</small>
    </div>
  </div>
  <div class="row">
    <div class="col-3 text-center p-2 partner embed-responsive-4by3" *ngFor="let partner of ('home.partners.images' | translate)">
      <img src="{{ partner.src }}" alt="" title="">
    </div>
  </div>`,
  styles: ['.partner{filter: grayscale(100%);height:150px;}.partner img{display: block;margin: auto;height: auto;max-height: 100%;width: auto;max-width: 100%;}']
})
export class PartnersComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
