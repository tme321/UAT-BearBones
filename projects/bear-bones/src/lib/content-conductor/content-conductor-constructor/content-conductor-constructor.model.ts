import { QueryList, TemplateRef } from '@angular/core';
import { BBContentConductor } from "../content-conductor.model";
import { BBContentContainer } from '../content-container/content-container.model';

/**
 * A constructor that returns an implementation 
 * of {@link BBContentConductor}.  
 * 
 * @param containersQueryList Should be a QueryList 
 * of containers that views can be put into.  
 * 
 * @param contentsQueryList Should be a QueryList of 
 * the TemplateRefs representing the content to 
 * display inside the containers.
 */
export interface BBContentConductorConstructor {
  new<T extends BBContentContainer>(
    containersQueryList: QueryList<T>,
    contentsQueryList : QueryList<TemplateRef<any>>
  ):BBContentConductor<T>;
}
  
