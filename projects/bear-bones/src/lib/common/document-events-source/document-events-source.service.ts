import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BBDocumentEventsSourceService {

  private clickEvent$ = fromEvent<MouseEvent>(document,'click');

  constructor() { }

  /**
   * A stream of clicks that bubble up to the document
   */
  get click$() {
    return this.clickEvent$;
  }
}
