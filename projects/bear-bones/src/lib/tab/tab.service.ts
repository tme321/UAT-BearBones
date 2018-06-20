import { Injectable } from '@angular/core';

@Injectable()
export class TabService {
  activeTab: string = '';
  tabsets = {};

  constructor() { }
}
