import { Injectable, RendererFactory2 } from '@angular/core';
import { AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { BBAnimationTransitions } from './animation-transitions.model';
import { BBAnimationPlayers } from './animation-players.model';
import { BBStateCssMapperService } from './state-css-mapper/state-css-mapper.service';
import { BBAnimationStateMachine } from './animation-state-machine.model';
import { BBStateCSSMapper } from './state-css-mapper/state-css-mapper.service';

/**
 * 
 */
@Injectable()
export class BBAnimationStatesService {
  constructor(
    private builder: AnimationBuilder,
    private cssMapper: BBStateCssMapperService,
    private rendererFactory: RendererFactory2,
  ) {}

  /**
   * 
   * @param element The element to apply the animations to.
   * @param transitions The map of state transition animations for the element.
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

  onAnimationStart = (
    state: string, 
    mapper: BBStateCSSMapper = null) => () => {
      if(mapper) {
        mapper.remove(state);
      }
  }

  onAnimationDone = (
    state: string, 
    mapper: BBStateCSSMapper = null) => () => {
      if(mapper) {
        mapper.add(state);
      }
  }

  /**
   * 
   * @param fromState 
   * @param toState 
   * @param players 
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
   * 
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
   * 
   * @param element 
   * @param transitions 
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

