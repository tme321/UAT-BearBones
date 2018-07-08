import { InjectionToken } from "@angular/core";
import { AnimationMetadata } from "@angular/animations";

/**
 * Provides the animation to play when the panel transitions 
 * from state 2 to state 1.
 */
export const AltPanelState1Animation = 
  new InjectionToken<AnimationMetadata|AnimationMetadata[]>('BB_ALT_PANEL_STATE_1_ANIMATION');

  /**
   * Provides the animation to play when the panel transitions 
   * from state 1 to state 2.
   */
export const AltPanelState2Animation = 
  new InjectionToken<AnimationMetadata|AnimationMetadata[]>('BB_ALT_PANEL_STATE_2_ANIMATION');
