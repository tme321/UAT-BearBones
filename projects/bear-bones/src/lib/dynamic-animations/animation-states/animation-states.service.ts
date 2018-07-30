import { Injectable } from '@angular/core';
import { AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { BBAnimationTransitions } from '../animation-transitions/animation-transitions.model';
import { BBAnimationPlayers } from '../animation-players/animation-players.model';
import { BBAnimationStateMachine } from '../animation-state-machine/animation-state-machine.model';
import { BBStateCSSMapper } from '../state-css-mapper/state-css-mapper.model';

/**
 * This service creates an animation transition 
 * state machine with the method 
 * [createAnimationStateMachine]{@link BBAnimationStatesService#createAnimationStateMachine} 
 * from a given BBAnimationTransitions object.
 * 
 * The returned state machine is in the shape of 
 * [BBAnimationStateMachine]{@link BBAnimationStateMachine} which consists of 3 
 * methods:
 * 
 */
@Injectable()
export class BBAnimationStatesService {

  constructor(
    private builder: AnimationBuilder) {}

  /**
   * Build a group of [Animation Players]{@link @angular/animations#AnimationPlayer}.
   * 
   * @param element The element to apply the animations to.
   * @param transitions The map of state transition animations for the element.
   * @returns A data structure representing the transition names and animation
   * players in the shape of [BBAnimationPlayers]{@link BBAnimationPlayers}
   */
  buildPlayers(
    element: any, 
    transitions: BBAnimationTransitions) {

    return Object.keys(transitions).reduce<BBAnimationPlayers>(
      (players,fromState)=>{
        players[fromState] = Object.keys(transitions[fromState])
          .reduce<{[toState:string]: AnimationPlayer}>(
            (prev,toState)=>{
              const player = this.builder
                .build(transitions[fromState][toState])
                .create(element);
              prev[toState] = player; 
              return prev;
            },{});
      return players;
    },{});
  }

  /**
   * Create the callback function for an animation to 
   * execute when the animation starts.  The callback 
   * will remove the css class defined by the state 
   * and the [BBStateCSSMapper]{@link BBStateCSSMapper}.
   * 
   * @param state The string that represents the state.
   * @param mapper The [BBStateCSSMapper]{@link BBStateCSSMapper}
   * that modifies the css of an element.
   */
  onAnimationStart = (
    state: string, 
    mapper: BBStateCSSMapper = null) => () => {
      if(mapper) {
        mapper.remove(state);
      }
  }

 /**
   * Create the callback function for an animation to 
   * execute when the animation finishes.  The callback 
   * will add the css class defined by the state 
   * and the [BBStateCSSMapper]{@link BBStateCSSMapper}.
   * 
   * @param state The string that represents the state.
   * @param mapper The [BBStateCSSMapper]{@link BBStateCSSMapper}
   * that modifies the css of an element.
   */
  onAnimationDone = (
    state: string, 
    mapper: BBStateCSSMapper = null) => () => {
      if(mapper) {
        mapper.add(state);
      }
  }

  /**
   * Get the player for a specific transition.
   * @param fromState The current state.
   * @param toState The next state.
   * @param players The {@link BBAnimationPlayers} to look up the player in.
   */
  getPlayer(
    fromState: string, 
    toState: string, 
    players: BBAnimationPlayers) {
      return players && 
        players[fromState] && 
        players[fromState][toState];
  }

  /**
   * Destroy the {@link @angular/animations#AnimationPlayer} objects
   * inside the {@link BBAnimationPlayers}.
   * @param players 
   */
  destroyAllPlayers(players: BBAnimationPlayers) {
    if(players) {
      Object.keys(players).forEach(fromState=>{
        Object.keys(players[fromState]).forEach(toState=>{
          players[fromState][toState].destroy();
        })
      });
    }
  }

  /**
   * Create a {@link BBAnimationStateMachine} to apply to an
   * element when the state is transitioned.
   * @param element The element to apply the animations to.
   * @param transitions The {@link BBAnimationTransitions} map of 
   * the state transition animations to play.
   */
  createAnimationStateMachine(
    element: any, 
    transitions: BBAnimationTransitions = {}) {

    let players = this.buildPlayers(element, transitions);
    let currentState: string = '';
    let currentPlayer: AnimationPlayer;

    return <BBAnimationStateMachine> {
        init: (state:string, mapper: BBStateCSSMapper = null)=> { 
          currentState = state;

          if(mapper) {
            mapper.add(currentState);
          }
        },

        next: (nextState: string, mapper: BBStateCSSMapper = null) => {
          if(currentState !== nextState) {

            const newPlayer = this.getPlayer(currentState, nextState,players);

            if(currentPlayer) {
              currentPlayer.reset();
            }

            if(newPlayer) {
              currentPlayer = newPlayer;

              /*
               * Reseting the player clears the callbacks
               * so reregister them each time before playing.
               */
              currentPlayer.onStart(
                this.onAnimationStart(currentState,mapper));
              currentPlayer.onDone(
                this.onAnimationDone(nextState,mapper));

              currentPlayer.play();
            } 
            /*
             * In case an animation isn't defined for
             * the transition but a css class is handle
             * that by explicitly swapping out  the css 
             * classes when the transition player doesn't 
             * exist.
             */
            else {
              if(mapper) {
                mapper.remove(currentState);
                mapper.add(nextState); 
              }
            } 

            currentState = nextState;
          }
          return currentState;
        },

        destroy: ()=> {
          this.destroyAllPlayers(players);
          currentPlayer = null;
          currentState = null;
          currentPlayer = null;
          players = null;
        }
    } 

  }
}
