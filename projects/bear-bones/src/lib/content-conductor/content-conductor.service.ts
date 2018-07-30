import { Injectable, QueryList, TemplateRef, Inject } from '@angular/core';
import { BBContentContainer } from './content-container/content-container.model';
import { BBContentConductorConstructorToken } from './content-conductor-constructor/content-conductor-constructor.token';
import { BBContentConductorConstructor } from './content-conductor-constructor/content-conductor-constructor.model';

/*
 * Even though this import is not used it is required for typescript
 * to resolve the return type of the createContentConductor method.
 * If it is removed this service will not compile correctly.
 */
import { BBContentConductor } from './content-conductor.model';

/**
 * This is the service to inject into a component in order to
 * create {@link BBContentConductor}s.
 * 
 * See {@link BBContentConductor} for the details.
 * 
 * @method createContentConductor Create a {@link BBContentConductor}
 * for moving content around a component's template,
 * 
 * @example
 * constructor(private conductorService: BBContentConductorService) {}
 */
@Injectable()
export class BBContentConductorService {
 
  constructor(
    @Inject(BBContentConductorConstructorToken) 
    private constructor: BBContentConductorConstructor) { }

  createContentConductor<T extends BBContentContainer>(
    containersQueryList: QueryList<T>,
    contentsQueryList : QueryList<TemplateRef<any>>) {
    
    return  new this.constructor(
      containersQueryList,
      contentsQueryList
    );
  }
  
}
