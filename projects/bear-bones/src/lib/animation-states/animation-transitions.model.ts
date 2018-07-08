import { AnimationMetadata } from "@angular/animations";

export interface BBAnimationTransitions {
  [fromState: string]: {
    [toState: string]: AnimationMetadata | AnimationMetadata[];
  }
}  
