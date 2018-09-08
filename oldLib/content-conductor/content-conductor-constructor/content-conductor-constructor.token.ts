import { InjectionToken } from '@angular/core';
import { BBContentConductorConstructor } from './content-conductor-constructor.model';

/**
 * An injection token representing an implementation of a 
 * constructor in the shape of {@link BBContentConductorConstructor}.
 */
export const BBContentConductorConstructorToken = 
    new InjectionToken<BBContentConductorConstructor>('BBContainersConductorConstructorToken');