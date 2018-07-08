import { AnimationPlayer } from "@angular/animations";

export interface BBAnimationPlayers {
    [fromState: string]: {
        [toState: string]: AnimationPlayer
    }
}