import { BBCssMap, NormalizedCssMap } from './../../css-map/css-map.model';
/**
 * Map a state to a css class that 
 * should be applied to the element
 * being animated.
 * 
 * The old class will be removed before
 * any transition animation is played.
 * 
 * The new class will be applied after
 * any transition animations complete.
 * 
 * @example
 * {
 *   'open': 'is-open',
 *   'closed': 'is-closed',
 * }
 */
export interface StateCssMap {
    [state:string]: BBCssMap;
}

export interface NormalizedStateCssMap {
    [state:string]: NormalizedCssMap;
}
