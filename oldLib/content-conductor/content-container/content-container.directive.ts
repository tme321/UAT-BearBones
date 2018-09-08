import { Directive, ViewContainerRef, Input } from '@angular/core';
import { BBContentConductorService } from '../content-conductor.service';
import { BBContentContainer } from './content-container.model';

/**
 * A directive that can be attached to create a container 
 * where content with an attached {@link BBContentDirective}
 * can be displayed.
 * 
 * The string set to the directive name is used to refer to
 * this container by the {@link BBContentConductor}.
 * 
 * @example
 * <div bb-content-container="my-container"></div>
 */
@Directive({
  selector: '[bb-content-container]'
})
export class BBContentContainerDirective implements BBContentContainer {
  @Input('bb-content-container') containerName: string;

  get viewContainer() { return this.vcRef; }

  constructor(
    private vcRef: ViewContainerRef,
    private ccService: BBContentConductorService) {}
}



