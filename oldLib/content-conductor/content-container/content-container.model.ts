import { ViewContainerRef } from '@angular/core';

/**
 * A wrapper around a {@link ViewContainerRef}
 * that contains a string name identifier as well.
 */
export interface BBContentContainer {
    readonly viewContainer: ViewContainerRef;
    readonly containerName: string;
  }