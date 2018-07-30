import { AnimationPlayer } from "@angular/animations";

/**
 * A table of animations to play based on the 
 * transition between the state keys.
 * 
 * @example
 * {
 *   'open': {
 *     'closed': {@link @angular/animations#AnimationPlayer}
 *   },
 *   'closed': {
 *     'open': {@link @angular/animations#AnimationPlayer}
 *   }
 * }
 */
export interface BBAnimationPlayers {
    [fromState: string]: {
        [toState: string]: AnimationPlayer
    }
}