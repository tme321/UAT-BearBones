(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@uat/bearbones', ['exports', '@angular/core', '@angular/animations', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.uat = global.uat || {}, global.uat.bearbones = {}),global.ng.core,global.ng.animations,global.ng.common,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,animations,common,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Provides the animation to play when the panel transitions
     * from state 2 to state 1.
     */
    var /** @type {?} */ AltPanelState1Animation = new core.InjectionToken('BB_ALT_PANEL_STATE_1_ANIMATION');
    /**
     * Provides the animation to play when the panel transitions
     * from state 1 to state 2.
     */
    var /** @type {?} */ AltPanelState2Animation = new core.InjectionToken('BB_ALT_PANEL_STATE_2_ANIMATION');

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * This base class uses the {\@link BBDynamicAnimationsService} to generate
     * a {\@link BBDynamicAnimationsHandler} and attach it to the element
     * passed into the super call.
     *
     * This base class is only suitable for animating a single element.  In order
     * to animate more consider using the {\@link BBDynamicAnimationsService}
     * directly and wiring up a separate instance of
     * {\@link BBDynamicAnimationsHandler} to each element.
     *
     * It defines the series of inputs that can be used to control the animation
     * of the specified element.
     *
     * \@member cssMap An `\@Input` for the mapping of states to css classes as a
     * {\@link BBStateCSSMap}.
     * \@member state An `\@Input` for the state as a string.
     * \@member transitions An `\@Input` for the map of state transitions to
     * animations as a {\@link BBAnimationTransitions}.
     *
     * \@example
     * `\@Component()`
     * export class BBAlternatingPanelComponent extends DynamicAnimationsBase {
     *     constructor(
     *         protected elRef: ElementRef,
     *         protected daServ: BBDynamicAnimationsService,
     *     ) {
     *         super(elRef.nativeElement, daServ);
     *     }
     * }
     * @abstract
     */
    var BBDynamicAnimationsBase = (function () {
        /**
         * BBDynamicAnimationsBase constructor
         * @param element The element, not ElementRef, to apply the animations to.
         * @param dynamicAnimationsService The {@link BBDynamicAnimationsService} to use for the animations.
         */
        function BBDynamicAnimationsBase(element, dynamicAnimationsService) {
            var _this = this;
            this.element = element;
            this.dynamicAnimationsService = dynamicAnimationsService;
            this.animationsHandler = this.dynamicAnimationsService
                .createAnimationsHandler(this.element);
            /*
                     * Override the behaviour of ngOnInit and
                     * ngOnDestroy so that an inheritor of this
                     * class does not have to call the super
                     * version of each.
                     */
            var /** @type {?} */ onInit = this.ngOnInit;
            this.ngOnInit = function () {
                _this.baseInit();
                onInit.apply(_this);
            };
            var /** @type {?} */ onDestroy = this.ngOnDestroy;
            this.ngOnDestroy = function () {
                _this.baseDestroy();
                onDestroy.apply(_this);
            };
        }
        Object.defineProperty(BBDynamicAnimationsBase.prototype, "cssMap", {
            set: /**
             * @param {?} map
             * @return {?}
             */ function (map) {
                this.animationsHandler.setCSSMap(map);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDynamicAnimationsBase.prototype, "state", {
            set: /**
             * @param {?} toState
             * @return {?}
             */ function (toState) {
                this.animationsHandler.nextState(toState);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDynamicAnimationsBase.prototype, "transitions", {
            set: /**
             * @param {?} transitions
             * @return {?}
             */ function (transitions) {
                this.animationsHandler.setTransitions(transitions);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBDynamicAnimationsBase.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        BBDynamicAnimationsBase.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        BBDynamicAnimationsBase.prototype.baseInit = /**
         * @return {?}
         */
            function () {
                this.animationsHandler.init();
            };
        /**
         * @return {?}
         */
        BBDynamicAnimationsBase.prototype.baseDestroy = /**
         * @return {?}
         */
            function () {
                this.animationsHandler.destroy();
            };
        BBDynamicAnimationsBase.propDecorators = {
            cssMap: [{ type: core.Input }],
            state: [{ type: core.Input }],
            transitions: [{ type: core.Input }]
        };
        return BBDynamicAnimationsBase;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BBDynamicAnimationsHandlerConstructorToken = new core.InjectionToken('BBDynamicAnimationsHandlerToken');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * This service creates a closure that handles
     * adding and removing css classes form a given element
     * based on the {\@link BBStateCSSMap}.
     */
    var BBStateCssMapperService = (function () {
        function BBStateCssMapperService(rendererFactory) {
            this.rendererFactory = rendererFactory;
        }
        /**
         * Get the css class for the given state.
         *
         * @param state The state.
         * @param map The {@link BBStateCSSMap} to look the state up in.
         */
        /**
         * Get the css class for the given state.
         *
         * @param {?} state The state.
         * @param {?} map The {\@link BBStateCSSMap} to look the state up in.
         * @return {?}
         */
        BBStateCssMapperService.prototype.getCSSClass = /**
         * Get the css class for the given state.
         *
         * @param {?} state The state.
         * @param {?} map The {\@link BBStateCSSMap} to look the state up in.
         * @return {?}
         */
            function (state, map) {
                return map && map[state];
            };
        /**
         * Create the {@link BBStateCSSMapper} to apply to the given element.
         *
         * @param element The element to apply the css classes to.
         * @param map The {@link BBStateCSSMap} that defines the css classes and states.
         */
        /**
         * Create the {\@link BBStateCSSMapper} to apply to the given element.
         *
         * @param {?} element The element to apply the css classes to.
         * @param {?} map The {\@link BBStateCSSMap} that defines the css classes and states.
         * @return {?}
         */
        BBStateCssMapperService.prototype.createStateCSSMapper = /**
         * Create the {\@link BBStateCSSMapper} to apply to the given element.
         *
         * @param {?} element The element to apply the css classes to.
         * @param {?} map The {\@link BBStateCSSMap} that defines the css classes and states.
         * @return {?}
         */
            function (element, map) {
                var _this = this;
                var /** @type {?} */ renderer = this.rendererFactory.createRenderer(element, null);
                return /** @type {?} */ ({
                    remove: function (state) {
                        renderer.removeClass(element, _this.getCSSClass(state, map));
                    },
                    add: function (state) {
                        renderer.addClass(element, _this.getCSSClass(state, map));
                    },
                    removeAll: function () {
                        Object.keys(map).forEach(function (entry) { return renderer.removeClass(element, map[entry]); });
                    },
                    destroy: function () {
                        renderer.destroy();
                        renderer = null;
                    }
                });
            };
        BBStateCssMapperService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BBStateCssMapperService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2 }
            ];
        };
        return BBStateCssMapperService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * This service creates an animation transition
     * state machine with the method
     * [createAnimationStateMachine]{\@link BBAnimationStatesService#createAnimationStateMachine}
     * from a given BBAnimationTransitions object.
     *
     * The returned state machine is in the shape of
     * [BBAnimationStateMachine]{\@link BBAnimationStateMachine} which consists of 3
     * methods:
     *
     */
    var BBAnimationStatesService = (function () {
        function BBAnimationStatesService(builder) {
            this.builder = builder;
            /**
             * Create the callback function for an animation to
             * execute when the animation starts.  The callback
             * will remove the css class defined by the state
             * and the [BBStateCSSMapper]{\@link BBStateCSSMapper}.
             *
             * @param state The string that represents the state.
             * @param mapper The [BBStateCSSMapper]{\@link BBStateCSSMapper}
             * that modifies the css of an element.
             */
            this.onAnimationStart = function (state, mapper) {
                if (mapper === void 0) {
                    mapper = null;
                }
                return function () {
                    if (mapper) {
                        mapper.remove(state);
                    }
                };
            };
            /**
             * Create the callback function for an animation to
             * execute when the animation finishes.  The callback
             * will add the css class defined by the state
             * and the [BBStateCSSMapper]{\@link BBStateCSSMapper}.
             *
             * @param state The string that represents the state.
             * @param mapper The [BBStateCSSMapper]{\@link BBStateCSSMapper}
             * that modifies the css of an element.
             */
            this.onAnimationDone = function (state, mapper) {
                if (mapper === void 0) {
                    mapper = null;
                }
                return function () {
                    if (mapper) {
                        mapper.add(state);
                    }
                };
            };
        }
        /**
         * Build a group of [Animation Players]{@link @angular/animations#AnimationPlayer}.
         *
         * @param element The element to apply the animations to.
         * @param transitions The map of state transition animations for the element.
         * @returns A data structure representing the transition names and animation
         * players in the shape of [BBAnimationPlayers]{@link BBAnimationPlayers}
         */
        /**
         * Build a group of [Animation Players]{\@link \@angular/animations#AnimationPlayer}.
         *
         * @param {?} element The element to apply the animations to.
         * @param {?} transitions The map of state transition animations for the element.
         * @return {?} A data structure representing the transition names and animation
         * players in the shape of [BBAnimationPlayers]{\@link BBAnimationPlayers}
         */
        BBAnimationStatesService.prototype.buildPlayers = /**
         * Build a group of [Animation Players]{\@link \@angular/animations#AnimationPlayer}.
         *
         * @param {?} element The element to apply the animations to.
         * @param {?} transitions The map of state transition animations for the element.
         * @return {?} A data structure representing the transition names and animation
         * players in the shape of [BBAnimationPlayers]{\@link BBAnimationPlayers}
         */
            function (element, transitions) {
                var _this = this;
                return Object.keys(transitions).reduce(function (players, fromState) {
                    players[fromState] = Object.keys(transitions[fromState])
                        .reduce(function (prev, toState) {
                        var /** @type {?} */ player = _this.builder
                            .build(transitions[fromState][toState])
                            .create(element);
                        prev[toState] = player;
                        return prev;
                    }, {});
                    return players;
                }, {});
            };
        /**
         * Get the player for a specific transition.
         * @param fromState The current state.
         * @param toState The next state.
         * @param players The {@link BBAnimationPlayers} to look up the player in.
         */
        /**
         * Get the player for a specific transition.
         * @param {?} fromState The current state.
         * @param {?} toState The next state.
         * @param {?} players The {\@link BBAnimationPlayers} to look up the player in.
         * @return {?}
         */
        BBAnimationStatesService.prototype.getPlayer = /**
         * Get the player for a specific transition.
         * @param {?} fromState The current state.
         * @param {?} toState The next state.
         * @param {?} players The {\@link BBAnimationPlayers} to look up the player in.
         * @return {?}
         */
            function (fromState, toState, players) {
                return players &&
                    players[fromState] &&
                    players[fromState][toState];
            };
        /**
         * Destroy the {@link @angular/animations#AnimationPlayer} objects
         * inside the {@link BBAnimationPlayers}.
         * @param players
         */
        /**
         * Destroy the {\@link \@angular/animations#AnimationPlayer} objects
         * inside the {\@link BBAnimationPlayers}.
         * @param {?} players
         * @return {?}
         */
        BBAnimationStatesService.prototype.destroyAllPlayers = /**
         * Destroy the {\@link \@angular/animations#AnimationPlayer} objects
         * inside the {\@link BBAnimationPlayers}.
         * @param {?} players
         * @return {?}
         */
            function (players) {
                if (players) {
                    Object.keys(players).forEach(function (fromState) {
                        Object.keys(players[fromState]).forEach(function (toState) {
                            players[fromState][toState].destroy();
                        });
                    });
                }
            };
        /**
         * Create a {@link BBAnimationStateMachine} to apply to an
         * element when the state is transitioned.
         * @param element The element to apply the animations to.
         * @param transitions The {@link BBAnimationTransitions} map of
         * the state transition animations to play.
         */
        /**
         * Create a {\@link BBAnimationStateMachine} to apply to an
         * element when the state is transitioned.
         * @param {?} element The element to apply the animations to.
         * @param {?=} transitions The {\@link BBAnimationTransitions} map of
         * the state transition animations to play.
         * @return {?}
         */
        BBAnimationStatesService.prototype.createAnimationStateMachine = /**
         * Create a {\@link BBAnimationStateMachine} to apply to an
         * element when the state is transitioned.
         * @param {?} element The element to apply the animations to.
         * @param {?=} transitions The {\@link BBAnimationTransitions} map of
         * the state transition animations to play.
         * @return {?}
         */
            function (element, transitions) {
                var _this = this;
                if (transitions === void 0) {
                    transitions = {};
                }
                var /** @type {?} */ players = this.buildPlayers(element, transitions);
                var /** @type {?} */ currentState = '';
                var /** @type {?} */ currentPlayer;
                return /** @type {?} */ ({
                    init: function (state, mapper) {
                        if (mapper === void 0) {
                            mapper = null;
                        }
                        currentState = state;
                        if (mapper) {
                            mapper.add(currentState);
                        }
                    },
                    next: function (nextState, mapper) {
                        if (mapper === void 0) {
                            mapper = null;
                        }
                        if (currentState !== nextState) {
                            var /** @type {?} */ newPlayer = _this.getPlayer(currentState, nextState, players);
                            if (currentPlayer) {
                                currentPlayer.reset();
                            }
                            if (newPlayer) {
                                currentPlayer = newPlayer;
                                /*
                                               * Reseting the player clears the callbacks
                                               * so reregister them each time before playing.
                                               */
                                currentPlayer.onStart(_this.onAnimationStart(currentState, mapper));
                                currentPlayer.onDone(_this.onAnimationDone(nextState, mapper));
                                currentPlayer.play();
                            }
                            else {
                                if (mapper) {
                                    mapper.remove(currentState);
                                    mapper.add(nextState);
                                }
                            }
                            currentState = nextState;
                        }
                        return currentState;
                    },
                    destroy: function () {
                        _this.destroyAllPlayers(players);
                        currentPlayer = null;
                        currentState = null;
                        currentPlayer = null;
                        players = null;
                    }
                });
            };
        BBAnimationStatesService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BBAnimationStatesService.ctorParameters = function () {
            return [
                { type: animations.AnimationBuilder }
            ];
        };
        return BBAnimationStatesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * This service is used to create a {\@link BBDynamicAnimationsHandler}
     * with the {\@link BBDynamicAnimationsService.createAnimationsHandler} method.
     *
     * The {\@link BBDynamicAnimationsHandler}
     * can be used to handle animations based on state transitions
     * for the specified element.
     *
     * The {\@link BBDynamicAnimationsHandler} can be wired up to a
     * particular component or directive to automatically handle
     * the animations for the specified element.
     *
     * \@example
     * `\@Directive()`
     * export class AnimatedDirective {
     *   private animationsHandler: BBDynamicAnimationsHandler;
     *
     *   `\@Input()` set cssMap (map: BBStateCSSMap) {
     *     this.animationsHandler.setCSSMap(map);
     *   }
     *
     *   `\@Input()` set state(toState: string) {
     *     this.animationsHandler.nextState(toState);
     *   }
     *
     *   `\@Input()` set transitions(transitions: BBAnimationTransitions) {
     *     this.animationsHandler.setTransitions(transitions);
     *   }
     *
     *   constructor(
     *     private elRef: ElementRef,
     *     private daService: DynamicAnimationsService,
     *   ) {
     *     this.animationsHandler = this.daService
     *       .createAnimationsHandler(this.elRef.nativeElement);
     *   }
     *
     *   ngOnInit() {
     *     this.animationsHandler.init();
     *   }
     *
     *   ngOnDestroy() {
     *     this.animationsHandler.destroy();
     *   }
     * }
     *
     */
    var BBDynamicAnimationsService = (function () {
        function BBDynamicAnimationsService(constructor, cssMapperService, animationStatesBuilder) {
            this.constructor = constructor;
            this.cssMapperService = cssMapperService;
            this.animationStatesBuilder = animationStatesBuilder;
        }
        /**
         * Create a {@link BBDynamicAnimationsHandler} for
         * the given element.
         *
         * See {@link DynamicAnimationsService} for example
         * usage.
         *
         * @param element The element to attach the animations
         * handler to.
         */
        /**
         * Create a {\@link BBDynamicAnimationsHandler} for
         * the given element.
         *
         * See {\@link DynamicAnimationsService} for example
         * usage.
         *
         * @param {?} element The element to attach the animations
         * handler to.
         * @return {?}
         */
        BBDynamicAnimationsService.prototype.createAnimationsHandler = /**
         * Create a {\@link BBDynamicAnimationsHandler} for
         * the given element.
         *
         * See {\@link DynamicAnimationsService} for example
         * usage.
         *
         * @param {?} element The element to attach the animations
         * handler to.
         * @return {?}
         */
            function (element) {
                return new this.constructor(element, this.cssMapperService, this.animationStatesBuilder);
            };
        BBDynamicAnimationsService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BBDynamicAnimationsService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [BBDynamicAnimationsHandlerConstructorToken,] }] },
                { type: BBStateCssMapperService },
                { type: BBAnimationStatesService }
            ];
        };
        return BBDynamicAnimationsService;
    }());
    //private cssMapperService: BBStateCssMapperService,
    //private aStateBuilder: BBAnimationStatesService,
    /*
        let animationsStateMachine: BBAnimationStateMachine;
        let cssMapper: BBStateCSSMapper;
        let stateCache: string = '';
        let mapCache: BBStateCSSMap = {};
        let transitionsCache: BBAnimationTransitions = {};
        */
    /*

        return <BBDynamicAnimationsHandler>{
          setCSSMap: (map: BBStateCSSMap) => {
            if(mapCache !== map) {
              mapCache = map;

              if(cssMapper) {
                cssMapper.removeAll();
                cssMapper.destroy();
              }

              cssMapper = this.cssMapperService
                .createStateCSSMapper(element,mapCache);
            }
          },

          nextState: (toState:string) => {
            if(stateCache !== toState) {
              stateCache = toState;

              if(animationsStateMachine) {
                animationsStateMachine.next(
                  stateCache,
                  cssMapper);
              }
            }
          },

          setTransitions: (transitions: BBAnimationTransitions) => {
            if(transitionsCache !== transitions) {
              transitionsCache = transitions;

              if(animationsStateMachine) {

                if(cssMapper) {
                  cssMapper.removeAll();
                }

                animationsStateMachine.destroy();
              }

              animationsStateMachine =
                this.aStateBuilder
                  .createAnimationStateMachine(
                    element,
                    transitionsCache);
            }
          },

          init: () => {
            if(animationsStateMachine) {
              animationsStateMachine.init(
                stateCache,
                cssMapper);
            }
          },

          destroy: () => {
            animationsStateMachine.destroy();
            cssMapper.destroy();
            stateCache = null;
            mapCache = null;
            transitionsCache = null;
          }
        }
        */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     *
     */
    var BBAlternatingPanelComponent = (function (_super) {
        __extends(BBAlternatingPanelComponent, _super);
        function BBAlternatingPanelComponent(elRef, daServ) {
            var _this = _super.call(this, elRef.nativeElement, daServ) || this;
            _this.elRef = elRef;
            _this.daServ = daServ;
            return _this;
        }
        BBAlternatingPanelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bb-alt-panel]',
                        template: "<ng-content></ng-content>",
                        styles: [""],
                        animations: [],
                        exportAs: 'bbAltPanel',
                    },] },
        ];
        /** @nocollapse */
        BBAlternatingPanelComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: BBDynamicAnimationsService }
            ];
        };
        return BBAlternatingPanelComponent;
    }(BBDynamicAnimationsBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBAlternatingPanelDirective = (function () {
        function BBAlternatingPanelDirective(elRef, daServ) {
            this.elRef = elRef;
            this.daServ = daServ;
            this.animationsHandler = this.daServ
                .createAnimationsHandler(this.elRef.nativeElement);
        }
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "cssMap", {
            set: /**
             * @param {?} map
             * @return {?}
             */ function (map) {
                this.animationsHandler.setCSSMap(map);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "state", {
            set: /**
             * @param {?} toState
             * @return {?}
             */ function (toState) {
                this.animationsHandler.nextState(toState);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "transitions", {
            set: /**
             * @param {?} transitions
             * @return {?}
             */ function (transitions) {
                this.animationsHandler.setTransitions(transitions);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBAlternatingPanelDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.animationsHandler.init();
            };
        /**
         * @return {?}
         */
        BBAlternatingPanelDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.animationsHandler.destroy();
            };
        BBAlternatingPanelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbAlternatingPanel]'
                    },] },
        ];
        /** @nocollapse */
        BBAlternatingPanelDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: BBDynamicAnimationsService }
            ];
        };
        BBAlternatingPanelDirective.propDecorators = {
            cssMap: [{ type: core.Input }],
            state: [{ type: core.Input }],
            transitions: [{ type: core.Input }]
        };
        return BBAlternatingPanelDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBAlternatingPanelModule = (function () {
        function BBAlternatingPanelModule() {
        }
        /**
         * @return {?}
         */
        BBAlternatingPanelModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBAlternatingPanelModule,
                    providers: []
                };
            };
        BBAlternatingPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [
                            BBAlternatingPanelComponent,
                            BBAlternatingPanelDirective,
                        ],
                        exports: [
                            BBAlternatingPanelComponent,
                            BBAlternatingPanelDirective
                        ]
                    },] },
        ];
        return BBAlternatingPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBMenuItem = (function () {
        function BBMenuItem(_viewContainer) {
            this._viewContainer = _viewContainer;
        }
        BBMenuItem.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-menu-item]',
                    },] },
        ];
        /** @nocollapse */
        BBMenuItem.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        return BBMenuItem;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBCollapsingMenu = (function () {
        function BBCollapsingMenu(renderer, hostElementRef, zone) {
            this.renderer = renderer;
            this.hostElementRef = hostElementRef;
            this.zone = zone;
            this.applyHostClass = true;
            /**
             * Controls whether the collapsed items should
             * open based on a click event or not.
             */
            this.toggleOnClick = true;
            /**
             * Controls whether the collapsed items should open
             * on mouse over or not.
             */
            this.showOnHover = false;
            /**
             * Controls whether the collapsed items should close
             * When clicked outside the toggle or panel or not.
             */
            this.closeOnClickOutside = true;
            this.hasOverflow = false;
        }
        Object.defineProperty(BBCollapsingMenu.prototype, "isOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this.panel.isShowing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBCollapsingMenu.prototype, "itemElements", {
            get: /**
             * Per issue 10098 ContentChildren currently also adds the host component
             * to a QueryList that it satisfies making it necessary to filter the
             * host component out of it's own list in case someone wants to nest
             * a collapsing menu inside another BB component that uses BBMenuItems.
             *
             * https://github.com/angular/angular/issues/10098#issuecomment-235157642
             * @return {?}
             */ function () {
                var _this = this;
                return this.items.toArray()
                    .filter(function (el) { return el.nativeElement !== _this.hostElementRef.nativeElement; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBCollapsingMenu.prototype, "hostDiv", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.hostElementRef.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBCollapsingMenu.prototype, "displayedDiv", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.displayedItems.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBCollapsingMenu.prototype, "collapsedDiv", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.collapsedItems.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBCollapsingMenu.prototype, "toggleDiv", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this.toggle.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBCollapsingMenu.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.calculateOverflow();
            };
        /**
         * Determine which, if any, items need to be
         * moved into the collapsed panel when they
         * overflow the menu width.
         * @return {?}
         */
        BBCollapsingMenu.prototype.calculateOverflow = /**
         * Determine which, if any, items need to be
         * moved into the collapsed panel when they
         * overflow the menu width.
         * @return {?}
         */
            function () {
                var _this = this;
                this.renderer.projectNodes(this.displayedDiv, this.itemElements.map(function (el) { return el.nativeElement; }));
                if (this.areDisplayedItemsToWide()) {
                    this.zone.run(function () {
                        setTimeout(function () {
                            _this.hasOverflow = true;
                        });
                    });
                    var /** @type {?} */ menuCalcedRight = (this.hostDiv.offsetLeft +
                        this.hostDiv.offsetWidth -
                        this.toggleDiv.offsetWidth);
                    var /** @type {?} */ firstOverflowIndex_1 = Number.POSITIVE_INFINITY;
                    var /** @type {?} */ overflowAmount = 0;
                    // find the first item that is outside the menu's size - toggle size
                    for (var /** @type {?} */ i = 0; i < this.itemElements.length; i++) {
                        var /** @type {?} */ ele = ((this.itemElements[i].nativeElement));
                        var /** @type {?} */ eleCalcedRight = (ele.offsetLeft + this.hostDiv.offsetLeft + ele.offsetWidth);
                        // calculate how much an item overflows the container
                        // taking the toggles width into account.
                        overflowAmount = eleCalcedRight - menuCalcedRight;
                        if (overflowAmount > 0) {
                            firstOverflowIndex_1 = i;
                            break;
                        }
                    }
                    // all items are collapsed
                    if (firstOverflowIndex_1 == 0) {
                        this.renderer.projectNodes(this.collapsedDiv, this.itemElements.map(function (el) { return el.nativeElement; }));
                    }
                    else {
                        this.renderer.projectNodes(this.collapsedDiv, this.itemElements
                            .filter(function (el, index) {
                            return (index >= firstOverflowIndex_1);
                        })
                            .map(function (el) { return el.nativeElement; }));
                    }
                }
                else {
                    this.zone.run(function () {
                        setTimeout(function () {
                            _this.hasOverflow = false;
                        });
                    });
                }
            };
        /**
         * Determine if the menu content width is larger than the menu width
         * @return {?}
         */
        BBCollapsingMenu.prototype.areDisplayedItemsToWide = /**
         * Determine if the menu content width is larger than the menu width
         * @return {?}
         */
            function () {
                return this.displayedDiv.getBoundingClientRect().width >
                    this.hostDiv.getBoundingClientRect().width;
            };
        /**
         * Event handlers
         */
        /**
         * Event handlers
         * @return {?}
         */
        BBCollapsingMenu.prototype.onWindowResize = /**
         * Event handlers
         * @return {?}
         */
            function () {
                this.calculateOverflow();
            };
        BBCollapsingMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-collapsing-menu]',
                        template: "<div class=\"menu-container\">\n  <div #displayedItems class=\"displayed\">\n  </div>\n\n  <div  #toggle\n        [class.hidden]=\"!hasOverflow\" \n        [bb-sliding-panel-toggle]=\"panel\"\n        [toggleOnClick]=\"toggleOnClick\"\n        [closeOnClickOutside]=\"closeOnClickOutside\"\n        [showOnHover]=\"showOnHover\">\n    \n    <ng-content select=\"[bb-menu-toggle]\"></ng-content>\n  </div>\n  <div bb-sliding-panel \n       #panel=\"bbSlidingPanel\"\n       #collapsedItems \n       slideDirection=\"down\"\n       #panel=\"bbSlidingPanel\">\n  </div>\n</div>",
                        styles: ["div.displayed{flex-grow:1;flex-direction:row;flex-shrink:0;display:flex}div.menu-container{position:relative;height:inherit;flex-direction:row;display:flex;align-items:center;flex-shrink:0;flex-grow:1}div.bb-sliding-panel{display:flex;flex-direction:column;flex-grow:1;position:absolute;right:0;top:100%}div.hidden{visibility:hidden}"],
                        host: {
                            '(window:resize)': "onWindowResize()",
                        },
                        exportAs: "bbCollapsingMenu"
                    },] },
        ];
        /** @nocollapse */
        BBCollapsingMenu.ctorParameters = function () {
            return [
                { type: core.Renderer },
                { type: core.ElementRef },
                { type: core.NgZone }
            ];
        };
        BBCollapsingMenu.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-collapsing-menu',] }],
            toggleOnClick: [{ type: core.Input }],
            showOnHover: [{ type: core.Input }],
            closeOnClickOutside: [{ type: core.Input }],
            items: [{ type: core.ContentChildren, args: [BBMenuItem, { read: core.ElementRef, descendants: false },] }],
            displayedItems: [{ type: core.ViewChild, args: ['displayedItems', { read: core.ElementRef },] }],
            collapsedItems: [{ type: core.ViewChild, args: ['collapsedItems', { read: core.ElementRef },] }],
            toggle: [{ type: core.ViewChild, args: ['toggle', { read: core.ElementRef },] }],
            panel: [{ type: core.ViewChild, args: ['panel',] }]
        };
        return BBCollapsingMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBCommonModule = (function () {
        function BBCommonModule() {
        }
        /**
         * @return {?}
         */
        BBCommonModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBCommonModule,
                    providers: []
                };
            };
        BBCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            BBMenuItem,
                        ],
                        exports: [
                            BBMenuItem,
                        ]
                    },] },
        ];
        return BBCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var SlideAnimationDirections = {
        CLOSE: 'close',
        SLIDE_LEFT: 'slide-left',
        SLIDE_RIGHT: 'slide-right',
        SLIDE_UP: 'slide-up',
        SLIDE_DOWN: 'slide-down',
    };
    /** @enum {string} */
    var SlideDirections = {
        LEFT: 'left',
        RIGHT: 'right',
        UP: 'up',
        DOWN: 'down',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function verticalSlideAnimations() {
        return animations.trigger('verticalTrigger', [
            animations.state(SlideAnimationDirections.CLOSE, animations.style({
                transform: 'scaleY(0)',
            })),
            animations.state(SlideAnimationDirections.SLIDE_DOWN, animations.style({
                transform: 'scaleY(1)',
            })),
            animations.state(SlideAnimationDirections.SLIDE_UP, animations.style({
                transform: 'scaleY(1)',
            })),
            animations.transition(
            /*
            SlideDirections.CLOSE +
            ' => ' +
            SlideDirections.SLIDE_DOWN,
            */
            SlideAnimationDirections.CLOSE + " => " + SlideAnimationDirections.SLIDE_DOWN, [
                animations.style({
                    transform: 'scaleY(0)',
                    'transform-origin': 'top'
                }),
                animations.animate('150ms ease-in', animations.style({
                    transform: 'scaleY(1)',
                    'transform-origin': 'top'
                })),
            ]),
            animations.transition(SlideAnimationDirections.SLIDE_DOWN + " => " + SlideAnimationDirections.CLOSE, /*
                            SlideDirections.SLIDE_DOWN +
                            ' => ' +
                            SlideDirections.CLOSE,
                        */ [
                animations.style({
                    transform: 'scaleY(1)',
                    'transform-origin': 'top'
                }),
                animations.animate('150ms ease-out', animations.style({
                    transform: 'scaleY(0)',
                    'transform-origin': 'top'
                })),
            ]),
            animations.transition(SlideAnimationDirections.CLOSE +
                ' => ' +
                SlideAnimationDirections.SLIDE_UP, [
                animations.style({
                    transform: 'scaleY(0)',
                    'transform-origin': 'bottom'
                }),
                animations.animate('150ms ease-in', animations.style({
                    transform: 'scaleY(1)',
                    'transform-origin': 'bottom'
                })),
            ]),
            animations.transition(SlideAnimationDirections.SLIDE_UP +
                ' => ' +
                SlideAnimationDirections.CLOSE, [
                animations.style({
                    transform: 'scaleY(1)',
                    'transform-origin': 'bottom'
                }),
                animations.animate('150ms ease-out', animations.style({
                    transform: 'scaleY(0)',
                    'transform-origin': 'bottom'
                })),
            ])
        ]);
    }
    /**
     * @return {?}
     */
    function horizontalSlideAnimations() {
        return animations.trigger('horizontalTrigger', [
            animations.state(SlideAnimationDirections.CLOSE, animations.style({
                transform: 'scaleX(0)',
            })),
            animations.state(SlideAnimationDirections.SLIDE_RIGHT, animations.style({
                transform: 'scaleX(1)',
            })),
            animations.state(SlideAnimationDirections.SLIDE_LEFT, animations.style({
                transform: 'scaleX(1)',
            })),
            animations.transition(SlideAnimationDirections.CLOSE +
                ' => ' +
                SlideAnimationDirections.SLIDE_RIGHT, [
                animations.style({
                    transform: 'scaleX(0)',
                    'transform-origin': 'left'
                }),
                animations.animate('150ms ease-in', animations.style({
                    transform: 'scaleX(1)',
                    'transform-origin': 'left'
                })),
            ]),
            animations.transition(SlideAnimationDirections.SLIDE_RIGHT +
                ' => ' +
                SlideAnimationDirections.CLOSE, [
                animations.style({
                    transform: 'scaleX(1)',
                    'transform-origin': 'left'
                }),
                animations.animate('150ms ease-out', animations.style({
                    transform: 'scaleX(0)',
                    'transform-origin': 'left'
                })),
            ]),
            animations.transition(SlideAnimationDirections.CLOSE +
                ' => ' +
                SlideAnimationDirections.SLIDE_LEFT, [
                animations.style({
                    transform: 'scaleX(0)',
                    'transform-origin': 'right'
                }),
                animations.animate('150ms ease-in', animations.style({
                    transform: 'scaleX(1)',
                    'transform-origin': 'right'
                })),
            ]),
            animations.transition(SlideAnimationDirections.SLIDE_LEFT +
                ' => ' +
                SlideAnimationDirections.CLOSE, [
                animations.style({
                    transform: 'scaleX(1)',
                    'transform-origin': 'right'
                }),
                animations.animate('150ms ease-out', animations.style({
                    transform: 'scaleX(0)',
                    'transform-origin': 'right'
                })),
            ])
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * A sliding panel is a div element that can be
     * set to slide up, down, left, or right.
     *
     * It can be tied to a slidiing panel toggle
     * or can be shown or hidden by calling the
     * public members show, hide, or toggle.
     */
    var BBSlidingPanel = (function () {
        function BBSlidingPanel(cdRef) {
            this.cdRef = cdRef;
            /**
             * Specify the direction of the panels sliding animation.
             * Valid values: 'up', 'down', 'left', or 'right'
             */
            this.slideDirection = SlideDirections.DOWN;
            /**
             * Event for when the mouse enters the panel.
             */
            this.mouseEnterPanel = new core.EventEmitter();
            /**
             * Event for when the mouse leaves the panel.
             */
            this.mouseLeavePanel = new core.EventEmitter();
            /**
             * Event for when the mouse is over the panel.
             */
            this.mouseOverPanel = new core.EventEmitter();
            /**
             * Event for when the panel is clicked.
             */
            this.clickPanel = new core.EventEmitter();
            this.pinned = false;
            /**
             * Trigger for the horizontal animations.
             */
            this.horizontalState = SlideAnimationDirections.CLOSE;
            /**
             * Trigger for the vertical animations.
             */
            this.verticalState = SlideAnimationDirections.CLOSE;
        }
        Object.defineProperty(BBSlidingPanel.prototype, "isShowing", {
            get: /**
             * Returns whether the panel is open or closed.
             * @return {?}
             */ function () {
                return (this.horizontalState !== SlideAnimationDirections.CLOSE ||
                    this.verticalState !== SlideAnimationDirections.CLOSE);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Show the panel with a sliding animation.
         * @return {?}
         */
        BBSlidingPanel.prototype.show = /**
         * Show the panel with a sliding animation.
         * @return {?}
         */
            function () {
                switch (this.slideDirection) {
                    case SlideDirections.LEFT: {
                        this.horizontalState = SlideAnimationDirections.SLIDE_LEFT;
                        break;
                    }
                    case SlideDirections.RIGHT: {
                        this.horizontalState = SlideAnimationDirections.SLIDE_RIGHT;
                        break;
                    }
                    case SlideDirections.UP: {
                        this.verticalState = SlideAnimationDirections.SLIDE_UP;
                        break;
                    }
                    case SlideDirections.DOWN: {
                        this.verticalState = SlideAnimationDirections.SLIDE_DOWN;
                        break;
                    }
                    default: {
                        this.horizontalState = SlideAnimationDirections.CLOSE;
                        this.verticalState = SlideAnimationDirections.CLOSE;
                        break;
                    }
                }
                this.cdRef.markForCheck();
            };
        /**
         * Hide the panel with a sliding animation.
         * @return {?}
         */
        BBSlidingPanel.prototype.hide = /**
         * Hide the panel with a sliding animation.
         * @return {?}
         */
            function () {
                this.horizontalState = SlideAnimationDirections.CLOSE;
                this.verticalState = SlideAnimationDirections.CLOSE;
                this.cdRef.markForCheck();
            };
        /**
         * Toggle the panel state with a sliding animation.
         * @return {?}
         */
        BBSlidingPanel.prototype.toggle = /**
         * Toggle the panel state with a sliding animation.
         * @return {?}
         */
            function () {
                if (this.isShowing) {
                    this.hide();
                }
                else {
                    this.show();
                }
            };
        BBSlidingPanel.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-sliding-panel]',
                        template: "<ng-content></ng-content>",
                        styles: [""],
                        host: {
                            '[@horizontalTrigger]': 'horizontalState',
                            '[@verticalTrigger]': 'verticalState',
                            '[class.open]': 'isShowing',
                            '[class.closed]': '!isShowing',
                            '[class.pinned]': 'pinned',
                            '(mouseenter)': 'mouseEnterPanel.emit($event)',
                            '(mouseleave)': 'mouseLeavePanel.emit($event)',
                            '(mouseover)': 'mouseOverPanel.emit($event)',
                            '(click)': 'clickPanel.emit($event)',
                            '[class.bb-sliding-panel]': "'true'"
                        },
                        animations: [
                            verticalSlideAnimations(),
                            horizontalSlideAnimations(),
                        ],
                        exportAs: 'bbSlidingPanel',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        BBSlidingPanel.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        BBSlidingPanel.propDecorators = {
            slideDirection: [{ type: core.Input }],
            mouseEnterPanel: [{ type: core.Output }],
            mouseLeavePanel: [{ type: core.Output }],
            mouseOverPanel: [{ type: core.Output }],
            clickPanel: [{ type: core.Output }]
        };
        return BBSlidingPanel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Control a sliding panels shown or hidden state.
     *
     * Should only be attached to elements that have
     * a click event.
     */
    var BBSlidingPanelToggle = (function () {
        function BBSlidingPanelToggle(element) {
            var _this = this;
            this.element = element;
            /**
             * Controls whether the panel should open based
             * on a click event or not.
             */
            this.toggleOnClick = false;
            /**
             * Controls whether the panel should open
             * on mouse over or not.
             */
            this.showOnHover = false;
            /**
             * Controls whether the panel should close When
             * clicked outside the toggle or panel or not.
             */
            this.closeOnClickOutside = false;
            /**
             * Keep track of the previous pin state.
             * This is needed to determine if the
             * new pin state should actually cause a
             * transition or not.
             */
            this.previousPinnedState = false;
            this.showPanel = function () { return _this.onNextState({ hover: false, pin: true }); };
            this.hidePanel = function () { return _this.onNextState({ hover: false, pin: false }); };
            /**
             * Determine what the next panel state
             * should be based on the new hover and
             * pin states.
             */
            this.onNextState = function (nextStates) {
                if (nextStates.hover) {
                    if (_this.previousPinnedState && !nextStates.pin) {
                        _this.panel.hide();
                    }
                    else {
                        _this.panel.show();
                    }
                }
                else {
                    if (!_this.previousPinnedState && nextStates.pin) {
                        _this.panel.show();
                    }
                    else if (!nextStates.pin) {
                        _this.panel.hide();
                    }
                }
                _this.previousPinnedState = nextStates.pin;
                _this.panel.pinned = nextStates.pin;
            };
        }
        /**
         * @return {?}
         */
        BBSlidingPanelToggle.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.panel) {
                    throw new Error('No SlidingPanel component supplied to ' +
                        'the bb-sliding-panel-toggle directive ' +
                        '([bb-sliding-panel-toggle]="$PanelVariable").');
                }
                if (this.showHideSubscription && !this.showHideSubscription.closed) {
                    this.showHideSubscription.unsubscribe();
                }
                /*
                     * Streams of the events necessary
                     * for the logic of the toggle.
                     */
                var /** @type {?} */ documentClick$ = rxjs.fromEvent(document, 'click');
                var /** @type {?} */ toggleClick$ = rxjs.fromEvent(this.element.nativeElement, 'click');
                var /** @type {?} */ toggleMouseEnter$ = rxjs.fromEvent(this.element.nativeElement, 'mouseenter');
                var /** @type {?} */ toggleMouseLeave$ = rxjs.fromEvent(this.element.nativeElement, 'mouseleave');
                var /** @type {?} */ panelMouseEntered$ = this.panel.mouseEnterPanel.asObservable();
                var /** @type {?} */ panelMouseLeft$ = this.panel.mouseLeavePanel.asObservable();
                var /** @type {?} */ panelClick$ = this.panel.clickPanel.asObservable();
                /*
                     * Reduce both leaving events to
                     * a false emission.
                     */
                var /** @type {?} */ leaveBoth$ = toggleMouseLeave$
                    .pipe(operators.merge(panelMouseLeft$), operators.filter(function (_) { return _this.showOnHover; }), operators.map(function (_) { return false; }));
                /*
                     * Reduce both enter events to
                     * a true emission.
                     */
                var /** @type {?} */ enterEither$ = toggleMouseEnter$
                    .pipe(operators.merge(panelMouseEntered$), operators.filter(function (_) { return _this.showOnHover; }), operators.map(function (_) { return true; }));
                /*
                     * When the toggle is clicked
                     * stop the event from bubbling
                     * and toggle the pinned state.
                     */
                var /** @type {?} */ toggleClicked$ = toggleClick$
                    .pipe(operators.map(function (_) {
                    /*
                               * should probably be done with
                               * a do operator, once it works again,
                               * for both toggle clicked and panel
                               * clicked
                               */
                    event.stopPropagation();
                    return !_this.previousPinnedState;
                }));
                /*
                     * When the panel is clicked
                     * stop the event from bubbling
                     * and just continue to emit the
                     * previous pinned state.
                     */
                var /** @type {?} */ panelClicked$ = panelClick$
                    .pipe(operators.map(function (_) {
                    event.stopPropagation();
                    return _this.previousPinnedState;
                }));
                /*
                     * A document click is only
                     * triggered when the panel
                     * and the toggle don't prevent
                     * the bubbling so just emit
                     * false as the next pinned state.
                     */
                var /** @type {?} */ documentClicked$ = documentClick$
                    .pipe(operators.filter(function (_) { return _this.closeOnClickOutside; }), operators.map(function (_) { return false; }));
                /*
                     * Combine all the pinned state
                     * streams.
                     */
                var /** @type {?} */ nextPinnedState$ = rxjs.of(this.showOnInit)
                    .pipe(operators.merge(toggleClicked$, panelClicked$, documentClicked$));
                /*
                     * Combine all the mouse movement
                     * streams.
                     */
                var /** @type {?} */ isHovering$ = rxjs.of(false)
                    .pipe(operators.merge(leaveBoth$, enterEither$), /*
                      * 50 here is arbitrary but
                      * seems to be below the
                      * human threshhold for noticing
                      * the delay while letting
                      * slower systems have plenty of
                      * time to process the events.
                      *
                      * Maybe it should be configurable?
                      */ operators.debounceTime(50));
                /*
                     * Combine the hover and pinned state
                     * streams into a stream that determines
                     * whether the panel state needs to change.
                     */
                this.showHideSubscription =
                    isHovering$
                        .pipe(operators.combineLatest(nextPinnedState$), operators.map(function (states) { return ({ hover: states[0], pin: states[1] }); }))
                        .subscribe(this.onNextState);
            };
        /**
         * @return {?}
         */
        BBSlidingPanelToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.showHideSubscription && !this.showHideSubscription.closed) {
                    this.showHideSubscription.unsubscribe();
                }
            };
        BBSlidingPanelToggle.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-sliding-panel-toggle]',
                        host: {
                            '[class.open]': 'panel.isShowing',
                            '[class.closed]': '!panel.isShowing',
                            '[class.pinned]': 'panel.pinned',
                            '[class.bb-sliding-panel-toggle]': "'true'"
                        },
                        exportAs: 'bbSlidingPanelToggle'
                    },] },
        ];
        /** @nocollapse */
        BBSlidingPanelToggle.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        BBSlidingPanelToggle.propDecorators = {
            panel: [{ type: core.Input, args: ['bb-sliding-panel-toggle',] }],
            toggleOnClick: [{ type: core.Input }],
            showOnHover: [{ type: core.Input }],
            closeOnClickOutside: [{ type: core.Input }],
            showOnInit: [{ type: core.Input }]
        };
        return BBSlidingPanelToggle;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBSlidingPanelModule = (function () {
        function BBSlidingPanelModule() {
        }
        /**
         * @return {?}
         */
        BBSlidingPanelModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBSlidingPanelModule,
                    providers: []
                };
            };
        BBSlidingPanelModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            BBSlidingPanel,
                            BBSlidingPanelToggle,
                        ],
                        exports: [
                            BBSlidingPanel,
                            BBSlidingPanelToggle,
                        ]
                    },] },
        ];
        return BBSlidingPanelModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBCollapsingMenuModule = (function () {
        function BBCollapsingMenuModule() {
        }
        /**
         * @return {?}
         */
        BBCollapsingMenuModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBCollapsingMenuModule,
                    providers: []
                };
            };
        BBCollapsingMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BBCommonModule,
                            BBSlidingPanelModule
                        ],
                        declarations: [BBCollapsingMenu],
                        exports: [BBCollapsingMenu]
                    },] },
        ];
        return BBCollapsingMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} sub
     * @return {?}
     */
    function closeSubscription(sub) {
        if (sub && !sub.closed) {
            sub.unsubscribe();
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BBContentConductorConstructorToken = new core.InjectionToken('BBContainersConductorConstructorToken');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBContentDirective = (function () {
        function BBContentDirective(templateRef) {
            this.templateRef = templateRef;
        }
        BBContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-content]'
                    },] },
        ];
        /** @nocollapse */
        BBContentDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return BBContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBContentConductorService = (function () {
        function BBContentConductorService(constructor) {
            this.constructor = constructor;
        }
        /**
         * @template T
         * @param {?} containersQueryList
         * @param {?} contentsQueryList
         * @return {?}
         */
        BBContentConductorService.prototype.createContentConductor = /**
         * @template T
         * @param {?} containersQueryList
         * @param {?} contentsQueryList
         * @return {?}
         */
            function (containersQueryList, contentsQueryList) {
                return new this.constructor(containersQueryList, contentsQueryList);
            };
        BBContentConductorService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BBContentConductorService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [BBContentConductorConstructorToken,] }] }
            ];
        };
        return BBContentConductorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBContentContainerDirective = (function () {
        function BBContentContainerDirective(vcRef, ccService) {
            this.vcRef = vcRef;
            this.ccService = ccService;
            console.log('BBContentContainerDirective');
        }
        Object.defineProperty(BBContentContainerDirective.prototype, "viewContainer", {
            get: /**
             * @return {?}
             */ function () { return this.vcRef; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBContentContainerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                //this.ccService.registerContainer(this.containerName, this.vcRef);
                console.log('content container vcr:', this.vcRef);
            };
        BBContentContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-content-container]'
                    },] },
        ];
        /** @nocollapse */
        BBContentContainerDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: BBContentConductorService }
            ];
        };
        BBContentContainerDirective.propDecorators = {
            containerName: [{ type: core.Input, args: ['bb-content-container',] }]
        };
        return BBContentContainerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // unsupported: template constraints.
    /**
     * @template T
     */
    var 
    // unsupported: template constraints.
    /**
     * @template T
     */
    BBDefaultContentConductorService = (function () {
        function BBDefaultContentConductorService(containersQueryList, contentsQueryList) {
            this.containersQueryList = containersQueryList;
            this.contentsQueryList = contentsQueryList;
            this.containersMap = {};
        }
        /**
         * @template T
         * @param {?} containers
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.mapContainers = /**
         * @template T
         * @param {?} containers
         * @return {?}
         */
            function (containers) {
                return containers.reduce(function (map, container) {
                    map[container.containerName] = container.viewContainer;
                    return map;
                }, {});
            };
        /**
         * @param {?} initialContainer
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.init = /**
         * @param {?} initialContainer
         * @return {?}
         */
            function (initialContainer) {
                var _this = this;
                this.containers = this.containersQueryList.toArray();
                this.templates = this.contentsQueryList.toArray();
                this.containersMap = this.mapContainers(this.containers);
                this.containersSub = this.containersQueryList
                    .changes
                    .subscribe(function (c) {
                    _this.containers = c;
                    _this.mapContainers(_this.containers);
                });
                this.contentsSub = this.contentsQueryList
                    .changes
                    .subscribe(function (t) {
                    _this.templates = t;
                });
                if (initialContainer && this.templates) {
                    this.templates.map(function (template) {
                        return _this.containersMap[initialContainer]
                            .createEmbeddedView(template);
                    });
                }
            };
        /**
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.destroy = /**
         * @return {?}
         */
            function () {
                if (this.containersSub && !this.containersSub.closed) {
                    this.containersSub.unsubscribe();
                }
                if (this.contentsSub && !this.contentsSub.closed) {
                    this.contentsSub.unsubscribe();
                }
            };
        /**
         * @param {?} previousContainer
         * @param {?} nextContainer
         * @param {?} index
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.moveView = /**
         * @param {?} previousContainer
         * @param {?} nextContainer
         * @param {?} index
         * @return {?}
         */
            function (previousContainer, nextContainer, index) {
                index = index || this.containersMap[previousContainer].length;
                var /** @type {?} */ view = this.containersMap[previousContainer].detach(index);
                this.containersMap[nextContainer].insert(view);
            };
        /**
         * @param {?} container
         * @param {?=} index
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.detachView = /**
         * @param {?} container
         * @param {?=} index
         * @return {?}
         */
            function (container, index) {
                return this.containersMap[container].detach(index);
            };
        /**
         * @param {?} previousContainer
         * @param {?} nextContainer
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.moveViews = /**
         * @param {?} previousContainer
         * @param {?} nextContainer
         * @return {?}
         */
            function (previousContainer, nextContainer) {
                var _this = this;
                var /** @type {?} */ length = this.containersMap[previousContainer].length;
                var /** @type {?} */ viewsCache = [];
                for (var /** @type {?} */ i = 0; i < length; i++) {
                    viewsCache.push(this.containersMap[previousContainer].detach(0));
                }
                viewsCache.forEach(function (view) {
                    _this.containersMap[nextContainer].insert(view, _this.containersMap[nextContainer].length);
                });
            };
        /**
         * @param {?} container
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.detachViews = /**
         * @param {?} container
         * @return {?}
         */
            function (container) {
                var /** @type {?} */ detachedViews = [];
                var /** @type {?} */ length = this.containersMap[container].length;
                for (var /** @type {?} */ x = 0; x < length; x++) {
                    detachedViews.push(this.containersMap[container].detach(x));
                }
                return detachedViews;
            };
        /**
         * @param {?} container
         * @param {?} views
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.reattachViews = /**
         * @param {?} container
         * @param {?} views
         * @return {?}
         */
            function (container, views) {
                var _this = this;
                views.forEach(function (view) {
                    return _this.containersMap[container].insert(view);
                });
            };
        /**
         * @param {?} container
         * @param {?} view
         * @return {?}
         */
        BBDefaultContentConductorService.prototype.reattachView = /**
         * @param {?} container
         * @param {?} view
         * @return {?}
         */
            function (container, view) {
            };
        return BBDefaultContentConductorService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDefaultContentConductorModule = (function () {
        function BBDefaultContentConductorModule() {
        }
        /**
         * @return {?}
         */
        BBDefaultContentConductorModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDefaultContentConductorModule,
                    providers: [
                        {
                            provide: BBContentConductorConstructorToken,
                            useValue: BBDefaultContentConductorService
                        }
                    ]
                };
            };
        BBDefaultContentConductorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [],
                    },] },
        ];
        return BBDefaultContentConductorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBContentConductorComponent = (function () {
        function BBContentConductorComponent(ccService, vcRef) {
            this.ccService = ccService;
            this.vcRef = vcRef;
            this.cont = 'one';
        }
        /**
         * @return {?}
         */
        BBContentConductorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        BBContentConductorComponent.prototype.onToggle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ oldCont = this.cont;
                if (this.cont === 'one') {
                    this.cont = 'two';
                }
                else if (this.cont === 'two') {
                    this.cont = 'one';
                }
                this.conductor.moveViews(oldCont, this.cont);
            };
        /**
         * @return {?}
         */
        BBContentConductorComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        BBContentConductorComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.conductor = this.ccService
                    .createContentConductor(this.containers, this.contents);
                this.conductor.init(this.cont);
            };
        /**
         * @return {?}
         */
        BBContentConductorComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
            };
        BBContentConductorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bb-content-conductor]',
                        template: "<div>\n  <h4>One</h4>\n  <!--\n  <ng-container bb-content-container='one' *ngTemplateOutlet=\"contents.toArray()\"></ng-container>\n  -->\n  <div >\n    <div bb-content-container=\"one\"></div>\n  </div>\n\n  <!--\n  <ng-container *ngIf=\"cont === 'one'\">\n    <ng-container *ngFor=\"let template of contents.toArray()\">\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n    </ng-container>\n  </ng-container>\n  -->\n  \n</div>\n<div>\n  <h4>Two</h4>\n\n  <div >\n    <div bb-content-container=\"two\"></div>\n  </div>\n\n  <!--\n  <ng-container *ngIf=\"cont === 'two'\">\n    <ng-container *ngFor=\"let template of contents.toArray()\">\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n    </ng-container>\n  </ng-container>\n  -->\n</div>\n<button (click)=\"onToggle()\">Toggle</button>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        BBContentConductorComponent.ctorParameters = function () {
            return [
                { type: BBContentConductorService },
                { type: core.ViewContainerRef }
            ];
        };
        BBContentConductorComponent.propDecorators = {
            contents: [{ type: core.ContentChildren, args: [BBContentDirective, { read: core.TemplateRef, descendants: true },] }],
            containers: [{ type: core.ViewChildren, args: [BBContentContainerDirective,] }]
        };
        return BBContentConductorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBContentConductorModule = (function () {
        function BBContentConductorModule() {
        }
        /**
         * @return {?}
         */
        BBContentConductorModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBContentConductorModule,
                    providers: [BBContentConductorService]
                };
            };
        BBContentConductorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            BBContentDirective,
                            BBContentConductorComponent,
                            BBContentContainerDirective,
                        ],
                        exports: [
                            BBContentDirective,
                            BBContentConductorComponent,
                            BBContentContainerDirective
                        ]
                    },] },
        ];
        return BBContentConductorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragAndDropService = (function () {
        function DragAndDropService() {
            this.dropzones = [];
        }
        DragAndDropService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        DragAndDropService.ctorParameters = function () { return []; };
        return DragAndDropService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DropperDirective = (function () {
        function DropperDirective(el, renderer, dndService) {
            this.el = el;
            this.renderer = renderer;
            this.dndService = dndService;
            this.bbstart = new core.EventEmitter();
            this.bbend = new core.EventEmitter();
            el.nativeElement.draggable = true;
            el.nativeElement.dragstart = this.dragstart;
            el.nativeElement.dragend = this.dragend;
        }
        /**
         * @return {?}
         */
        DropperDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.bbdropperClass) {
                    this.renderer.addClass(this.el.nativeElement, this.bbdropperClass);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropperDirective.prototype.dragstart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.bbholdingClass !== undefined) {
                    this.renderer.addClass(this.el.nativeElement, this.bbholdingClass);
                }
                event.dataTransfer.setData('text/plain', this.bbpayload || null);
                this.dndService.el = this.el;
                if (this.bbdropperId) {
                    this.bbstart.emit(this.bbdropperId);
                }
            };
        /**
         * @return {?}
         */
        DropperDirective.prototype.dragend = /**
         * @return {?}
         */
            function () {
                if (this.bbholdingClass !== undefined) {
                    this.renderer.removeClass(this.el.nativeElement, this.bbholdingClass);
                }
                if (this.bbdropperId) {
                    this.bbstart.emit(this.bbdropperId);
                }
            };
        DropperDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbDropper]'
                    },] },
        ];
        /** @nocollapse */
        DropperDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: DragAndDropService }
            ];
        };
        DropperDirective.propDecorators = {
            name: [{ type: core.Input, args: ['bbdropper',] }],
            bbdropperClass: [{ type: core.Input, args: ['bbdropperClass',] }],
            bbholdingClass: [{ type: core.Input, args: ['bbholdingClass',] }],
            bbpayload: [{ type: core.Input, args: ['bbpayload',] }],
            bbdropperId: [{ type: core.Input, args: ['bbdropperId',] }],
            bbstart: [{ type: core.Output }],
            bbend: [{ type: core.Output }],
            dragstart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
            dragend: [{ type: core.HostListener, args: ['dragend',] }]
        };
        return DropperDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DropZoneDirective = (function () {
        function DropZoneDirective(el, dndService, renderer) {
            this.el = el;
            this.dndService = dndService;
            this.renderer = renderer;
            this.bbdata = new core.EventEmitter();
            this.bbenter = new core.EventEmitter();
            this.bbleave = new core.EventEmitter();
            this.bbdrop = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        DropZoneDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.bbdropzoneClass !== undefined) {
                    this.renderer.addClass(this.el.nativeElement, this.bbdropzoneHoverClass);
                }
                if (!this.dndService.dropzones.includes(this.name)) {
                    this.dndService.dropzones.push(this.name);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.dragover = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
            };
        /**
         * @return {?}
         */
        DropZoneDirective.prototype.dragenter = /**
         * @return {?}
         */
            function () {
                if (this.bbdropzoneHoverClass) {
                    this.renderer.addClass(this.el.nativeElement, this.bbdropzoneHoverClass);
                }
                if (this.bbdropzoneId) {
                    this.bbenter.emit(this.bbdropzoneId);
                }
            };
        /**
         * @return {?}
         */
        DropZoneDirective.prototype.dragleave = /**
         * @return {?}
         */
            function () {
                if (this.bbdropzoneHoverClass) {
                    this.renderer.removeClass(this.el.nativeElement, this.bbdropzoneHoverClass);
                }
                if (this.bbdropzoneId) {
                    this.bbleave.emit(this.bbdropzoneId);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                this.renderer.removeClass(this.el.nativeElement, this.bbdropzoneHoverClass);
                var /** @type {?} */ dropped = this.dndService.el.nativeElement;
                if (dropped.attributes.bbdropper.value === this.name) {
                    this.renderer.removeChild(this.dndService.el.nativeElement.parentNode, this.dndService.el.nativeElement);
                    this.renderer.appendChild(this.el.nativeElement, this.dndService.el.nativeElement);
                    if (dropped.attributes.bbpayload) {
                        this.bbdata.emit(dropped.attributes.bbpayload.value);
                    }
                }
                if (this.bbdropzoneId) {
                    this.bbdrop.emit(this.bbdropzoneId);
                }
            };
        DropZoneDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbDropZone]'
                    },] },
        ];
        /** @nocollapse */
        DropZoneDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: DragAndDropService },
                { type: core.Renderer2 }
            ];
        };
        DropZoneDirective.propDecorators = {
            name: [{ type: core.Input, args: ['bbdropzone',] }],
            bbdropzoneClass: [{ type: core.Input, args: ['bbdropzoneClass',] }],
            bbdropzoneHoverClass: [{ type: core.Input, args: ['bbdropzoneHoverClass',] }],
            bbdropzoneId: [{ type: core.Input, args: ['bbdropzoneId',] }],
            bbdata: [{ type: core.Output }],
            bbenter: [{ type: core.Output }],
            bbleave: [{ type: core.Output }],
            bbdrop: [{ type: core.Output }],
            dragover: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            dragenter: [{ type: core.HostListener, args: ['dragenter',] }],
            dragleave: [{ type: core.HostListener, args: ['dragleave',] }],
            drop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
        };
        return DropZoneDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDragAndDropModule = (function () {
        function BBDragAndDropModule() {
        }
        /**
         * @return {?}
         */
        BBDragAndDropModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDragAndDropModule,
                    providers: [DragAndDropService]
                };
            };
        BBDragAndDropModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            DropperDirective,
                            DropZoneDirective,
                        ],
                        exports: [
                            DropperDirective,
                            DropZoneDirective,
                        ]
                    },] },
        ];
        return BBDragAndDropModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ bbDnDType = "bb/dnd";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDragAndDropService = (function () {
        function BBDragAndDropService() {
        }
        BBDragAndDropService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BBDragAndDropService.ctorParameters = function () { return []; };
        return BBDragAndDropService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * BB Draggable Structural Directive
     */
    var BBDraggableDirective = (function () {
        /**
         *
         * @param dndService
         * @param templateRef
         */
        function BBDraggableDirective(dndService, templateRef) {
            this.dndService = dndService;
            this.templateRef = templateRef;
            this.dragStartedOnView = new core.EventEmitter();
            this.dragEndedOnView = new core.EventEmitter();
            /**
             *
             */
            this._isBeingDragged = false;
            /**
             *
             */
            this.context = new DraggableContext();
        }
        Object.defineProperty(BBDraggableDirective.prototype, "isBeingDragged", {
            get: /**
             *
             * @return {?}
             */ function () {
                return this._isBeingDragged;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDraggableDirective.prototype, "draggableTemplateRef", {
            get: /**
             *
             * @return {?}
             */ function () {
                return this.templateRef;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDraggableDirective.prototype, "isDragged", {
            set: /**
             *
             * @param {?} dragged
             * @return {?}
             */ function (dragged) {
                this._isBeingDragged = dragged;
                if (this._isBeingDragged) ;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         */
        /**
         *
         * @return {?}
         */
        BBDraggableDirective.prototype.ngOnInit = /**
         *
         * @return {?}
         */
            function () {
                /*
                    this.embeddedTemplateRef =
                      this.viewContainer.createEmbeddedView(this.templateRef);
                    this.registerDragAndDropEvents(this.embeddedTemplateRef.rootNodes[0]);
                    this.draggedViewRef = this.viewContainer.get(0);
                    */
            };
        /**
         *
         */
        /**
         *
         * @return {?}
         */
        BBDraggableDirective.prototype.ngOnDestroy = /**
         *
         * @return {?}
         */
            function () {
                closeSubscription(this.dragStartSubscription);
                closeSubscription(this.dragEndSubscription);
            };
        /**
         *
         * @param target
         */
        /**
         *
         * @param {?} view
         * @return {?}
         */
        BBDraggableDirective.prototype.registerDragAndDropEvents = /**
         *
         * @param {?} view
         * @return {?}
         */
            function (view) {
                var _this = this;
                this.draggableViewRef = view;
                var /** @type {?} */ target = (view.rootNodes[0]);
                target.setAttribute("draggable", "true");
                this.dragStartSubscription =
                    rxjs.fromEvent(target, "dragstart")
                        .subscribe(function (event) {
                        event.dataTransfer.setData(bbDnDType, 'bbdraggable');
                        //event.dataTransfer.effectAllowed = "move";
                        //event.dataTransfer.setDragImage(
                        //  target.cloneNode(true) as HTMLElement,0,0);
                        var /** @type {?} */ rect = event.srcElement.getBoundingClientRect();
                        var /** @type {?} */ y = rect.top + (rect.height / 2);
                        var /** @type {?} */ x = rect.left + (rect.width / 2);
                        console.log(x, y);
                        var /** @type {?} */ e = {
                            view: _this.draggableViewRef,
                            mouseOffset: {
                                offsetX: event.clientX - x,
                                offsetY: event.clientY - y
                            }
                        };
                        /*
                                  let center = document.createElement("div") as HTMLDivElement;
                                  center.style.position = 'absolute';
                                  center.style.left = `${mouseOffset.offsetX}px`;
                                  center.style.top = `${mouseOffset.offsetY}px`;
                                  center.style.borderRadius= "20px"
                                  center.style.height = "20px";
                                  center.style.width= "20px";
                                  
                                  let i = new Image();
                                  
                                  let clone = event.srcElement.cloneNode(true) as HTMLLIElement;
                                  clone.appendChild(center);
                                  i.appendChild(clone);
                                  console.log(i);
                                  event.dataTransfer.setDragImage(
                                     i,event.pageX, event.pageY);
                                  */
                        /*
                                  event.dataTransfer.setDragImage(
                                    event.srcElement,event.clientX, event.clientY);
                                  */
                        /* Chrome calls dragend if the dom is changed during  */
                        /* drag start so in order to not call dragend         */
                        /* immediately we have to fire the dom manipulations  */
                        /* outside of the event                               */
                        setTimeout(function () {
                            _this.dragStartedOnView.next(e);
                        });
                    }, function (err) { return console.log(err); }, function () { });
                this.dragEndSubscription =
                    rxjs.fromEvent(target, "dragend")
                        .subscribe(function (event) {
                        //this.isDragged = false;
                        //this.isDragged = false;
                        _this.dragEndedOnView.next(_this.draggableViewRef);
                    }, function (err) { return console.log(err); }, function () { });
            };
        BBDraggableDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbDraggable]'
                    },] },
        ];
        /** @nocollapse */
        BBDraggableDirective.ctorParameters = function () {
            return [
                { type: BBDragAndDropService },
                { type: core.TemplateRef }
            ];
        };
        BBDraggableDirective.propDecorators = {
            dragStartedOnView: [{ type: core.Output }],
            dragEndedOnView: [{ type: core.Output }]
        };
        return BBDraggableDirective;
    }());
    var DraggableContext = (function () {
        function DraggableContext() {
            this.implicit$ = null;
        }
        return DraggableContext;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDragAndDropContainerComponent = (function () {
        function BBDragAndDropContainerComponent(dndService, hostElementRef) {
            var _this = this;
            this.dndService = dndService;
            this.hostElementRef = hostElementRef;
            this.draggableEmbeddedViews = [];
            this.dragSubscriptions = [];
            this.DefaultDragLocationTarget = {
                lowIndex: -1,
                highIndex: -1,
                viewBeingDragged: null
            };
            this.dragLocation = this.DefaultDragLocationTarget;
            /**
             *
             * @param draggable
             * @param index
             */
            this.initDraggable = function (draggable, index) {
                var /** @type {?} */ embeddedViewRef = _this.dndContainer.createEmbeddedView(draggable.draggableTemplateRef);
                _this.draggableEmbeddedViews.push(embeddedViewRef);
                draggable.registerDragAndDropEvents(embeddedViewRef);
                _this.dragSubscriptions.push(draggable.dragStartedOnView.subscribe(_this.onDragStart));
                _this.dragSubscriptions.push(draggable.dragEndedOnView.subscribe(_this.onDragEnd));
            };
            /**
             *
             * @param event
             */
            this.onDragStart = function (event) {
                _this.dragStartEvent = event;
                _this.draggingMouseOffset = event.mouseOffset;
                var /** @type {?} */ viewIndex = _this.dndContainer.indexOf(event.view);
                _this.dndContainer.detach(viewIndex);
                _this.draggableEmbeddedViews.splice(viewIndex, 1);
            };
            /**
             *
             * @param view
             */
            this.onDragEnd = function (view) {
                //this.dndContainer.insert(view);
                return;
            };
            this.onDragEnter = function (event) {
                console.log("dragenter");
                event.dataTransfer.dropEffect = "move";
                event.preventDefault();
            };
            this.onDragOver = function (event) {
                console.log("dragover");
                // console.log(event.dataTransfer.types);
                var /** @type {?} */ shortestDistance = Number.MAX_SAFE_INTEGER;
                var /** @type {?} */ closestView = null;
                var /** @type {?} */ closestIndex = 0;
                var /** @type {?} */ nextClosestIndex = 0;
                _this.draggableEmbeddedViews
                    .filter(function (view) { return view !== _this.dragStartEvent.view; })
                    .map(function (view) {
                    var /** @type {?} */ element = ((view.rootNodes[0]));
                    var /** @type {?} */ rect = element.getBoundingClientRect();
                    return {
                        view: view,
                        x: rect.left + (rect.width / 2),
                        y: rect.top + (rect.height / 2)
                    };
                })
                    .forEach(function (centerCoordinates, i) {
                    var /** @type {?} */ dy = _this.calculate1DimensionDistance(centerCoordinates.y, event.clientY + _this.dragStartEvent.mouseOffset.offsetY);
                    console.log(i + " = " + dy + " y's: " + centerCoordinates.y + " - " + event.clientY + " + " + _this.dragStartEvent.mouseOffset.offsetY);
                    var /** @type {?} */ distance = Math.abs(dy);
                    if (distance < shortestDistance) {
                        shortestDistance = distance;
                        closestView = centerCoordinates.view;
                        closestIndex = i;
                        // determine which side of the closest draggable
                        // the draggable being dragged is on and set the
                        // next closest accordingly
                        nextClosestIndex = (dy < 0) ? closestIndex + 1 : closestIndex - 1;
                        _this.dragLocation = {
                            lowIndex: Math.min(closestIndex, nextClosestIndex),
                            highIndex: Math.max(closestIndex, nextClosestIndex),
                            viewBeingDragged: _this.dragStartEvent.view
                        };
                    }
                });
                event.preventDefault();
                /* this signifies that the container is a valid drop target  */
                /* TODO: doesn't work at the moment? the BBDnDType is never */
                /* properly attached to the event even though I am setting   */
                /* the type inside the draggable directive event...          */
                /*
                    if(event.dataTransfer.types.includes(bbDnDType)) {
                      console.log('bb transfer detected');
                    }
                    */
            };
            this.onDrop = function (event) {
                _this.dndContainer.insert(_this.dragLocation.viewBeingDragged, _this.dragLocation.highIndex);
                _this.draggableEmbeddedViews.splice(_this.dragLocation.highIndex, 0, /** @type {?} */ (_this.dragLocation.viewBeingDragged));
            };
            console.warn('BB Drag and Drop is still under development.');
        }
        /**
         * @return {?}
         */
        BBDragAndDropContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.dragSubscriptions.push(rxjs.fromEvent(this.hostElementRef.nativeElement, "dragenter")
                    .subscribe(this.onDragEnter));
                this.dragSubscriptions.push(rxjs.fromEvent(this.hostElementRef.nativeElement, "dragover")
                    .pipe(operators.debounceTime(50))
                    .subscribe(this.onDragOver));
                this.dragSubscriptions.push(rxjs.fromEvent(this.hostElementRef.nativeElement, "dragover")
                    .subscribe(function (e) {
                    return e.preventDefault();
                }));
                this.dragSubscriptions.push(rxjs.fromEvent(this.hostElementRef.nativeElement, "drop")
                    .subscribe(this.onDrop));
            };
        /**
         * @return {?}
         */
        BBDragAndDropContainerComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.dragSubscriptions.push(this.draggablesQL
                    .changes
                    .subscribe(function (draggables) {
                }));
                console.log("container");
                console.log(this.dndContainer);
                this.draggablesQL.map(this.initDraggable);
            };
        /**
         * @return {?}
         */
        BBDragAndDropContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.dragSubscriptions.forEach(function (sub) {
                    if (!sub.closed) {
                        sub.unsubscribe();
                    }
                });
            };
        /**
         *
         * @param {?} p1
         * @param {?} p2
         * @return {?}
         */
        BBDragAndDropContainerComponent.prototype.calculate1DimensionDistance = /**
         *
         * @param {?} p1
         * @param {?} p2
         * @return {?}
         */
            function (p1, p2) {
                return p1 - p2;
            };
        /**
         *
         * @param {?} x1
         * @param {?} x2
         * @param {?} y1
         * @param {?} y2
         * @return {?}
         */
        BBDragAndDropContainerComponent.prototype.calculate2DimensionDistance = /**
         *
         * @param {?} x1
         * @param {?} x2
         * @param {?} y1
         * @param {?} y2
         * @return {?}
         */
            function (x1, x2, y1, y2) {
                return Math.sqrt(Math.pow(this.calculate1DimensionDistance(x1, x2), 2) +
                    Math.pow(this.calculate1DimensionDistance(y1, y2), 2));
            };
        BBDragAndDropContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bbDnDContainer]',
                        template: "<ng-container #dndContainer></ng-container>\n\n<ng-content></ng-content>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        BBDragAndDropContainerComponent.ctorParameters = function () {
            return [
                { type: BBDragAndDropService },
                { type: core.ElementRef }
            ];
        };
        BBDragAndDropContainerComponent.propDecorators = {
            draggablesQL: [{ type: core.ContentChildren, args: [BBDraggableDirective,] }],
            dndContainer: [{ type: core.ViewChild, args: ["dndContainer", { read: core.ViewContainerRef },] }]
        };
        return BBDragAndDropContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDragAndDropComponentModule = (function () {
        function BBDragAndDropComponentModule() {
        }
        /**
         * @return {?}
         */
        BBDragAndDropComponentModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDragAndDropComponentModule,
                    providers: []
                };
            };
        BBDragAndDropComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            BBDragAndDropContainerComponent,
                            BBDraggableDirective
                        ],
                        exports: [
                            BBDragAndDropContainerComponent,
                            BBDraggableDirective
                        ],
                        providers: [BBDragAndDropService]
                    },] },
        ];
        return BBDragAndDropComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BBDropdownInputServiceToken = new core.InjectionToken('DdIService');
    var BBDropdownInput = (function () {
        function BBDropdownInput(_diServ, ele, chDetRef) {
            this._diServ = _diServ;
            this.ele = ele;
            this.chDetRef = chDetRef;
            this.applyHostClass = true;
            /**
             * Toggles whether the displayText should be set into the input
             * box when an item is 'chosen'.  Defaults to true.
             */
            this.setTextOnChoice = true;
            /**
             * Set the place holder text on the input element.
             */
            this.placeholderText = '';
            /**
             * Sets how long, in ms, the delay is
             * between updates to the DropdownInputService
             * when the value of the input element
             * has been changed.
             *
             * Defaults to 400ms.
             */
            this.inputValueChangeDelayms = 400;
            /**
             * The auto selection mode determine which item will be selected if the
             * choose item method is executed when no item has been specifically
             * selected by user interaction.
             *
             * 'none'    - nothing is chosen without user interaction
             *
             * 'lazy'    - the first item in the list is chosen
             *
             * 'exact'   - if any item's displayText matches the input exactly,
             *             ignoring case, the first match is chosen
             *
             * 'only'    - if there is only a single item in the list it is chosen
             *
             * 'partial' - math the first item in the list that, ignoring case,
             *             exactly matches the current value
             */
            this.autoSelectionMode = 'none';
            /**
             * The index of the auto selection mode selection made.
             */
            this.autoSelectedIndex = -1;
            this.selectedIndex = -1;
            /**
             * Emit the data for the list item selected either through
             * a mouse click or hitting enter when it is in the selected
             * state.
             */
            this.listItemChosen = new core.EventEmitter();
            this.outsideClick = new core.EventEmitter();
            this.insideClick = new core.EventEmitter();
            this.clickedInside = new rxjs.BehaviorSubject(false);
            this.wasInsideClicked = false;
            this.wasFocused = false;
            this.numItems = 0;
            this.diServ = _diServ;
        }
        Object.defineProperty(BBDropdownInput.prototype, "hasItems", {
            get: /**
             * Return true if the service has returned
             * at least 1 item to the component.
             * @return {?}
             */ function () {
                return this.numItems > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDropdownInput.prototype, "isOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this.panel.isShowing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBDropdownInput.prototype, "inputElement", {
            get: /**
             * @return {?}
             */ function () {
                return ((this.inputElementRef.nativeElement));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBDropdownInput.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.maxItems) {
                    this.diServ.setMaxItems(this.maxItems);
                }
                /*
                     * Track the value changes of the input element
                     * without bringing in angular forms to keep
                     * the requirements for bb as low as possible.
                     */
                this.inputSub =
                    rxjs.fromEvent(this.inputElement, 'keyup')
                        .pipe(operators.map(function (event) { return ((event.target)).value; }), operators.debounceTime(this.inputValueChangeDelayms), operators.distinctUntilChanged())
                        .subscribe(function (newText) {
                        _this.diServ.setSearchText(newText);
                    }, function (err) { return console.log(err); }, function () {
                        /*done*/
                    });
                this.itemsSub = this.diServ.items$
                    .pipe(operators.map(function (items) { return items ? items.length : -1; }))
                    .subscribe(function (num) {
                    _this.numItems = num;
                    if (_this.hasItems) {
                        _this.panel.show();
                    }
                    else {
                        _this.panel.hide();
                    }
                    _this.chDetRef.markForCheck();
                    _this.chDetRef.detectChanges();
                }, function (err) { return console.log(err); }, function () {
                    /*done*/
                });
            };
        /**
         * @return {?}
         */
        BBDropdownInput.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.inputSub.unsubscribe();
                this.itemsSub.unsubscribe();
                this.diServ.clearItems();
            };
        /**
         * Clear any previous selection criteria and
         * perform a new auto selection.
         */
        /**
         * Clear any previous selection criteria and
         * perform a new auto selection.
         * @param {?} containers
         * @return {?}
         */
        BBDropdownInput.prototype.onNewItemContainers = /**
         * Clear any previous selection criteria and
         * perform a new auto selection.
         * @param {?} containers
         * @return {?}
         */
            function (containers) {
                this.clearAutoSelection();
                this.clearSelection();
                this.dynamicContainers = containers;
                if (this.dynamicContainers && this.dynamicContainers.length > 0) {
                    this.autoSelectItem();
                }
            };
        /**
         * Choose either the currently selected item or
         * the auto chosen item and emit it.
         * @return {?}
         */
        BBDropdownInput.prototype.chooseCurrentItem = /**
         * Choose either the currently selected item or
         * the auto chosen item and emit it.
         * @return {?}
         */
            function () {
                var /** @type {?} */ currentItem;
                if (this.selectedIndex >= 0) {
                    currentItem = this.getCurrentItem(this.selectedIndex);
                }
                else {
                    if (this.autoSelectedIndex >= 0) {
                        currentItem = this.getCurrentItem(this.autoSelectedIndex);
                    }
                }
                if (currentItem) {
                    if (this.setTextOnChoice) {
                        this.inputElement.value = currentItem.matchText;
                    }
                    this.listItemChosen.emit(currentItem);
                    this.clearSelection();
                }
            };
        /**
         * Return a data structure of the dynamic component
         * described by the index value.
         * @param {?} index
         * @return {?}
         */
        BBDropdownInput.prototype.getCurrentItem = /**
         * Return a data structure of the dynamic component
         * described by the index value.
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return {
                    component: this.dynamicContainers[index].currentCompRef.instance,
                    index: index,
                    matchText: this.list.dynamicComponentsData[index].matchText,
                };
            };
        /**
         * @return {?}
         */
        BBDropdownInput.prototype.autoSelectItem = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var /** @type {?} */ index = -1;
                switch (this.autoSelectionMode) {
                    case 'none': {
                        // do nothing
                        break;
                    }
                    case 'lazy': {
                        if (this.dynamicContainers) {
                            index = 0;
                        }
                        break;
                    }
                    case 'exact': {
                        if (this.dynamicContainers) {
                            var /** @type {?} */ containerIndex_1 = -1;
                            this.list.dynamicComponentsData.find(function (cnt, i) {
                                if (cnt.matchText.toLowerCase() ===
                                    _this.inputElement.value.toLowerCase()) {
                                    containerIndex_1 = i;
                                    return true;
                                }
                            });
                            if (containerIndex_1 >= 0) {
                                index = containerIndex_1;
                            }
                        }
                        break;
                    }
                    case 'partial': {
                        if (this.dynamicContainers) {
                            var /** @type {?} */ containerIndex_2 = -1;
                            this.list.dynamicComponentsData.find(function (cnt, i) {
                                if (cnt.matchText.toLowerCase()
                                    .substr(0, _this.inputElement.value.length) ===
                                    _this.inputElement.value.toLowerCase()) {
                                    containerIndex_2 = i;
                                    return true;
                                }
                            });
                            if (containerIndex_2 >= 0) {
                                index = containerIndex_2;
                            }
                        }
                        break;
                    }
                    case 'only': {
                        if (this.dynamicContainers && this.dynamicContainers.length === 1) {
                            index = 0;
                        }
                        break;
                    }
                }
                if (index != this.autoSelectedIndex) {
                    this.clearAutoSelection();
                    if (index >= 0) {
                        this.list.changeAutoSelection(index, true);
                    }
                    this.autoSelectedIndex = index;
                }
            };
        /**
         * Clear current auto selection
         * @return {?}
         */
        BBDropdownInput.prototype.clearAutoSelection = /**
         * Clear current auto selection
         * @return {?}
         */
            function () {
                if (this.autoSelectedIndex >= 0) {
                    this.list.changeAutoSelection(this.autoSelectedIndex, false);
                    this.autoSelectedIndex = -1;
                }
            };
        /**
         * Select previous, wrapping
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.selectPreviousListItem = /**
         * Select previous, wrapping
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.getNextSelection(-1);
            };
        /**
         * Select next, wrapping
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.selectNextListItem = /**
         * Select next, wrapping
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.getNextSelection(1);
            };
        /**
         * Get the next selection based on the indexChange
         * and wrapping around the array of items.
         * @param {?} indexChange
         * @return {?}
         */
        BBDropdownInput.prototype.getNextSelection = /**
         * Get the next selection based on the indexChange
         * and wrapping around the array of items.
         * @param {?} indexChange
         * @return {?}
         */
            function (indexChange) {
                if (this.dynamicContainers && this.dynamicContainers.length > 0) {
                    this.list.changeSelection(this.selectedIndex, false);
                    // move selection index
                    this.selectedIndex += indexChange;
                    // wrap the selection
                    if (this.selectedIndex < 0) {
                        this.selectedIndex = this.dynamicContainers.length - 1;
                    }
                    else if (this.selectedIndex >= this.dynamicContainers.length) {
                        this.selectedIndex = 0;
                    }
                    // set the selection
                    this.list.changeSelection(this.selectedIndex, true);
                    // the container element is considered to be the angular binding comment, so we have to go up 1 level to the li element
                    var /** @type {?} */ listElement = this.list.listElements[this.selectedIndex];
                    var /** @type {?} */ containerElement = ((this.panelElementRef.nativeElement));
                    // check if item is in view
                    var /** @type {?} */ inViewData = this.elementOffsetFromView(listElement, containerElement);
                    if (!inViewData.inView) {
                        containerElement.scrollTop += inViewData.scrollBy;
                    }
                }
            };
        /**
         * clear current selection
         * @return {?}
         */
        BBDropdownInput.prototype.clearSelection = /**
         * clear current selection
         * @return {?}
         */
            function () {
                if (this.selectedIndex >= 0) {
                    this.list.changeSelection(this.selectedIndex, false);
                    this.selectedIndex = -1;
                }
            };
        /**
         * Determine if an element is within the view of the container element
         * and if it isn't also determine the vertical offset from being in view
         * it is at.
         * @param {?} listElement the element to determine if it is in view
         * @param {?} container the viewing container of the element
         * @return {?}
         */
        BBDropdownInput.prototype.elementOffsetFromView = /**
         * Determine if an element is within the view of the container element
         * and if it isn't also determine the vertical offset from being in view
         * it is at.
         * @param {?} listElement the element to determine if it is in view
         * @param {?} container the viewing container of the element
         * @return {?}
         */
            function (listElement, container) {
                var /** @type {?} */ listRec = listElement.getBoundingClientRect();
                var /** @type {?} */ contRec = container.getBoundingClientRect();
                var /** @type {?} */ topViz = listRec.top >= contRec.top;
                var /** @type {?} */ botViz = listRec.bottom <= contRec.bottom;
                var /** @type {?} */ inViewData = {
                    inView: topViz && botViz,
                    scrollBy: 0
                };
                if (!botViz) {
                    inViewData.scrollBy = listRec.bottom - contRec.bottom;
                }
                else if (!topViz) {
                    inViewData.scrollBy = -(contRec.top - listRec.top);
                }
                return inViewData;
            };
        /* Event Handlers */
        /**
         * Read for extra control keys pressed, up and down arrows and enter,
         * and take the appropriate action based on them.
         * Up Arrow - select the previous item on the list, or the last item if none has been selected yet
         * Down Arrow - select the next item on the list, or the first if none has been selected
         * Enter - 'choose' the currently selected item
         * @param e
         */
        /**
         * Read for extra control keys pressed, up and down arrows and enter,
         * and take the appropriate action based on them.
         * Up Arrow - select the previous item on the list, or the last item if none has been selected yet
         * Down Arrow - select the next item on the list, or the first if none has been selected
         * Enter - 'choose' the currently selected item
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onKeyDown = /**
         * Read for extra control keys pressed, up and down arrows and enter,
         * and take the appropriate action based on them.
         * Up Arrow - select the previous item on the list, or the last item if none has been selected yet
         * Down Arrow - select the next item on the list, or the first if none has been selected
         * Enter - 'choose' the currently selected item
         * @param {?} e
         * @return {?}
         */
            function (e) {
                switch (e.keyCode) {
                    case EventKeys.UPARROW:
                        this.clearAutoSelection();
                        this.selectPreviousListItem(e);
                        e.preventDefault();
                        break;
                    case EventKeys.DOWNARROW:
                        this.clearAutoSelection();
                        this.selectNextListItem(e);
                        e.preventDefault();
                        break;
                    case EventKeys.ENTER:
                        this.chooseCurrentItem();
                        e.preventDefault();
                        break;
                    default:
                        // do nothing
                        break;
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onOutsideClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                if (!this.wasInsideClicked) {
                    this.wasFocused = false;
                    setTimeout(function (_) {
                        if (!_this.wasFocused) {
                            _this.panel.hide();
                            _this.chDetRef.markForCheck();
                            _this.chDetRef.detectChanges();
                        }
                    }, 150);
                }
                this.wasInsideClicked = false;
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onInsideClick = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.wasInsideClicked = true;
                this.wasFocused = true;
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onHostFocusIn = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (this.hasItems) {
                    this.panel.show();
                    this.chDetRef.markForCheck();
                    this.chDetRef.detectChanges();
                }
                this.wasFocused = true;
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onHostFocusOut = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                this.wasFocused = false;
                setTimeout(function (_) {
                    if (!_this.wasFocused) {
                        _this.panel.hide();
                        _this.chDetRef.markForCheck();
                    }
                }, 150);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onListItemMouseOver = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.clearAutoSelection();
                this.clearSelection();
                this.selectedIndex = e.index;
                this.list.changeSelection(this.selectedIndex, true);
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInput.prototype.onListItemClicked = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.selectedIndex = e.index;
                this.list.changeSelection(this.selectedIndex, true);
                this.chooseCurrentItem();
            };
        BBDropdownInput.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-dropdown-input]',
                        template: "<div class=\"dropdown-anchor\">\n  <input #dropdownInput\n\t\t (keydown)=\"onKeyDown($event)\"\n\t\t [attr.placeholder]=\"placeholderText\"/>\n  \t<div bb-sliding-panel\n\t     class=\"results\" \n\t\t slideDirection=\"down\"\n\t\t #panel=\"bbSlidingPanel\">\n\t\t <ul bb-dropdown-input-items-list\n\t\t \t#dropdownList\n\t\t    [dynamicComponentsData]=\"diServ.items$ | async\"\n\t\t\t(listItemMouseOver)=\"onListItemMouseOver($event)\"\n\t\t\t(listItemClick)=\"onListItemClicked($event)\"\n\t\t\t(newContainers)=\"onNewItemContainers($event)\">\n\t\t </ul>\n  \t</div>\t\n</div>\n",
                        styles: ["div.dropdown-anchor{position:relative}.dropdown-anchor>div.bb-sliding-panel{position:absolute}.dropdown-anchor>.bb-sliding-panel ul.bb-dropdown-input-items-list{display:flex;flex:1;flex-direction:column;padding-left:0;list-style:none}"],
                        host: {
                            '(focusout)': "onHostFocusOut($event)",
                            '(focusin)': "onHostFocusIn($event)",
                        },
                        exportAs: 'bbDropdownInput',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                    },] },
        ];
        /** @nocollapse */
        BBDropdownInput.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return BBDropdownInputServiceToken; }),] }] },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        BBDropdownInput.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-dropdown-input',] }],
            maxItems: [{ type: core.Input }],
            setTextOnChoice: [{ type: core.Input }],
            placeholderText: [{ type: core.Input }],
            inputValueChangeDelayms: [{ type: core.Input }],
            autoSelectionMode: [{ type: core.Input }],
            listItemChosen: [{ type: core.Output }],
            inputElementRef: [{ type: core.ViewChild, args: ['dropdownInput', { read: core.ElementRef },] }],
            panelElementRef: [{ type: core.ViewChild, args: ['panel', { read: core.ElementRef },] }],
            panel: [{ type: core.ViewChild, args: ['panel',] }],
            list: [{ type: core.ViewChild, args: ['dropdownList',] }],
            onOutsideClick: [{ type: core.HostListener, args: ['document:click', ['$event'],] }],
            onInsideClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return BBDropdownInput;
    }());
    /** @enum {number} */
    var EventKeys = {
        ENTER: 13,
        UPARROW: 38,
        DOWNARROW: 40,
    };
    EventKeys[EventKeys.ENTER] = "ENTER";
    EventKeys[EventKeys.UPARROW] = "UPARROW";
    EventKeys[EventKeys.DOWNARROW] = "DOWNARROW";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDropdownInputDirective = (function () {
        function BBDropdownInputDirective() {
            this.canShow = false;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInputDirective.prototype.onFocus = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (this.canShow) {
                    console.log('showing');
                    this.panel.show();
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        BBDropdownInputDirective.prototype.onBlur = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.panel.hide();
            };
        BBDropdownInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-sliding-panel-focus]',
                        host: {
                            '(focus)': "onFocus($event)",
                            '(blur)': "onBlur($event)"
                        }
                    },] },
        ];
        /** @nocollapse */
        BBDropdownInputDirective.ctorParameters = function () { return []; };
        BBDropdownInputDirective.propDecorators = {
            panel: [{ type: core.Input, args: ['bb-sliding-panel-focus',] }],
            canShow: [{ type: core.Input }]
        };
        return BBDropdownInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     *
     */
    var BBDynamicComponentDirective = (function () {
        function BBDynamicComponentDirective(vcRef, resolver) {
            this.vcRef = vcRef;
            this.resolver = resolver;
            this.dccClasses = {};
        }
        Object.defineProperty(BBDynamicComponentDirective.prototype, "componentData", {
            set: /**
             * @param {?} compData
             * @return {?}
             */ function (compData) {
                this.createComponent(compData);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} compData
         * @return {?}
         */
        BBDynamicComponentDirective.prototype.createComponent = /**
         * @param {?} compData
         * @return {?}
         */
            function (compData) {
                if (!compData) {
                    return;
                }
                if (this.currentCompRef) {
                    this.currentCompRef.destroy();
                }
                var /** @type {?} */ inputProviders = [];
                if (compData.providers) {
                    inputProviders = Object.keys(compData.providers).map(function (provName) {
                        return { provide: provName, useValue: compData.providers[provName] };
                    });
                }
                var /** @type {?} */ injector = core.ReflectiveInjector
                    .fromResolvedProviders(core.ReflectiveInjector.resolve(inputProviders), this.vcRef.parentInjector);
                var /** @type {?} */ compRef = this.resolver
                    .resolveComponentFactory(compData.component)
                    .create(injector);
                this.vcRef.insert(compRef.hostView);
                if (compData.inputs) {
                    Object.keys(compData.inputs).map(function (input) {
                        compRef.instance[input] = compData.inputs[input];
                    });
                }
                compRef.changeDetectorRef.markForCheck();
                this.currentCompRef = compRef;
            };
        BBDynamicComponentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-dynamic-component]',
                        exportAs: 'dynamicComp',
                    },] },
        ];
        /** @nocollapse */
        BBDynamicComponentDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ComponentFactoryResolver }
            ];
        };
        BBDynamicComponentDirective.propDecorators = {
            componentData: [{ type: core.Input, args: ['bb-dynamic-component',] }]
        };
        return BBDynamicComponentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDynamicComponentModule = (function () {
        function BBDynamicComponentModule() {
        }
        BBDynamicComponentModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [BBDynamicComponentDirective],
                        exports: [BBDynamicComponentDirective]
                    },] },
        ];
        return BBDynamicComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDropdownInputItemsList = (function () {
        function BBDropdownInputItemsList(chDetRef) {
            this.chDetRef = chDetRef;
            this.applyHostClass = true;
            this.dynamicComponentsData = [];
            this.newContainers = new core.EventEmitter();
            this.listItemMouseOver = new core.EventEmitter();
            this.listItemClick = new core.EventEmitter();
            this.itemAutoSelected = [];
            this.itemSelected = [];
        }
        Object.defineProperty(BBDropdownInputItemsList.prototype, "listElements", {
            get: /**
             * @return {?}
             */ function () {
                return this.listItems.toArray().map(function (li) {
                    return ((li.element.nativeElement));
                });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.changeSelection = /**
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
            function (index, selected) {
                this.itemSelected[index] = selected;
                this.chDetRef.markForCheck();
                this.chDetRef.detectChanges();
            };
        /**
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.changeAutoSelection = /**
         * @param {?} index
         * @param {?} selected
         * @return {?}
         */
            function (index, selected) {
                this.itemAutoSelected[index] = selected;
                this.chDetRef.markForCheck();
                this.chDetRef.detectChanges();
            };
        /**
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // emit the original list
                this.newContainers.emit(this.dynamicComponentContainers.toArray());
                if (this.newContainersSub) {
                    this.newContainersSub.unsubscribe();
                }
                this.newContainersSub =
                    this.dynamicComponentContainers
                        .changes
                        .subscribe(function (newList) {
                        _this.itemAutoSelected = [];
                        _this.itemSelected = [];
                        _this.newContainers.emit(newList.toArray());
                    }, function (error) { return console.log(error); }, function () {
                        _this.newContainersSub.unsubscribe();
                    });
            };
        /**
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.newContainersSub) {
                    this.newContainersSub.unsubscribe();
                }
            };
        /**
         * @param {?} e
         * @param {?} index
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.onListItemClick = /**
         * @param {?} e
         * @param {?} index
         * @return {?}
         */
            function (e, index) {
                this.listItemClick.emit({
                    event: e,
                    index: index
                });
            };
        /**
         * @param {?} e
         * @param {?} index
         * @return {?}
         */
        BBDropdownInputItemsList.prototype.onListItemMouseOver = /**
         * @param {?} e
         * @param {?} index
         * @return {?}
         */
            function (e, index) {
                this.listItemMouseOver.emit({
                    event: e,
                    index: index
                });
            };
        BBDropdownInputItemsList.decorators = [
            { type: core.Component, args: [{
                        selector: 'ul[bb-dropdown-input-items-list]',
                        template: "<li *ngFor=\"let compData of dynamicComponentsData; let i = index;\"\n    #listItem\n    class=\"item\"\n    [class.auto-selected]=\"itemAutoSelected[i]\"\n    [class.selected]=\"itemSelected[i]\"\n    (click)=\"onListItemClick($event, i)\"\n    (mouseover)=\"onListItemMouseOver($event, i)\">\n    <ng-template #container=\"dynamicComp\" [bb-dynamic-component]=\"compData\"></ng-template>\n</li>\n\n\n",
                        styles: [""],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        BBDropdownInputItemsList.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        BBDropdownInputItemsList.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-dropdown-input-items-list',] }],
            dynamicComponentsData: [{ type: core.Input }],
            dynamicComponentContainers: [{ type: core.ViewChildren, args: ['container',] }],
            listItems: [{ type: core.ViewChildren, args: ['listItem', { read: core.ViewContainerRef },] }],
            newContainers: [{ type: core.Output }],
            listItemMouseOver: [{ type: core.Output }],
            listItemClick: [{ type: core.Output }]
        };
        return BBDropdownInputItemsList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDropdownInputModule = (function () {
        function BBDropdownInputModule() {
        }
        /**
         * @return {?}
         */
        BBDropdownInputModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDropdownInputModule,
                    providers: []
                };
            };
        BBDropdownInputModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BBSlidingPanelModule,
                            BBDynamicComponentModule,
                        ],
                        declarations: [
                            BBDropdownInput,
                            BBDropdownInputDirective,
                            BBDropdownInputItemsList,
                        ],
                        exports: [
                            BBDropdownInput,
                        ]
                    },] },
        ];
        return BBDropdownInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDropdownMenu = (function () {
        function BBDropdownMenu() {
            this.applyHostClass = true;
            this.showOnHover = false;
            this.toggleOnClick = true;
            this.closeOnClickOutside = true;
        }
        Object.defineProperty(BBDropdownMenu.prototype, "isOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this.panel.isShowing;
            },
            enumerable: true,
            configurable: true
        });
        BBDropdownMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-dropdown-menu]',
                        template: "<div [bb-sliding-panel-toggle]=\"panel\" \n     [toggleOnClick]=\"toggleOnClick\"\n     [showOnHover]=\"showOnHover\"\n     [closeOnClickOutside]=\"closeOnClickOutside\">\n    <ng-content select=\"[bb-menu-toggle]\"></ng-content>\n</div>\n<div class=\"dropdown-container\">\n  <div bb-sliding-panel \n    #panel=\"bbSlidingPanel\"\n    slideDirection=\"down\">\n    <ng-content select=\"[bb-menu-item]\"></ng-content>\n  </div>\n</div>",
                        styles: ["div.dropdown-container{position:relative}/deep/ .dropdown-container>div.bb-sliding-panel{position:absolute;top:0}.dropdown-container div.bb-sliding-panel{display:flex;flex:1;flex-direction:column}"],
                        exportAs: 'bbDropdownMenu'
                    },] },
        ];
        /** @nocollapse */
        BBDropdownMenu.ctorParameters = function () { return []; };
        BBDropdownMenu.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-dropdown-menu',] }],
            showOnHover: [{ type: core.Input }],
            toggleOnClick: [{ type: core.Input }],
            closeOnClickOutside: [{ type: core.Input }],
            panel: [{ type: core.ViewChild, args: ['panel',] }]
        };
        return BBDropdownMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDropdownMenuModule = (function () {
        function BBDropdownMenuModule() {
        }
        /**
         * @return {?}
         */
        BBDropdownMenuModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDropdownMenuModule,
                    providers: []
                };
            };
        BBDropdownMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BBSlidingPanelModule
                        ],
                        declarations: [
                            BBDropdownMenu
                        ],
                        exports: [
                            BBDropdownMenu
                        ]
                    },] },
        ];
        return BBDropdownMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDefaultDynamicAnimationsHandlerService = (function () {
        function BBDefaultDynamicAnimationsHandlerService(element, cssMapperService, animationStatesBuilder) {
            this.element = element;
            this.cssMapperService = cssMapperService;
            this.animationStatesBuilder = animationStatesBuilder;
            this.stateCache = '';
            this.mapCache = {};
            this.transitionsCache = {};
        }
        /**
         * @param {?} map
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerService.prototype.setCSSMap = /**
         * @param {?} map
         * @return {?}
         */
            function (map) {
                if (this.mapCache !== map) {
                    this.mapCache = map;
                    if (this.cssMapper) {
                        this.cssMapper.removeAll();
                        this.cssMapper.destroy();
                    }
                    this.cssMapper = this.cssMapperService
                        .createStateCSSMapper(this.element, this.mapCache);
                }
            };
        /**
         * @param {?} toState
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerService.prototype.nextState = /**
         * @param {?} toState
         * @return {?}
         */
            function (toState) {
                if (this.stateCache !== toState) {
                    this.stateCache = toState;
                    if (this.animationsStateMachine) {
                        this.animationsStateMachine.next(this.stateCache, this.cssMapper);
                    }
                }
            };
        /**
         * @param {?} transitions
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerService.prototype.setTransitions = /**
         * @param {?} transitions
         * @return {?}
         */
            function (transitions) {
                if (this.transitionsCache !== transitions) {
                    this.transitionsCache = transitions;
                    if (this.animationsStateMachine) {
                        if (this.cssMapper) {
                            this.cssMapper.removeAll();
                        }
                        this.animationsStateMachine.destroy();
                    }
                    this.animationsStateMachine =
                        this.animationStatesBuilder
                            .createAnimationStateMachine(this.element, this.transitionsCache);
                }
            };
        /**
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerService.prototype.init = /**
         * @return {?}
         */
            function () {
                console.log('init: ', this.cssMapperService, this.animationStatesBuilder);
                if (this.animationsStateMachine) {
                    this.animationsStateMachine.init(this.stateCache, this.cssMapper);
                }
            };
        /**
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerService.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.animationsStateMachine.destroy();
                this.cssMapper.destroy();
                this.stateCache = null;
                this.mapCache = null;
                this.transitionsCache = null;
            };
        return BBDefaultDynamicAnimationsHandlerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDynamicAnimationsModule = (function () {
        function BBDynamicAnimationsModule() {
        }
        /**
         * @return {?}
         */
        BBDynamicAnimationsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDynamicAnimationsModule,
                    providers: [
                        BBDynamicAnimationsService,
                        BBAnimationStatesService,
                        BBStateCssMapperService
                    ]
                };
            };
        BBDynamicAnimationsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: []
                    },] },
        ];
        return BBDynamicAnimationsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBDefaultDynamicAnimationsHandlerModule = (function () {
        function BBDefaultDynamicAnimationsHandlerModule() {
        }
        /**
         * @return {?}
         */
        BBDefaultDynamicAnimationsHandlerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBDefaultDynamicAnimationsHandlerModule,
                    providers: [
                        {
                            provide: BBDynamicAnimationsHandlerConstructorToken,
                            useValue: BBDefaultDynamicAnimationsHandlerService
                        }
                    ]
                };
            };
        BBDefaultDynamicAnimationsHandlerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            //CommonModule,
                            BBDynamicAnimationsModule.forRoot(),
                        ],
                        declarations: []
                    },] },
        ];
        return BBDefaultDynamicAnimationsHandlerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBMenuItemRight = (function () {
        function BBMenuItemRight() {
        }
        BBMenuItemRight.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bb-menu-item-right]',
                    },] },
        ];
        /** @nocollapse */
        BBMenuItemRight.ctorParameters = function () { return []; };
        return BBMenuItemRight;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * A hamburger menu is either a div or nav element
     * that has arbitrary items as it's content with the
     * bb-menu-item or bb-menu-item-right directives.
     *
     * It takes a standard css media query as an input,
     * expandOnQuery, and when that query returns true
     * the menu will display the items inside it's borders.
     *
     * If the query is false the menu will be rendered in
     * the collapsed state where a toggle will be right
     * justified and when clicked will show and hide the
     * menu item contents in a panel that drops down.
     *
     * The toggle itself is set by adding the bb-menu-toggle
     * directive to content inside the menu element that
     * should act as the toggle.
     *
     * The hamburger menu component is exported as BBHamburgerMenu
     * and provides the state of the panel with isOpen and the
     * state of the menu itself as expanded.  These can be used
     * to modify the menu content itself based on the current
     * state of the menu.
     */
    var BBHamburgerMenu = (function () {
        function BBHamburgerMenu() {
            this.applyHostClass = true;
            /**
             * Show the menu if the toggle is hovered
             * over.  Defaults to false.
             */
            this.showOnHover = false;
            /**
             * Close the menu if a click happens outside
             * it.  Defaults to true.
             */
            this.closeOnClickOutside = true;
            /**
             * Allow the toggle to work on the
             * click event.
             */
            this.toggleOnClick = true;
            /**
             * Cache for the closeOnClickOutside
             * input.
             */
            this._cocoInit = false;
            /**
             * Use a flag member for the expanded
             * state because host bindings can't
             * use the async pipe so we have to
             * cache the media query results.
             */
            this.expanded = false;
        }
        Object.defineProperty(BBHamburgerMenu.prototype, "itemElementRefs", {
            get: /**
             * Get the items currently being displayed
             * in the hamburger menu.
             * @return {?}
             */ function () {
                return this.items.toArray().concat(this.rightItems.toArray());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBHamburgerMenu.prototype, "isOpen", {
            get: /**
             * Return if the panel is open or not.
             * @return {?}
             */ function () {
                return this.panel.isShowing;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBHamburgerMenu.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /*
                     * Save the close on click outside
                     * state.  This will be toggled so
                     * that the panel doesnt enter the
                     * closed state when the menu bar
                     * is in the expanded state.
                     *
                     * Otherwise the panel collapses and
                     * the items disappear with no toggle
                     * to bring them back.
                     */
                this._cocoInit = this.closeOnClickOutside;
                /*
                     * Determine the initial expansion state
                     * based on the media query.
                     */
                this.expanded = window.matchMedia(this.expandOnQuery).matches;
                if (this.expanded) {
                    this.closeOnClickOutside = false;
                }
            };
        /**
         * @return {?}
         */
        BBHamburgerMenu.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /*
                     * Set up the stream
                     */
                this.expandedSubscription =
                    rxjs.fromEvent(window, "resize")
                        .pipe(operators.map(function (_) { return window.matchMedia(_this.expandOnQuery).matches; }), operators.distinctUntilChanged())
                        .subscribe(function (expanded) {
                        _this.expanded = expanded;
                        _this.togglePanelState();
                    });
            };
        /**
         * @return {?}
         */
        BBHamburgerMenu.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.expandedSubscription && !this.expandedSubscription.closed) {
                    this.expandedSubscription.unsubscribe();
                }
            };
        /**
         * Set the state of the panel
         * to showing or hiding based
         * on the cached expanded member
         * @return {?}
         */
        BBHamburgerMenu.prototype.togglePanelState = /**
         * Set the state of the panel
         * to showing or hiding based
         * on the cached expanded member
         * @return {?}
         */
            function () {
                if (this.expanded) {
                    this.closeOnClickOutside = false;
                    this.toggle.showPanel();
                }
                else {
                    this.closeOnClickOutside = this._cocoInit;
                    this.toggle.hidePanel();
                }
            };
        BBHamburgerMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-hamburger-menu], nav[bb-hamburger-menu]',
                        template: "<div class=\"menu-container\">\n  <ng-content select=\"[bb-fixed-content]\"></ng-content>\n\n  <div bb-sliding-panel\n      class=\"menu-items-container\"\n      slideDirection=\"down\"\n      #panel=\"bbSlidingPanel\">\n    <div class=\"menu-items\">\n      <ng-content select=\"[bb-menu-item]\"></ng-content>\n    </div>\n    <div class=\"menu-items-right\">\n      <ng-content select=\"[bb-menu-item-right]\"></ng-content>\n    </div>\n  </div>\n  \n  <div [bb-sliding-panel-toggle]=\"panel\"\n       #toggle=\"bbSlidingPanelToggle\" \n       [toggleOnClick]=\"toggleOnClick\"\n       [showOnHover]=\"showOnHover\"\n       [showOnInit]=\"expanded\"\n       [closeOnClickOutside]=\"closeOnClickOutside\">\n      <ng-content select=\"[bb-menu-toggle]\"></ng-content>\n  </div>\n</div>",
                        styles: ["div.menu-container{display:flex;flex:1;flex-direction:row;align-items:center;position:relative;min-height:inherit;max-height:inherit;height:inherit}:host.bb-hamburger-menu.expanded div.menu-items-container{display:flex;flex-direction:row;flex:1;justify-content:space-between}:host.bb-hamburger-menu.expanded div.menu-items,:host.bb-hamburger-menu.expanded div.menu-items-right{display:flex;flex-direction:row;flex-grow:1;flex-shrink:1;flex-basis:auto}:host.bb-hamburger-menu.expanded div.menu-items-right{justify-content:flex-end}:host.bb-hamburger-menu.collapsed div.menu-items-container{display:flex;flex-direction:column;flex:1}:host.bb-hamburger-menu.collapsed div.menu-items,:host.bb-hamburger-menu.collapsed div.menu-items-right{display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;flex-basis:auto}:host.bb-hamburger-menu.expanded div.bb-sliding-panel-toggle{visibility:hidden;width:0}div.bb-sliding-panel-toggle{display:inline-block}:host.collapsed div.menu-items-container{position:absolute;top:100%;left:0;right:0}:host.collapsed div.menu-container{justify-content:space-between}div.menu-items{flex-grow:1;flex-shrink:1;flex-basis:auto}"],
                        host: {
                            '[class.expanded]': "expanded",
                            '[class.collapsed]': "!expanded",
                        },
                        exportAs: 'bbHamburgerMenu'
                    },] },
        ];
        /** @nocollapse */
        BBHamburgerMenu.ctorParameters = function () { return []; };
        BBHamburgerMenu.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-hamburger-menu',] }],
            panel: [{ type: core.ViewChild, args: ['panel',] }],
            toggle: [{ type: core.ViewChild, args: ['toggle',] }],
            items: [{ type: core.ContentChildren, args: [BBMenuItem, { read: core.ElementRef, descendants: true },] }],
            rightItems: [{ type: core.ContentChildren, args: [BBMenuItemRight, { read: core.ElementRef, descendants: true },] }],
            expandOnQuery: [{ type: core.Input }],
            showOnHover: [{ type: core.Input }],
            closeOnClickOutside: [{ type: core.Input }]
        };
        return BBHamburgerMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBHamburgerMenuModule = (function () {
        function BBHamburgerMenuModule() {
        }
        /**
         * @return {?}
         */
        BBHamburgerMenuModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBHamburgerMenuModule,
                    providers: []
                };
            };
        BBHamburgerMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BBSlidingPanelModule,
                            BBCommonModule,
                        ],
                        declarations: [
                            BBHamburgerMenu,
                            BBMenuItemRight,
                        ],
                        exports: [
                            BBHamburgerMenu,
                            BBMenuItemRight,
                        ]
                    },] },
        ];
        return BBHamburgerMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBMultiSelectComponent = (function () {
        function BBMultiSelectComponent() {
            this.placeholderText = "Search...";
            this.filterChangeDelayms = 200;
            this.itemSelected = new core.EventEmitter();
            this.itemUnselected = new core.EventEmitter();
            console.log('Warning this component is still under heavy development.');
            console.log('It isn\'t completely functional yet and is subject to change.');
        }
        Object.defineProperty(BBMultiSelectComponent.prototype, "choices", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectionItems.filter(function (item) { return !item.selected; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBMultiSelectComponent.prototype, "selections", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectionItems.filter(function (item) { return item.selected; });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBMultiSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                rxjs.fromEvent(this.filterInput.nativeElement, 'keyup')
                    .pipe(operators.map(function (event) { return ((event.target)).value; }), operators.debounceTime(this.filterChangeDelayms), operators.distinctUntilChanged())
                    .subscribe(function (filterText) { return _this.filterItems(filterText); });
                // temp testing code
                if (!this.selectionItems) {
                    this.selectionItems = [
                        {
                            text: 'Name',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Position',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Year of Birth',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Rookie Season',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Height',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Weight',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Forty Time',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Bench Weight',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Vertical Jump',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Broad Jump',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Shuttle Time',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Cone Time',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Draft Position',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'College',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'College Division',
                            payload: {},
                            selected: false,
                        },
                        {
                            text: 'Current Team',
                            payload: {},
                            selected: false,
                        }
                    ];
                }
                this.selections.push(this.choices[1]);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        BBMultiSelectComponent.prototype.onChoiceClicked = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                item.selected = true;
                this.itemSelected.emit(item);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        BBMultiSelectComponent.prototype.onSelectionClicked = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                item.selected = false;
                this.itemUnselected.emit(item);
            };
        /**
         * @param {?} text
         * @return {?}
         */
        BBMultiSelectComponent.prototype.filterItems = /**
         * @param {?} text
         * @return {?}
         */
            function (text) {
                console.log(text);
            };
        BBMultiSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-multi-select]',
                        template: "<input class=\"selections-filter\" #filter [attr.placeholder]=\"placeholderText\"/>\n<div class=\"container-labels\">\n    <span>Items</span><span>Selected</span>\n</div>\n<div class=\"selections-container\">\n    <div class=\"choices\">\n        <ul>\n            <li *ngFor=\"let choice of choices\">\n                <a (click)=\"onChoiceClicked(choice)\">{{choice.text}}</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"selections\">\n        <ul>\n            <li *ngFor=\"let selection of selections\">\n                <a (click)=\"onSelectionClicked(selection)\">{{selection.text}}</a>\n            </li>\n        </ul>\n    </div>\n</div>",
                        styles: [":host div{display:flex;flex-direction:column}input.selections-filter{justify-content:center}div.container-labels,div.selections-container{width:inherit;display:flex;flex-direction:row;justify-content:space-between}.selections-container ul{padding-left:0}.choices ul,.selections ul{list-style:none}div.container-labels{border-bottom:1px solid #000}"],
                    },] },
        ];
        /** @nocollapse */
        BBMultiSelectComponent.ctorParameters = function () { return []; };
        BBMultiSelectComponent.propDecorators = {
            placeholderText: [{ type: core.Input }],
            filterChangeDelayms: [{ type: core.Input }],
            selectionItems: [{ type: core.Input }],
            filterInput: [{ type: core.ViewChild, args: ['filter',] }],
            itemSelected: [{ type: core.Output }],
            itemUnselected: [{ type: core.Output }]
        };
        return BBMultiSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBMultiSelectModule = (function () {
        function BBMultiSelectModule() {
        }
        /**
         * @return {?}
         */
        BBMultiSelectModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBMultiSelectModule,
                    providers: []
                };
            };
        BBMultiSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            BBMultiSelectComponent
                        ],
                        exports: [
                            BBMultiSelectComponent
                        ]
                    },] },
        ];
        return BBMultiSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBSlideoutMenu = (function () {
        function BBSlideoutMenu() {
            this.applyHostClass = true;
            this.showOnMouseOver = true;
            this.pinOnClick = true;
            this.closeOnClickOutside = true;
            this.slideDirection = "right";
        }
        Object.defineProperty(BBSlideoutMenu.prototype, "isOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this.panel.isShowing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBSlideoutMenu.prototype, "slideLeft", {
            get: /**
             * @return {?}
             */ function () {
                return this.slideDirection === "left";
            },
            enumerable: true,
            configurable: true
        });
        BBSlideoutMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'div[bb-slideout-menu]',
                        template: "<div class=\"slide-container\">\n  <div [bb-sliding-panel-toggle]=\"panel\" \n    [toggleOnClick]=\"pinOnClick\"\n    [showOnHover]=\"showOnMouseOver\"\n    [closeOnClickOutside]=\"closeOnClickOutside\">\n    <ng-content select=\"[bb-menu-toggle]\"></ng-content>\n  </div>\n  <div class=\"slide-position\">\n    <div class=\"slide-anchor\">\n      <div bb-sliding-panel \n        #panel=\"bbSlidingPanel\"\n        [slideDirection]=\"slideDirection\">\n          <ng-content select=\"[bb-menu-item]\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>",
                        styles: ["div.slide-container{position:relative}.slide-container>div.slide-position{position:absolute;top:0}/deep/ .slide-left>div.slide-container{background-color:red}/deep/ .slide-left div.slide-position{left:0}/deep/ .slide-right div.slide-position{right:0}.slide-container>>div.slide-anchor{position:relative}/deep/ .slide-anchor>div.bb-sliding-panel{position:absolute;display:flex;flex-direction:row;flex:1}/deep/ .slide-left div.bb-sliding-panel{right:0}/deep/ .slide-right div.bb-sliding-panel{left:0}"],
                        host: {
                            '[class.slide-left]': "slideLeft",
                            '[class.slide-right]': "!slideLeft"
                        }
                    },] },
        ];
        /** @nocollapse */
        BBSlideoutMenu.ctorParameters = function () { return []; };
        BBSlideoutMenu.propDecorators = {
            applyHostClass: [{ type: core.HostBinding, args: ['class.bb-slideout-menu',] }],
            showOnMouseOver: [{ type: core.Input }],
            pinOnClick: [{ type: core.Input }],
            closeOnClickOutside: [{ type: core.Input }],
            slideDirection: [{ type: core.Input }],
            panel: [{ type: core.ViewChild, args: ['panel',] }]
        };
        return BBSlideoutMenu;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBSlideoutMenuModule = (function () {
        function BBSlideoutMenuModule() {
        }
        /**
         * @return {?}
         */
        BBSlideoutMenuModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBSlideoutMenuModule,
                    providers: []
                };
            };
        BBSlideoutMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            BBSlidingPanelModule,
                        ],
                        declarations: [
                            BBSlideoutMenu
                        ],
                        exports: [
                            BBSlideoutMenu
                        ]
                    },] },
        ];
        return BBSlideoutMenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SortableDirective = (function () {
        function SortableDirective(el, renderer) {
            this.el = el;
            this.renderer = renderer;
            // Event emitters
            this.orderChanged = new core.EventEmitter();
            this.bbstart = new core.EventEmitter();
            this.bbend = new core.EventEmitter();
            this.bbenter = new core.EventEmitter();
            this.bbleave = new core.EventEmitter();
            this.bbdrop = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SortableDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.options) {
                    this.options = {};
                }
            };
        /**
         * @return {?}
         */
        SortableDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.initChildren();
            };
        // Dropper listeners
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.dragstart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.dataTransfer.setData('text/plain', event.target['bbvalue'] || null);
                if (this.options.holdingClass !== undefined) {
                    this.renderer.addClass(event.target, this.options.holdingClass);
                }
                this.draggedItem = +event.target['bbsortable-index'];
                this.bbstart.emit(this.draggedItem);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.dragend = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.options.holdingClass !== undefined) {
                    this.renderer.removeClass(event.target, this.options.holdingClass);
                }
                this.bbend.emit(this.draggedItem);
            };
        // Dropzone listeners
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.dragover = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.dragenter = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.options.hoverClass !== undefined) {
                    if (event.target['bbsortable-name'] === this.name && event.target['bbsortable-index'] !== this.draggedItem) {
                        this.renderer.addClass(event.target, this.options.hoverClass);
                    }
                    else {
                        this.updateDropzoneClass(event, this.options.hoverClass, true);
                    }
                }
                this.bbenter.emit(+event.target['bbsortable-index']);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.dragleave = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.options.hoverClass !== undefined) {
                    if (event.target['bbsortable-name'] === this.name && event.target['bbsortable-index'] !== this.draggedItem) {
                        this.renderer.removeClass(event.target, this.options.hoverClass);
                    }
                    else {
                        this.updateDropzoneClass(event, this.options.hoverClass, false);
                    }
                }
                this.bbleave.emit(+event.target['bbsortable-index']);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        SortableDirective.prototype.drop = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                var /** @type {?} */ doDrop = false;
                var /** @type {?} */ dropTarget = event.target;
                if (dropTarget['bbsortable-name'] !== this.name) {
                    while (dropTarget.parentNode !== null) {
                        if (dropTarget.parentNode['bbsortable-name'] === this.name) {
                            dropTarget = dropTarget.parentNode;
                            doDrop = true;
                            break;
                        }
                        else {
                            dropTarget = dropTarget.parentNode;
                        }
                    }
                }
                else {
                    doDrop = true;
                }
                if (doDrop) {
                    if (this.options.hoverClass !== undefined) {
                        this.renderer.removeClass(dropTarget, this.options.hoverClass);
                    }
                    var /** @type {?} */ draggedItem = this.draggedItem;
                    var /** @type {?} */ newPosition = dropTarget['bbsortable-index'];
                    if (draggedItem > newPosition) {
                        for (var /** @type {?} */ i = 0; i < this.el.nativeElement.children.length; i++) {
                            if (i >= newPosition && i < draggedItem) {
                                this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-index', i + 1);
                            }
                            if (i === draggedItem) {
                                this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-index', newPosition);
                            }
                        }
                    }
                    else {
                        for (var /** @type {?} */ i = 0; i < this.el.nativeElement.children.length; i++) {
                            if (i > draggedItem && i <= newPosition) {
                                this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-index', i - 1);
                            }
                            if (i === draggedItem) {
                                this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-index', newPosition);
                            }
                        }
                    }
                    this.bbdrop.emit(+newPosition);
                    this.orderChanged.emit({ draggedItem: draggedItem, newPosition: newPosition });
                }
            };
        /**
         * @return {?}
         */
        SortableDirective.prototype.initChildren = /**
         * @return {?}
         */
            function () {
                for (var /** @type {?} */ i = 0; i < this.el.nativeElement.children.length; i++) {
                    this.renderer.setProperty(this.el.nativeElement.children[i], 'draggable', true);
                    this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-index', i);
                    this.renderer.setProperty(this.el.nativeElement.children[i], 'bbsortable-name', this.name);
                    if (this.options.restingClass) {
                        this.renderer.addClass(this.el.nativeElement.children[i], this.options.restingClass);
                    }
                }
            };
        /**
         * @param {?} event
         * @param {?} cssClass
         * @param {?} adding
         * @return {?}
         */
        SortableDirective.prototype.updateDropzoneClass = /**
         * @param {?} event
         * @param {?} cssClass
         * @param {?} adding
         * @return {?}
         */
            function (event, cssClass, adding) {
                var /** @type {?} */ parentNode = event.target.parentNode;
                while (parentNode !== null) {
                    if (parentNode['bbsortable-name'] === this.name && parentNode['bbsortable-index'] !== this.draggedItem) {
                        if (adding && !parentNode.classList.contains(cssClass)) {
                            this.renderer.addClass(parentNode, cssClass);
                        }
                        else {
                            this.renderer.removeClass(parentNode, cssClass);
                        }
                        break;
                    }
                    else {
                        parentNode = parentNode.parentNode;
                    }
                }
            };
        SortableDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbSortable]'
                    },] },
        ];
        /** @nocollapse */
        SortableDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        SortableDirective.propDecorators = {
            name: [{ type: core.Input, args: ['bbsortable',] }],
            options: [{ type: core.Input, args: ['bboptions',] }],
            orderChanged: [{ type: core.Output }],
            bbstart: [{ type: core.Output }],
            bbend: [{ type: core.Output }],
            bbenter: [{ type: core.Output }],
            bbleave: [{ type: core.Output }],
            bbdrop: [{ type: core.Output }],
            dragstart: [{ type: core.HostListener, args: ['dragstart', ['$event'],] }],
            dragend: [{ type: core.HostListener, args: ['dragend', ['$event'],] }],
            dragover: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            dragenter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
            dragleave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            drop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
        };
        return SortableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBSortableModule = (function () {
        function BBSortableModule() {
        }
        /**
         * @return {?}
         */
        BBSortableModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBSortableModule,
                    providers: []
                };
            };
        BBSortableModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            SortableDirective,
                        ],
                        exports: [
                            SortableDirective,
                        ]
                    },] },
        ];
        return BBSortableModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabService = (function () {
        function TabService() {
            this.activeTab = '';
            this.tabsets = {};
        }
        TabService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        TabService.ctorParameters = function () { return []; };
        return TabService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabDirective = (function () {
        function TabDirective(el, renderer, tabService) {
            this.el = el;
            this.renderer = renderer;
            this.tabService = tabService;
            this.bbshowstart = new core.EventEmitter();
            this.bbshowend = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TabDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.active) {
                    this.bbshowstart.emit(this.tabName);
                    this.tabService.tabsets[this.tabset] = {};
                    this.setActive();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TabDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.bbshowstart.emit(this.tabName);
                event.preventDefault();
                this.setActive();
            };
        /**
         * @return {?}
         */
        TabDirective.prototype.setActive = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ parentElement = this.el.nativeElement.parentNode;
                var /** @type {?} */ child = this.el.nativeElement.children[0];
                var /** @type {?} */ activeClassElement = 'none';
                var /** @type {?} */ activeClassTarget = 'none';
                // Find out if this element, the parent element, or child elements have an active class set.
                // Order of precedence: Parent, tab, child.
                if (parentElement.hasAttribute('bbactiveclass')) {
                    activeClassElement = 'parent';
                    activeClassTarget = parentElement.attributes['bbtarget'].value;
                }
                if (this.activeClass) {
                    activeClassElement = 'tab';
                }
                if (child) {
                    if (child.hasAttribute('bbactiveclass')) {
                        activeClassElement = 'child';
                    }
                }
                // If the tab element itself has it set, apply it.
                if (activeClassElement === 'tab') {
                    for (var /** @type {?} */ i = 0; i < parentElement.children.length; i++) {
                        if (parentElement.children[i].hasAttribute('bbtab')) {
                            this.renderer.setProperty(parentElement.children[i], 'bbactive', false);
                            this.renderer.removeClass(parentElement.children[i], this.activeClass);
                        }
                    }
                    this.renderer.setProperty(this.el.nativeElement, 'bbactive', true);
                    this.renderer.addClass(this.el.nativeElement, this.activeClass);
                }
                else if (activeClassElement === 'child') {
                    var /** @type {?} */ childActiveClass = child.attributes.bbactiveclass.value;
                    for (var /** @type {?} */ i = 0; i < parentElement.children.length; i++) {
                        if (parentElement.children[i].hasAttribute('bbtab')) {
                            this.renderer.setProperty(parentElement.children[i], 'bbactive', false);
                            this.renderer.removeClass(parentElement.children[i].children[0], childActiveClass);
                        }
                    }
                    this.renderer.setProperty(this.el.nativeElement, 'bbactive', true);
                    this.renderer.addClass(child, childActiveClass);
                }
                else if (activeClassElement === 'parent') {
                    var /** @type {?} */ parentActiveClass = parentElement.attributes.bbactiveclass.value;
                    for (var /** @type {?} */ i = 0; i < parentElement.children.length; i++) {
                        if (parentElement.children[i].hasAttribute('bbtab')) {
                            this.renderer.setProperty(parentElement.children[i], 'bbactive', false);
                            if (activeClassTarget === 'tab') {
                                this.renderer.removeClass(parentElement.children[i], parentActiveClass);
                            }
                            else if (activeClassTarget === 'child') {
                                this.renderer.removeClass(parentElement.children[i].children[0], parentActiveClass);
                            }
                        }
                    }
                    this.renderer.setProperty(this.el.nativeElement, 'bbactive', true);
                    if (activeClassTarget === 'tab') {
                        this.renderer.addClass(this.el.nativeElement, parentActiveClass);
                    }
                    else if (activeClassTarget === 'child') {
                        this.renderer.addClass(this.el.nativeElement.children[0], parentActiveClass);
                    }
                }
                else {
                    // There are no child elements and bbactiveClass isn't set.
                    for (var /** @type {?} */ i = 0; i < parentElement.children.length; i++) {
                        if (parentElement.children[i].hasAttribute('bbtab')) {
                            this.renderer.setProperty(parentElement.children[i], 'bbactive', false);
                        }
                    }
                    this.renderer.setProperty(this.el.nativeElement, 'bbactive', true);
                }
                this.tabService.tabsets[this.tabset]['activeTab'] = this.tabName;
                this.bbshowend.emit(this.tabName);
            };
        TabDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbTab]'
                    },] },
        ];
        /** @nocollapse */
        TabDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: TabService }
            ];
        };
        TabDirective.propDecorators = {
            tabName: [{ type: core.Input, args: ['bbtab',] }],
            tabset: [{ type: core.Input, args: ['bbtabset',] }],
            active: [{ type: core.Input, args: ['bbactive',] }],
            activeClass: [{ type: core.Input, args: ['bbactiveclass',] }],
            bbshowstart: [{ type: core.Output }],
            bbshowend: [{ type: core.Output }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return TabDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TabContentDirective = (function () {
        function TabContentDirective(el, renderer, tabService) {
            this.el = el;
            this.renderer = renderer;
            this.tabService = tabService;
        }
        /**
         * @return {?}
         */
        TabContentDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setVisibility();
            };
        /**
         * @return {?}
         */
        TabContentDirective.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                this.setVisibility();
            };
        /**
         * @return {?}
         */
        TabContentDirective.prototype.setVisibility = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ display = this.tabService.tabsets[this.tabset].activeTab === this.name ? 'block' : 'none';
                this.renderer.setStyle(this.el.nativeElement, 'display', display);
            };
        TabContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bbTabContent]'
                    },] },
        ];
        /** @nocollapse */
        TabContentDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: TabService }
            ];
        };
        TabContentDirective.propDecorators = {
            name: [{ type: core.Input, args: ['bbtabcontent',] }],
            tabset: [{ type: core.Input, args: ['bbtabset',] }]
        };
        return TabContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBTabModule = (function () {
        function BBTabModule() {
        }
        /**
         * @return {?}
         */
        BBTabModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBTabModule,
                    providers: [TabService]
                };
            };
        BBTabModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TabDirective,
                            TabContentDirective
                        ],
                        exports: [
                            TabDirective,
                            TabContentDirective
                        ]
                    },] },
        ];
        return BBTabModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BB_MODULES = [
        BBSlidingPanelModule,
        BBDropdownMenuModule,
        BBSlideoutMenuModule,
        BBDropdownInputModule,
        BBHamburgerMenuModule,
        BBCollapsingMenuModule,
        BBMultiSelectModule,
        BBCommonModule,
        BBDragAndDropComponentModule,
        BBTabModule,
        BBDragAndDropModule,
        BBSortableModule,
    ];
    /**
     * This module only exists to allow the demo
     * to import the entire library quickly.  It
     * should not be used by consumers of the
     * library and is not exported as part of
     * the distrbuted package.
     */
    var BBRootModule = (function () {
        function BBRootModule() {
        }
        BBRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            BBSlidingPanelModule.forRoot(),
                            BBDropdownMenuModule.forRoot(),
                            BBSlideoutMenuModule.forRoot(),
                            BBDropdownInputModule.forRoot(),
                            BBHamburgerMenuModule.forRoot(),
                            BBCollapsingMenuModule.forRoot(),
                            BBMultiSelectModule.forRoot(),
                            BBCommonModule.forRoot(),
                            BBDragAndDropComponentModule.forRoot(),
                            BBTabModule.forRoot(),
                            BBDragAndDropModule.forRoot(),
                            BBSortableModule.forRoot(),
                        ],
                        exports: BB_MODULES
                    },] },
        ];
        return BBRootModule;
    }());
    var BearBonesModule = (function () {
        function BearBonesModule() {
        }
        /**
         * @return {?}
         */
        BearBonesModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: BBRootModule, providers: [] };
            };
        BearBonesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: BB_MODULES,
                        exports: BB_MODULES,
                    },] },
        ];
        return BearBonesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.AltPanelState1Animation = AltPanelState1Animation;
    exports.AltPanelState2Animation = AltPanelState2Animation;
    exports.BBAlternatingPanelComponent = BBAlternatingPanelComponent;
    exports.BBAlternatingPanelDirective = BBAlternatingPanelDirective;
    exports.BBAlternatingPanelModule = BBAlternatingPanelModule;
    exports.BBCollapsingMenuModule = BBCollapsingMenuModule;
    exports.BBCollapsingMenu = BBCollapsingMenu;
    exports.BBCommonModule = BBCommonModule;
    exports.BBMenuItem = BBMenuItem;
    exports.closeSubscription = closeSubscription;
    exports.BBContentConductorConstructorToken = BBContentConductorConstructorToken;
    exports.BBContentDirective = BBContentDirective;
    exports.BBContentContainerDirective = BBContentContainerDirective;
    exports.BBDefaultContentConductorModule = BBDefaultContentConductorModule;
    exports.BBContentConductorService = BBContentConductorService;
    exports.BBContentConductorModule = BBContentConductorModule;
    exports.DragAndDropService = DragAndDropService;
    exports.BBDragAndDropModule = BBDragAndDropModule;
    exports.BBDragAndDropContainerComponent = BBDragAndDropContainerComponent;
    exports.BBDraggableDirective = BBDraggableDirective;
    exports.DraggableContext = DraggableContext;
    exports.BBDragAndDropComponentModule = BBDragAndDropComponentModule;
    exports.BBDropdownInputModule = BBDropdownInputModule;
    exports.BBDropdownInputServiceToken = BBDropdownInputServiceToken;
    exports.BBDropdownInput = BBDropdownInput;
    exports.BBDropdownMenuModule = BBDropdownMenuModule;
    exports.BBDropdownMenu = BBDropdownMenu;
    exports.BBAnimationStatesService = BBAnimationStatesService;
    exports.BBDefaultDynamicAnimationsHandlerModule = BBDefaultDynamicAnimationsHandlerModule;
    exports.BBDynamicAnimationsHandlerConstructorToken = BBDynamicAnimationsHandlerConstructorToken;
    exports.BBStateCssMapperService = BBStateCssMapperService;
    exports.BBDynamicAnimationsBase = BBDynamicAnimationsBase;
    exports.BBDynamicAnimationsModule = BBDynamicAnimationsModule;
    exports.BBDynamicAnimationsService = BBDynamicAnimationsService;
    exports.BBHamburgerMenuModule = BBHamburgerMenuModule;
    exports.BBHamburgerMenu = BBHamburgerMenu;
    exports.BBMultiSelectComponent = BBMultiSelectComponent;
    exports.BBMultiSelectModule = BBMultiSelectModule;
    exports.BBSlideoutMenuModule = BBSlideoutMenuModule;
    exports.BBSlideoutMenu = BBSlideoutMenu;
    exports.BBSlidingPanelModule = BBSlidingPanelModule;
    exports.BBSlidingPanel = BBSlidingPanel;
    exports.BBSlidingPanelToggle = BBSlidingPanelToggle;
    exports.BBSortableModule = BBSortableModule;
    exports.TabService = TabService;
    exports.BBTabModule = BBTabModule;
    exports.BBRootModule = BBRootModule;
    exports.BearBonesModule = BearBonesModule;
    exports.ɵf = BBCollapsingMenuModule;
    exports.ɵh = BBCommonModule;
    exports.ɵk = BBDragAndDropModule;
    exports.ɵi = BBDragAndDropComponentModule;
    exports.ɵd = BBDropdownInputModule;
    exports.ɵb = BBDropdownMenuModule;
    exports.ɵe = BBHamburgerMenuModule;
    exports.ɵg = BBMultiSelectModule;
    exports.ɵc = BBSlideoutMenuModule;
    exports.ɵa = BBSlidingPanelModule;
    exports.ɵl = BBSortableModule;
    exports.ɵj = BBTabModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWF0LWJlYXJib25lcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbHRlcm5hdGluZy1wYW5lbC9hbHRlcm5hdGluZy1wYW5lbC50b2tlbnMudHMiLG51bGwsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtYW5pbWF0aW9ucy9keW5hbWljLWFuaW1hdGlvbnMuYmFzZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtYW5pbWF0aW9ucy9keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci9keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci50b2tlbi50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtYW5pbWF0aW9ucy9zdGF0ZS1jc3MtbWFwcGVyL3N0YXRlLWNzcy1tYXBwZXIuc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtYW5pbWF0aW9ucy9hbmltYXRpb24tc3RhdGVzL2FuaW1hdGlvbi1zdGF0ZXMuc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtYW5pbWF0aW9ucy9keW5hbWljLWFuaW1hdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2FsdGVybmF0aW5nLXBhbmVsL2FsdGVybmF0aW5nLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2FsdGVybmF0aW5nLXBhbmVsL2FsdGVybmF0aW5nLXBhbmVsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2FsdGVybmF0aW5nLXBhbmVsL2FsdGVybmF0aW5nLXBhbmVsLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbW1vbi9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29sbGFwc2luZy1tZW51L2NvbGxhcHNpbmctbWVudS5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb21tb24vY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5lbnVtcy50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5hbmltYXRpb25zLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRpbmctcGFuZWwvdG9nZ2xlL3NsaWRpbmctcGFuZWwtdG9nZ2xlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb2xsYXBzaW5nLW1lbnUvY29sbGFwc2luZy1tZW51Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbW1vbi9jbG9zZS1zdWJzY3JpcHRpb24udHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb250ZW50LWNvbmR1Y3Rvci9jb250ZW50LWNvbmR1Y3Rvci1jb25zdHJ1Y3Rvci9jb250ZW50LWNvbmR1Y3Rvci1jb25zdHJ1Y3Rvci50b2tlbi50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbnRlbnQtY29uZHVjdG9yL2NvbnRlbnQvY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb250ZW50LWNvbmR1Y3Rvci9jb250ZW50LWNvbmR1Y3Rvci5zZXJ2aWNlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29udGVudC1jb25kdWN0b3IvY29udGVudC1jb250YWluZXIvY29udGVudC1jb250YWluZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29udGVudC1jb25kdWN0b3IvZGVmYXVsdC1jb250ZW50LWNvbmR1Y3Rvci9kZWZhdWx0LWNvbnRlbnQtY29uZHVjdG9yLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb250ZW50LWNvbmR1Y3Rvci9kZWZhdWx0LWNvbnRlbnQtY29uZHVjdG9yL2RlZmF1bHQtY29udGVudC1jb25kdWN0b3IubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29udGVudC1jb25kdWN0b3IvY29udGVudC1jb25kdWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29udGVudC1jb25kdWN0b3IvY29udGVudC1jb25kdWN0b3IubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wL2Ryb3BwZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2RuZC5jb25zdC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2RyYWctYW5kLWRyb3Auc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2RyYWdnYWJsZS9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC1jb21wb25lbnQvZHJhZy1hbmQtZHJvcC1jb250YWluZXIvZHJhZy1hbmQtZHJvcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC1jb21wb25lbnQvZHJhZy1hbmQtZHJvcC5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9kcm9wZG93bi1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9pdGVtLWxpc3QvZHJvcGRvd24taW5wdXQtaXRlbS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHluYW1pYy1hbmltYXRpb25zL2RlZmF1bHQtZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIvZGVmYXVsdC1keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci5zZXJ2aWNlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHluYW1pYy1hbmltYXRpb25zL2R5bmFtaWMtYW5pbWF0aW9ucy5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9keW5hbWljLWFuaW1hdGlvbnMvZGVmYXVsdC1keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci9kZWZhdWx0LWR5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2hhbWJ1cmdlci1tZW51L21lbnUtaXRlbS1yaWdodC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGVvdXQtbWVudS9zbGlkZW91dC1tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRlb3V0LW1lbnUvc2xpZGVvdXQtbWVudS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zb3J0YWJsZS9zb3J0YWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zb3J0YWJsZS9zb3J0YWJsZS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi90YWIvdGFiLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi90YWIvdGFiLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3RhYi90YWItY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi90YWIvdGFiLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2JlYXItYm9uZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uTWV0YWRhdGEgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIHRoZSBhbmltYXRpb24gdG8gcGxheSB3aGVuIHRoZSBwYW5lbCB0cmFuc2l0aW9ucyBcclxuICogZnJvbSBzdGF0ZSAyIHRvIHN0YXRlIDEuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWx0UGFuZWxTdGF0ZTFBbmltYXRpb24gPSBcclxuICBuZXcgSW5qZWN0aW9uVG9rZW48QW5pbWF0aW9uTWV0YWRhdGF8QW5pbWF0aW9uTWV0YWRhdGFbXT4oJ0JCX0FMVF9QQU5FTF9TVEFURV8xX0FOSU1BVElPTicpO1xyXG5cclxuICAvKipcclxuICAgKiBQcm92aWRlcyB0aGUgYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiB0aGUgcGFuZWwgdHJhbnNpdGlvbnMgXHJcbiAgICogZnJvbSBzdGF0ZSAxIHRvIHN0YXRlIDIuXHJcbiAgICovXHJcbmV4cG9ydCBjb25zdCBBbHRQYW5lbFN0YXRlMkFuaW1hdGlvbiA9IFxyXG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdPignQkJfQUxUX1BBTkVMX1NUQVRFXzJfQU5JTUFUSU9OJyk7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2R5bmFtaWMtYW5pbWF0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXIgfSBmcm9tICcuL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyLm1vZGVsJztcclxuaW1wb3J0IHsgQkJTdGF0ZUNTU01hcCB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcC9zdGF0ZS1jc3MtbWFwLm1vZGVsJztcclxuaW1wb3J0IHsgQkJBbmltYXRpb25UcmFuc2l0aW9ucyB9IGZyb20gJy4vYW5pbWF0aW9uLXRyYW5zaXRpb25zL2FuaW1hdGlvbi10cmFuc2l0aW9ucy5tb2RlbCc7XHJcblxyXG4vKipcclxuICogVGhpcyBiYXNlIGNsYXNzIHVzZXMgdGhlIHtAbGluayBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZX0gdG8gZ2VuZXJhdGVcclxuICogYSB7QGxpbmsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJ9IGFuZCBhdHRhY2ggaXQgdG8gdGhlIGVsZW1lbnQgXHJcbiAqIHBhc3NlZCBpbnRvIHRoZSBzdXBlciBjYWxsLlxyXG4gKiBcclxuICogVGhpcyBiYXNlIGNsYXNzIGlzIG9ubHkgc3VpdGFibGUgZm9yIGFuaW1hdGluZyBhIHNpbmdsZSBlbGVtZW50LiAgSW4gb3JkZXIgXHJcbiAqIHRvIGFuaW1hdGUgbW9yZSBjb25zaWRlciB1c2luZyB0aGUge0BsaW5rIEJCRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlfSBcclxuICogZGlyZWN0bHkgYW5kIHdpcmluZyB1cCBhIHNlcGFyYXRlIGluc3RhbmNlIG9mIFxyXG4gKiB7QGxpbmsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJ9IHRvIGVhY2ggZWxlbWVudC5cclxuICogXHJcbiAqIEl0IGRlZmluZXMgdGhlIHNlcmllcyBvZiBpbnB1dHMgdGhhdCBjYW4gYmUgdXNlZCB0byBjb250cm9sIHRoZSBhbmltYXRpb25cclxuICogb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxyXG4gKiBcclxuICogQG1lbWJlciBjc3NNYXAgQW4gYEBJbnB1dGAgZm9yIHRoZSBtYXBwaW5nIG9mIHN0YXRlcyB0byBjc3MgY2xhc3NlcyBhcyBhIFxyXG4gKiB7QGxpbmsgQkJTdGF0ZUNTU01hcH0uXHJcbiAqIEBtZW1iZXIgc3RhdGUgQW4gYEBJbnB1dGAgZm9yIHRoZSBzdGF0ZSBhcyBhIHN0cmluZy5cclxuICogQG1lbWJlciB0cmFuc2l0aW9ucyBBbiBgQElucHV0YCBmb3IgdGhlIG1hcCBvZiBzdGF0ZSB0cmFuc2l0aW9ucyB0byBcclxuICogYW5pbWF0aW9ucyBhcyBhIHtAbGluayBCQkFuaW1hdGlvblRyYW5zaXRpb25zfS5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBAQ29tcG9uZW50KClgXHJcbiAqIGV4cG9ydCBjbGFzcyBCQkFsdGVybmF0aW5nUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBEeW5hbWljQW5pbWF0aW9uc0Jhc2Uge1xyXG4gKiAgICAgY29uc3RydWN0b3IoXHJcbiAqICAgICAgICAgcHJvdGVjdGVkIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gKiAgICAgICAgIHByb3RlY3RlZCBkYVNlcnY6IEJCRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlLFxyXG4gKiAgICAgKSB7XHJcbiAqICAgICAgICAgc3VwZXIoZWxSZWYubmF0aXZlRWxlbWVudCwgZGFTZXJ2KTtcclxuICogICAgIH1cclxuICogfVxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJCRHluYW1pY0FuaW1hdGlvbnNCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgcHJvdGVjdGVkIGFuaW1hdGlvbnNIYW5kbGVyOiBCQkR5bmFtaWNBbmltYXRpb25zSGFuZGxlcjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY3NzTWFwIChtYXA6IEJCU3RhdGVDU1NNYXApIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyLnNldENTU01hcChtYXApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBASW5wdXQoKSBzZXQgc3RhdGUodG9TdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zSGFuZGxlci5uZXh0U3RhdGUodG9TdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBJbnB1dCgpIHNldCB0cmFuc2l0aW9ucyh0cmFuc2l0aW9uczogQkJBbmltYXRpb25UcmFuc2l0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIuc2V0VHJhbnNpdGlvbnModHJhbnNpdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBCQkR5bmFtaWNBbmltYXRpb25zQmFzZSBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQsIG5vdCBFbGVtZW50UmVmLCB0byBhcHBseSB0aGUgYW5pbWF0aW9ucyB0by5cclxuICAgICAqIEBwYXJhbSBkeW5hbWljQW5pbWF0aW9uc1NlcnZpY2UgVGhlIHtAbGluayBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZX0gdG8gdXNlIGZvciB0aGUgYW5pbWF0aW9ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIGVsZW1lbnQ6IGFueSxcclxuICAgICAgICBwcm90ZWN0ZWQgZHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlOiBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIgPSB0aGlzLmR5bmFtaWNBbmltYXRpb25zU2VydmljZVxyXG4gICAgICAgICAgLmNyZWF0ZUFuaW1hdGlvbnNIYW5kbGVyKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogT3ZlcnJpZGUgdGhlIGJlaGF2aW91ciBvZiBuZ09uSW5pdCBhbmQgXHJcbiAgICAgICAgICogbmdPbkRlc3Ryb3kgc28gdGhhdCBhbiBpbmhlcml0b3Igb2YgdGhpcyBcclxuICAgICAgICAgKiBjbGFzcyBkb2VzIG5vdCBoYXZlIHRvIGNhbGwgdGhlIHN1cGVyIFxyXG4gICAgICAgICAqIHZlcnNpb24gb2YgZWFjaC5cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgY29uc3Qgb25Jbml0ID0gdGhpcy5uZ09uSW5pdDtcclxuICAgICAgICB0aGlzLm5nT25Jbml0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VJbml0KCk7XHJcbiAgICAgICAgICAgIG9uSW5pdC5hcHBseSh0aGlzKTtcclxuICAgICAgICB9OyAgICAgICAgICBcclxuICBcclxuICAgICAgICBjb25zdCBvbkRlc3Ryb3kgPSB0aGlzLm5nT25EZXN0cm95O1xyXG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3kgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZURlc3Ryb3koKTtcclxuICAgICAgICAgICAgb25EZXN0cm95LmFwcGx5KHRoaXMpO1xyXG4gICAgICAgIH07ICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmFzZUluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zSGFuZGxlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIuY29uc3RydWN0b3InO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJCRHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyQ29uc3RydWN0b3JUb2tlbiA9IFxyXG4gICAgbmV3IEluamVjdGlvblRva2VuPEJCRHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyQ29uc3RydWN0b3I+KCdCQkR5bmFtaWNBbmltYXRpb25zSGFuZGxlclRva2VuJyk7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJTdGF0ZUNTU01hcHBlciB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcHBlci5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ1NTTWFwIH0gZnJvbSAnLi4vc3RhdGUtY3NzLW1hcC9zdGF0ZS1jc3MtbWFwLm1vZGVsJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY3JlYXRlcyBhIGNsb3N1cmUgdGhhdCBoYW5kbGVzIFxuICogYWRkaW5nIGFuZCByZW1vdmluZyBjc3MgY2xhc3NlcyBmb3JtIGEgZ2l2ZW4gZWxlbWVudFxuICogYmFzZWQgb24gdGhlIHtAbGluayBCQlN0YXRlQ1NTTWFwfS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJCU3RhdGVDc3NNYXBwZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3NzIGNsYXNzIGZvciB0aGUgZ2l2ZW4gc3RhdGUuXG4gICAqIFxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlLlxuICAgKiBAcGFyYW0gbWFwIFRoZSB7QGxpbmsgQkJTdGF0ZUNTU01hcH0gdG8gbG9vayB0aGUgc3RhdGUgdXAgaW4uXG4gICAqL1xuICBnZXRDU1NDbGFzcyhzdGF0ZTpzdHJpbmcsIG1hcDogQkJTdGF0ZUNTU01hcCkge1xuICAgIHJldHVybiBtYXAgJiYgbWFwW3N0YXRlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHtAbGluayBCQlN0YXRlQ1NTTWFwcGVyfSB0byBhcHBseSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGFwcGx5IHRoZSBjc3MgY2xhc3NlcyB0by5cbiAgICogQHBhcmFtIG1hcCBUaGUge0BsaW5rIEJCU3RhdGVDU1NNYXB9IHRoYXQgZGVmaW5lcyB0aGUgY3NzIGNsYXNzZXMgYW5kIHN0YXRlcy5cbiAgICovXG4gIGNyZWF0ZVN0YXRlQ1NTTWFwcGVyKGVsZW1lbnQ6IGFueSwgbWFwOiBCQlN0YXRlQ1NTTWFwKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIoZWxlbWVudCxudWxsKTtcblxuICAgIHJldHVybiA8QkJTdGF0ZUNTU01hcHBlcj57XG4gICAgICByZW1vdmU6IChzdGF0ZTpzdHJpbmcpPT4ge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LHRoaXMuZ2V0Q1NTQ2xhc3Moc3RhdGUsbWFwKSk7XG4gICAgICB9LFxuICAgICAgYWRkOiAoc3RhdGU6c3RyaW5nKT0+IHtcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCx0aGlzLmdldENTU0NsYXNzKHN0YXRlLG1hcCkpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUFsbDogKCk9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChlbnRyeT0+cmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgbWFwW2VudHJ5XSkpO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6ICgpPT4ge1xuICAgICAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gICAgICAgIHJlbmRlcmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvblBsYXllciwgQW5pbWF0aW9uQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25UcmFuc2l0aW9ucyB9IGZyb20gJy4uL2FuaW1hdGlvbi10cmFuc2l0aW9ucy9hbmltYXRpb24tdHJhbnNpdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25QbGF5ZXJzIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXBsYXllcnMvYW5pbWF0aW9uLXBsYXllcnMubW9kZWwnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi9hbmltYXRpb24tc3RhdGUtbWFjaGluZS9hbmltYXRpb24tc3RhdGUtbWFjaGluZS5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ1NTTWFwcGVyIH0gZnJvbSAnLi4vc3RhdGUtY3NzLW1hcHBlci9zdGF0ZS1jc3MtbWFwcGVyLm1vZGVsJztcblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgY3JlYXRlcyBhbiBhbmltYXRpb24gdHJhbnNpdGlvbiBcbiAqIHN0YXRlIG1hY2hpbmUgd2l0aCB0aGUgbWV0aG9kIFxuICogW2NyZWF0ZUFuaW1hdGlvblN0YXRlTWFjaGluZV17QGxpbmsgQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlI2NyZWF0ZUFuaW1hdGlvblN0YXRlTWFjaGluZX0gXG4gKiBmcm9tIGEgZ2l2ZW4gQkJBbmltYXRpb25UcmFuc2l0aW9ucyBvYmplY3QuXG4gKiBcbiAqIFRoZSByZXR1cm5lZCBzdGF0ZSBtYWNoaW5lIGlzIGluIHRoZSBzaGFwZSBvZiBcbiAqIFtCQkFuaW1hdGlvblN0YXRlTWFjaGluZV17QGxpbmsgQkJBbmltYXRpb25TdGF0ZU1hY2hpbmV9IHdoaWNoIGNvbnNpc3RzIG9mIDMgXG4gKiBtZXRob2RzOlxuICogXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCQkFuaW1hdGlvblN0YXRlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcikge31cblxuICAvKipcbiAgICogQnVpbGQgYSBncm91cCBvZiBbQW5pbWF0aW9uIFBsYXllcnNde0BsaW5rIEBhbmd1bGFyL2FuaW1hdGlvbnMjQW5pbWF0aW9uUGxheWVyfS5cbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGFwcGx5IHRoZSBhbmltYXRpb25zIHRvLlxuICAgKiBAcGFyYW0gdHJhbnNpdGlvbnMgVGhlIG1hcCBvZiBzdGF0ZSB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBlbGVtZW50LlxuICAgKiBAcmV0dXJucyBBIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyB0aGUgdHJhbnNpdGlvbiBuYW1lcyBhbmQgYW5pbWF0aW9uXG4gICAqIHBsYXllcnMgaW4gdGhlIHNoYXBlIG9mIFtCQkFuaW1hdGlvblBsYXllcnNde0BsaW5rIEJCQW5pbWF0aW9uUGxheWVyc31cbiAgICovXG4gIGJ1aWxkUGxheWVycyhcbiAgICBlbGVtZW50OiBhbnksIFxuICAgIHRyYW5zaXRpb25zOiBCQkFuaW1hdGlvblRyYW5zaXRpb25zKSB7XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModHJhbnNpdGlvbnMpLnJlZHVjZTxCQkFuaW1hdGlvblBsYXllcnM+KFxuICAgICAgKHBsYXllcnMsZnJvbVN0YXRlKT0+e1xuICAgICAgICBwbGF5ZXJzW2Zyb21TdGF0ZV0gPSBPYmplY3Qua2V5cyh0cmFuc2l0aW9uc1tmcm9tU3RhdGVdKVxuICAgICAgICAgIC5yZWR1Y2U8e1t0b1N0YXRlOnN0cmluZ106IEFuaW1hdGlvblBsYXllcn0+KFxuICAgICAgICAgICAgKHByZXYsdG9TdGF0ZSk9PntcbiAgICAgICAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5idWlsZGVyXG4gICAgICAgICAgICAgICAgLmJ1aWxkKHRyYW5zaXRpb25zW2Zyb21TdGF0ZV1bdG9TdGF0ZV0pXG4gICAgICAgICAgICAgICAgLmNyZWF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgcHJldlt0b1N0YXRlXSA9IHBsYXllcjsgXG4gICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSx7fSk7XG4gICAgICByZXR1cm4gcGxheWVycztcbiAgICB9LHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhbiBhbmltYXRpb24gdG8gXG4gICAqIGV4ZWN1dGUgd2hlbiB0aGUgYW5pbWF0aW9uIHN0YXJ0cy4gIFRoZSBjYWxsYmFjayBcbiAgICogd2lsbCByZW1vdmUgdGhlIGNzcyBjbGFzcyBkZWZpbmVkIGJ5IHRoZSBzdGF0ZSBcbiAgICogYW5kIHRoZSBbQkJTdGF0ZUNTU01hcHBlcl17QGxpbmsgQkJTdGF0ZUNTU01hcHBlcn0uXG4gICAqIFxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHN0YXRlLlxuICAgKiBAcGFyYW0gbWFwcGVyIFRoZSBbQkJTdGF0ZUNTU01hcHBlcl17QGxpbmsgQkJTdGF0ZUNTU01hcHBlcn1cbiAgICogdGhhdCBtb2RpZmllcyB0aGUgY3NzIG9mIGFuIGVsZW1lbnQuXG4gICAqL1xuICBvbkFuaW1hdGlvblN0YXJ0ID0gKFxuICAgIHN0YXRlOiBzdHJpbmcsIFxuICAgIG1hcHBlcjogQkJTdGF0ZUNTU01hcHBlciA9IG51bGwpID0+ICgpID0+IHtcbiAgICAgIGlmKG1hcHBlcikge1xuICAgICAgICBtYXBwZXIucmVtb3ZlKHN0YXRlKTtcbiAgICAgIH1cbiAgfVxuXG4gLyoqXG4gICAqIENyZWF0ZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFuIGFuaW1hdGlvbiB0byBcbiAgICogZXhlY3V0ZSB3aGVuIHRoZSBhbmltYXRpb24gZmluaXNoZXMuICBUaGUgY2FsbGJhY2sgXG4gICAqIHdpbGwgYWRkIHRoZSBjc3MgY2xhc3MgZGVmaW5lZCBieSB0aGUgc3RhdGUgXG4gICAqIGFuZCB0aGUgW0JCU3RhdGVDU1NNYXBwZXJde0BsaW5rIEJCU3RhdGVDU1NNYXBwZXJ9LlxuICAgKiBcbiAgICogQHBhcmFtIHN0YXRlIFRoZSBzdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSBzdGF0ZS5cbiAgICogQHBhcmFtIG1hcHBlciBUaGUgW0JCU3RhdGVDU1NNYXBwZXJde0BsaW5rIEJCU3RhdGVDU1NNYXBwZXJ9XG4gICAqIHRoYXQgbW9kaWZpZXMgdGhlIGNzcyBvZiBhbiBlbGVtZW50LlxuICAgKi9cbiAgb25BbmltYXRpb25Eb25lID0gKFxuICAgIHN0YXRlOiBzdHJpbmcsIFxuICAgIG1hcHBlcjogQkJTdGF0ZUNTU01hcHBlciA9IG51bGwpID0+ICgpID0+IHtcbiAgICAgIGlmKG1hcHBlcikge1xuICAgICAgICBtYXBwZXIuYWRkKHN0YXRlKTtcbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBsYXllciBmb3IgYSBzcGVjaWZpYyB0cmFuc2l0aW9uLlxuICAgKiBAcGFyYW0gZnJvbVN0YXRlIFRoZSBjdXJyZW50IHN0YXRlLlxuICAgKiBAcGFyYW0gdG9TdGF0ZSBUaGUgbmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHBsYXllcnMgVGhlIHtAbGluayBCQkFuaW1hdGlvblBsYXllcnN9IHRvIGxvb2sgdXAgdGhlIHBsYXllciBpbi5cbiAgICovXG4gIGdldFBsYXllcihcbiAgICBmcm9tU3RhdGU6IHN0cmluZywgXG4gICAgdG9TdGF0ZTogc3RyaW5nLCBcbiAgICBwbGF5ZXJzOiBCQkFuaW1hdGlvblBsYXllcnMpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJzICYmIFxuICAgICAgICBwbGF5ZXJzW2Zyb21TdGF0ZV0gJiYgXG4gICAgICAgIHBsYXllcnNbZnJvbVN0YXRlXVt0b1N0YXRlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSB7QGxpbmsgQGFuZ3VsYXIvYW5pbWF0aW9ucyNBbmltYXRpb25QbGF5ZXJ9IG9iamVjdHNcbiAgICogaW5zaWRlIHRoZSB7QGxpbmsgQkJBbmltYXRpb25QbGF5ZXJzfS5cbiAgICogQHBhcmFtIHBsYXllcnMgXG4gICAqL1xuICBkZXN0cm95QWxsUGxheWVycyhwbGF5ZXJzOiBCQkFuaW1hdGlvblBsYXllcnMpIHtcbiAgICBpZihwbGF5ZXJzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwbGF5ZXJzKS5mb3JFYWNoKGZyb21TdGF0ZT0+e1xuICAgICAgICBPYmplY3Qua2V5cyhwbGF5ZXJzW2Zyb21TdGF0ZV0pLmZvckVhY2godG9TdGF0ZT0+e1xuICAgICAgICAgIHBsYXllcnNbZnJvbVN0YXRlXVt0b1N0YXRlXS5kZXN0cm95KCk7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEge0BsaW5rIEJCQW5pbWF0aW9uU3RhdGVNYWNoaW5lfSB0byBhcHBseSB0byBhblxuICAgKiBlbGVtZW50IHdoZW4gdGhlIHN0YXRlIGlzIHRyYW5zaXRpb25lZC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGFuaW1hdGlvbnMgdG8uXG4gICAqIEBwYXJhbSB0cmFuc2l0aW9ucyBUaGUge0BsaW5rIEJCQW5pbWF0aW9uVHJhbnNpdGlvbnN9IG1hcCBvZiBcbiAgICogdGhlIHN0YXRlIHRyYW5zaXRpb24gYW5pbWF0aW9ucyB0byBwbGF5LlxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9uU3RhdGVNYWNoaW5lKFxuICAgIGVsZW1lbnQ6IGFueSwgXG4gICAgdHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMgPSB7fSkge1xuXG4gICAgbGV0IHBsYXllcnMgPSB0aGlzLmJ1aWxkUGxheWVycyhlbGVtZW50LCB0cmFuc2l0aW9ucyk7XG4gICAgbGV0IGN1cnJlbnRTdGF0ZTogc3RyaW5nID0gJyc7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAgIHJldHVybiA8QkJBbmltYXRpb25TdGF0ZU1hY2hpbmU+IHtcbiAgICAgICAgaW5pdDogKHN0YXRlOnN0cmluZywgbWFwcGVyOiBCQlN0YXRlQ1NTTWFwcGVyID0gbnVsbCk9PiB7IFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgICAgaWYobWFwcGVyKSB7XG4gICAgICAgICAgICBtYXBwZXIuYWRkKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQ6IChuZXh0U3RhdGU6IHN0cmluZywgbWFwcGVyOiBCQlN0YXRlQ1NTTWFwcGVyID0gbnVsbCkgPT4ge1xuICAgICAgICAgIGlmKGN1cnJlbnRTdGF0ZSAhPT0gbmV4dFN0YXRlKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IHRoaXMuZ2V0UGxheWVyKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlLHBsYXllcnMpO1xuXG4gICAgICAgICAgICBpZihjdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmV3UGxheWVyKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBuZXdQbGF5ZXI7XG5cbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICogUmVzZXRpbmcgdGhlIHBsYXllciBjbGVhcnMgdGhlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgKiBzbyByZXJlZ2lzdGVyIHRoZW0gZWFjaCB0aW1lIGJlZm9yZSBwbGF5aW5nLlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgY3VycmVudFBsYXllci5vblN0YXJ0KFxuICAgICAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25TdGFydChjdXJyZW50U3RhdGUsbWFwcGVyKSk7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIub25Eb25lKFxuICAgICAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Eb25lKG5leHRTdGF0ZSxtYXBwZXIpKTtcblxuICAgICAgICAgICAgICBjdXJyZW50UGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogSW4gY2FzZSBhbiBhbmltYXRpb24gaXNuJ3QgZGVmaW5lZCBmb3JcbiAgICAgICAgICAgICAqIHRoZSB0cmFuc2l0aW9uIGJ1dCBhIGNzcyBjbGFzcyBpcyBoYW5kbGVcbiAgICAgICAgICAgICAqIHRoYXQgYnkgZXhwbGljaXRseSBzd2FwcGluZyBvdXQgIHRoZSBjc3MgXG4gICAgICAgICAgICAgKiBjbGFzc2VzIHdoZW4gdGhlIHRyYW5zaXRpb24gcGxheWVyIGRvZXNuJ3QgXG4gICAgICAgICAgICAgKiBleGlzdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGlmKG1hcHBlcikge1xuICAgICAgICAgICAgICAgIG1hcHBlci5yZW1vdmUoY3VycmVudFN0YXRlKTtcbiAgICAgICAgICAgICAgICBtYXBwZXIuYWRkKG5leHRTdGF0ZSk7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveTogKCk9PiB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95QWxsUGxheWVycyhwbGF5ZXJzKTtcbiAgICAgICAgICBjdXJyZW50UGxheWVyID0gbnVsbDtcbiAgICAgICAgICBjdXJyZW50U3RhdGUgPSBudWxsO1xuICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBudWxsO1xuICAgICAgICAgIHBsYXllcnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSBcblxuICB9XG59XG5cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIvZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIuY29uc3RydWN0b3InO1xuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvclRva2VuIH0gZnJvbSAnLi9keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci9keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci50b2tlbic7XG5pbXBvcnQgeyBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZSB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcHBlci9zdGF0ZS1jc3MtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9hbmltYXRpb24tc3RhdGVzL2FuaW1hdGlvbi1zdGF0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogVGhpcyBpbXBvcnQgaXMgcmVxdWlyZWQgZm9yIHRzIHRvIHJlc29sdmUgdGhlIHJldHVybiBvZiBcbiAqIHRoZSBjcmVhdGVBbmltYXRpb25zSGFuZGxlciBmdW5jdGlvbi4gIFdpdGhvdXQgaXQgY29tcGlsYXRpb25cbiAqIHdpbGwgZmFpbC5cbiAqL1xuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXIgfSBmcm9tICcuL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyLm1vZGVsJztcblxuLypcbmltcG9ydCB7IEJCQW5pbWF0aW9uU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi9hbmltYXRpb24tc3RhdGUtbWFjaGluZS9hbmltYXRpb24tc3RhdGUtbWFjaGluZS5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ1NTTWFwcGVyIH0gZnJvbSAnLi9zdGF0ZS1jc3MtbWFwcGVyL3N0YXRlLWNzcy1tYXBwZXIubW9kZWwnO1xuaW1wb3J0IHsgQkJTdGF0ZUNTU01hcCB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcC9zdGF0ZS1jc3MtbWFwLm1vZGVsJztcbmltcG9ydCB7IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMgfSBmcm9tICcuL2FuaW1hdGlvbi10cmFuc2l0aW9ucy9hbmltYXRpb24tdHJhbnNpdGlvbnMubW9kZWwnO1xuKi9cblxuLyoqXG4gKiBUaGlzIHNlcnZpY2UgaXMgdXNlZCB0byBjcmVhdGUgYSB7QGxpbmsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJ9IFxuICogd2l0aCB0aGUge0BsaW5rIEJCRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlLmNyZWF0ZUFuaW1hdGlvbnNIYW5kbGVyfSBtZXRob2QuXG4gKiBcbiAqIFRoZSB7QGxpbmsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJ9IFxuICogY2FuIGJlIHVzZWQgdG8gaGFuZGxlIGFuaW1hdGlvbnMgYmFzZWQgb24gc3RhdGUgdHJhbnNpdGlvbnNcbiAqIGZvciB0aGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gKiBcbiAqIFRoZSB7QGxpbmsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJ9IGNhbiBiZSB3aXJlZCB1cCB0byBhIFxuICogcGFydGljdWxhciBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHRvIGF1dG9tYXRpY2FsbHkgaGFuZGxlIFxuICogdGhlIGFuaW1hdGlvbnMgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cbiAqIFxuICogQGV4YW1wbGVcbiAqIGBARGlyZWN0aXZlKClgXG4gKiBleHBvcnQgY2xhc3MgQW5pbWF0ZWREaXJlY3RpdmUge1xuICogICBwcml2YXRlIGFuaW1hdGlvbnNIYW5kbGVyOiBCQkR5bmFtaWNBbmltYXRpb25zSGFuZGxlcjtcbiAqIFxuICogICBgQElucHV0KClgIHNldCBjc3NNYXAgKG1hcDogQkJTdGF0ZUNTU01hcCkge1xuICogICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIuc2V0Q1NTTWFwKG1hcCk7XG4gKiAgIH1cbiAqIFxuICogICBgQElucHV0KClgIHNldCBzdGF0ZSh0b1N0YXRlOiBzdHJpbmcpIHtcbiAqICAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyLm5leHRTdGF0ZSh0b1N0YXRlKTtcbiAqICAgfVxuICogXG4gKiAgIGBASW5wdXQoKWAgc2V0IHRyYW5zaXRpb25zKHRyYW5zaXRpb25zOiBCQkFuaW1hdGlvblRyYW5zaXRpb25zKSB7XG4gKiAgICAgdGhpcy5hbmltYXRpb25zSGFuZGxlci5zZXRUcmFuc2l0aW9ucyh0cmFuc2l0aW9ucyk7XG4gKiAgIH1cbiAqIFxuICogICBjb25zdHJ1Y3RvcihcbiAqICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICogICAgIHByaXZhdGUgZGFTZXJ2aWNlOiBEeW5hbWljQW5pbWF0aW9uc1NlcnZpY2UsXG4gKiAgICkge1xuICogICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIgPSB0aGlzLmRhU2VydmljZVxuICogICAgICAgLmNyZWF0ZUFuaW1hdGlvbnNIYW5kbGVyKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gKiAgIH1cbiAqIFxuICogICBuZ09uSW5pdCgpIHsgIFxuICogICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIuaW5pdCgpO1xuICogICB9XG4gKiBcbiAqICAgbmdPbkRlc3Ryb3koKSB7XG4gKiAgICAgdGhpcy5hbmltYXRpb25zSGFuZGxlci5kZXN0cm95KCk7XG4gKiAgIH1cbiAqIH1cbiAqIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQkJEeW5hbWljQW5pbWF0aW9uc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvclRva2VuKSBcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yOiBCQkR5bmFtaWNBbmltYXRpb25zSGFuZGxlckNvbnN0cnVjdG9yLFxuICAgIHByaXZhdGUgY3NzTWFwcGVyU2VydmljZTogQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZXNCdWlsZGVyOiBCQkFuaW1hdGlvblN0YXRlc1NlcnZpY2UsXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHtAbGluayBCQkR5bmFtaWNBbmltYXRpb25zSGFuZGxlcn0gZm9yIFxuICAgKiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogXG4gICAqIFNlZSB7QGxpbmsgRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlfSBmb3IgZXhhbXBsZVxuICAgKiB1c2FnZS5cbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGF0dGFjaCB0aGUgYW5pbWF0aW9uc1xuICAgKiBoYW5kbGVyIHRvLiBcbiAgICovXG4gIGNyZWF0ZUFuaW1hdGlvbnNIYW5kbGVyKGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgIGVsZW1lbnQsXG4gICAgICB0aGlzLmNzc01hcHBlclNlcnZpY2UsXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXRlc0J1aWxkZXIpO1xuICB9XG59XG5cblxuXG5cblxuICAgIC8vcHJpdmF0ZSBjc3NNYXBwZXJTZXJ2aWNlOiBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZSxcbiAgICAvL3ByaXZhdGUgYVN0YXRlQnVpbGRlcjogQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlLFxuXG5cblxuXG5cblxuXG5cblxuXG4gLypcbiAgICBsZXQgYW5pbWF0aW9uc1N0YXRlTWFjaGluZTogQkJBbmltYXRpb25TdGF0ZU1hY2hpbmU7XG4gICAgbGV0IGNzc01hcHBlcjogQkJTdGF0ZUNTU01hcHBlcjtcbiAgICBsZXQgc3RhdGVDYWNoZTogc3RyaW5nID0gJyc7XG4gICAgbGV0IG1hcENhY2hlOiBCQlN0YXRlQ1NTTWFwID0ge307XG4gICAgbGV0IHRyYW5zaXRpb25zQ2FjaGU6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMgPSB7fTtcbiAgICAqL1xuXG4gICAgLypcblxuICAgIHJldHVybiA8QkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXI+e1xuICAgICAgc2V0Q1NTTWFwOiAobWFwOiBCQlN0YXRlQ1NTTWFwKSA9PiB7XG4gICAgICAgIGlmKG1hcENhY2hlICE9PSBtYXApIHtcbiAgICAgICAgICBtYXBDYWNoZSA9IG1hcDtcblxuICAgICAgICAgIGlmKGNzc01hcHBlcikge1xuICAgICAgICAgICAgY3NzTWFwcGVyLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgY3NzTWFwcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjc3NNYXBwZXIgPSB0aGlzLmNzc01hcHBlclNlcnZpY2VcbiAgICAgICAgICAgIC5jcmVhdGVTdGF0ZUNTU01hcHBlcihlbGVtZW50LG1hcENhY2hlKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgbmV4dFN0YXRlOiAodG9TdGF0ZTpzdHJpbmcpID0+IHtcbiAgICAgICAgaWYoc3RhdGVDYWNoZSAhPT0gdG9TdGF0ZSkge1xuICAgICAgICAgIHN0YXRlQ2FjaGUgPSB0b1N0YXRlO1xuXG4gICAgICAgICAgaWYoYW5pbWF0aW9uc1N0YXRlTWFjaGluZSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uc1N0YXRlTWFjaGluZS5uZXh0KFxuICAgICAgICAgICAgICBzdGF0ZUNhY2hlLCBcbiAgICAgICAgICAgICAgY3NzTWFwcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHNldFRyYW5zaXRpb25zOiAodHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMpID0+IHtcbiAgICAgICAgaWYodHJhbnNpdGlvbnNDYWNoZSAhPT0gdHJhbnNpdGlvbnMpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uc0NhY2hlID0gdHJhbnNpdGlvbnM7XG5cbiAgICAgICAgICBpZihhbmltYXRpb25zU3RhdGVNYWNoaW5lKSB7XG5cbiAgICAgICAgICAgIGlmKGNzc01hcHBlcikge1xuICAgICAgICAgICAgICBjc3NNYXBwZXIucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUuZGVzdHJveSgpO1xuICAgICAgICAgIH0gICAgXG5cbiAgICAgICAgICBhbmltYXRpb25zU3RhdGVNYWNoaW5lID0gXG4gICAgICAgICAgICB0aGlzLmFTdGF0ZUJ1aWxkZXJcbiAgICAgICAgICAgICAgLmNyZWF0ZUFuaW1hdGlvblN0YXRlTWFjaGluZShcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25zQ2FjaGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBpbml0OiAoKSA9PiB7ICBcbiAgICAgICAgaWYoYW5pbWF0aW9uc1N0YXRlTWFjaGluZSkge1xuICAgICAgICAgIGFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUuaW5pdChcbiAgICAgICAgICAgIHN0YXRlQ2FjaGUsXG4gICAgICAgICAgICBjc3NNYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUuZGVzdHJveSgpO1xuICAgICAgICBjc3NNYXBwZXIuZGVzdHJveSgpO1xuICAgICAgICBzdGF0ZUNhY2hlID0gbnVsbDtcbiAgICAgICAgbWFwQ2FjaGUgPSBudWxsO1xuICAgICAgICB0cmFuc2l0aW9uc0NhY2hlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJCRHluYW1pY0FuaW1hdGlvbnNCYXNlIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zL2R5bmFtaWMtYW5pbWF0aW9ucy5iYXNlJztcbmltcG9ydCB7IEJCRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zL2R5bmFtaWMtYW5pbWF0aW9ucy5zZXJ2aWNlJztcblxuLyoqXG4gKiBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JiLWFsdC1wYW5lbF0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZXM6IFtgYF0sXG4gIGFuaW1hdGlvbnM6IFtdLFxuICBleHBvcnRBczogJ2JiQWx0UGFuZWwnLFxufSlcbmV4cG9ydCBjbGFzcyBCQkFsdGVybmF0aW5nUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBCQkR5bmFtaWNBbmltYXRpb25zQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgZGFTZXJ2OiBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoZWxSZWYubmF0aXZlRWxlbWVudCwgZGFTZXJ2KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFuaW1hdGlvbnMvZHluYW1pYy1hbmltYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25UcmFuc2l0aW9ucyB9IGZyb20gJy4uL2R5bmFtaWMtYW5pbWF0aW9ucy9hbmltYXRpb24tdHJhbnNpdGlvbnMvYW5pbWF0aW9uLXRyYW5zaXRpb25zLm1vZGVsJztcbmltcG9ydCB7IEJCRHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyL2R5bmFtaWMtYW5pbWF0aW9ucy1oYW5kbGVyLm1vZGVsJztcbmltcG9ydCB7IEJCU3RhdGVDU1NNYXAgfSBmcm9tICcuLi9keW5hbWljLWFuaW1hdGlvbnMvc3RhdGUtY3NzLW1hcC9zdGF0ZS1jc3MtbWFwLm1vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiQWx0ZXJuYXRpbmdQYW5lbF0nXG59KVxuZXhwb3J0IGNsYXNzIEJCQWx0ZXJuYXRpbmdQYW5lbERpcmVjdGl2ZSB7XG4gIHByaXZhdGUgYW5pbWF0aW9uc0hhbmRsZXI6IEJCRHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyO1xuXG4gIEBJbnB1dCgpIHNldCBjc3NNYXAgKG1hcDogQkJTdGF0ZUNTU01hcCkge1xuICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIuc2V0Q1NTTWFwKG1hcCk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgc3RhdGUodG9TdGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hbmltYXRpb25zSGFuZGxlci5uZXh0U3RhdGUodG9TdGF0ZSk7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdHJhbnNpdGlvbnModHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyLnNldFRyYW5zaXRpb25zKHRyYW5zaXRpb25zKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkYVNlcnY6IEJCRHluYW1pY0FuaW1hdGlvbnNTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyID0gdGhpcy5kYVNlcnZcbiAgICAgIC5jcmVhdGVBbmltYXRpb25zSGFuZGxlcih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgICB0aGlzLmFuaW1hdGlvbnNIYW5kbGVyLmluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYW5pbWF0aW9uc0hhbmRsZXIuZGVzdHJveSgpO1xuICB9XG4gIFxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCQkFsdGVybmF0aW5nUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2FsdGVybmF0aW5nLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCQkFsdGVybmF0aW5nUGFuZWxEaXJlY3RpdmUgfSBmcm9tICcuL2FsdGVybmF0aW5nLXBhbmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCQkR5bmFtaWNBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zL2R5bmFtaWMtYW5pbWF0aW9ucy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBCQkFuaW1hdGlvblN0YXRlc1NlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFuaW1hdGlvbnMvYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UgfSBmcm9tICcuLi9keW5hbWljLWFuaW1hdGlvbnMvL3N0YXRlLWNzcy1tYXBwZXIvc3RhdGUtY3NzLW1hcHBlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy9Db21tb25Nb2R1bGUsXG4gICAgLy9CQkR5bmFtaWNBbmltYXRpb25zTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJCQWx0ZXJuYXRpbmdQYW5lbENvbXBvbmVudCxcbiAgICBCQkFsdGVybmF0aW5nUGFuZWxEaXJlY3RpdmUsIFxuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICBCQkFsdGVybmF0aW5nUGFuZWxDb21wb25lbnQsXG4gICAgQkJBbHRlcm5hdGluZ1BhbmVsRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQkJBbHRlcm5hdGluZ1BhbmVsTW9kdWxlIHsgXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJBbHRlcm5hdGluZ1BhbmVsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC8vQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlLFxuICAgICAgICAvL0JCU3RhdGVDc3NNYXBwZXJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfSAgXG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2JiLW1lbnUtaXRlbV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgIEJCTWVudUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3UmVmLFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0QmluZGluZyxcclxuICBOZ1pvbmUsXHJcbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQk1lbnVJdGVtIH0gZnJvbSAnLi4vY29tbW9uL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbCB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItY29sbGFwc2luZy1tZW51XScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICA8ZGl2ICNkaXNwbGF5ZWRJdGVtcyBjbGFzcz1cImRpc3BsYXllZFwiPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICAjdG9nZ2xlXHJcbiAgICAgICAgW2NsYXNzLmhpZGRlbl09XCIhaGFzT3ZlcmZsb3dcIiBcclxuICAgICAgICBbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdPVwicGFuZWxcIlxyXG4gICAgICAgIFt0b2dnbGVPbkNsaWNrXT1cInRvZ2dsZU9uQ2xpY2tcIlxyXG4gICAgICAgIFtjbG9zZU9uQ2xpY2tPdXRzaWRlXT1cImNsb3NlT25DbGlja091dHNpZGVcIlxyXG4gICAgICAgIFtzaG93T25Ib3Zlcl09XCJzaG93T25Ib3ZlclwiPlxyXG4gICAgXHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCJcclxuICAgICAgICNjb2xsYXBzZWRJdGVtcyBcclxuICAgICAgIHNsaWRlRGlyZWN0aW9uPVwiZG93blwiXHJcbiAgICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BkaXYuZGlzcGxheWVke2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXNocmluazowO2Rpc3BsYXk6ZmxleH1kaXYubWVudS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OmluaGVyaXQ7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MX1kaXYuYmItc2xpZGluZy1wYW5lbHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzoxO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjEwMCV9ZGl2LmhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn1gXSxcclxuICBob3N0OntcclxuICAgICcod2luZG93OnJlc2l6ZSknOiBcIm9uV2luZG93UmVzaXplKClcIixcclxuICB9LFxyXG4gIGV4cG9ydEFzOiBcImJiQ29sbGFwc2luZ01lbnVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJDb2xsYXBzaW5nTWVudSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1jb2xsYXBzaW5nLW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbGxhcHNlZCBpdGVtcyBzaG91bGQgIFxyXG4gICAqIG9wZW4gYmFzZWQgb24gYSBjbGljayBldmVudCBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9nZ2xlT25DbGljayA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbGxhcHNlZCBpdGVtcyBzaG91bGQgb3BlbiBcclxuICAgKiBvbiBtb3VzZSBvdmVyIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T25Ib3ZlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbXMgc2hvdWxkIGNsb3NlXHJcbiAgICogV2hlbiBjbGlja2VkIG91dHNpZGUgdGhlIHRvZ2dsZSBvciBwYW5lbCBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQkJNZW51SXRlbSwge3JlYWQ6RWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IGZhbHNlfSkgXHJcbiAgICBpdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Rpc3BsYXllZEl0ZW1zJywge3JlYWQ6RWxlbWVudFJlZn0pIFxyXG4gICAgZGlzcGxheWVkSXRlbXM6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2VkSXRlbXMnLCB7cmVhZDpFbGVtZW50UmVmfSkgXHJcbiAgICBjb2xsYXBzZWRJdGVtczogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0b2dnbGUnLCB7cmVhZDpFbGVtZW50UmVmfSkgXHJcbiAgICB0b2dnbGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG5cclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhbmVsLmlzU2hvd2luZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlciBpc3N1ZSAxMDA5OCBDb250ZW50Q2hpbGRyZW4gY3VycmVudGx5IGFsc28gYWRkcyB0aGUgaG9zdCBjb21wb25lbnRcclxuICAgKiB0byBhIFF1ZXJ5TGlzdCB0aGF0IGl0IHNhdGlzZmllcyBtYWtpbmcgaXQgbmVjZXNzYXJ5IHRvIGZpbHRlciB0aGUgXHJcbiAgICogaG9zdCBjb21wb25lbnQgb3V0IG9mIGl0J3Mgb3duIGxpc3QgaW4gY2FzZSBzb21lb25lIHdhbnRzIHRvIG5lc3RcclxuICAgKiBhIGNvbGxhcHNpbmcgbWVudSBpbnNpZGUgYW5vdGhlciBCQiBjb21wb25lbnQgdGhhdCB1c2VzIEJCTWVudUl0ZW1zLlxyXG4gICAqIFxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMDk4I2lzc3VlY29tbWVudC0yMzUxNTc2NDJcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBpdGVtRWxlbWVudHMoKTogRWxlbWVudFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLnRvQXJyYXkoKVxyXG4gICAgICAuZmlsdGVyKGVsPT4gZWwubmF0aXZlRWxlbWVudCAhPT0gdGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhvc3REaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGRpc3BsYXllZERpdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRJdGVtcy5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgY29sbGFwc2VkRGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEl0ZW1zLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCB0b2dnbGVEaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBoYXNPdmVyZmxvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBcclxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2FsY3VsYXRlT3ZlcmZsb3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGljaCwgaWYgYW55LCBpdGVtcyBuZWVkIHRvIGJlIFxyXG4gICAqIG1vdmVkIGludG8gdGhlIGNvbGxhcHNlZCBwYW5lbCB3aGVuIHRoZXkgXHJcbiAgICogb3ZlcmZsb3cgdGhlIG1lbnUgd2lkdGguXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVPdmVyZmxvdygpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5wcm9qZWN0Tm9kZXModGhpcy5kaXNwbGF5ZWREaXYsIFxyXG4gICAgICAgIHRoaXMuaXRlbUVsZW1lbnRzLm1hcChlbD0+eyByZXR1cm4gZWwubmF0aXZlRWxlbWVudCB9KSk7XHJcblxyXG4gICAgICBpZih0aGlzLmFyZURpc3BsYXllZEl0ZW1zVG9XaWRlKCkpIHtcclxuXHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhc092ZXJmbG93ID0gdHJ1ZX0pfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVDYWxjZWRSaWdodCA9IFxyXG4gICAgICAgICAgKHRoaXMuaG9zdERpdi5vZmZzZXRMZWZ0ICsgXHJcbiAgICAgICAgICB0aGlzLmhvc3REaXYub2Zmc2V0V2lkdGggLSBcclxuICAgICAgICAgIHRoaXMudG9nZ2xlRGl2Lm9mZnNldFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0T3ZlcmZsb3dJbmRleCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcclxuICAgICAgICBsZXQgb3ZlcmZsb3dBbW91bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgaXRlbSB0aGF0IGlzIG91dHNpZGUgdGhlIG1lbnUncyBzaXplIC0gdG9nZ2xlIHNpemVcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGVsZSA9ICh0aGlzLml0ZW1FbGVtZW50c1tpXS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IGVsZUNhbGNlZFJpZ2h0ID0gKGVsZS5vZmZzZXRMZWZ0ICsgdGhpcy5ob3N0RGl2Lm9mZnNldExlZnQgKyBlbGUub2Zmc2V0V2lkdGgpO1xyXG5cclxuICAgICAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCBhbiBpdGVtIG92ZXJmbG93cyB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAvLyB0YWtpbmcgdGhlIHRvZ2dsZXMgd2lkdGggaW50byBhY2NvdW50LlxyXG4gICAgICAgICAgb3ZlcmZsb3dBbW91bnQgPSBlbGVDYWxjZWRSaWdodCAtIG1lbnVDYWxjZWRSaWdodDtcclxuXHJcbiAgICAgICAgICBpZihvdmVyZmxvd0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZmlyc3RPdmVyZmxvd0luZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgaXRlbXMgYXJlIGNvbGxhcHNlZFxyXG4gICAgICAgIGlmIChmaXJzdE92ZXJmbG93SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnByb2plY3ROb2Rlcyh0aGlzLmNvbGxhcHNlZERpdixcclxuICAgICAgICAgICAgICB0aGlzLml0ZW1FbGVtZW50cy5tYXAoZWw9PntyZXR1cm4gZWwubmF0aXZlRWxlbWVudH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoZSBvdmVyZmxvdyBpdGVtcyBtYWtlIGVub3VnaCByb29tIGZvciB0aGUgdG9nZ2xlXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucHJvamVjdE5vZGVzKHRoaXMuY29sbGFwc2VkRGl2LFxyXG4gICAgICAgICAgICAgIHRoaXMuaXRlbUVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA+PSBmaXJzdE92ZXJmbG93SW5kZXgpfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZWw9PntyZXR1cm4gZWwubmF0aXZlRWxlbWVudH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhc092ZXJmbG93ID0gZmFsc2V9KX0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIG1lbnUgY29udGVudCB3aWR0aCBpcyBsYXJnZXIgdGhhbiB0aGUgbWVudSB3aWR0aFxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXJlRGlzcGxheWVkSXRlbXNUb1dpZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWREaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiBcclxuICAgICAgdGhpcy5ob3N0RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlcnNcclxuICAgKi9cclxuXHJcbiAgb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZU92ZXJmbG93KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCTWVudUl0ZW0gfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJNZW51SXRlbSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJCTWVudUl0ZW0sXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJDb21tb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCQ29tbW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuIH1cclxuIiwiZXhwb3J0IGVudW0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zIHtcclxuICAgIENMT1NFID0gJ2Nsb3NlJyxcclxuICAgIFNMSURFX0xFRlQgPSAnc2xpZGUtbGVmdCcsXHJcbiAgICBTTElERV9SSUdIVCA9ICdzbGlkZS1yaWdodCcsXHJcbiAgICBTTElERV9VUCA9ICdzbGlkZS11cCcsXHJcbiAgICBTTElERV9ET1dOID0gJ3NsaWRlLWRvd24nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTbGlkZURpcmVjdGlvbnMge1xyXG4gICAgTEVGVCA9ICdsZWZ0JyxcclxuICAgIFJJR0hUID0gJ3JpZ2h0JyxcclxuICAgIFVQID0gJ3VwJyxcclxuICAgIERPV04gPSAnZG93bicsXHJcbn0iLCJpbXBvcnQgeyBhbmltYXRpb24sIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgZ3JvdXAsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25NZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMgfSBmcm9tIFwiLi9zbGlkaW5nLXBhbmVsLmVudW1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVydGljYWxTbGlkZUFuaW1hdGlvbnMoKTogQW5pbWF0aW9uTWV0YWRhdGEgIHtcclxuICAgIHJldHVybiB0cmlnZ2VyKCd2ZXJ0aWNhbFRyaWdnZXInLCBbXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBzdGF0ZShTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfRE9XTiwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1VQLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFNsaWRlRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuU0xJREVfRE9XTiwgXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYCR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFfSA9PiAke1NsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9ET1dOfWAsIFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgYCR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0RPV059ID0+ICR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFfWAsXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuU0xJREVfRE9XTiArIFxyXG4gICAgICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuQ0xPU0UsIFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3RvcCcgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1VQLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2JvdHRvbScgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2JvdHRvbScgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfVVAgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdib3R0b20nIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnYm90dG9tJyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob3Jpem9udGFsU2xpZGVBbmltYXRpb25zKCk6IEFuaW1hdGlvbk1ldGFkYXRhICB7XHJcbiAgICByZXR1cm4gdHJpZ2dlcignaG9yaXpvbnRhbFRyaWdnZXInLCBbXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBzdGF0ZShTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQsIHN0eWxlKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHN0YXRlKFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9MRUZULCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9SSUdIVCwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdsZWZ0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnbGVmdCcgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdsZWZ0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2xlZnQnIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0xFRlQsIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAncmlnaHQnIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdyaWdodCcgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfTEVGVCArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0JyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LCBcclxuICBJbnB1dCwgXHJcbiAgT3V0cHV0LCBcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE5nWm9uZSxcclxuICBIb3N0QmluZGluZyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGtleWZyYW1lcyxcclxuICBhbmltYXRlLFxyXG4gIGdyb3VwXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBcclxuICB2ZXJ0aWNhbFNsaWRlQW5pbWF0aW9ucywgXHJcbiAgaG9yaXpvbnRhbFNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vc2xpZGluZy1wYW5lbC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLCBTbGlkZURpcmVjdGlvbnMgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwuZW51bXMnO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBzbGlkaW5nIHBhbmVsIGlzIGEgZGl2IGVsZW1lbnQgdGhhdCBjYW4gYmUgXHJcbiAqIHNldCB0byBzbGlkZSB1cCwgZG93biwgbGVmdCwgb3IgcmlnaHQuXHJcbiAqIFxyXG4gKiBJdCBjYW4gYmUgdGllZCB0byBhIHNsaWRpaW5nIHBhbmVsIHRvZ2dsZVxyXG4gKiBvciBjYW4gYmUgc2hvd24gb3IgaGlkZGVuIGJ5IGNhbGxpbmcgdGhlXHJcbiAqIHB1YmxpYyBtZW1iZXJzIHNob3csIGhpZGUsIG9yIHRvZ2dsZS4gXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1zbGlkaW5nLXBhbmVsXScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAaG9yaXpvbnRhbFRyaWdnZXJdJzonaG9yaXpvbnRhbFN0YXRlJyxcclxuICAgICdbQHZlcnRpY2FsVHJpZ2dlcl0nOid2ZXJ0aWNhbFN0YXRlJyxcclxuICAgICdbY2xhc3Mub3Blbl0nOidpc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5jbG9zZWRdJzonIWlzU2hvd2luZycsXHJcbiAgICAnW2NsYXNzLnBpbm5lZF0nOidwaW5uZWQnLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6J21vdXNlRW50ZXJQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJyhtb3VzZWxlYXZlKSc6J21vdXNlTGVhdmVQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJyhtb3VzZW92ZXIpJzonbW91c2VPdmVyUGFuZWwuZW1pdCgkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzonY2xpY2tQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJ1tjbGFzcy5iYi1zbGlkaW5nLXBhbmVsXSc6XCIndHJ1ZSdcIlxyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdmVydGljYWxTbGlkZUFuaW1hdGlvbnMoKSwgXHJcbiAgICBob3Jpem9udGFsU2xpZGVBbmltYXRpb25zKCksXHJcbiAgXSxcclxuICBleHBvcnRBczogJ2JiU2xpZGluZ1BhbmVsJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGluZ1BhbmVsIHtcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHBhbmVscyBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKiBWYWxpZCB2YWx1ZXM6ICd1cCcsICdkb3duJywgJ2xlZnQnLCBvciAncmlnaHQnXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2xpZGVEaXJlY3Rpb246IFNsaWRlRGlyZWN0aW9ucyA9IFNsaWRlRGlyZWN0aW9ucy5ET1dOO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmb3Igd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBwYW5lbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VFbnRlclBhbmVsPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGZvciB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHBhbmVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtb3VzZUxlYXZlUGFuZWw9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgZm9yIHdoZW4gdGhlIG1vdXNlIGlzIG92ZXIgdGhlIHBhbmVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXJQYW5lbD0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmb3Igd2hlbiB0aGUgcGFuZWwgaXMgY2xpY2tlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgY2xpY2tQYW5lbD0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgcGlubmVkID0gZmFsc2U7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIGZvciB0aGUgaG9yaXpvbnRhbCBhbmltYXRpb25zLlxyXG4gICAqL1xyXG4gIGhvcml6b250YWxTdGF0ZSA6IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucyA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBmb3IgdGhlIHZlcnRpY2FsIGFuaW1hdGlvbnMuXHJcbiAgICovXHJcbiAgdmVydGljYWxTdGF0ZSA6IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucyA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBhbmVsIGlzIG9wZW4gb3IgY2xvc2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNTaG93aW5nKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmhvcml6b250YWxTdGF0ZSAhPT0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFIHx8XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFN0YXRlICE9PSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgcGFuZWwgd2l0aCBhIHNsaWRpbmcgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KCkge1xyXG4gICAgc3dpdGNoKHRoaXMuc2xpZGVEaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuTEVGVDoge1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0xFRlQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuUklHSFQ6IHtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9SSUdIVDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNsaWRlRGlyZWN0aW9ucy5VUDoge1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9VUDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNsaWRlRGlyZWN0aW9ucy5ET1dOOiB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0RPV047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIHBhbmVsIHdpdGggYSBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZSgpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgdGhpcy52ZXJ0aWNhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0aGUgcGFuZWwgc3RhdGUgd2l0aCBhIHNsaWRpbmcgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b2dnbGUoKSB7XHJcbiAgICBpZih0aGlzLmlzU2hvd2luZyl7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICBEaXJlY3RpdmUsIFxyXG4gIElucHV0LCBcclxuICBIb3N0TGlzdGVuZXIsIFxyXG4gIEhvc3RCaW5kaW5nLCBcclxuICBOZ1pvbmUsIFxyXG4gIEVsZW1lbnRSZWYsIFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiAsICBmcm9tRXZlbnQgLCAgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyICwgIGNvbWJpbmVMYXRlc3QgLCAgbWVyZ2UgLCAgbWFwICwgIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBDb250cm9sIGEgc2xpZGluZyBwYW5lbHMgc2hvd24gb3IgaGlkZGVuIHN0YXRlLlxyXG4gKiBcclxuICogU2hvdWxkIG9ubHkgYmUgYXR0YWNoZWQgdG8gZWxlbWVudHMgdGhhdCBoYXZlXHJcbiAqIGEgY2xpY2sgZXZlbnQuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Mub3Blbl0nOidwYW5lbC5pc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5jbG9zZWRdJzonIXBhbmVsLmlzU2hvd2luZycsXHJcbiAgICAnW2NsYXNzLnBpbm5lZF0nOidwYW5lbC5waW5uZWQnLFxyXG4gICAgJ1tjbGFzcy5iYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV0nOlwiJ3RydWUnXCJcclxuICB9LFxyXG4gIGV4cG9ydEFzOidiYlNsaWRpbmdQYW5lbFRvZ2dsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGluZ1BhbmVsVG9nZ2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGFuZWwgdGhhdCB0aGUgdG9nZ2xlIGlzIGF0dGFjaGVkIHRvLlxyXG4gICAqIFxyXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgbm90IHNldCBhbiBlcnJvciB3aWxsIGJlIFxyXG4gICAqIHRocm93biBkdXJpbmcgaW5pdC5cclxuICAgKi9cclxuICBASW5wdXQoJ2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgb3BlbiBiYXNlZCBcclxuICAgKiBvbiBhIGNsaWNrIGV2ZW50IG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSB0b2dnbGVPbkNsaWNrID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIHBhbmVsIHNob3VsZCBvcGVuIFxyXG4gICAqIG9uIG1vdXNlIG92ZXIgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPbkhvdmVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIHBhbmVsIHNob3VsZCBjbG9zZSBXaGVuXHJcbiAgICogY2xpY2tlZCBvdXRzaWRlIHRoZSB0b2dnbGUgb3IgcGFuZWwgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgcGFuZWwgXHJcbiAgICogYnkgcGlubmluZyBvcGVuIGl0IGlmIHRydWUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uSW5pdDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogS2VlcCB0cmFjayBvZiB0aGUgcHJldmlvdXMgcGluIHN0YXRlLlxyXG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGRldGVybWluZSBpZiB0aGUgXHJcbiAgICogbmV3IHBpbiBzdGF0ZSBzaG91bGQgYWN0dWFsbHkgY2F1c2UgYVxyXG4gICAqIHRyYW5zaXRpb24gb3Igbm90LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmlvdXNQaW5uZWRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNhdmUgaGUgc3Vic2NyaXB0aW9uIHNvIHRoZSBzdHJlYW1cclxuICAgKiBjYW4gYmUgcHJvcGVybHkgY2xvc2VkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2hvd0hpZGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmKCF0aGlzLnBhbmVsKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTbGlkaW5nUGFuZWwgY29tcG9uZW50IHN1cHBsaWVkIHRvICcgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICd0aGUgYmItc2xpZGluZy1wYW5lbC10b2dnbGUgZGlyZWN0aXZlICcgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICcoW2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlXT1cIiRQYW5lbFZhcmlhYmxlXCIpLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24gJiYgIXRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24uY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogU3RyZWFtcyBvZiB0aGUgZXZlbnRzIG5lY2Vzc2FyeSBcclxuICAgICAqIGZvciB0aGUgbG9naWMgb2YgdGhlIHRvZ2dsZS5cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBkb2N1bWVudENsaWNrJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVDbGljayQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpO1xyXG4gICAgbGV0IHRvZ2dsZU1vdXNlRW50ZXIkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpO1xyXG4gICAgbGV0IHRvZ2dsZU1vdXNlTGVhdmUkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xyXG5cclxuICAgIGxldCBwYW5lbE1vdXNlRW50ZXJlZCQgPSB0aGlzLnBhbmVsLm1vdXNlRW50ZXJQYW5lbC5hc09ic2VydmFibGUoKTtcclxuICAgIGxldCBwYW5lbE1vdXNlTGVmdCQgPSB0aGlzLnBhbmVsLm1vdXNlTGVhdmVQYW5lbC5hc09ic2VydmFibGUoKTtcclxuICAgIGxldCBwYW5lbENsaWNrJCA9IHRoaXMucGFuZWwuY2xpY2tQYW5lbC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogUmVkdWNlIGJvdGggbGVhdmluZyBldmVudHMgdG8gXHJcbiAgICAgKiBhIGZhbHNlIGVtaXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBsZXQgbGVhdmVCb3RoJCA9IHRvZ2dsZU1vdXNlTGVhdmUkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKHBhbmVsTW91c2VMZWZ0JCksXHJcbiAgICAgICAgZmlsdGVyKF89PnRoaXMuc2hvd09uSG92ZXIpLCBcclxuICAgICAgICBtYXAoXz0+ZmFsc2UpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogUmVkdWNlIGJvdGggZW50ZXIgZXZlbnRzIHRvIFxyXG4gICAgICogYSB0cnVlIGVtaXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBsZXQgZW50ZXJFaXRoZXIkID0gdG9nZ2xlTW91c2VFbnRlciRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWVyZ2UocGFuZWxNb3VzZUVudGVyZWQkKSxcclxuICAgICAgICBmaWx0ZXIoXz0+dGhpcy5zaG93T25Ib3ZlciksXHJcbiAgICAgICAgbWFwKF89PnRydWUpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogV2hlbiB0aGUgdG9nZ2xlIGlzIGNsaWNrZWQgXHJcbiAgICAgKiBzdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nXHJcbiAgICAgKiBhbmQgdG9nZ2xlIHRoZSBwaW5uZWQgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGxldCB0b2dnbGVDbGlja2VkJCA9IHRvZ2dsZUNsaWNrJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoXz0+IHtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgKiBzaG91bGQgcHJvYmFibHkgYmUgZG9uZSB3aXRoXHJcbiAgICAgICAgICAgKiBhIGRvIG9wZXJhdG9yLCBvbmNlIGl0IHdvcmtzIGFnYWluLFxyXG4gICAgICAgICAgICogZm9yIGJvdGggdG9nZ2xlIGNsaWNrZWQgYW5kIHBhbmVsXHJcbiAgICAgICAgICAgKiBjbGlja2VkXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgcmV0dXJuICF0aGlzLnByZXZpb3VzUGlubmVkU3RhdGUgfSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBXaGVuIHRoZSBwYW5lbCBpcyBjbGlja2VkXHJcbiAgICAgKiBzdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nXHJcbiAgICAgKiBhbmQganVzdCBjb250aW51ZSB0byBlbWl0IHRoZVxyXG4gICAgICogcHJldmlvdXMgcGlubmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBsZXQgcGFuZWxDbGlja2VkJCA9IHBhbmVsQ2xpY2skXHJcbiAgICAgIC5waXBlKG1hcChfPT57XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSB9KSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEEgZG9jdW1lbnQgY2xpY2sgaXMgb25seVxyXG4gICAgICogdHJpZ2dlcmVkIHdoZW4gdGhlIHBhbmVsXHJcbiAgICAgKiBhbmQgdGhlIHRvZ2dsZSBkb24ndCBwcmV2ZW50XHJcbiAgICAgKiB0aGUgYnViYmxpbmcgc28ganVzdCBlbWl0IFxyXG4gICAgICogZmFsc2UgYXMgdGhlIG5leHQgcGlubmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBsZXQgZG9jdW1lbnRDbGlja2VkJCA9IGRvY3VtZW50Q2xpY2skXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihfPT50aGlzLmNsb3NlT25DbGlja091dHNpZGUpLFxyXG4gICAgICAgIG1hcChfPT5mYWxzZSkpO1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgICogQ29tYmluZSBhbGwgdGhlIHBpbm5lZCBzdGF0ZVxyXG4gICAgICogc3RyZWFtcy5cclxuICAgICAqL1xyXG4gICAgbGV0IG5leHRQaW5uZWRTdGF0ZSQgPSBvZih0aGlzLnNob3dPbkluaXQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKHRvZ2dsZUNsaWNrZWQkLCBwYW5lbENsaWNrZWQkLCBkb2N1bWVudENsaWNrZWQkKSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIENvbWJpbmUgYWxsIHRoZSBtb3VzZSBtb3ZlbWVudFxyXG4gICAgICogc3RyZWFtcy5cclxuICAgICAqL1xyXG4gICAgbGV0IGlzSG92ZXJpbmckID0gb2YoZmFsc2UpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKGxlYXZlQm90aCQsIGVudGVyRWl0aGVyJCksXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICogNTAgaGVyZSBpcyBhcmJpdHJhcnkgYnV0IFxyXG4gICAgICAgICAgKiBzZWVtcyB0byBiZSBiZWxvdyB0aGUgXHJcbiAgICAgICAgICAqIGh1bWFuIHRocmVzaGhvbGQgZm9yIG5vdGljaW5nXHJcbiAgICAgICAgICAqIHRoZSBkZWxheSB3aGlsZSBsZXR0aW5nIFxyXG4gICAgICAgICAgKiBzbG93ZXIgc3lzdGVtcyBoYXZlIHBsZW50eSBvZlxyXG4gICAgICAgICAgKiB0aW1lIHRvIHByb2Nlc3MgdGhlIGV2ZW50cy5cclxuICAgICAgICAgICogXHJcbiAgICAgICAgICAqIE1heWJlIGl0IHNob3VsZCBiZSBjb25maWd1cmFibGU/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb21iaW5lIHRoZSBob3ZlciBhbmQgcGlubmVkIHN0YXRlXHJcbiAgICAgKiBzdHJlYW1zIGludG8gYSBzdHJlYW0gdGhhdCBkZXRlcm1pbmVzXHJcbiAgICAgKiB3aGV0aGVyIHRoZSBwYW5lbCBzdGF0ZSBuZWVkcyB0byBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24gPSBcclxuICAgICAgaXNIb3ZlcmluZyRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGNvbWJpbmVMYXRlc3QobmV4dFBpbm5lZFN0YXRlJCksXHJcbiAgICAgICAgICBtYXAoc3RhdGVzPT4oe2hvdmVyOnN0YXRlc1swXSxwaW46c3RhdGVzWzFdIH0pKSlcclxuICAgICAgICAuc3Vic2NyaWJlKHRoaXMub25OZXh0U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZih0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uICYmICF0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93UGFuZWwgPSAoKSA9PiB0aGlzLm9uTmV4dFN0YXRlKHtob3ZlcjogZmFsc2UsIHBpbjogdHJ1ZX0pO1xyXG4gIGhpZGVQYW5lbCA9ICgpID0+IHRoaXMub25OZXh0U3RhdGUoe2hvdmVyOiBmYWxzZSwgcGluOiBmYWxzZX0pO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hhdCB0aGUgbmV4dCBwYW5lbCBzdGF0ZVxyXG4gICAqIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgbmV3IGhvdmVyIGFuZFxyXG4gICAqIHBpbiBzdGF0ZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvbk5leHRTdGF0ZSA9IChuZXh0U3RhdGVzOntob3ZlcjogYm9vbGVhbiwgcGluOiBib29sZWFufSkgPT4ge1xyXG4gICAgaWYobmV4dFN0YXRlcy5ob3ZlciApIHtcclxuICAgICAgaWYodGhpcy5wcmV2aW91c1Bpbm5lZFN0YXRlICYmICFuZXh0U3RhdGVzLnBpbikgeyBcclxuICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYoIXRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSAmJiBuZXh0U3RhdGVzLnBpbikge1xyXG4gICAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoIW5leHRTdGF0ZXMucGluKXtcclxuICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1Bpbm5lZFN0YXRlID0gbmV4dFN0YXRlcy5waW47XHJcbiAgICB0aGlzLnBhbmVsLnBpbm5lZCA9IG5leHRTdGF0ZXMucGluO1xyXG4gIH1cclxuXHJcbiAgXHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxUb2dnbGUgfSBmcm9tICcuL3RvZ2dsZS9zbGlkaW5nLXBhbmVsLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCU2xpZGluZ1BhbmVsLCBcclxuICAgIEJCU2xpZGluZ1BhbmVsVG9nZ2xlLCBcclxuICBdLFxyXG5cclxuICBleHBvcnRzOiBbXHJcbiAgICBCQlNsaWRpbmdQYW5lbCwgXHJcbiAgICBCQlNsaWRpbmdQYW5lbFRvZ2dsZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB7IFxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCQkNvbGxhcHNpbmdNZW51IH0gZnJvbSAnLi9jb2xsYXBzaW5nLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJDb21tb25Nb2R1bGUsXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQkJDb2xsYXBzaW5nTWVudV0sXHJcbiAgZXhwb3J0czogW0JCQ29sbGFwc2luZ01lbnVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkNvbGxhcHNpbmdNZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQkNvbGxhcHNpbmdNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuIH1cclxuIiwiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VTdWJzY3JpcHRpb24oc3ViOiBTdWJzY3JpcHRpb24pIHtcclxuICAgIGlmKHN1YiAmJiAhc3ViLmNsb3NlZCkge1xyXG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnRlbnQtY29uZHVjdG9yLWNvbnN0cnVjdG9yLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBCQkNvbnRlbnRDb25kdWN0b3JDb25zdHJ1Y3RvclRva2VuID0gXHJcbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48QkJDb250ZW50Q29uZHVjdG9yQ29uc3RydWN0b3I+KCdCQkNvbnRhaW5lcnNDb25kdWN0b3JDb25zdHJ1Y3RvclRva2VuJyk7IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIFZpZXdSZWYsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYi1jb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgQkJDb250ZW50RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJCQ29udGVudENvbnRhaW5lciB9IGZyb20gJy4vY29udGVudC1jb250YWluZXIvY29udGVudC1jb250YWluZXIubW9kZWwnO1xuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yQ29uc3RydWN0b3JUb2tlbiB9IGZyb20gJy4vY29udGVudC1jb25kdWN0b3ItY29uc3RydWN0b3IvY29udGVudC1jb25kdWN0b3ItY29uc3RydWN0b3IudG9rZW4nO1xuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnRlbnQtY29uZHVjdG9yLWNvbnN0cnVjdG9yL2NvbnRlbnQtY29uZHVjdG9yLWNvbnN0cnVjdG9yLm1vZGVsJztcblxuLypcbiAqIEV2ZW4gdGhvdWdoIHRoaXMgaW1wb3J0IGlzIG5vdCB1c2VkIGl0IGlzIHJlcXVpcmVkIGZvciB0eXBlc2NyaXB0XG4gKiB0byByZXNvbHZlIHRoZSByZXR1cm4gdHlwZSBvZiB0aGUgY3JlYXRlQ29udGVudENvbmR1Y3RvciBtZXRob2QuXG4gKiBJZiBpdCBpcyByZW1vdmVkIHRoaXMgc2VydmljZSB3aWxsIG5vdCBjb21waWxlIGNvcnJlY3RseS5cbiAqL1xuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yIH0gZnJvbSAnLi9jb250ZW50LWNvbmR1Y3Rvci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCQkNvbnRlbnRDb25kdWN0b3JTZXJ2aWNlIHtcbiBcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChCQkNvbnRlbnRDb25kdWN0b3JDb25zdHJ1Y3RvclRva2VuKSBcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yOiBCQkNvbnRlbnRDb25kdWN0b3JDb25zdHJ1Y3RvcikgeyB9XG5cbiAgY3JlYXRlQ29udGVudENvbmR1Y3RvcjxUIGV4dGVuZHMgQkJDb250ZW50Q29udGFpbmVyPihcbiAgICBjb250YWluZXJzUXVlcnlMaXN0OiBRdWVyeUxpc3Q8VD4sXG4gICAgY29udGVudHNRdWVyeUxpc3QgOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj4pIHtcbiAgICBcbiAgICByZXR1cm4gIG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgY29udGFpbmVyc1F1ZXJ5TGlzdCxcbiAgICAgIGNvbnRlbnRzUXVlcnlMaXN0XG4gICAgKTtcbiAgfVxuICBcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJCQ29udGVudENvbmR1Y3RvclNlcnZpY2UgfSBmcm9tICcuLi9jb250ZW50LWNvbmR1Y3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IEJCQ29udGVudENvbnRhaW5lciB9IGZyb20gJy4vY29udGVudC1jb250YWluZXIubW9kZWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmItY29udGVudC1jb250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBCQkNvbnRlbnRDb250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBCQkNvbnRlbnRDb250YWluZXIge1xuICBASW5wdXQoJ2JiLWNvbnRlbnQtY29udGFpbmVyJykgY29udGFpbmVyTmFtZTogc3RyaW5nO1xuXG4gIGdldCB2aWV3Q29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy52Y1JlZjsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjY1NlcnZpY2U6IEJCQ29udGVudENvbmR1Y3RvclNlcnZpY2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdCQkNvbnRlbnRDb250YWluZXJEaXJlY3RpdmUnKTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgLy90aGlzLmNjU2VydmljZS5yZWdpc3RlckNvbnRhaW5lcih0aGlzLmNvbnRhaW5lck5hbWUsIHRoaXMudmNSZWYpO1xuICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGNvbnRhaW5lciB2Y3I6JywgdGhpcy52Y1JlZik7XG4gIH1cbn1cblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yIH0gZnJvbSAnLi4vY29udGVudC1jb25kdWN0b3IubW9kZWwnO1xuaW1wb3J0IHsgQkJDb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vY29udGVudC1jb250YWluZXIvY29udGVudC1jb250YWluZXIubW9kZWwnO1xuaW1wb3J0IHsgQkJDb250YWluZXJzTWFwIH0gZnJvbSAnLi4vY29udGFpbmVycy1tYXAvY29udGFpbmVycy1tYXAubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQkJEZWZhdWx0Q29udGVudENvbmR1Y3RvclNlcnZpY2U8VCBleHRlbmRzIEJCQ29udGVudENvbnRhaW5lcj4gaW1wbGVtZW50cyBCQkNvbnRlbnRDb25kdWN0b3I8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29udGFpbmVyc1F1ZXJ5TGlzdDogUXVlcnlMaXN0PFQ+LFxuICAgIHByaXZhdGUgY29udGVudHNRdWVyeUxpc3QgOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj5cbiAgKSB7fVxuICAgIFxuICBwcml2YXRlIGNvbnRhaW5lcnM6IFRbXTtcbiAgcHJpdmF0ZSB0ZW1wbGF0ZXM6IFRlbXBsYXRlUmVmPGFueT5bXTtcbiAgcHJpdmF0ZSBjb250YWluZXJzTWFwOiBCQkNvbnRhaW5lcnNNYXAgPSB7fTtcbiAgcHJpdmF0ZSBjb250YWluZXJzU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY29udGVudHNTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIG1hcENvbnRhaW5lcnM8VCBleHRlbmRzIEJCQ29udGVudENvbnRhaW5lcj4oXG4gICAgY29udGFpbmVyczogVFtdKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVycy5yZWR1Y2UoKG1hcCxjb250YWluZXIpPT57XG4gICAgICAgIG1hcFtjb250YWluZXIuY29udGFpbmVyTmFtZV0gPSBjb250YWluZXIudmlld0NvbnRhaW5lcjtcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIH0se30pO1xuICB9XG4gIFxuICBpbml0KGluaXRpYWxDb250YWluZXI6IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVycyA9IHRoaXMuY29udGFpbmVyc1F1ZXJ5TGlzdC50b0FycmF5KCk7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSB0aGlzLmNvbnRlbnRzUXVlcnlMaXN0LnRvQXJyYXkoKTtcblxuICAgIHRoaXMuY29udGFpbmVyc01hcCA9IHRoaXMubWFwQ29udGFpbmVycyh0aGlzLmNvbnRhaW5lcnMpO1xuICAgIHRoaXMuY29udGFpbmVyc1N1YiA9IHRoaXMuY29udGFpbmVyc1F1ZXJ5TGlzdFxuICAgICAgLmNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoKGM6IFRbXSk9PntcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gYztcbiAgICAgICAgdGhpcy5tYXBDb250YWluZXJzKHRoaXMuY29udGFpbmVycyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuY29udGVudHNTdWIgPSB0aGlzLmNvbnRlbnRzUXVlcnlMaXN0XG4gICAgICAuY2hhbmdlc1xuICAgICAgLnN1YnNjcmliZSgodDogVGVtcGxhdGVSZWY8YW55PltdKT0+e1xuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IHQ7XG4gICAgICB9KTtcblxuICAgIGlmKGluaXRpYWxDb250YWluZXIgJiYgdGhpcy50ZW1wbGF0ZXMpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVzLm1hcCh0ZW1wbGF0ZT0+XG4gICAgICAgIHRoaXMuY29udGFpbmVyc01hcFtpbml0aWFsQ29udGFpbmVyXVxuICAgICAgICAgIC5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmKHRoaXMuY29udGFpbmVyc1N1YiAmJiAhdGhpcy5jb250YWluZXJzU3ViLmNsb3NlZCkgeyBcbiAgICAgIHRoaXMuY29udGFpbmVyc1N1Yi51bnN1YnNjcmliZSgpOyBcbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbnRlbnRzU3ViICYmICF0aGlzLmNvbnRlbnRzU3ViLmNsb3NlZCkge1xuICAgICAgdGhpcy5jb250ZW50c1N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdmVWaWV3KCBcbiAgICBwcmV2aW91c0NvbnRhaW5lcjogc3RyaW5nLFxuICAgIG5leHRDb250YWluZXI6c3RyaW5nLCBcbiAgICBpbmRleDogbnVtYmVyICkge1xuICAgICAgaW5kZXggPSBpbmRleCB8fCB0aGlzLmNvbnRhaW5lcnNNYXBbcHJldmlvdXNDb250YWluZXJdLmxlbmd0aDtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmNvbnRhaW5lcnNNYXBbcHJldmlvdXNDb250YWluZXJdLmRldGFjaChpbmRleCk7XG4gICAgICB0aGlzLmNvbnRhaW5lcnNNYXBbbmV4dENvbnRhaW5lcl0uaW5zZXJ0KHZpZXcpO1xuICB9XG5cbiAgZGV0YWNoVmlldyhcbiAgICBjb250YWluZXI6c3RyaW5nLFxuICAgIGluZGV4PzogbnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXJzTWFwW2NvbnRhaW5lcl0uZGV0YWNoKGluZGV4KTtcbiAgfVxuXG4gIG1vdmVWaWV3cyhwcmV2aW91c0NvbnRhaW5lcjogc3RyaW5nLCBuZXh0Q29udGFpbmVyOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbnRhaW5lcnNNYXBbcHJldmlvdXNDb250YWluZXJdLmxlbmd0aDtcbiAgICBjb25zdCB2aWV3c0NhY2hlOiBWaWV3UmVmW10gPSBbXTtcbiAgICBmb3IobGV0IGk9MDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgdmlld3NDYWNoZS5wdXNoKFxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNNYXBbcHJldmlvdXNDb250YWluZXJdLmRldGFjaCgwKSk7XG4gICAgfVxuICAgIFxuICAgIHZpZXdzQ2FjaGUuZm9yRWFjaCh2aWV3PT57XG4gICAgICB0aGlzLmNvbnRhaW5lcnNNYXBbbmV4dENvbnRhaW5lcl0uaW5zZXJ0KFxuICAgICAgICB2aWV3LFxuICAgICAgICB0aGlzLmNvbnRhaW5lcnNNYXBbbmV4dENvbnRhaW5lcl0ubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRldGFjaFZpZXdzKGNvbnRhaW5lcjogc3RyaW5nKSB7XG4gICAgY29uc3QgZGV0YWNoZWRWaWV3cyA9IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY29udGFpbmVyc01hcFtjb250YWluZXJdLmxlbmd0aDtcblxuICAgIGZvcihsZXQgeCA9IDA7IHggPCBsZW5ndGg7IHgrKykge1xuICAgICAgZGV0YWNoZWRWaWV3cy5wdXNoKHRoaXMuY29udGFpbmVyc01hcFtjb250YWluZXJdLmRldGFjaCh4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRldGFjaGVkVmlld3M7XG4gIH1cblxuICByZWF0dGFjaFZpZXdzKGNvbnRhaW5lcjpzdHJpbmcsIHZpZXdzOiBWaWV3UmVmW10pIHtcbiAgICB2aWV3cy5mb3JFYWNoKHZpZXc9PlxuICAgICAgdGhpcy5jb250YWluZXJzTWFwW2NvbnRhaW5lcl0uaW5zZXJ0KHZpZXcpKTtcbiAgfVxuXG4gIHJlYXR0YWNoVmlldyhjb250YWluZXI6IHN0cmluZywgdmlldzogVmlld1JlZikge1xuXG4gIH1cblxuICBcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCQkNvbnRlbnRDb25kdWN0b3JDb25zdHJ1Y3RvclRva2VuIH0gZnJvbSAnLi4vY29udGVudC1jb25kdWN0b3ItY29uc3RydWN0b3IvY29udGVudC1jb25kdWN0b3ItY29uc3RydWN0b3IudG9rZW4nO1xuaW1wb3J0IHsgQkJEZWZhdWx0Q29udGVudENvbmR1Y3RvclNlcnZpY2UgfSBmcm9tICcuL2RlZmF1bHQtY29udGVudC1jb25kdWN0b3Iuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCQkRlZmF1bHRDb250ZW50Q29uZHVjdG9yTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCQkRlZmF1bHRDb250ZW50Q29uZHVjdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogQkJDb250ZW50Q29uZHVjdG9yQ29uc3RydWN0b3JUb2tlbiwgXG4gICAgICAgICAgdXNlVmFsdWU6IEJCRGVmYXVsdENvbnRlbnRDb25kdWN0b3JTZXJ2aWNlICBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJCQ29udGVudENvbmR1Y3RvclNlcnZpY2UgfSBmcm9tICcuL2NvbnRlbnQtY29uZHVjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJDb250ZW50Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZW50LWNvbnRhaW5lci9jb250ZW50LWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQkJDb250ZW50Q29uZHVjdG9yIH0gZnJvbSAnLi9jb250ZW50LWNvbmR1Y3Rvci5tb2RlbCc7XG5pbXBvcnQgeyBCQkNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2NvbnRlbnQtY29udGFpbmVyL2NvbnRlbnQtY29udGFpbmVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JiLWNvbnRlbnQtY29uZHVjdG9yXScsXG4gIHRlbXBsYXRlOiBgPGRpdj5cbiAgPGg0Pk9uZTwvaDQ+XG4gIDwhLS1cbiAgPG5nLWNvbnRhaW5lciBiYi1jb250ZW50LWNvbnRhaW5lcj0nb25lJyAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRzLnRvQXJyYXkoKVwiPjwvbmctY29udGFpbmVyPlxuICAtLT5cbiAgPGRpdiA+XG4gICAgPGRpdiBiYi1jb250ZW50LWNvbnRhaW5lcj1cIm9uZVwiPjwvZGl2PlxuICA8L2Rpdj5cblxuICA8IS0tXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ID09PSAnb25lJ1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRlbXBsYXRlIG9mIGNvbnRlbnRzLnRvQXJyYXkoKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICAtLT5cbiAgXG48L2Rpdj5cbjxkaXY+XG4gIDxoND5Ud288L2g0PlxuXG4gIDxkaXYgPlxuICAgIDxkaXYgYmItY29udGVudC1jb250YWluZXI9XCJ0d29cIj48L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLVxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udCA9PT0gJ3R3bydcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0ZW1wbGF0ZSBvZiBjb250ZW50cy50b0FycmF5KClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgLS0+XG48L2Rpdj5cbjxidXR0b24gKGNsaWNrKT1cIm9uVG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQkJDb250ZW50Q29uZHVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihCQkNvbnRlbnREaXJlY3RpdmUseyByZWFkOiBUZW1wbGF0ZVJlZiwgZGVzY2VuZGFudHM6IHRydWUgfSkgXG4gIGNvbnRlbnRzOiBRdWVyeUxpc3Q8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgQFZpZXdDaGlsZHJlbihCQkNvbnRlbnRDb250YWluZXJEaXJlY3RpdmUpIC8vIEJCQ29udGVudENvbnRhaW5lckRpcmVjdGl2ZSkgXG4gIGNvbnRhaW5lcnM6IFF1ZXJ5TGlzdDxCQkNvbnRlbnRDb250YWluZXJEaXJlY3RpdmU+O1xuXG4gIGNvbnQ6ICdvbmUnIHwgJ3R3bycgPSAnb25lJztcblxuICBjb25kdWN0b3I6IEJCQ29udGVudENvbmR1Y3RvcjxCQkNvbnRlbnRDb250YWluZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2NTZXJ2aWNlOiBCQkNvbnRlbnRDb25kdWN0b3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25Ub2dnbGUoKSB7XG4gICAgY29uc3Qgb2xkQ29udCA9IHRoaXMuY29udDtcbiAgICBpZih0aGlzLmNvbnQgPT09ICdvbmUnKSB7IFxuICAgICAgdGhpcy5jb250ID0gJ3R3byc7IFxuICAgIH0gXG4gICAgZWxzZSBpZih0aGlzLmNvbnQgPT09ICd0d28nKSB7IFxuICAgICAgdGhpcy5jb250ID0gJ29uZSc7IFxuICAgIH1cbiAgICB0aGlzLmNvbmR1Y3Rvci5tb3ZlVmlld3Mob2xkQ29udCx0aGlzLmNvbnQpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb25kdWN0b3IgPSB0aGlzLmNjU2VydmljZVxuICAgICAgLmNyZWF0ZUNvbnRlbnRDb25kdWN0b3IodGhpcy5jb250YWluZXJzLCB0aGlzLmNvbnRlbnRzKTtcblxuICAgIHRoaXMuY29uZHVjdG9yLmluaXQodGhpcy5jb250KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCQkNvbnRlbnRDb25kdWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9jb250ZW50LWNvbmR1Y3Rvci5zZXJ2aWNlJztcbmltcG9ydCB7IEJCQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vY29udGVudC9jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCQkNvbnRlbnRDb25kdWN0b3JDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtY29uZHVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCQkNvbnRlbnRDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRlbnQtY29udGFpbmVyL2NvbnRlbnQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkJDb250ZW50RGlyZWN0aXZlLCBcbiAgICBCQkNvbnRlbnRDb25kdWN0b3JDb21wb25lbnQsIFxuICAgIEJCQ29udGVudENvbnRhaW5lckRpcmVjdGl2ZSwgXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQkNvbnRlbnREaXJlY3RpdmUsIFxuICAgIEJCQ29udGVudENvbmR1Y3RvckNvbXBvbmVudCwgXG4gICAgQkJDb250ZW50Q29udGFpbmVyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQkJDb250ZW50Q29uZHVjdG9yTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCQkNvbnRlbnRDb25kdWN0b3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtCQkNvbnRlbnRDb25kdWN0b3JTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wU2VydmljZSB7XG4gIGVsOiBhbnk7XG4gIGRyb3B6b25lSW5kZXg6IG51bWJlcjtcbiAgZHJvcHBhYmxlSW5kZXg6IG51bWJlcjtcbiAgbW9kZWw6IEFycmF5PGFueT47XG4gIGRyb3B6b25lczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiRHJvcHBlcl0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRuZFNlcnZpY2U6IERyYWdBbmREcm9wU2VydmljZVxuICApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuZHJhZ3N0YXJ0ID0gdGhpcy5kcmFnc3RhcnQ7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmRyYWdlbmQgPSB0aGlzLmRyYWdlbmQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHBlckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wcGVyQ2xhc3MpO1xuICAgICAgfVxuICB9XG5cbiAgQElucHV0KCdiYmRyb3BwZXInKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJkcm9wcGVyQ2xhc3MnKSBiYmRyb3BwZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoJ2JiaG9sZGluZ0NsYXNzJykgYmJob2xkaW5nQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYnBheWxvYWQnKSBiYnBheWxvYWQ6c3RyaW5nO1xuICBASW5wdXQoJ2JiZHJvcHBlcklkJykgYmJkcm9wcGVySWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIGJic3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBkcmFnc3RhcnQoZXZlbnQ6YW55KSB7XG4gICAgICBpZiAodGhpcy5iYmhvbGRpbmdDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJob2xkaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmJicGF5bG9hZCB8fCBudWxsKTtcbiAgICAgIHRoaXMuZG5kU2VydmljZS5lbCA9IHRoaXMuZWw7XG4gICAgICBpZih0aGlzLmJiZHJvcHBlcklkKSB7XG4gICAgICAgICAgdGhpcy5iYnN0YXJ0LmVtaXQodGhpcy5iYmRyb3BwZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJykgZHJhZ2VuZCgpIHtcbiAgICAgIGlmICh0aGlzLmJiaG9sZGluZ0NsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5iYmhvbGRpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmJiZHJvcHBlcklkKSB7XG4gICAgICAgICAgdGhpcy5iYnN0YXJ0LmVtaXQodGhpcy5iYmRyb3BwZXJJZCk7XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BTZXJ2aWNlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJEcm9wWm9uZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bab25lRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBkbmRTZXJ2aWNlOiBEcmFnQW5kRHJvcFNlcnZpY2UsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmRuZFNlcnZpY2UuZHJvcHpvbmVzLmluY2x1ZGVzKHRoaXMubmFtZSkpIHtcbiAgICAgICAgICB0aGlzLmRuZFNlcnZpY2UuZHJvcHpvbmVzLnB1c2godGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgnYmJkcm9wem9uZScpIG5hbWU6IHN0cmluZztcblxuICBASW5wdXQoJ2JiZHJvcHpvbmVDbGFzcycpIGJiZHJvcHpvbmVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoJ2JiZHJvcHpvbmVIb3ZlckNsYXNzJykgYmJkcm9wem9uZUhvdmVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYmRyb3B6b25lSWQnKSBiYmRyb3B6b25lSWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIGJiZGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJkcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgZHJhZ292ZXIoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInKSBkcmFnZW50ZXIoKSB7XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVJZCkge1xuICAgICAgICAgIHRoaXMuYmJlbnRlci5lbWl0KHRoaXMuYmJkcm9wem9uZUlkKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpIGRyYWdsZWF2ZSgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYmJkcm9wem9uZUlkKSB7XG4gICAgICAgICAgdGhpcy5iYmxlYXZlLmVtaXQodGhpcy5iYmRyb3B6b25lSWQpO1xuICAgICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pIGRyb3AoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcyk7XG5cbiAgICAgIGxldCBkcm9wcGVkID0gdGhpcy5kbmRTZXJ2aWNlLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZHJvcHBlZC5hdHRyaWJ1dGVzLmJiZHJvcHBlci52YWx1ZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRuZFNlcnZpY2UuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCB0aGlzLmRuZFNlcnZpY2UuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZG5kU2VydmljZS5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICBpZiAoZHJvcHBlZC5hdHRyaWJ1dGVzLmJicGF5bG9hZCkge1xuICAgICAgICAgICAgICB0aGlzLmJiZGF0YS5lbWl0KGRyb3BwZWQuYXR0cmlidXRlcy5iYnBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVJZCkge1xuICAgICAgICAgIHRoaXMuYmJkcm9wLmVtaXQodGhpcy5iYmRyb3B6b25lSWQpO1xuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRHJhZ0FuZERyb3BTZXJ2aWNlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Atem9uZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERyb3BwZXJEaXJlY3RpdmUsXG4gICAgRHJvcFpvbmVEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEcm9wcGVyRGlyZWN0aXZlLFxuICAgIERyb3Bab25lRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCRHJhZ0FuZERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFnQW5kRHJvcFNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGJiRG5EVHlwZSA9IFwiYmIvZG5kXCI7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQkJEcmFnQW5kRHJvcFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBEaXJlY3RpdmUsIFxuICBPbkluaXQsIFxuICBFbGVtZW50UmVmLCBcbiAgVmlld1JlZiwgXG4gIFZpZXdDb250YWluZXJSZWYsIFxuICBUZW1wbGF0ZVJlZiwgXG4gIEVtYmVkZGVkVmlld1JlZiwgXG4gIE9uRGVzdHJveSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBiYkRuRFR5cGUgfSBmcm9tICcuLi9kbmQuY29uc3QnO1xuaW1wb3J0IHsgY2xvc2VTdWJzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJWZWN0b3IsIEJCRHJhZ1N0YXJ0RXZlbnQgfSBmcm9tICcuLi9kbmQubW9kZWxzJztcblxuLyoqXG4gKiBCQiBEcmFnZ2FibGUgU3RydWN0dXJhbCBEaXJlY3RpdmVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiRHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgQkJEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBkcmFnU3RhcnRlZE9uVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8QkJEcmFnU3RhcnRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRyYWdFbmRlZE9uVmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8Vmlld1JlZj4oKTtcbiAgXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNCZWluZ0RyYWdnZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQmVpbmdEcmFnZ2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGdldCBkcmFnZ2FibGVUZW1wbGF0ZVJlZigpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgZHJhZ2dhYmxlVmlld1JlZjogVmlld1JlZjtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIGVtYmVkZGVkVGVtcGxhdGVSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBkcmFnRW5kU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBzZXQgaXNEcmFnZ2VkKGRyYWdnZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0JlaW5nRHJhZ2dlZCA9IGRyYWdnZWQ7XG5cbiAgICBpZih0aGlzLl9pc0JlaW5nRHJhZ2dlZCkge1xuICAgICAgLy90aGlzLmRyYWdTdGFydGVkT25WaWV3Lm5leHQodGhpcy5kcmFnZ2FibGVWaWV3UmVmKTtcbiAgICAgIC8vdGhpcy52aWV3Q29udGFpbmVyLmRldGFjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL3RoaXMuZHJhZ0VuZGVkT25WaWV3Lm5leHQodGhpcy5kcmFnZ2FibGVWaWV3UmVmKTtcbiAgICAgIC8vdGhpcy52aWV3Q29udGFpbmVyLmluc2VydCh0aGlzLmRyYWdnZWRWaWV3UmVmKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIF9pc0JlaW5nRHJhZ2dlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgY29udGV4dCA9IG5ldyBEcmFnZ2FibGVDb250ZXh0KCk7XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZG5kU2VydmljZSBcbiAgICogQHBhcmFtIHRlbXBsYXRlUmVmIFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkbmRTZXJ2aWNlOiBCQkRyYWdBbmREcm9wU2VydmljZSwgICAgXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5nT25Jbml0KCkge1xuICAgIC8qXG4gICAgdGhpcy5lbWJlZGRlZFRlbXBsYXRlUmVmID0gXG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIHRoaXMucmVnaXN0ZXJEcmFnQW5kRHJvcEV2ZW50cyh0aGlzLmVtYmVkZGVkVGVtcGxhdGVSZWYucm9vdE5vZGVzWzBdKTtcbiAgICB0aGlzLmRyYWdnZWRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmdldCgwKTtcbiAgICAqL1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY2xvc2VTdWJzY3JpcHRpb24odGhpcy5kcmFnU3RhcnRTdWJzY3JpcHRpb24pO1xuICAgIGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMuZHJhZ0VuZFN1YnNjcmlwdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB0YXJnZXQgXG4gICAqL1xuICByZWdpc3RlckRyYWdBbmREcm9wRXZlbnRzKHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+KSB7XG4gICAgdGhpcy5kcmFnZ2FibGVWaWV3UmVmID0gdmlldztcbiAgICBsZXQgdGFyZ2V0ID0gdmlldy5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsXCJ0cnVlXCIpO1xuXG4gICAgdGhpcy5kcmFnU3RhcnRTdWJzY3JpcHRpb24gPSBcbiAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRhcmdldCxcImRyYWdzdGFydFwiKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogRHJhZ0V2ZW50KT0+e1xuICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKGJiRG5EVHlwZSwnYmJkcmFnZ2FibGUnKTtcbiAgICAgICAgICAvL2V2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gICAgICAgICAgLy9ldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKFxuICAgICAgICAgIC8vICB0YXJnZXQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50LDAsMCk7XG5cbiAgICAgICAgICBsZXQgcmVjdCA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgbGV0IHkgPSByZWN0LnRvcCArIChyZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICAgIGxldCB4ID0gcmVjdC5sZWZ0ICsgKHJlY3Qud2lkdGggLyAyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh4LHkpO1xuXG4gICAgICAgICAgbGV0IGU6IEJCRHJhZ1N0YXJ0RXZlbnQgPSB7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLmRyYWdnYWJsZVZpZXdSZWYsXG4gICAgICAgICAgICBtb3VzZU9mZnNldDoge1xuICAgICAgICAgICAgICBvZmZzZXRYOiBldmVudC5jbGllbnRYIC0geCxcbiAgICAgICAgICAgICAgb2Zmc2V0WTogZXZlbnQuY2xpZW50WSAtIHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgIGxldCBjZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICAgIGNlbnRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgY2VudGVyLnN0eWxlLmxlZnQgPSBgJHttb3VzZU9mZnNldC5vZmZzZXRYfXB4YDtcbiAgICAgICAgICBjZW50ZXIuc3R5bGUudG9wID0gYCR7bW91c2VPZmZzZXQub2Zmc2V0WX1weGA7XG4gICAgICAgICAgY2VudGVyLnN0eWxlLmJvcmRlclJhZGl1cz0gXCIyMHB4XCJcbiAgICAgICAgICBjZW50ZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XG4gICAgICAgICAgY2VudGVyLnN0eWxlLndpZHRoPSBcIjIwcHhcIjtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgaSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBjbG9uZSA9IGV2ZW50LnNyY0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxMSUVsZW1lbnQ7XG4gICAgICAgICAgY2xvbmUuYXBwZW5kQ2hpbGQoY2VudGVyKTtcbiAgICAgICAgICBpLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKFxuICAgICAgICAgICAgIGksZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcbiAgICAgICAgICAqL1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKFxuICAgICAgICAgICAgZXZlbnQuc3JjRWxlbWVudCxldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgICAqL1xuXG4gICAgICAgICAgLyogQ2hyb21lIGNhbGxzIGRyYWdlbmQgaWYgdGhlIGRvbSBpcyBjaGFuZ2VkIGR1cmluZyAgKi9cbiAgICAgICAgICAvKiBkcmFnIHN0YXJ0IHNvIGluIG9yZGVyIHRvIG5vdCBjYWxsIGRyYWdlbmQgICAgICAgICAqL1xuICAgICAgICAgIC8qIGltbWVkaWF0ZWx5IHdlIGhhdmUgdG8gZmlyZSB0aGUgZG9tIG1hbmlwdWxhdGlvbnMgICovXG4gICAgICAgICAgLyogb3V0c2lkZSBvZiB0aGUgZXZlbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydGVkT25WaWV3Lm5leHQoZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAoKT0+e30pO1xuXG4gICAgdGhpcy5kcmFnRW5kU3Vic2NyaXB0aW9uID0gXG4gICAgZnJvbUV2ZW50KHRhcmdldCxcImRyYWdlbmRcIilcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IERyYWdFdmVudCk9PntcbiAgICAgICAgICAvL3RoaXMuaXNEcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kcmFnRW5kZWRPblZpZXcubmV4dCh0aGlzLmRyYWdnYWJsZVZpZXdSZWYpO1xuICAgICAgICB9LFxuICAgICAgICBlcnI9PmNvbnNvbGUubG9nKGVyciksXG4gICAgICAgICgpPT57fSk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb250ZXh0IHtcbiAgcHVibGljIGltcGxpY2l0JDogYW55ID0gbnVsbDtcbn1cbiIsImltcG9ydCB7IFxuICBEaXJlY3RpdmUsIFxuICBPbkluaXQsIFxuICBRdWVyeUxpc3QsIFxuICBBZnRlckNvbnRlbnRJbml0LCBcbiAgQ29udGVudENoaWxkcmVuLCAgXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBWaWV3UmVmLFxuICBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJEcmFnZ2FibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiAsICBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGJiRG5EVHlwZSB9IGZyb20gJy4uL2RuZC5jb25zdCc7XG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4uL2RyYWctYW5kLWRyb3Auc2VydmljZSc7XG5pbXBvcnQgeyBCQkRyYWdTdGFydEV2ZW50LCBCQlZlY3RvciB9IGZyb20gJy4uL2RuZC5tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYmJEbkRDb250YWluZXJdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICNkbmRDb250YWluZXI+PC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCQkRyYWdBbmREcm9wQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKEJCRHJhZ2dhYmxlRGlyZWN0aXZlKSBkcmFnZ2FibGVzUUw6IFF1ZXJ5TGlzdDxCQkRyYWdnYWJsZURpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoXCJkbmRDb250YWluZXJcIiwge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBkbmRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIFxuICBwcml2YXRlIGRyYWdnaW5nTW91c2VPZmZzZXQ6IEJCVmVjdG9yO1xuICBwcml2YXRlIGRyYWdTdGFydEV2ZW50OiBCQkRyYWdTdGFydEV2ZW50O1xuICBwcml2YXRlIGRyYWdnYWJsZUVtYmVkZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBkcmFnU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IERlZmF1bHREcmFnTG9jYXRpb25UYXJnZXQ6IERyYWdMb2NhdGlvblRhcmdldCA9IHtcbiAgICBsb3dJbmRleDogLTEsIFxuICAgIGhpZ2hJbmRleDogLTEsXG4gICAgdmlld0JlaW5nRHJhZ2dlZDogbnVsbFxuICB9O1xuXG4gIHByaXZhdGUgZHJhZ0xvY2F0aW9uIDogRHJhZ0xvY2F0aW9uVGFyZ2V0ID0gdGhpcy5EZWZhdWx0RHJhZ0xvY2F0aW9uVGFyZ2V0O1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkbmRTZXJ2aWNlOiBCQkRyYWdBbmREcm9wU2VydmljZSxcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50UmVmOiBFbGVtZW50UmVmICAgIFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oJ0JCIERyYWcgYW5kIERyb3AgaXMgc3RpbGwgdW5kZXIgZGV2ZWxvcG1lbnQuJylcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ2VudGVyXCIpXG4gICAgICAuc3Vic2NyaWJlKHRoaXMub25EcmFnRW50ZXIpKTtcblxuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ292ZXJcIilcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApKVxuICAgICAgLnN1YnNjcmliZSh0aGlzLm9uRHJhZ092ZXIpKTtcblxuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ292ZXJcIilcbiAgICAgIC5zdWJzY3JpYmUoKGU6RXZlbnQpPT5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpKSk7XG5cbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcImRyb3BcIilcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5vbkRyb3ApKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgdGhpcy5kcmFnZ2FibGVzUUxcbiAgICAgIC5jaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChkcmFnZ2FibGVzOkJCRHJhZ2dhYmxlRGlyZWN0aXZlW10pPT57XG4gICAgICB9KSk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWluZXJcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5kbmRDb250YWluZXIpO1xuICAgIHRoaXMuZHJhZ2dhYmxlc1FMLm1hcCh0aGlzLmluaXREcmFnZ2FibGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1Yj0+e1xuICAgICAgaWYoIXN1Yi5jbG9zZWQpIHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGRyYWdnYWJsZSBcbiAgICogQHBhcmFtIGluZGV4IFxuICAgKi9cbiAgaW5pdERyYWdnYWJsZSA9IChkcmFnZ2FibGU6IEJCRHJhZ2dhYmxlRGlyZWN0aXZlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGVtYmVkZGVkVmlld1JlZiA9IFxuICAgICAgdGhpcy5kbmRDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KGRyYWdnYWJsZS5kcmFnZ2FibGVUZW1wbGF0ZVJlZilcbiAgICB0aGlzLmRyYWdnYWJsZUVtYmVkZGVkVmlld3MucHVzaChlbWJlZGRlZFZpZXdSZWYpO1xuICAgIGRyYWdnYWJsZS5yZWdpc3RlckRyYWdBbmREcm9wRXZlbnRzKGVtYmVkZGVkVmlld1JlZik7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgZHJhZ2dhYmxlLmRyYWdTdGFydGVkT25WaWV3LnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0KSk7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRlZE9uVmlldy5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKi9cbiAgb25EcmFnU3RhcnQgPSAoZXZlbnQ6IEJCRHJhZ1N0YXJ0RXZlbnQpID0+IHtcbiAgICB0aGlzLmRyYWdTdGFydEV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5kcmFnZ2luZ01vdXNlT2Zmc2V0ID0gZXZlbnQubW91c2VPZmZzZXQ7XG4gICAgbGV0IHZpZXdJbmRleCA9IHRoaXMuZG5kQ29udGFpbmVyLmluZGV4T2YoZXZlbnQudmlldyk7XG4gICAgdGhpcy5kbmRDb250YWluZXIuZGV0YWNoKHZpZXdJbmRleCk7XG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzLnNwbGljZSh2aWV3SW5kZXgsMSk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB2aWV3IFxuICAgKi9cbiAgb25EcmFnRW5kID0gKHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+KSA9PiB7XG4gICAgLy90aGlzLmRuZENvbnRhaW5lci5pbnNlcnQodmlldyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25EcmFnRW50ZXIgPSAoZXZlbnQ6RHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnZW50ZXJcIik7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25EcmFnT3ZlciA9IChldmVudDpEcmFnRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyk7XG4gICAgbGV0IHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBsZXQgY2xvc2VzdFZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+ID0gbnVsbDtcbiAgICBsZXQgY2xvc2VzdEluZGV4ID0gMDsgXG4gICAgbGV0IG5leHRDbG9zZXN0SW5kZXggPSAwO1xuXG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzXG4gICAgICAvKlxuICAgICAgICogVE9ETzogTG9uZyB0ZXJtIG9wdGltaXphdGlvbiBtYXliZSB1c2UgdGhlIGl0ZW1cbiAgICAgICAqIGZpbHRlcmVkIG91dCdzIGluZGV4IGFzIHRoZSBzdGFydGluZyBsb2NhdGlvblxuICAgICAgICogZm9yIGZ1cnRoZXIgaGl0IHRlc3RzIHNpbmNlIHdlIGtub3cgdGhhdCBpdFxuICAgICAgICogaXMgdGhlIG9uZSBiZWluZyBkcmFnZ2VkLiAgSWUuICBJZiBJbmRleCA0IGlzXG4gICAgICAgKiBmaWx0ZXJlZCBvdXQgdGhlbiBzdGFydCBoaXQgdGVzdHMgYXQgaW5kZXggMyBcbiAgICAgICAqIGFuZCA1IGluc3RlYWQgb2Ygc3RhcnRpbmcgaGl0IHRlc3RzIGF0IGluZGV4IFxuICAgICAgICogMCBhbmQgY2hlY2tpbmcgYWxsIGl0ZW1zLlxuICAgICAgICovXG4gICAgICAuZmlsdGVyKHZpZXc9PnZpZXchPT10aGlzLmRyYWdTdGFydEV2ZW50LnZpZXcpXG4gICAgICAubWFwKHZpZXc9PntcbiAgICAgICAgbGV0IGVsZW1lbnQgPSAodmlldy5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlldzogdmlldyxcbiAgICAgICAgICB4OiByZWN0LmxlZnQgKyAocmVjdC53aWR0aCAvIDIpLFxuICAgICAgICAgIHk6IHJlY3QudG9wICsgKHJlY3QuaGVpZ2h0IC8gMilcbiAgICAgICAgfX0pXG4gICAgICAuZm9yRWFjaCgoY2VudGVyQ29vcmRpbmF0ZXMsIGkpID0+e1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZShcbiAgICAgICAgICBjZW50ZXJDb29yZGluYXRlcy55LFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgKyB0aGlzLmRyYWdTdGFydEV2ZW50Lm1vdXNlT2Zmc2V0Lm9mZnNldFkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2l9ID0gJHtkeX0geSdzOiAke2NlbnRlckNvb3JkaW5hdGVzLnl9IC0gJHtldmVudC5jbGllbnRZfSArICR7dGhpcy5kcmFnU3RhcnRFdmVudC5tb3VzZU9mZnNldC5vZmZzZXRZfWApXG4gICAgICAgICAgXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKGR5KTtcblxuICAgICAgICBpZihkaXN0YW5jZSA8IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgY2xvc2VzdFZpZXcgPSBjZW50ZXJDb29yZGluYXRlcy52aWV3O1xuICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IGk7XG5cbiAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggc2lkZSBvZiB0aGUgY2xvc2VzdCBkcmFnZ2FibGVcbiAgICAgICAgICAvLyB0aGUgZHJhZ2dhYmxlIGJlaW5nIGRyYWdnZWQgaXMgb24gYW5kIHNldCB0aGVcbiAgICAgICAgICAvLyBuZXh0IGNsb3Nlc3QgYWNjb3JkaW5nbHlcbiAgICAgICAgICBuZXh0Q2xvc2VzdEluZGV4ID0gKGR5IDwgMCk/IGNsb3Nlc3RJbmRleCArIDE6IGNsb3Nlc3RJbmRleCAtIDE7XG5cbiAgICAgICAgICB0aGlzLmRyYWdMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIGxvd0luZGV4OiBNYXRoLm1pbihjbG9zZXN0SW5kZXgsbmV4dENsb3Nlc3RJbmRleCksXG4gICAgICAgICAgICBoaWdoSW5kZXg6IE1hdGgubWF4KGNsb3Nlc3RJbmRleCxuZXh0Q2xvc2VzdEluZGV4KSxcbiAgICAgICAgICAgIHZpZXdCZWluZ0RyYWdnZWQ6IHRoaXMuZHJhZ1N0YXJ0RXZlbnQudmlld1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8qIHRoaXMgc2lnbmlmaWVzIHRoYXQgdGhlIGNvbnRhaW5lciBpcyBhIHZhbGlkIGRyb3AgdGFyZ2V0ICAqL1xuICAgIC8qIFRPRE86IGRvZXNuJ3Qgd29yayBhdCB0aGUgbW9tZW50PyB0aGUgQkJEbkRUeXBlIGlzIG5ldmVyICovXG4gICAgLyogcHJvcGVybHkgYXR0YWNoZWQgdG8gdGhlIGV2ZW50IGV2ZW4gdGhvdWdoIEkgYW0gc2V0dGluZyAgICovXG4gICAgLyogdGhlIHR5cGUgaW5zaWRlIHRoZSBkcmFnZ2FibGUgZGlyZWN0aXZlIGV2ZW50Li4uICAgICAgICAgICovXG4gICAgLypcbiAgICBpZihldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoYmJEbkRUeXBlKSkge1xuICAgICAgY29uc29sZS5sb2coJ2JiIHRyYW5zZmVyIGRldGVjdGVkJyk7XG4gICAgfVxuICAgICovXG4gIH1cblxuICBvbkRyb3AgPSAoZXZlbnQ6RHJhZ0V2ZW50KSA9PiB7XG4gICAgdGhpcy5kbmRDb250YWluZXIuaW5zZXJ0KFxuICAgICAgdGhpcy5kcmFnTG9jYXRpb24udmlld0JlaW5nRHJhZ2dlZCxcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLmhpZ2hJbmRleCk7XG5cbiAgICB0aGlzLmRyYWdnYWJsZUVtYmVkZGVkVmlld3Muc3BsaWNlKFxuICAgICAgdGhpcy5kcmFnTG9jYXRpb24uaGlnaEluZGV4LFxuICAgICAgMCxcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLnZpZXdCZWluZ0RyYWdnZWQgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcDEgXG4gICAqIEBwYXJhbSBwMiBcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlMURpbWVuc2lvbkRpc3RhbmNlKHAxOiBudW1iZXIsIHAyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gcDEgLSBwMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHgxIFxuICAgKiBAcGFyYW0geDIgXG4gICAqIEBwYXJhbSB5MSBcbiAgICogQHBhcmFtIHkyIFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGUyRGltZW5zaW9uRGlzdGFuY2UoeDE6IG51bWJlcix4MjogbnVtYmVyLHkxOiBudW1iZXIseTI6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICB0aGlzLmNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZSh4MSx4MikqKjIgKyBcbiAgICAgIHRoaXMuY2FsY3VsYXRlMURpbWVuc2lvbkRpc3RhbmNlKHkxLHkyKSoqMik7XG4gIH1cblxuICAgIFxuICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnTG9jYXRpb25UYXJnZXQge1xuICBsb3dJbmRleDogbnVtYmVyO1xuICBoaWdoSW5kZXg6IG51bWJlcjtcbiAgdmlld0JlaW5nRHJhZ2dlZDogVmlld1JlZjtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC1jb250YWluZXIvZHJhZy1hbmQtZHJvcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJCRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCQkRyYWdnYWJsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCQkRyYWdnYWJsZURpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtCQkRyYWdBbmREcm9wU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG4gfVxuIiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LCBcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgSW5qZWN0LFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIFZpZXdDaGlsZCAgXHJcbiAgICAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiAsICBCZWhhdmlvclN1YmplY3QgLCAgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSAsICBtYXAgLCAgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dEl0ZW1zTGlzdCB9IGZyb20gJy4vaXRlbS1saXN0L2Ryb3Bkb3duLWlucHV0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmUgfSBmcm9tICcuLi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bklucHV0U2VydmljZSB9IGZyb20gJy4vc2VydmljZS9kcm9wZG93bi1pbnB1dC1zZXJ2aWNlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duSW5wdXRJdGVtQ2hvc2VuRXZlbnQsIERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kcm9wZG93bi1pbnB1dC1pdGVtLWV2ZW50cy5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJCRHJvcGRvd25JbnB1dFNlcnZpY2VUb2tlbiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEcm9wZG93bklucHV0U2VydmljZT4oJ0RkSVNlcnZpY2UnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLWRyb3Bkb3duLWlucHV0XScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYW5jaG9yXCI+XHJcbiAgPGlucHV0ICNkcm9wZG93bklucHV0XHJcblx0XHQgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxyXG5cdFx0IFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVGV4dFwiLz5cclxuICBcdDxkaXYgYmItc2xpZGluZy1wYW5lbFxyXG5cdCAgICAgY2xhc3M9XCJyZXN1bHRzXCIgXHJcblx0XHQgc2xpZGVEaXJlY3Rpb249XCJkb3duXCJcclxuXHRcdCAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiPlxyXG5cdFx0IDx1bCBiYi1kcm9wZG93bi1pbnB1dC1pdGVtcy1saXN0XHJcblx0XHQgXHQjZHJvcGRvd25MaXN0XHJcblx0XHQgICAgW2R5bmFtaWNDb21wb25lbnRzRGF0YV09XCJkaVNlcnYuaXRlbXMkIHwgYXN5bmNcIlxyXG5cdFx0XHQobGlzdEl0ZW1Nb3VzZU92ZXIpPVwib25MaXN0SXRlbU1vdXNlT3ZlcigkZXZlbnQpXCJcclxuXHRcdFx0KGxpc3RJdGVtQ2xpY2spPVwib25MaXN0SXRlbUNsaWNrZWQoJGV2ZW50KVwiXHJcblx0XHRcdChuZXdDb250YWluZXJzKT1cIm9uTmV3SXRlbUNvbnRhaW5lcnMoJGV2ZW50KVwiPlxyXG5cdFx0IDwvdWw+XHJcbiAgXHQ8L2Rpdj5cdFxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgZGl2LmRyb3Bkb3duLWFuY2hvcntwb3NpdGlvbjpyZWxhdGl2ZX0uZHJvcGRvd24tYW5jaG9yPmRpdi5iYi1zbGlkaW5nLXBhbmVse3Bvc2l0aW9uOmFic29sdXRlfS5kcm9wZG93bi1hbmNob3I+LmJiLXNsaWRpbmctcGFuZWwgdWwuYmItZHJvcGRvd24taW5wdXQtaXRlbXMtbGlzdHtkaXNwbGF5OmZsZXg7ZmxleDoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLWxlZnQ6MDtsaXN0LXN0eWxlOm5vbmV9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyhmb2N1c291dCknOlwib25Ib3N0Rm9jdXNPdXQoJGV2ZW50KVwiLFxyXG4gICAgJyhmb2N1c2luKSc6XCJvbkhvc3RGb2N1c0luKCRldmVudClcIixcclxuICB9LFxyXG4gIGV4cG9ydEFzOidiYkRyb3Bkb3duSW5wdXQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEcm9wZG93bklucHV0IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJiLWRyb3Bkb3duLWlucHV0JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgZm9yIHRoZSBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1heEl0ZW1zOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgd2hldGhlciB0aGUgZGlzcGxheVRleHQgc2hvdWxkIGJlIHNldCBpbnRvIHRoZSBpbnB1dFxyXG4gICAqIGJveCB3aGVuIGFuIGl0ZW0gaXMgJ2Nob3NlbicuICBEZWZhdWx0cyB0byB0cnVlLiBcclxuICAgKi9cclxuICBASW5wdXQoKSBzZXRUZXh0T25DaG9pY2UgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHBsYWNlIGhvbGRlciB0ZXh0IG9uIHRoZSBpbnB1dCBlbGVtZW50LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyVGV4dCA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGhvdyBsb25nLCBpbiBtcywgdGhlIGRlbGF5IGlzIFxyXG4gICAqIGJldHdlZW4gdXBkYXRlcyB0byB0aGUgRHJvcGRvd25JbnB1dFNlcnZpY2VcclxuICAgKiB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZWxlbWVudFxyXG4gICAqIGhhcyBiZWVuIGNoYW5nZWQuXHJcbiAgICogXHJcbiAgICogRGVmYXVsdHMgdG8gNDAwbXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGlucHV0VmFsdWVDaGFuZ2VEZWxheW1zID0gNDAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYXV0byBzZWxlY3Rpb24gbW9kZSBkZXRlcm1pbmUgd2hpY2ggaXRlbSB3aWxsIGJlIHNlbGVjdGVkIGlmIHRoZVxyXG4gICAqIGNob29zZSBpdGVtIG1ldGhvZCBpcyBleGVjdXRlZCB3aGVuIG5vIGl0ZW0gaGFzIGJlZW4gc3BlY2lmaWNhbGx5XHJcbiAgICogc2VsZWN0ZWQgYnkgdXNlciBpbnRlcmFjdGlvbi5cclxuICAgKiBcclxuICAgKiAnbm9uZScgICAgLSBub3RoaW5nIGlzIGNob3NlbiB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb25cclxuICAgKiAgXHJcbiAgICogJ2xhenknICAgIC0gdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QgaXMgY2hvc2VuXHJcbiAgICogIFxyXG4gICAqICdleGFjdCcgICAtIGlmIGFueSBpdGVtJ3MgZGlzcGxheVRleHQgbWF0Y2hlcyB0aGUgaW5wdXQgZXhhY3RseSxcclxuICAgKiAgICAgICAgICAgICBpZ25vcmluZyBjYXNlLCB0aGUgZmlyc3QgbWF0Y2ggaXMgY2hvc2VuXHJcbiAgICogXHJcbiAgICogJ29ubHknICAgIC0gaWYgdGhlcmUgaXMgb25seSBhIHNpbmdsZSBpdGVtIGluIHRoZSBsaXN0IGl0IGlzIGNob3NlblxyXG4gICAqIFxyXG4gICAqICdwYXJ0aWFsJyAtIG1hdGggdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGxpc3QgdGhhdCwgaWdub3JpbmcgY2FzZSwgXHJcbiAgICogICAgICAgICAgICAgZXhhY3RseSBtYXRjaGVzIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICovXHJcbiAgQElucHV0KCkgYXV0b1NlbGVjdGlvbk1vZGU6ICdub25lJyB8ICdsYXp5JyB8ICdleGFjdCcgfCAnb25seScgfCAncGFydGlhbCcgPSAnbm9uZSc7IFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW5kZXggb2YgdGhlIGF1dG8gc2VsZWN0aW9uIG1vZGUgc2VsZWN0aW9uIG1hZGUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhdXRvU2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cclxuICBwcml2YXRlIHNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCB0aGUgZGF0YSBmb3IgdGhlIGxpc3QgaXRlbSBzZWxlY3RlZCBlaXRoZXIgdGhyb3VnaCBcclxuICAgKiBhIG1vdXNlIGNsaWNrIG9yIGhpdHRpbmcgZW50ZXIgd2hlbiBpdCBpcyBpbiB0aGUgc2VsZWN0ZWQgXHJcbiAgICogc3RhdGUuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGxpc3RJdGVtQ2hvc2VuID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wZG93bklucHV0SXRlbUNob3NlbkV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgc2VydmljZSBoYXMgcmV0dXJuZWRcclxuICAgKiBhdCBsZWFzdCAxIGl0ZW0gdG8gdGhlIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGhhc0l0ZW1zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5udW1JdGVtcyA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhbmVsLmlzU2hvd2luZztcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duSW5wdXQnLCB7cmVhZDogRWxlbWVudFJlZn0pIGlucHV0RWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdwYW5lbCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgcGFuZWxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93bkxpc3QnKSBsaXN0OiBCQkRyb3Bkb3duSW5wdXRJdGVtc0xpc3Q7XHJcblxyXG4gIHB1YmxpYyBnZXQgaW5wdXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmlucHV0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gZGV0ZXJtaW5lIHRoZSBsb2NhdGlvbiBvZiBjbGlja3NcclxuICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIGRyb3Bkb3duIHNob3VsZFxyXG4gIC8vIHNob3cgb3Igbm90LlxyXG4gIHByaXZhdGUgb3V0c2lkZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHByaXZhdGUgaW5zaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgY2xpY2tlZEluc2lkZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAvKiB1c2VyIGludGVyYWN0aW9uIHN0YXRlIHRyYWNraW5nICovXHJcbiAgcHJpdmF0ZSB3YXNJbnNpZGVDbGlja2VkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3YXNGb2N1c2VkID0gZmFsc2U7XHJcblxyXG4gIC8vIGZvciB0cmFja2luZyB0aGUgc3RhdGUgb2YgdGhlIHBhbmVsXHJcbiAgcHJpdmF0ZSBpbnB1dFN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBwcml2YXRlIGl0ZW1zU3ViOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBudW1JdGVtczogbnVtYmVyID0gMDtcclxuXHJcbiAgLypcclxuICAgKiBJbnRlcm5hbCBsaXN0IG9mIHRoZSBkeW5hbWljIGNvbXBvbmVudHMnIGNvbnRhaW5lcnMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkeW5hbWljQ29udGFpbmVyczogQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlW107XHJcblxyXG4gIHB1YmxpYyBkaVNlcnY6IERyb3Bkb3duSW5wdXRTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKT0+QkJEcm9wZG93bklucHV0U2VydmljZVRva2VuKSkgcHJpdmF0ZSBfZGlTZXJ2OiBEcm9wZG93bklucHV0U2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjaERldFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgdGhpcy5kaVNlcnYgPSBfZGlTZXJ2O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYodGhpcy5tYXhJdGVtcykge1xyXG4gICAgICB0aGlzLmRpU2Vydi5zZXRNYXhJdGVtcyh0aGlzLm1heEl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogVHJhY2sgdGhlIHZhbHVlIGNoYW5nZXMgb2YgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgICAqIHdpdGhvdXQgYnJpbmdpbmcgaW4gYW5ndWxhciBmb3JtcyB0byBrZWVwXHJcbiAgICAgKiB0aGUgcmVxdWlyZW1lbnRzIGZvciBiYiBhcyBsb3cgYXMgcG9zc2libGUuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaW5wdXRTdWIgPSBcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuaW5wdXRFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgbWFwKChldmVudDpLZXlib2FyZEV2ZW50KT0+KGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSksXHJcbiAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5pbnB1dFZhbHVlQ2hhbmdlRGVsYXltcyksXHJcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIG5ld1RleHQ9PntcclxuICAgICAgICAgICAgICB0aGlzLmRpU2Vydi5zZXRTZWFyY2hUZXh0KG5ld1RleHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycj0+Y29uc29sZS5sb2coZXJyKSxcclxuICAgICAgICAoKT0+ey8qZG9uZSovfSk7XHJcblxyXG4gICAgdGhpcy5pdGVtc1N1YiA9IHRoaXMuZGlTZXJ2Lml0ZW1zJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoaXRlbXM9PiBpdGVtcz8gaXRlbXMubGVuZ3RoOi0xKSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICBudW09PiB7XHJcbiAgICAgICAgICB0aGlzLm51bUl0ZW1zID0gbnVtO1xyXG5cclxuICAgICAgICAgIGlmKHRoaXMuaGFzSXRlbXMpe1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsLnNob3coKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB0aGlzLmNoRGV0UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycj0+Y29uc29sZS5sb2coZXJyKSxcclxuICAgICAgICAoKT0+ey8qZG9uZSovfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpe1xyXG4gICAgdGhpcy5pbnB1dFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5pdGVtc1N1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5kaVNlcnYuY2xlYXJJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYW55IHByZXZpb3VzIHNlbGVjdGlvbiBjcml0ZXJpYSBhbmRcclxuICAgKiBwZXJmb3JtIGEgbmV3IGF1dG8gc2VsZWN0aW9uLlxyXG4gICAqL1xyXG4gICBvbk5ld0l0ZW1Db250YWluZXJzKFxyXG4gICAgY29udGFpbmVyczogQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlW10pIHtcclxuICAgICAgdGhpcy5jbGVhckF1dG9TZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLmR5bmFtaWNDb250YWluZXJzID0gY29udGFpbmVycztcclxuICAgICAgaWYodGhpcy5keW5hbWljQ29udGFpbmVycyAmJiB0aGlzLmR5bmFtaWNDb250YWluZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIHRoaXMuYXV0b1NlbGVjdEl0ZW0oKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIGVpdGhlciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gb3JcclxuICAgKiB0aGUgYXV0byBjaG9zZW4gaXRlbSBhbmQgZW1pdCBpdC5cclxuICAgKi9cclxuICBwcml2YXRlIGNob29zZUN1cnJlbnRJdGVtKCkge1xyXG4gICAgICBsZXQgY3VycmVudEl0ZW06IERyb3Bkb3duSW5wdXRJdGVtQ2hvc2VuRXZlbnQ7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50SXRlbSA9IHRoaXMuZ2V0Q3VycmVudEl0ZW0odGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmF1dG9TZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY3VycmVudEl0ZW0gPSB0aGlzLmdldEN1cnJlbnRJdGVtKHRoaXMuYXV0b1NlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihjdXJyZW50SXRlbSl7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0VGV4dE9uQ2hvaWNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IGN1cnJlbnRJdGVtLm1hdGNoVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1DaG9zZW4uZW1pdChjdXJyZW50SXRlbSk7XHJcbiAgICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBvZiB0aGUgZHluYW1pYyBjb21wb25lbnRcclxuICAgKiBkZXNjcmliZWQgYnkgdGhlIGluZGV4IHZhbHVlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0Q3VycmVudEl0ZW0oaW5kZXg6IG51bWJlcik6IERyb3Bkb3duSW5wdXRJdGVtQ2hvc2VuRXZlbnQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY29tcG9uZW50OiB0aGlzLmR5bmFtaWNDb250YWluZXJzW2luZGV4XS5jdXJyZW50Q29tcFJlZi5pbnN0YW5jZSxcclxuICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICBtYXRjaFRleHQ6IHRoaXMubGlzdC5keW5hbWljQ29tcG9uZW50c0RhdGFbaW5kZXhdLm1hdGNoVGV4dCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qIFNvZnQgU2VsZWN0aW9uIEhhbmRsaW5nICovXHJcbiAgcHJpdmF0ZSBhdXRvU2VsZWN0SXRlbSgpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgc3dpdGNoICh0aGlzLmF1dG9TZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICAgICAgY2FzZSAnbm9uZSc6IHtcclxuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnbGF6eSc6IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZXhhY3QnOiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5keW5hbWljQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVySW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5keW5hbWljQ29tcG9uZW50c0RhdGEuZmluZChcclxuICAgICAgICAgICAgKGNudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGNudC5tYXRjaFRleHQudG9Mb3dlckNhc2UoKSA9PT0gXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVySW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBjb250YWluZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ3BhcnRpYWwnOiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5keW5hbWljQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmVySW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5keW5hbWljQ29tcG9uZW50c0RhdGEuZmluZChcclxuICAgICAgICAgICAgKGNudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGNudC5tYXRjaFRleHQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAuc3Vic3RyKDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUubGVuZ3RoKSA9PT0gXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGNvbnRhaW5lckluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnb25seSc6IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMgJiYgdGhpcy5keW5hbWljQ29udGFpbmVycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluZGV4ICE9IHRoaXMuYXV0b1NlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgdGhpcy5jbGVhckF1dG9TZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNoYW5nZUF1dG9TZWxlY3Rpb24oaW5kZXgsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYXV0b1NlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGN1cnJlbnQgYXV0byBzZWxlY3Rpb25cclxuICAgKi9cclxuICBwcml2YXRlIGNsZWFyQXV0b1NlbGVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmF1dG9TZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5saXN0LmNoYW5nZUF1dG9TZWxlY3Rpb24odGhpcy5hdXRvU2VsZWN0ZWRJbmRleCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmF1dG9TZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgcHJldmlvdXMsIHdyYXBwaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWxlY3RQcmV2aW91c0xpc3RJdGVtKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMuZ2V0TmV4dFNlbGVjdGlvbigtMSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBuZXh0LCB3cmFwcGluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VsZWN0TmV4dExpc3RJdGVtKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMuZ2V0TmV4dFNlbGVjdGlvbigxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbmV4dCBzZWxlY3Rpb24gYmFzZWQgb24gdGhlIGluZGV4Q2hhbmdlXHJcbiAgICogYW5kIHdyYXBwaW5nIGFyb3VuZCB0aGUgYXJyYXkgb2YgaXRlbXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXROZXh0U2VsZWN0aW9uKGluZGV4Q2hhbmdlOm51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMgJiYgdGhpcy5keW5hbWljQ29udGFpbmVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNoYW5nZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSW5kZXgsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSBzZWxlY3Rpb24gaW5kZXhcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggKz0gaW5kZXhDaGFuZ2U7XHJcblxyXG4gICAgICAgIC8vIHdyYXAgdGhlIHNlbGVjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZHluYW1pY0NvbnRhaW5lcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IHRoaXMuZHluYW1pY0NvbnRhaW5lcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHNlbGVjdGlvblxyXG4gICAgICAgIHRoaXMubGlzdC5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEluZGV4LCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIGNvbnRhaW5lciBlbGVtZW50IGlzIGNvbnNpZGVyZWQgdG8gYmUgdGhlIGFuZ3VsYXIgYmluZGluZyBjb21tZW50LCBzbyB3ZSBoYXZlIHRvIGdvIHVwIDEgbGV2ZWwgdG8gdGhlIGxpIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMubGlzdC5saXN0RWxlbWVudHNbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gKHRoaXMucGFuZWxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGlzIGluIHZpZXdcclxuICAgICAgICBjb25zdCBpblZpZXdEYXRhID0gdGhpcy5lbGVtZW50T2Zmc2V0RnJvbVZpZXcobGlzdEVsZW1lbnQsIGNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghaW5WaWV3RGF0YS5pblZpZXcpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zY3JvbGxUb3AgKz0gaW5WaWV3RGF0YS5zY3JvbGxCeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjbGVhciBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xlYXJTZWxlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5saXN0LmNoYW5nZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICogYW5kIGlmIGl0IGlzbid0IGFsc28gZGV0ZXJtaW5lIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgZnJvbSBiZWluZyBpbiB2aWV3XHJcbiAgICogaXQgaXMgYXQuXHJcbiAgICogQHBhcmFtIGxpc3RFbGVtZW50IHRoZSBlbGVtZW50IHRvIGRldGVybWluZSBpZiBpdCBpcyBpbiB2aWV3XHJcbiAgICogQHBhcmFtIGNvbnRhaW5lciB0aGUgdmlld2luZyBjb250YWluZXIgb2YgdGhlIGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGVsZW1lbnRPZmZzZXRGcm9tVmlldyhsaXN0RWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgbGlzdFJlYyA9IGxpc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBjb250UmVjID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCB0b3BWaXogPSBsaXN0UmVjLnRvcCA+PSBjb250UmVjLnRvcDtcclxuICAgICAgY29uc3QgYm90Vml6ID0gbGlzdFJlYy5ib3R0b20gPD0gY29udFJlYy5ib3R0b207XHJcblxyXG4gICAgICBjb25zdCBpblZpZXdEYXRhID0ge1xyXG4gICAgICAgICAgaW5WaWV3OiB0b3BWaXogJiYgYm90Vml6LFxyXG4gICAgICAgICAgc2Nyb2xsQnk6IDAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghYm90Vml6KSB7XHJcbiAgICAgICAgICBpblZpZXdEYXRhLnNjcm9sbEJ5ID0gbGlzdFJlYy5ib3R0b20gLSBjb250UmVjLmJvdHRvbTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghdG9wVml6KSB7XHJcbiAgICAgICAgICBpblZpZXdEYXRhLnNjcm9sbEJ5ID0gLShjb250UmVjLnRvcCAtIGxpc3RSZWMudG9wKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGluVmlld0RhdGE7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogRXZlbnQgSGFuZGxlcnMgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBmb3IgZXh0cmEgY29udHJvbCBrZXlzIHByZXNzZWQsIHVwIGFuZCBkb3duIGFycm93cyBhbmQgZW50ZXIsXHJcbiAgICogYW5kIHRha2UgdGhlIGFwcHJvcHJpYXRlIGFjdGlvbiBiYXNlZCBvbiB0aGVtLlxyXG4gICAqIFVwIEFycm93IC0gc2VsZWN0IHRoZSBwcmV2aW91cyBpdGVtIG9uIHRoZSBsaXN0LCBvciB0aGUgbGFzdCBpdGVtIGlmIG5vbmUgaGFzIGJlZW4gc2VsZWN0ZWQgeWV0XHJcbiAgICogRG93biBBcnJvdyAtIHNlbGVjdCB0aGUgbmV4dCBpdGVtIG9uIHRoZSBsaXN0LCBvciB0aGUgZmlyc3QgaWYgbm9uZSBoYXMgYmVlbiBzZWxlY3RlZCBcclxuICAgKiBFbnRlciAtICdjaG9vc2UnIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbVxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICBjYXNlIEV2ZW50S2V5cy5VUEFSUk9XOlxyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQcmV2aW91c0xpc3RJdGVtKGUpO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRXZlbnRLZXlzLkRPV05BUlJPVzpcclxuICAgICAgICAgICAgICB0aGlzLmNsZWFyQXV0b1NlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0TmV4dExpc3RJdGVtKGUpO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRXZlbnRLZXlzLkVOVEVSOlxyXG4gICAgICAgICAgICAgIHRoaXMuY2hvb3NlQ3VycmVudEl0ZW0oKTtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJyxbJyRldmVudCddKSBcclxuICBvbk91dHNpZGVDbGljayhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZighdGhpcy53YXNJbnNpZGVDbGlja2VkKSB7XHJcbiAgICAgIHRoaXMud2FzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBzZXRUaW1lb3V0KF89PntcclxuICAgICAgICBpZighdGhpcy53YXNGb2N1c2VkKXtcclxuICAgICAgICAgIHRoaXMucGFuZWwuaGlkZSgpO1xyXG4gICAgICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuY2hEZXRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH19LDE1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndhc0luc2lkZUNsaWNrZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJyxbJyRldmVudCddKSBcclxuICBvbkluc2lkZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMud2FzSW5zaWRlQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLndhc0ZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25Ib3N0Rm9jdXNJbihlOiBGb2N1c0V2ZW50KSB7XHJcbiAgICBpZih0aGlzLmhhc0l0ZW1zKXtcclxuICAgICAgdGhpcy5wYW5lbC5zaG93KCk7XHJcbiAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIHRoaXMuY2hEZXRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy53YXNGb2N1c2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uSG9zdEZvY3VzT3V0KGU6IEZvY3VzRXZlbnQpe1xyXG4gICAgdGhpcy53YXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KF89PntcclxuICAgICAgaWYoIXRoaXMud2FzRm9jdXNlZCl7XHJcbiAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfX0sMTUwKTtcclxuICB9XHJcblxyXG4gIG9uTGlzdEl0ZW1Nb3VzZU92ZXIoZTogRHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5jbGVhckF1dG9TZWxlY3Rpb24oKTtcclxuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGUuaW5kZXg7XHJcbiAgICB0aGlzLmxpc3QuY2hhbmdlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJbmRleCx0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uTGlzdEl0ZW1DbGlja2VkKGU6IERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGUuaW5kZXg7XHJcbiAgICB0aGlzLmxpc3QuY2hhbmdlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJbmRleCx0cnVlKTtcclxuICAgIHRoaXMuY2hvb3NlQ3VycmVudEl0ZW0oKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKipcclxuICogRW51bWVyYXRlIHRoZSBkZXNpcmVkIGtleSBjb2RlcyBmb3Iga2V5IGV2ZW50c1xyXG4gKi9cclxuZW51bSBFdmVudEtleXMge1xyXG4gICAgRU5URVIgPSAxMyxcclxuICAgIFVQQVJST1cgPSAzOCxcclxuICAgIERPV05BUlJPVyA9IDQwLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tiYi1zbGlkaW5nLXBhbmVsLWZvY3VzXScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhmb2N1cyknOlwib25Gb2N1cygkZXZlbnQpXCIsXHJcbiAgICAnKGJsdXIpJzpcIm9uQmx1cigkZXZlbnQpXCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duSW5wdXREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgnYmItc2xpZGluZy1wYW5lbC1mb2N1cycpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuICBASW5wdXQoKSBjYW5TaG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG9uRm9jdXMoZTogRm9jdXNFdmVudCkge1xyXG4gICAgaWYodGhpcy5jYW5TaG93KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzaG93aW5nJyk7XHJcbiAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKGU6IEZvY3VzRXZlbnQpIHtcclxuICAgIHRoaXMucGFuZWwuaGlkZSgpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsICBcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIENvbXBvbmVudFJlZixcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgSW5wdXQsXHJcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnREYXRhIH0gZnJvbSAnLi9keW5hbWljLWNvbXBvbmVudC1kYXRhLmludGVyZmFjZSc7XHJcblxyXG4vKipcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JiLWR5bmFtaWMtY29tcG9uZW50XScsXHJcbiAgZXhwb3J0QXM6J2R5bmFtaWNDb21wJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSB7XHJcbiAgICBwdWJsaWMgY3VycmVudENvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBkY2NDbGFzc2VzOiBhbnkgPSB7fTtcclxuXHJcbiAgICBASW5wdXQoJ2JiLWR5bmFtaWMtY29tcG9uZW50JykgcHVibGljIHNldCBjb21wb25lbnREYXRhKGNvbXBEYXRhOiBEeW5hbWljQ29tcG9uZW50RGF0YSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudChjb21wRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29tcG9uZW50KGNvbXBEYXRhOiBEeW5hbWljQ29tcG9uZW50RGF0YSkge1xyXG4gICAgICBpZiAoIWNvbXBEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q29tcFJlZikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaW5wdXRQcm92aWRlcnM6IGFueVtdID0gW11cclxuXHJcbiAgICAgIGlmIChjb21wRGF0YS5wcm92aWRlcnMpIHtcclxuICAgICAgICBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGNvbXBEYXRhLnByb3ZpZGVycykubWFwKFxyXG4gICAgICAgICAgKHByb3ZOYW1lOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcHJvdmlkZTogcHJvdk5hbWUsIHVzZVZhbHVlOiBjb21wRGF0YS5wcm92aWRlcnNbcHJvdk5hbWVdIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGluamVjdG9yID1cclxuICAgICAgICBSZWZsZWN0aXZlSW5qZWN0b3JcclxuICAgICAgICAgIC5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcbiAgICAgICAgICAgIFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKGlucHV0UHJvdmlkZXJzKSxcclxuICAgICAgICAgICAgdGhpcy52Y1JlZi5wYXJlbnRJbmplY3Rvcik7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT4gPVxyXG4gICAgICAgIHRoaXMucmVzb2x2ZXJcclxuICAgICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wRGF0YS5jb21wb25lbnQpXHJcbiAgICAgICAgICAuY3JlYXRlKGluamVjdG9yKTtcclxuXHJcbiAgICAgIHRoaXMudmNSZWYuaW5zZXJ0KGNvbXBSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgICAgaWYgKGNvbXBEYXRhLmlucHV0cykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBEYXRhLmlucHV0cykubWFwKFxyXG4gICAgICAgICAgaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBjb21wUmVmLmluc3RhbmNlW2lucHV0XSA9IGNvbXBEYXRhLmlucHV0c1tpbnB1dF07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21wUmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRDb21wUmVmID0gY29tcFJlZjtcclxuICAgIH1cclxuXHJcbiBcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBCQkR5bmFtaWNDb21wb25lbnRNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBSZWZsZWN0aXZlSW5qZWN0b3IsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgVmlld0NoaWxkcmVuLFxyXG4gICAgUXVlcnlMaXN0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEhvc3RCaW5kaW5nLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1Db21wb25lbnREYXRhIH0gZnJvbSAnLi4vc2VydmljZS9kcm9wZG93bi1pbnB1dC1zZXJ2aWNlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2R5bmFtaWMtY29tcG9uZW50L2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQgfSBmcm9tICcuLi9ldmVudHMvZHJvcGRvd24taW5wdXQtaXRlbS1ldmVudHMuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3VsW2JiLWRyb3Bkb3duLWlucHV0LWl0ZW1zLWxpc3RdJyxcclxuICAgIHRlbXBsYXRlOiBgPGxpICpuZ0Zvcj1cImxldCBjb21wRGF0YSBvZiBkeW5hbWljQ29tcG9uZW50c0RhdGE7IGxldCBpID0gaW5kZXg7XCJcclxuICAgICNsaXN0SXRlbVxyXG4gICAgY2xhc3M9XCJpdGVtXCJcclxuICAgIFtjbGFzcy5hdXRvLXNlbGVjdGVkXT1cIml0ZW1BdXRvU2VsZWN0ZWRbaV1cIlxyXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW1TZWxlY3RlZFtpXVwiXHJcbiAgICAoY2xpY2spPVwib25MaXN0SXRlbUNsaWNrKCRldmVudCwgaSlcIlxyXG4gICAgKG1vdXNlb3Zlcik9XCJvbkxpc3RJdGVtTW91c2VPdmVyKCRldmVudCwgaSlcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGFpbmVyPVwiZHluYW1pY0NvbXBcIiBbYmItZHluYW1pYy1jb21wb25lbnRdPVwiY29tcERhdGFcIj48L25nLXRlbXBsYXRlPlxyXG48L2xpPlxyXG5cclxuXHJcbmAsXHJcbiAgICBzdHlsZXM6IFtgYF0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEcm9wZG93bklucHV0SXRlbXNMaXN0IHtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYmItZHJvcGRvd24taW5wdXQtaXRlbXMtbGlzdCcpIGFwcGx5SG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZHluYW1pY0NvbXBvbmVudHNEYXRhOiBEcm9wZG93bkl0ZW1Db21wb25lbnREYXRhW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgZHluYW1pY0NvbXBvbmVudENsYXNzZXM6IGFueVtdO1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2NvbnRhaW5lcicpIFxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyczogUXVlcnlMaXN0PEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZT47XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignbGlzdEl0ZW0nLHtyZWFkOlZpZXdDb250YWluZXJSZWZ9KVxyXG4gICAgICAgIHB1YmxpYyBsaXN0SXRlbXM6IFF1ZXJ5TGlzdDxWaWV3Q29udGFpbmVyUmVmPjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxpc3RFbGVtZW50cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0SXRlbXMudG9BcnJheSgpLm1hcChsaT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gKGxpLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MTElFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG5ld0NvbnRhaW5lcnMgPSBuZXcgRXZlbnRFbWl0dGVyPEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZVtdPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdEl0ZW1Nb3VzZU92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBsaXN0SXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50PigpO1xyXG5cclxuICAgIHByaXZhdGUgbmV3Q29udGFpbmVyc1N1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGl0ZW1BdXRvU2VsZWN0ZWQ6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICAgaXRlbVNlbGVjdGVkOiBib29sZWFuW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoRGV0UmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTZWxlY3Rpb24oaW5kZXg6bnVtYmVyLCBzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkW2luZGV4XT1zZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIHRoaXMuY2hEZXRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VBdXRvU2VsZWN0aW9uKGluZGV4OiBudW1iZXIsIHNlbGVjdGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtQXV0b1NlbGVjdGVkW2luZGV4XT1zZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIHRoaXMuY2hEZXRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyBlbWl0IHRoZSBvcmlnaW5hbCBsaXN0XHJcbiAgICAgICAgdGhpcy5uZXdDb250YWluZXJzLmVtaXQodGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVycy50b0FycmF5KCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm5ld0NvbnRhaW5lcnNTdWIpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdDb250YWluZXJzU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnNTdWIgPVxyXG4gICAgICAgICAgICB0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXJzXHJcbiAgICAgICAgICAgICAgICAuY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQXV0b1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Q29udGFpbmVycy5lbWl0KG5ld0xpc3QudG9BcnJheSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnNTdWIudW5zdWJzY3JpYmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5ld0NvbnRhaW5lcnNTdWIpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdDb250YWluZXJzU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdEl0ZW1DbGljayhcclxuICAgICAgICBlOiBNb3VzZUV2ZW50LCBcclxuICAgICAgICBpbmRleDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtQ2xpY2suZW1pdCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBlLFxyXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpc3RJdGVtTW91c2VPdmVyKFxyXG4gICAgICAgIGU6IE1vdXNlRXZlbnQsIFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtTW91c2VPdmVyLmVtaXQoe1xyXG4gICAgICAgICAgICBldmVudDogZSxcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dCB9IGZyb20gJy4vZHJvcGRvd24taW5wdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwubW9kdWxlJztcclxuaW1wb3J0IHsgQkJEcm9wZG93bklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCQkR5bmFtaWNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXRJdGVtc0xpc3QgfSBmcm9tICcuL2l0ZW0tbGlzdC9kcm9wZG93bi1pbnB1dC1pdGVtLWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgICBCQkR5bmFtaWNDb21wb25lbnRNb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCRHJvcGRvd25JbnB1dCxcclxuICAgIEJCRHJvcGRvd25JbnB1dERpcmVjdGl2ZSwgXHJcbiAgICBCQkRyb3Bkb3duSW5wdXRJdGVtc0xpc3QsXHJcbiAgXSxcclxuICBcclxuICBleHBvcnRzOiBbXHJcblx0ICBCQkRyb3Bkb3duSW5wdXQsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEcm9wZG93bklucHV0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQkRyb3Bkb3duSW5wdXRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JCTWVudUl0ZW19IGZyb20gJy4uL2NvbW1vbi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLWRyb3Bkb3duLW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlXT1cInBhbmVsXCIgXHJcbiAgICAgW3RvZ2dsZU9uQ2xpY2tdPVwidG9nZ2xlT25DbGlja1wiXHJcbiAgICAgW3Nob3dPbkhvdmVyXT1cInNob3dPbkhvdmVyXCJcclxuICAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCJcclxuICAgIHNsaWRlRGlyZWN0aW9uPVwiZG93blwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5kcm9wZG93bi1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9L2RlZXAvIC5kcm9wZG93bi1jb250YWluZXI+ZGl2LmJiLXNsaWRpbmctcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9LmRyb3Bkb3duLWNvbnRhaW5lciBkaXYuYmItc2xpZGluZy1wYW5lbHtkaXNwbGF5OmZsZXg7ZmxleDoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1gXSxcclxuICBleHBvcnRBczonYmJEcm9wZG93bk1lbnUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duTWVudSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1kcm9wZG93bi1tZW51JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd09uSG92ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgdG9nZ2xlT25DbGljayA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25NZW51IH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCRHJvcGRvd25NZW51XHJcbiAgXSxcclxuICBcclxuICBleHBvcnRzOiBbXHJcblx0ICBCQkRyb3Bkb3duTWVudVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25NZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQkRyb3Bkb3duTWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbiB9XHJcbiIsImltcG9ydCB7IEJCRHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIvZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIubW9kZWwnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25UcmFuc2l0aW9ucyB9IGZyb20gJy4uL2FuaW1hdGlvbi10cmFuc2l0aW9ucy9hbmltYXRpb24tdHJhbnNpdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgQkJTdGF0ZUNTU01hcCB9IGZyb20gJy4uL3N0YXRlLWNzcy1tYXAvc3RhdGUtY3NzLW1hcC5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ1NTTWFwcGVyIH0gZnJvbSAnLi4vc3RhdGUtY3NzLW1hcHBlci9zdGF0ZS1jc3MtbWFwcGVyLm1vZGVsJztcbmltcG9ydCB7IEJCQW5pbWF0aW9uU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXN0YXRlLW1hY2hpbmUvYW5pbWF0aW9uLXN0YXRlLW1hY2hpbmUubW9kZWwnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UgfSBmcm9tICcuLi9zdGF0ZS1jc3MtbWFwcGVyL3N0YXRlLWNzcy1tYXBwZXIuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBCQkRlZmF1bHREeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJTZXJ2aWNlIGltcGxlbWVudHMgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKCBcbiAgICBwcml2YXRlIGVsZW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIGNzc01hcHBlclNlcnZpY2U6IEJCU3RhdGVDc3NNYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGVzQnVpbGRlcjogQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlXG4pIHt9XG5cbiAgcHJpdmF0ZSBhbmltYXRpb25zU3RhdGVNYWNoaW5lOiBCQkFuaW1hdGlvblN0YXRlTWFjaGluZTtcbiAgcHJpdmF0ZSBjc3NNYXBwZXI6IEJCU3RhdGVDU1NNYXBwZXI7XG4gIHByaXZhdGUgc3RhdGVDYWNoZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgbWFwQ2FjaGU6IEJCU3RhdGVDU1NNYXAgPSB7fTtcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uc0NhY2hlOiBCQkFuaW1hdGlvblRyYW5zaXRpb25zID0ge307XG5cbiAgc2V0Q1NTTWFwKG1hcDogQkJTdGF0ZUNTU01hcCkge1xuICAgIGlmKHRoaXMubWFwQ2FjaGUgIT09IG1hcCkge1xuICAgICAgdGhpcy5tYXBDYWNoZSA9IG1hcDtcblxuICAgICAgaWYodGhpcy5jc3NNYXBwZXIpIHtcbiAgICAgICAgdGhpcy5jc3NNYXBwZXIucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuY3NzTWFwcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jc3NNYXBwZXIgPSB0aGlzLmNzc01hcHBlclNlcnZpY2VcbiAgICAgICAgLmNyZWF0ZVN0YXRlQ1NTTWFwcGVyKHRoaXMuZWxlbWVudCx0aGlzLm1hcENhY2hlKTtcbiAgICB9XG4gIH1cblxuICBuZXh0U3RhdGUodG9TdGF0ZTpzdHJpbmcpIHtcbiAgICBpZih0aGlzLnN0YXRlQ2FjaGUgIT09IHRvU3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGVDYWNoZSA9IHRvU3RhdGU7XG5cbiAgICAgIGlmKHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUubmV4dChcbiAgICAgICAgICB0aGlzLnN0YXRlQ2FjaGUsIFxuICAgICAgICAgIHRoaXMuY3NzTWFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmFuc2l0aW9ucyh0cmFuc2l0aW9uczogQkJBbmltYXRpb25UcmFuc2l0aW9ucykge1xuICAgIGlmKHRoaXMudHJhbnNpdGlvbnNDYWNoZSAhPT0gdHJhbnNpdGlvbnMpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbnNDYWNoZSA9IHRyYW5zaXRpb25zO1xuXG4gICAgICBpZih0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUpIHtcblxuICAgICAgICBpZih0aGlzLmNzc01hcHBlcikge1xuICAgICAgICAgIHRoaXMuY3NzTWFwcGVyLnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zU3RhdGVNYWNoaW5lLmRlc3Ryb3koKTtcbiAgICAgIH0gICAgXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZSA9IFxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlc0J1aWxkZXJcbiAgICAgICAgICAuY3JlYXRlQW5pbWF0aW9uU3RhdGVNYWNoaW5lKFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uc0NhY2hlKTtcbiAgICB9XG4gIH1cblxuICBpbml0KCkgeyAgXG4gICAgY29uc29sZS5sb2coJ2luaXQ6ICcsXG4gICAgICB0aGlzLmNzc01hcHBlclNlcnZpY2UsXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXRlc0J1aWxkZXJcbiAgICApO1xuXG5cbiAgICBpZih0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZS5pbml0KFxuICAgICAgICB0aGlzLnN0YXRlQ2FjaGUsXG4gICAgICAgIHRoaXMuY3NzTWFwcGVyKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZS5kZXN0cm95KCk7XG4gICAgdGhpcy5jc3NNYXBwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuc3RhdGVDYWNoZSA9IG51bGw7XG4gICAgdGhpcy5tYXBDYWNoZSA9IG51bGw7XG4gICAgdGhpcy50cmFuc2l0aW9uc0NhY2hlID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZSB9IGZyb20gJy4vZHluYW1pYy1hbmltYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLWNzcy1tYXBwZXIvc3RhdGUtY3NzLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJCQW5pbWF0aW9uU3RhdGVzU2VydmljZSB9IGZyb20gJy4vYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGVzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW11cbn0pXG5leHBvcnQgY2xhc3MgQkJEeW5hbWljQW5pbWF0aW9uc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJEeW5hbWljQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCQkR5bmFtaWNBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlLCBcbiAgICAgICAgQkJTdGF0ZUNzc01hcHBlclNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9ICBcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvclRva2VuIH0gZnJvbSAnLi4vZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIvZHluYW1pYy1hbmltYXRpb25zLWhhbmRsZXIudG9rZW4nO1xuaW1wb3J0IHsgQkJEZWZhdWx0RHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyU2VydmljZSB9IGZyb20gJy4vZGVmYXVsdC1keW5hbWljLWFuaW1hdGlvbnMtaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJCRHluYW1pY0FuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICcuLi9keW5hbWljLWFuaW1hdGlvbnMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8vQ29tbW9uTW9kdWxlLFxuICAgIEJCRHluYW1pY0FuaW1hdGlvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJCRGVmYXVsdER5bmFtaWNBbmltYXRpb25zSGFuZGxlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJEZWZhdWx0RHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogQkJEeW5hbWljQW5pbWF0aW9uc0hhbmRsZXJDb25zdHJ1Y3RvclRva2VuLCBcbiAgICAgICAgICB1c2VWYWx1ZTogQkJEZWZhdWx0RHluYW1pY0FuaW1hdGlvbnNIYW5kbGVyU2VydmljZSBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH0gIFxuXG4gfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2JiLW1lbnUtaXRlbS1yaWdodF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgIEJCTWVudUl0ZW1SaWdodCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE5nWm9uZSxcclxuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICBCQlNsaWRpbmdQYW5lbCwgXHJcbiAgQkJTbGlkaW5nUGFuZWxUb2dnbGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsJztcclxuXHJcbmltcG9ydCB7QkJNZW51SXRlbX0gZnJvbSAnLi4vY29tbW9uL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JCTWVudUl0ZW1SaWdodH0gZnJvbSAnLi9tZW51LWl0ZW0tcmlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBmcm9tRXZlbnQgLCAgb2YgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlICwgIG1hcCAsICBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBBIGhhbWJ1cmdlciBtZW51IGlzIGVpdGhlciBhIGRpdiBvciBuYXYgZWxlbWVudFxyXG4gKiB0aGF0IGhhcyBhcmJpdHJhcnkgaXRlbXMgYXMgaXQncyBjb250ZW50IHdpdGggdGhlXHJcbiAqIGJiLW1lbnUtaXRlbSBvciBiYi1tZW51LWl0ZW0tcmlnaHQgZGlyZWN0aXZlcy5cclxuICogXHJcbiAqIEl0IHRha2VzIGEgc3RhbmRhcmQgY3NzIG1lZGlhIHF1ZXJ5IGFzIGFuIGlucHV0LFxyXG4gKiBleHBhbmRPblF1ZXJ5LCBhbmQgd2hlbiB0aGF0IHF1ZXJ5IHJldHVybnMgdHJ1ZSBcclxuICogdGhlIG1lbnUgd2lsbCBkaXNwbGF5IHRoZSBpdGVtcyBpbnNpZGUgaXQncyBib3JkZXJzLlxyXG4gKiBcclxuICogSWYgdGhlIHF1ZXJ5IGlzIGZhbHNlIHRoZSBtZW51IHdpbGwgYmUgcmVuZGVyZWQgaW4gXHJcbiAqIHRoZSBjb2xsYXBzZWQgc3RhdGUgd2hlcmUgYSB0b2dnbGUgd2lsbCBiZSByaWdodCBcclxuICoganVzdGlmaWVkIGFuZCB3aGVuIGNsaWNrZWQgd2lsbCBzaG93IGFuZCBoaWRlIHRoZVxyXG4gKiBtZW51IGl0ZW0gY29udGVudHMgaW4gYSBwYW5lbCB0aGF0IGRyb3BzIGRvd24uXHJcbiAqIFxyXG4gKiBUaGUgdG9nZ2xlIGl0c2VsZiBpcyBzZXQgYnkgYWRkaW5nIHRoZSBiYi1tZW51LXRvZ2dsZVxyXG4gKiBkaXJlY3RpdmUgdG8gY29udGVudCBpbnNpZGUgdGhlIG1lbnUgZWxlbWVudCB0aGF0IFxyXG4gKiBzaG91bGQgYWN0IGFzIHRoZSB0b2dnbGUuXHJcbiAqIFxyXG4gKiBUaGUgaGFtYnVyZ2VyIG1lbnUgY29tcG9uZW50IGlzIGV4cG9ydGVkIGFzIEJCSGFtYnVyZ2VyTWVudVxyXG4gKiBhbmQgcHJvdmlkZXMgdGhlIHN0YXRlIG9mIHRoZSBwYW5lbCB3aXRoIGlzT3BlbiBhbmQgdGhlIFxyXG4gKiBzdGF0ZSBvZiB0aGUgbWVudSBpdHNlbGYgYXMgZXhwYW5kZWQuICBUaGVzZSBjYW4gYmUgdXNlZCBcclxuICogdG8gbW9kaWZ5IHRoZSBtZW51IGNvbnRlbnQgaXRzZWxmIGJhc2VkIG9uIHRoZSBjdXJyZW50XHJcbiAqIHN0YXRlIG9mIHRoZSBtZW51LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItaGFtYnVyZ2VyLW1lbnVdLCBuYXZbYmItaGFtYnVyZ2VyLW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1maXhlZC1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgPGRpdiBiYi1zbGlkaW5nLXBhbmVsXHJcbiAgICAgIGNsYXNzPVwibWVudS1pdGVtcy1jb250YWluZXJcIlxyXG4gICAgICBzbGlkZURpcmVjdGlvbj1cImRvd25cIlxyXG4gICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1zLXJpZ2h0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LWl0ZW0tcmlnaHRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPGRpdiBbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdPVwicGFuZWxcIlxyXG4gICAgICAgI3RvZ2dsZT1cImJiU2xpZGluZ1BhbmVsVG9nZ2xlXCIgXHJcbiAgICAgICBbdG9nZ2xlT25DbGlja109XCJ0b2dnbGVPbkNsaWNrXCJcclxuICAgICAgIFtzaG93T25Ib3Zlcl09XCJzaG93T25Ib3ZlclwiXHJcbiAgICAgICBbc2hvd09uSW5pdF09XCJleHBhbmRlZFwiXHJcbiAgICAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LXRvZ2dsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5tZW51LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleDoxO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDppbmhlcml0O21heC1oZWlnaHQ6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdH06aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4OjE7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2Lm1lbnUtaXRlbXMsOmhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2Lm1lbnUtaXRlbXMtcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2ZsZXgtYmFzaXM6YXV0b306aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcy1yaWdodHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuY29sbGFwc2VkIGRpdi5tZW51LWl0ZW1zLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXg6MX06aG9zdC5iYi1oYW1idXJnZXItbWVudS5jb2xsYXBzZWQgZGl2Lm1lbnUtaXRlbXMsOmhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuY29sbGFwc2VkIGRpdi5tZW51LWl0ZW1zLXJpZ2h0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MTtmbGV4LWJhc2lzOmF1dG99Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2LmJiLXNsaWRpbmctcGFuZWwtdG9nZ2xle3Zpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjB9ZGl2LmJiLXNsaWRpbmctcGFuZWwtdG9nZ2xle2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0LmNvbGxhcHNlZCBkaXYubWVudS1pdGVtcy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7bGVmdDowO3JpZ2h0OjB9Omhvc3QuY29sbGFwc2VkIGRpdi5tZW51LWNvbnRhaW5lcntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1kaXYubWVudS1pdGVtc3tmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2ZsZXgtYmFzaXM6YXV0b31gXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmV4cGFuZGVkXSc6IFwiZXhwYW5kZWRcIixcclxuICAgICdbY2xhc3MuY29sbGFwc2VkXSc6IFwiIWV4cGFuZGVkXCIsXHJcbiAgfSxcclxuICBleHBvcnRBczonYmJIYW1idXJnZXJNZW51J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJIYW1idXJnZXJNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmItaGFtYnVyZ2VyLW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZScpIHRvZ2dsZTogQkJTbGlkaW5nUGFuZWxUb2dnbGU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQkJNZW51SXRlbSwgeyByZWFkOkVsZW1lbnRSZWYsIGRlc2NlbmRhbnRzOnRydWUgfSkgXHJcbiAgaXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBAQ29udGVudENoaWxkcmVuKEJCTWVudUl0ZW1SaWdodCwge3JlYWQ6RWxlbWVudFJlZiwgZGVzY2VuZGFudHM6dHJ1ZX0pIFxyXG4gIHJpZ2h0SXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpdGVtcyBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkXHJcbiAgICogaW4gdGhlIGhhbWJ1cmdlciBtZW51LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXRlbUVsZW1lbnRSZWZzKCk6IEVsZW1lbnRSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy50b0FycmF5KCkuY29uY2F0KHRoaXMucmlnaHRJdGVtcy50b0FycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGlmIHRoZSBwYW5lbCBpcyBvcGVuIG9yIG5vdC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhbmVsLmlzU2hvd2luZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY3NzIG1lZGlhIHF1ZXJ5IGFzIGEgc3RyaW5nIHRoYXRcclxuICAgKiB3aWxsIGRldGVybWluZSB3aGVuIHRoZSBoYW1idXJnZXIgbWVudVxyXG4gICAqIHNob3VsZCBleHBhbmQgdGhlIGl0ZW1zIG9udG8gdGhlIG1lbnUgXHJcbiAgICogYmFyIGFuZCByZW1vdmUgdGhlIGRyb3Bkb3duIHRvZ2dsZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGV4cGFuZE9uUXVlcnk6IHN0cmluZztcclxuICAgICAgICAgXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgbWVudSBpZiB0aGUgdG9nZ2xlIGlzIGhvdmVyZWRcclxuICAgKiBvdmVyLiAgRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgdGhlIG1lbnUgaWYgYSBjbGljayBoYXBwZW5zIG91dHNpZGVcclxuICAgKiBpdC4gIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93IHRoZSB0b2dnbGUgdG8gd29yayBvbiB0aGVcclxuICAgKiBjbGljayBldmVudC5cclxuICAgKi9cclxuICByZWFkb25seSB0b2dnbGVPbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGUgZm9yIHRoZSBjbG9zZU9uQ2xpY2tPdXRzaWRlXHJcbiAgICogaW5wdXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29jb0luaXQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIGEgZmxhZyBtZW1iZXIgZm9yIHRoZSBleHBhbmRlZCBcclxuICAgKiBzdGF0ZSBiZWNhdXNlIGhvc3QgYmluZGluZ3MgY2FuJ3QgXHJcbiAgICogdXNlIHRoZSBhc3luYyBwaXBlIHNvIHdlIGhhdmUgdG8gXHJcbiAgICogY2FjaGUgdGhlIG1lZGlhIHF1ZXJ5IHJlc3VsdHMuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGFuZGVkID0gZmFsc2U7O1xyXG5cclxuICAvKipcclxuICAgKiBUcmFjayB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB3aW5kb3dcclxuICAgKiByZXNpemUgZXZlbnQgYW5kIG1lZGlhIHF1ZXJ5IHJlc3VsdFxyXG4gICAqIHN0cmVhbS5cclxuICAgKi9cclxuICBwcml2YXRlIGV4cGFuZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvKlxyXG4gICAgICogU2F2ZSB0aGUgY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgICogc3RhdGUuICBUaGlzIHdpbGwgYmUgdG9nZ2xlZCBzb1xyXG4gICAgICogdGhhdCB0aGUgcGFuZWwgZG9lc250IGVudGVyIHRoZVxyXG4gICAgICogY2xvc2VkIHN0YXRlIHdoZW4gdGhlIG1lbnUgYmFyIFxyXG4gICAgICogaXMgaW4gdGhlIGV4cGFuZGVkIHN0YXRlLlxyXG4gICAgICogXHJcbiAgICAgKiBPdGhlcndpc2UgdGhlIHBhbmVsIGNvbGxhcHNlcyBhbmRcclxuICAgICAqIHRoZSBpdGVtcyBkaXNhcHBlYXIgd2l0aCBubyB0b2dnbGVcclxuICAgICAqIHRvIGJyaW5nIHRoZW0gYmFjay5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY29jb0luaXQgPSB0aGlzLmNsb3NlT25DbGlja091dHNpZGU7XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGluaXRpYWwgZXhwYW5zaW9uIHN0YXRlXHJcbiAgICAgKiBiYXNlZCBvbiB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXhwYW5kZWQgPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmV4cGFuZE9uUXVlcnkpLm1hdGNoZXM7XHJcblxyXG4gICAgaWYodGhpcy5leHBhbmRlZCkgeyAgXHJcbiAgICAgIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLypcclxuICAgICAqIFNldCB1cCB0aGUgc3RyZWFtXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXhwYW5kZWRTdWJzY3JpcHRpb24gPSBcclxuICAgICAgZnJvbUV2ZW50KHdpbmRvdyxcInJlc2l6ZVwiKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoXz0+d2luZG93Lm1hdGNoTWVkaWEodGhpcy5leHBhbmRPblF1ZXJ5KS5tYXRjaGVzKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV4cGFuZGVkPT57XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsU3RhdGUoKTtcclxuICAgICAgfSk7ICBcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYodGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbiAmJiAhdGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzdGF0ZSBvZiB0aGUgcGFuZWwgXHJcbiAgICogdG8gc2hvd2luZyBvciBoaWRpbmcgYmFzZWRcclxuICAgKiBvbiB0aGUgY2FjaGVkIGV4cGFuZGVkIG1lbWJlclxyXG4gICAqL1xyXG4gIHByaXZhdGUgdG9nZ2xlUGFuZWxTdGF0ZSgpIHtcclxuICAgIGlmKHRoaXMuZXhwYW5kZWQpIHsgIFxyXG4gICAgICB0aGlzLmNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b2dnbGUuc2hvd1BhbmVsKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5fY29jb0luaXQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlLmhpZGVQYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCQkhhbWJ1cmdlck1lbnUgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCTWVudUl0ZW1SaWdodCB9IGZyb20gJy4vbWVudS1pdGVtLXJpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QkJDb21tb25Nb2R1bGV9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgICBCQkNvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJIYW1idXJnZXJNZW51LFxyXG4gICAgQkJNZW51SXRlbVJpZ2h0LFxyXG4gIF0sXHJcbiAgXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJIYW1idXJnZXJNZW51LFxyXG4gICAgQkJNZW51SXRlbVJpZ2h0LFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCSGFtYnVyZ2VyTWVudU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJIYW1idXJnZXJNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICAgIENvbXBvbmVudCwgXHJcbiAgICBPbkluaXQsIFxyXG4gICAgSW5wdXQsIFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgVmlld0NoaWxkLCBcclxuICAgIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwICwgIGRlYm91bmNlVGltZSAsICBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQkJNdWx0aVNlbGVjdEl0ZW0gfSBmcm9tICcuL211bHRpLXNlbGVjdC1pdGVtLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGl2W2JiLW11bHRpLXNlbGVjdF0nLFxyXG4gICAgdGVtcGxhdGU6IGA8aW5wdXQgY2xhc3M9XCJzZWxlY3Rpb25zLWZpbHRlclwiICNmaWx0ZXIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJUZXh0XCIvPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWxhYmVsc1wiPlxyXG4gICAgPHNwYW4+SXRlbXM8L3NwYW4+PHNwYW4+U2VsZWN0ZWQ8L3NwYW4+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwic2VsZWN0aW9ucy1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VzXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNob2ljZSBvZiBjaG9pY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9pY2VDbGlja2VkKGNob2ljZSlcIj57e2Nob2ljZS50ZXh0fX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdGlvbnNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvblNlbGVjdGlvbkNsaWNrZWQoc2VsZWN0aW9uKVwiPnt7c2VsZWN0aW9uLnRleHR9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBzdHlsZXM6IFtgOmhvc3QgZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59aW5wdXQuc2VsZWN0aW9ucy1maWx0ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcn1kaXYuY29udGFpbmVyLWxhYmVscyxkaXYuc2VsZWN0aW9ucy1jb250YWluZXJ7d2lkdGg6aW5oZXJpdDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5zZWxlY3Rpb25zLWNvbnRhaW5lciB1bHtwYWRkaW5nLWxlZnQ6MH0uY2hvaWNlcyB1bCwuc2VsZWN0aW9ucyB1bHtsaXN0LXN0eWxlOm5vbmV9ZGl2LmNvbnRhaW5lci1sYWJlbHN7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXJUZXh0ID0gXCJTZWFyY2guLi5cIjtcclxuICAgIEBJbnB1dCgpIGZpbHRlckNoYW5nZURlbGF5bXMgPSAyMDA7XHJcblxyXG4gICAgQElucHV0KCkgc2VsZWN0aW9uSXRlbXM6IEJCTXVsdGlTZWxlY3RJdGVtW107XHJcblxyXG4gICAgZ2V0IGNob2ljZXMoKTogQkJNdWx0aVNlbGVjdEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uSXRlbXMuZmlsdGVyKGl0ZW09PnsgcmV0dXJuICFpdGVtLnNlbGVjdGVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGlvbnMoKTogQkJNdWx0aVNlbGVjdEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uSXRlbXMuZmlsdGVyKGl0ZW09PnsgcmV0dXJuIGl0ZW0uc2VsZWN0ZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXInKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxCQk11bHRpU2VsZWN0SXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBpdGVtVW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QkJNdWx0aVNlbGVjdEl0ZW0+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dhcm5pbmcgdGhpcyBjb21wb25lbnQgaXMgc3RpbGwgdW5kZXIgaGVhdnkgZGV2ZWxvcG1lbnQuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0l0IGlzblxcJ3QgY29tcGxldGVseSBmdW5jdGlvbmFsIHlldCBhbmQgaXMgc3ViamVjdCB0byBjaGFuZ2UuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6S2V5Ym9hcmRFdmVudCk9PihldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5maWx0ZXJDaGFuZ2VEZWxheW1zKSxcclxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBmaWx0ZXJUZXh0PT4gdGhpcy5maWx0ZXJJdGVtcyhmaWx0ZXJUZXh0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHRlbXAgdGVzdGluZyBjb2RlXHJcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0aW9uSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25JdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUG9zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llYXIgb2YgQmlydGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jvb2tpZSBTZWFzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0hlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnV2VpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdGb3J0eSBUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCZW5jaCBXZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ZlcnRpY2FsIEp1bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Jyb2FkIEp1bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NodXR0bGUgVGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29uZSBUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEcmFmdCBQb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29sbGVnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29sbGVnZSBEaXZpc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3VycmVudCBUZWFtJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbnMucHVzaCh0aGlzLmNob2ljZXNbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hvaWNlQ2xpY2tlZChpdGVtOiBCQk11bHRpU2VsZWN0SXRlbSkge1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3Rpb25DbGlja2VkKGl0ZW06IEJCTXVsdGlTZWxlY3RJdGVtKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbVVuc2VsZWN0ZWQuZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJJdGVtcyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCTXVsdGlTZWxlY3RDb21wb25lbnRcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJCTXVsdGlTZWxlY3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQk11bHRpU2VsZWN0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQk11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLXNsaWRlb3V0LW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzbGlkZS1jb250YWluZXJcIj5cclxuICA8ZGl2IFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCJwYW5lbFwiIFxyXG4gICAgW3RvZ2dsZU9uQ2xpY2tdPVwicGluT25DbGlja1wiXHJcbiAgICBbc2hvd09uSG92ZXJdPVwic2hvd09uTW91c2VPdmVyXCJcclxuICAgIFtjbG9zZU9uQ2xpY2tPdXRzaWRlXT1cImNsb3NlT25DbGlja091dHNpZGVcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LXRvZ2dsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGUtYW5jaG9yXCI+XHJcbiAgICAgIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiXHJcbiAgICAgICAgW3NsaWRlRGlyZWN0aW9uXT1cInNsaWRlRGlyZWN0aW9uXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS1pdGVtXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgZGl2LnNsaWRlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uc2xpZGUtY29udGFpbmVyPmRpdi5zbGlkZS1wb3NpdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MH0vZGVlcC8gLnNsaWRlLWxlZnQ+ZGl2LnNsaWRlLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnJlZH0vZGVlcC8gLnNsaWRlLWxlZnQgZGl2LnNsaWRlLXBvc2l0aW9ue2xlZnQ6MH0vZGVlcC8gLnNsaWRlLXJpZ2h0IGRpdi5zbGlkZS1wb3NpdGlvbntyaWdodDowfS5zbGlkZS1jb250YWluZXI+PmRpdi5zbGlkZS1hbmNob3J7cG9zaXRpb246cmVsYXRpdmV9L2RlZXAvIC5zbGlkZS1hbmNob3I+ZGl2LmJiLXNsaWRpbmctcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4OjF9L2RlZXAvIC5zbGlkZS1sZWZ0IGRpdi5iYi1zbGlkaW5nLXBhbmVse3JpZ2h0OjB9L2RlZXAvIC5zbGlkZS1yaWdodCBkaXYuYmItc2xpZGluZy1wYW5lbHtsZWZ0OjB9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zbGlkZS1sZWZ0XSc6XCJzbGlkZUxlZnRcIixcclxuICAgICdbY2xhc3Muc2xpZGUtcmlnaHRdJzpcIiFzbGlkZUxlZnRcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGVvdXRNZW51IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJiLXNsaWRlb3V0LW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T25Nb3VzZU92ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwaW5PbkNsaWNrID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgc2xpZGVEaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiID0gXCJyaWdodFwiO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2xpZGVMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2xpZGVEaXJlY3Rpb24gPT09IFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQlNsaWRlb3V0TWVudSB9IGZyb20gJy4vc2xpZGVvdXQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJTbGlkZW91dE1lbnVcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuXHQgIEJCU2xpZGVvdXRNZW51XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJTbGlkZW91dE1lbnVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCU2xpZGVvdXRNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJTb3J0YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgQElucHV0KCdiYnNvcnRhYmxlJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2Jib3B0aW9ucycpIG9wdGlvbnM6IGFueTtcblxuICAvLyBFdmVudCBlbWl0dGVyc1xuICBAT3V0cHV0KCkgb3JkZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJzdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJibGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZHJhZ2dlZEl0ZW06bnVtYmVyO1xuICBkcm9wVGFyZ2V0OmFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICB0aGlzLmluaXRDaGlsZHJlbigpO1xuICB9XG5cbiAgLy8gRHJvcHBlciBsaXN0ZW5lcnNcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldFsnYmJ2YWx1ZSddIHx8IG51bGwpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob2xkaW5nQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG9sZGluZ0NsYXNzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2VkSXRlbSA9ICtldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXTtcbiAgICAgIHRoaXMuYmJzdGFydC5lbWl0KHRoaXMuZHJhZ2dlZEl0ZW0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIGRyYWdlbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG9sZGluZ0NsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmhvbGRpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmJiZW5kLmVtaXQodGhpcy5kcmFnZ2VkSXRlbSk7XG4gIH1cblxuICAvLyBEcm9wem9uZSBsaXN0ZW5lcnNcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKSBkcmFnb3ZlcihldmVudDphbnkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKSBkcmFnZW50ZXIoZXZlbnQ6YW55KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXRbJ2Jic29ydGFibGUtbmFtZSddID09PSB0aGlzLm5hbWUgJiYgZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLWluZGV4J10gIT09IHRoaXMuZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3B6b25lQ2xhc3MoZXZlbnQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmJiZW50ZXIuZW1pdCgrZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLWluZGV4J10pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgZHJhZ2xlYXZlKGV2ZW50OmFueSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLW5hbWUnXSA9PT0gdGhpcy5uYW1lICYmIGV2ZW50LnRhcmdldFsnYmJzb3J0YWJsZS1pbmRleCddICE9PSB0aGlzLmRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wem9uZUNsYXNzKGV2ZW50LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYmJsZWF2ZS5lbWl0KCtldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgZHJvcChldmVudDphbnkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBkb0Ryb3A6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICBsZXQgZHJvcFRhcmdldDphbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoZHJvcFRhcmdldFsnYmJzb3J0YWJsZS1uYW1lJ10gIT09IHRoaXMubmFtZSkge1xuICAgICAgICAgIHdoaWxlIChkcm9wVGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKGRyb3BUYXJnZXQucGFyZW50Tm9kZVsnYmJzb3J0YWJsZS1uYW1lJ10gPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgZHJvcFRhcmdldCA9IGRyb3BUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgIGRvRHJvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9Ecm9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvRHJvcCkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZHJvcFRhcmdldCwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZHJhZ2dlZEl0ZW0gPSB0aGlzLmRyYWdnZWRJdGVtO1xuICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGRyb3BUYXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXTtcblxuICAgICAgICAgIGlmIChkcmFnZ2VkSXRlbSA+IG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IG5ld1Bvc2l0aW9uICYmIGkgPCBkcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJzb3J0YWJsZS1pbmRleCcsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdiYnNvcnRhYmxlLWluZGV4JywgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPiBkcmFnZ2VkSXRlbSAmJiBpIDw9IG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdiYnNvcnRhYmxlLWluZGV4JywgaSAtIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5iYmRyb3AuZW1pdCgrbmV3UG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMub3JkZXJDaGFuZ2VkLmVtaXQoeyBkcmFnZ2VkSXRlbSwgbmV3UG9zaXRpb24gfSk7XG4gICAgICB9XG4gIH1cblxuICBpbml0Q2hpbGRyZW4oKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBpKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtbmFtZScsIHRoaXMubmFtZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc3RpbmdDbGFzcykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgdGhpcy5vcHRpb25zLnJlc3RpbmdDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgdXBkYXRlRHJvcHpvbmVDbGFzcyhldmVudDphbnksIGNzc0NsYXNzOnN0cmluZywgYWRkaW5nOmJvb2xlYW4pIHtcbiAgICAgIGxldCBwYXJlbnROb2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlWydiYnNvcnRhYmxlLW5hbWUnXSA9PT0gdGhpcy5uYW1lICYmIHBhcmVudE5vZGVbJ2Jic29ydGFibGUtaW5kZXgnXSAhPT0gdGhpcy5kcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoYWRkaW5nICYmICFwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocGFyZW50Tm9kZSwgY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhwYXJlbnROb2RlLCBjc3NDbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTb3J0YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vc29ydGFibGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb3J0YWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNvcnRhYmxlRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCU29ydGFibGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCU29ydGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuIH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYlNlcnZpY2Uge1xuICBhY3RpdmVUYWI6IHN0cmluZyA9ICcnO1xuICB0YWJzZXRzID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vdGFiLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJUYWJdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoJ2JidGFiJykgdGFiTmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2JidGFic2V0JykgdGFic2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgnYmJhY3RpdmVjbGFzcycpIGFjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGJic2hvd3N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJzaG93ZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5iYnNob3dzdGFydC5lbWl0KHRoaXMudGFiTmFtZSk7XG4gICAgICAgICAgdGhpcy50YWJTZXJ2aWNlLnRhYnNldHNbdGhpcy50YWJzZXRdID0ge307XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudCkge1xuICAgICAgdGhpcy5iYnNob3dzdGFydC5lbWl0KHRoaXMudGFiTmFtZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSgpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAgIGxldCBhY3RpdmVDbGFzc0VsZW1lbnQgPSAnbm9uZSc7XG4gICAgICBsZXQgYWN0aXZlQ2xhc3NUYXJnZXQgPSAnbm9uZSc7XG5cbiAgICAgIC8vIEZpbmQgb3V0IGlmIHRoaXMgZWxlbWVudCwgdGhlIHBhcmVudCBlbGVtZW50LCBvciBjaGlsZCBlbGVtZW50cyBoYXZlIGFuIGFjdGl2ZSBjbGFzcyBzZXQuXG4gICAgICAvLyBPcmRlciBvZiBwcmVjZWRlbmNlOiBQYXJlbnQsIHRhYiwgY2hpbGQuXG4gICAgICBpZiAocGFyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2JiYWN0aXZlY2xhc3MnKSkge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzRWxlbWVudCA9ICdwYXJlbnQnO1xuICAgICAgICAgIGFjdGl2ZUNsYXNzVGFyZ2V0ID0gcGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWydiYnRhcmdldCddLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVDbGFzcykge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzRWxlbWVudCA9ICd0YWInO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQuaGFzQXR0cmlidXRlKCdiYmFjdGl2ZWNsYXNzJykpIHtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NFbGVtZW50ID0gJ2NoaWxkJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB0YWIgZWxlbWVudCBpdHNlbGYgaGFzIGl0IHNldCwgYXBwbHkgaXQuXG4gICAgICBpZiAoYWN0aXZlQ2xhc3NFbGVtZW50ID09PSAndGFiJykge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLmhhc0F0dHJpYnV0ZSgnYmJ0YWInKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sIHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUNsYXNzRWxlbWVudCA9PT0gJ2NoaWxkJykge1xuICAgICAgICAgIGxldCBjaGlsZEFjdGl2ZUNsYXNzID0gY2hpbGQuYXR0cmlidXRlcy5iYmFjdGl2ZWNsYXNzLnZhbHVlO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLmhhc0F0dHJpYnV0ZSgnYmJ0YWInKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0sIGNoaWxkQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNoaWxkLCBjaGlsZEFjdGl2ZUNsYXNzKTtcblxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVDbGFzc0VsZW1lbnQgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgbGV0IHBhcmVudEFjdGl2ZUNsYXNzID0gcGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzLmJiYWN0aXZlY2xhc3MudmFsdWU7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDbGFzc1RhcmdldCA9PT0gJ3RhYicpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2xhc3NUYXJnZXQgPT09ICdjaGlsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2JiYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzVGFyZ2V0ID09PSAndGFiJykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgcGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2xhc3NUYXJnZXQgPT09ICdjaGlsZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZXJlIGFyZSBubyBjaGlsZCBlbGVtZW50cyBhbmQgYmJhY3RpdmVDbGFzcyBpc24ndCBzZXQuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2JiYWN0aXZlJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYlNlcnZpY2UudGFic2V0c1t0aGlzLnRhYnNldF1bJ2FjdGl2ZVRhYiddID0gdGhpcy50YWJOYW1lO1xuICAgICAgdGhpcy5iYnNob3dlbmQuZW1pdCh0aGlzLnRhYk5hbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiVGFiQ29udGVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnREaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoJ2JidGFiY29udGVudCcpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdiYnRhYnNldCcpIHRhYnNldDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIHNldFZpc2liaWxpdHkoKSB7XG4gICAgICBsZXQgZGlzcGxheSA9IHRoaXMudGFiU2VydmljZS50YWJzZXRzW3RoaXMudGFic2V0XS5hY3RpdmVUYWIgPT09IHRoaXMubmFtZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCBkaXNwbGF5KTtcbn1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUYWJTZXJ2aWNlIH0gZnJvbSAnLi90YWIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFiQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYkRpcmVjdGl2ZSxcbiAgICBUYWJDb250ZW50RGlyZWN0aXZlXG4gIF0sXG4gIFxuICBleHBvcnRzOiBbXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYkNvbnRlbnREaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCQlRhYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJUYWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUYWJTZXJ2aWNlXVxuICAgIH07XG4gIH1cbiB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxNb2R1bGUgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duTWVudU1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudSc7XHJcbmltcG9ydCB7IEJCU2xpZGVvdXRNZW51TW9kdWxlIH0gZnJvbSAnLi9zbGlkZW91dC1tZW51JztcclxuaW1wb3J0IHsgQkJEcm9wZG93bklucHV0TW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi1pbnB1dCc7XHJcbmltcG9ydCB7IEJCSGFtYnVyZ2VyTWVudU1vZHVsZSB9IGZyb20gJy4vaGFtYnVyZ2VyLW1lbnUnO1xyXG5pbXBvcnQgeyBCQkNvbGxhcHNpbmdNZW51TW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzaW5nLW1lbnUnO1xyXG5pbXBvcnQgeyBCQk11bHRpU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9tdWx0aS1zZWxlY3QnO1xyXG5pbXBvcnQgeyBCQkNvbW1vbk1vZHVsZSB9IGZyb20gJy4vY29tbW9uJztcclxuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlRhYk1vZHVsZSB9IGZyb20gJy4vdGFiJztcclxuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcCc7XHJcbmltcG9ydCB7IEJCU29ydGFibGVNb2R1bGUgfSBmcm9tICcuL3NvcnRhYmxlJztcclxuXHJcbmNvbnN0IEJCX01PRFVMRVMgPSBbXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZSxcclxuICAgIEJCRHJvcGRvd25NZW51TW9kdWxlLFxyXG4gICAgQkJTbGlkZW91dE1lbnVNb2R1bGUsXHJcbiAgICBCQkRyb3Bkb3duSW5wdXRNb2R1bGUsXHJcbiAgICBCQkhhbWJ1cmdlck1lbnVNb2R1bGUsXHJcbiAgICBCQkNvbGxhcHNpbmdNZW51TW9kdWxlLFxyXG4gICAgQkJNdWx0aVNlbGVjdE1vZHVsZSxcclxuICAgIEJCQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSxcclxuICAgIEJCVGFiTW9kdWxlLFxyXG4gICAgQkJEcmFnQW5kRHJvcE1vZHVsZSxcclxuICAgIEJCU29ydGFibGVNb2R1bGUsXHJcbl07XHJcblxyXG4vKipcclxuICogVGhpcyBtb2R1bGUgb25seSBleGlzdHMgdG8gYWxsb3cgdGhlIGRlbW8gXHJcbiAqIHRvIGltcG9ydCB0aGUgZW50aXJlIGxpYnJhcnkgcXVpY2tseS4gIEl0IFxyXG4gKiBzaG91bGQgbm90IGJlIHVzZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBcclxuICogbGlicmFyeSBhbmQgaXMgbm90IGV4cG9ydGVkIGFzIHBhcnQgb2YgXHJcbiAqIHRoZSBkaXN0cmJ1dGVkIHBhY2thZ2UuXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCRHJvcGRvd25NZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCU2xpZGVvdXRNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCRHJvcGRvd25JbnB1dE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkhhbWJ1cmdlck1lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJDb2xsYXBzaW5nTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQk11bHRpU2VsZWN0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCQ29tbW9uTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJUYWJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcmFnQW5kRHJvcE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQlNvcnRhYmxlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFxyXG4gIF0sXHJcbiAgZXhwb3J0czogQkJfTU9EVUxFU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJSb290TW9kdWxlIHsgfVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBCQl9NT0RVTEVTLFxyXG4gIGV4cG9ydHM6IEJCX01PRFVMRVMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCZWFyQm9uZXNNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtuZ01vZHVsZTogQkJSb290TW9kdWxlLCBwcm92aWRlcnM6IFtdfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiSW5wdXQiLCJJbmplY3RhYmxlIiwiUmVuZGVyZXJGYWN0b3J5MiIsIkFuaW1hdGlvbkJ1aWxkZXIiLCJJbmplY3QiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJEaXJlY3RpdmUiLCJOZ01vZHVsZSIsIlZpZXdDb250YWluZXJSZWYiLCJSZW5kZXJlciIsIk5nWm9uZSIsIkhvc3RCaW5kaW5nIiwiQ29udGVudENoaWxkcmVuIiwiVmlld0NoaWxkIiwiQ29tbW9uTW9kdWxlIiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIkV2ZW50RW1pdHRlciIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJmcm9tRXZlbnQiLCJtZXJnZSIsImZpbHRlciIsIm1hcCIsIm9mIiwiZGVib3VuY2VUaW1lIiwiY29tYmluZUxhdGVzdCIsIlRlbXBsYXRlUmVmIiwiVmlld0NoaWxkcmVuIiwiUmVuZGVyZXIyIiwiSG9zdExpc3RlbmVyIiwiQmVoYXZpb3JTdWJqZWN0IiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJmb3J3YXJkUmVmIiwiUmVmbGVjdGl2ZUluamVjdG9yIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFPQSx5QkFBYSx1QkFBdUIsR0FDbEMsSUFBSUEsbUJBQWMsQ0FBd0MsZ0NBQWdDLENBQUMsQ0FBQzs7Ozs7QUFNOUYseUJBQWEsdUJBQXVCLEdBQ2xDLElBQUlBLG1CQUFjLENBQXdDLGdDQUFnQyxDQUFDOztJQ2Y3Rjs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO1NBQ3BDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRS9FLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7O0FDeEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FB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