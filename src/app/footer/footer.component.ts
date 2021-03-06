import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="bg-warning text-white">
    <div class="container">
      <div class="row py-4 d-flex align-items-center">
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h4 class="mb-0 white-text">{{'social.text' | translate}}</h4>
        </div>
        <div class="col-md-6 col-lg-7 text-center text-md-right">
          <a *ngFor="let icon of ('social.icons' | translate)" class="ml-0" href="{{icon.link}}" title="{{icon.name}}">
            <i class="fa {{icon.class}} fa-3x white-text mr-lg-4"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="container mb-4 p-2 text-center text-md-left bgc-white">
    <div class="row mt-3">
      <div class="col-md-4 mb-4">
        <h6 class="text-uppercase font-weight-bold">
          <strong>{{'header.title' | translate}}</strong>
        </h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p>{{'footer.desc' | translate}}</p>
      </div>
      <div class="col-md-3 mx-auto mb-4">
        <h6 class="text-uppercase font-weight-bold">
          <strong>{{'footer.apps.title' | translate}}</strong>
        </h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p *ngFor="let app of ('footer.apps.links' | translate)">
          <a href="{{app.link}}">{{app.name}}</a>
        </p>
      </div>
      <div class="col-md-5">
        <h6 class="text-uppercase font-weight-bold">
          <strong>{{'footer.contact.title' | translate}}</strong>
        </h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
        <p *ngFor="let contactinfo of ('footer.contact.links' | translate)">
          <i class="fa fa-{{contactinfo.icon}} mr-3"></i>
          <a href="{{contactinfo.link}}">{{contactinfo.text}}</a>
        </p>
      </div>
    </div>
    <div class="footer-copyright py-3 text-center">
      © 2018 Copyright:
      <a href="#!">
        <strong>Balazs Bencs</strong>
      </a>
    </div>
  </div>`,
  styles: ['']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
