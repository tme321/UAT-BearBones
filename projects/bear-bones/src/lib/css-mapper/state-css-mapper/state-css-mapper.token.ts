import { InjectionToken } from '@angular/core';
import { StateCssMapperConstructor } from './state-css-mapper.constructor';

/**
 * Token for the class to be constructed to act as the state css mapper.
 */
export const StateCssMapperConstructorToken = 
    new InjectionToken<StateCssMapperConstructor>('StateCssMapperConstructorToken');