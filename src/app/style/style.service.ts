import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private style: Styles = Styles.Bulma;

  isBulma() { return this.style === Styles.Bulma }

  isBootstrap() { return this.style === Styles.Bootstrap }

  isFoundation() { return this.style === Styles.Foundation }

  setStyle(style: Styles) {
    this.style = style;
  }

  constructor() { }
}

export enum Styles {
  Bulma = 'bl',
  Bootstrap = 'bs',
  Foundation = 'fd',
}
