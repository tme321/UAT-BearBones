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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     *
     */
    var BBAlternatingPanelComponent = (function () {
        function BBAlternatingPanelComponent(elRef, renderer, aBuilder, state1Animation, state2Animation) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.aBuilder = aBuilder;
            this.state1Animation = state1Animation;
            this.state2Animation = state2Animation;
            /**
             * Store the current panel state for determining
             * the next transition.
             */
            this.panelStateCache = 'init';
        }
        Object.defineProperty(BBAlternatingPanelComponent.prototype, "panelState", {
            set: /**
             * Determine the transition to make when
             * the state changes.
             *
             * If the state is transitioned back to init
             * or the transition is unrecognized then play
             * no animation and remove either state
             * css class that was applied.
             * @param {?} state
             * @return {?}
             */ function (state) {
                if (state !== this.panelStateCache) {
                    if (this.panelStateCache !== 'init') {
                        if (this.panelStateCache === 'state2' && state === 'state1') {
                            this.transitionToState1();
                        }
                        else if (this.panelStateCache === 'state1' && state === 'state2') {
                            this.transitionToState2();
                        }
                        else {
                            this.clearCSSStateClasses();
                        }
                    }
                    else {
                        if (state === 'state1') {
                            this.renderer.addClass(this.elRef.nativeElement, this.css.state1);
                        }
                        else if (state === 'state2') {
                            this.renderer.addClass(this.elRef.nativeElement, this.css.state2);
                        }
                    }
                    this.panelStateCache = state;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.buildAnimations();
                console.log("css: " + JSON.stringify(this.css));
                console.log("states: " + this.css.state1 + " & " + this.css.state2);
                this.renderer.addClass(this.elRef.nativeElement, this.css.panel);
                this.toggle('state1');
            };
        /**
         * Transition the panel to the next state.  If no
         * next state is passed in the order will be:
         *
         * init -> state1 -> state2 -> state1 -> state2...
         *
         * @param state The next state to transition to.
         */
        /**
         * Transition the panel to the next state.  If no
         * next state is passed in the order will be:
         *
         * init -> state1 -> state2 -> state1 -> state2...
         *
         * @param {?=} state The next state to transition to.
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.toggle = /**
         * Transition the panel to the next state.  If no
         * next state is passed in the order will be:
         *
         * init -> state1 -> state2 -> state1 -> state2...
         *
         * @param {?=} state The next state to transition to.
         * @return {?}
         */
            function (state) {
                console.log('toggling');
                state = state || this.panelStateCache;
                switch (state) {
                    case 'init': {
                        this.panelState = 'state1';
                        break;
                    }
                    case 'state1': {
                        this.panelState = 'state2';
                        break;
                    }
                    case 'state2': {
                        this.panelState = 'state1';
                        break;
                    }
                }
            };
        /**
         * Build the animations injected through the tokens
         * to play when transitions happen.
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.buildAnimations = /**
         * Build the animations injected through the tokens
         * to play when transitions happen.
         * @return {?}
         */
            function () {
                this.state1Player =
                    this.aBuilder.build(this.state1Animation)
                        .create(this.elRef.nativeElement);
                this.state2Player =
                    this.aBuilder.build(this.state2Animation)
                        .create(this.elRef.nativeElement);
            };
        /**
         * Transition to state 1, removing the state 2 css class
         * if it exists, play the animation, and set the state 1
         * css class.
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.transitionToState1 = /**
         * Transition to state 1, removing the state 2 css class
         * if it exists, play the animation, and set the state 1
         * css class.
         * @return {?}
         */
            function () {
                this.renderer.removeClass(this.elRef.nativeElement, this.css.state2);
                this.renderer.addClass(this.elRef.nativeElement, this.css.state1);
                if (this.state2Player) {
                    this.state2Player.reset();
                }
                this.state1Player.play();
            };
        /**
         * Transition to state 2, removing the state 1 css class
         * if it exists, play the animation, and set the state 2
         * css class.
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.transitionToState2 = /**
         * Transition to state 2, removing the state 1 css class
         * if it exists, play the animation, and set the state 2
         * css class.
         * @return {?}
         */
            function () {
                this.renderer.removeClass(this.elRef.nativeElement, this.css.state1);
                this.renderer.addClass(this.elRef.nativeElement, this.css.state2);
                if (this.state1Player) {
                    this.state1Player.reset();
                }
                this.state2Player.play();
            };
        /**
         * Clear both the state 1 and state 2 css classes if they exist.
         * @return {?}
         */
        BBAlternatingPanelComponent.prototype.clearCSSStateClasses = /**
         * Clear both the state 1 and state 2 css classes if they exist.
         * @return {?}
         */
            function () {
                this.renderer.removeClass(this.elRef.nativeElement, this.css.state1);
                this.renderer.removeClass(this.elRef.nativeElement, this.css.state2);
            };
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
                { type: core.Renderer2 },
                { type: animations.AnimationBuilder },
                { type: undefined, decorators: [{ type: core.Inject, args: [AltPanelState1Animation,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [AltPanelState2Animation,] }] }
            ];
        };
        BBAlternatingPanelComponent.propDecorators = {
            css: [{ type: core.Input }]
        };
        return BBAlternatingPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBStateCssMapperService = (function () {
        function BBStateCssMapperService(rendererFactory) {
            this.rendererFactory = rendererFactory;
        }
        /**
         * @param {?} state
         * @param {?} map
         * @return {?}
         */
        BBStateCssMapperService.prototype.getCSSClass = /**
         * @param {?} state
         * @param {?} map
         * @return {?}
         */
            function (state, map) {
                return map && map[state];
            };
        /**
         * @param {?} element
         * @param {?} map
         * @return {?}
         */
        BBStateCssMapperService.prototype.createStateCSSMapper = /**
         * @param {?} element
         * @param {?} map
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
     *
     */
    var BBAnimationStatesService = (function () {
        function BBAnimationStatesService(builder, cssMapper, rendererFactory) {
            this.builder = builder;
            this.cssMapper = cssMapper;
            this.rendererFactory = rendererFactory;
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
         *
         * @param element The element to apply the animations to.
         * @param transitions The map of state transition animations for the element.
         */
        /**
         *
         * @param {?} element The element to apply the animations to.
         * @param {?} transitions The map of state transition animations for the element.
         * @return {?}
         */
        BBAnimationStatesService.prototype.buildPlayers = /**
         *
         * @param {?} element The element to apply the animations to.
         * @param {?} transitions The map of state transition animations for the element.
         * @return {?}
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
         *
         * @param fromState
         * @param toState
         * @param players
         */
        /**
         *
         * @param {?} fromState
         * @param {?} toState
         * @param {?} players
         * @return {?}
         */
        BBAnimationStatesService.prototype.getPlayer = /**
         *
         * @param {?} fromState
         * @param {?} toState
         * @param {?} players
         * @return {?}
         */
            function (fromState, toState, players) {
                return players &&
                    players[fromState] &&
                    players[fromState][toState];
            };
        /**
         *
         * @param players
         */
        /**
         *
         * @param {?} players
         * @return {?}
         */
        BBAnimationStatesService.prototype.destroyAllPlayers = /**
         *
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
         *
         * @param element
         * @param transitions
         */
        /**
         *
         * @param {?} element
         * @param {?=} transitions
         * @return {?}
         */
        BBAnimationStatesService.prototype.createAnimationStateMachine = /**
         *
         * @param {?} element
         * @param {?=} transitions
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
                { type: animations.AnimationBuilder },
                { type: BBStateCssMapperService },
                { type: core.RendererFactory2 }
            ];
        };
        return BBAnimationStatesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBAlternatingPanelDirective = (function () {
        function BBAlternatingPanelDirective(elRef, renderer, bbBuilder, cssMapperService) {
            this.elRef = elRef;
            this.renderer = renderer;
            this.bbBuilder = bbBuilder;
            this.cssMapperService = cssMapperService;
        }
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "css", {
            /**
             * Defintes the css classes the panel will use.
             */
            set: /**
             * Defintes the css classes the panel will use.
             * @param {?} map
             * @return {?}
             */ function (map) {
                if (this.mapCache != map) {
                    this.mapCache = map;
                    if (this.cssMapper) {
                        this.cssMapper.removeAll();
                        this.cssMapper.destroy();
                    }
                    this.cssMapper = this.cssMapperService.createStateCSSMapper(this.elRef.nativeElement, this.mapCache);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "state", {
            set: /**
             * @param {?} toState
             * @return {?}
             */ function (toState) {
                if (this.stateCache != toState) {
                    this.stateCache = toState;
                    if (this.animationsStateMachine) {
                        this.animationsStateMachine.next(this.stateCache, this.cssMapper);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BBAlternatingPanelDirective.prototype, "transitions", {
            set: /**
             * @param {?} transitions
             * @return {?}
             */ function (transitions) {
                if (this.transitionsCache != transitions) {
                    this.transitionsCache = transitions;
                    if (this.animationsStateMachine) {
                        if (this.cssMapper) {
                            this.cssMapper.removeAll();
                        }
                        this.animationsStateMachine.destroy();
                    }
                    this.animationsStateMachine =
                        this.bbBuilder
                            .createAnimationStateMachine(this.elRef.nativeElement, this.transitionsCache);
                }
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
                if (this.animationsStateMachine) {
                    this.animationsStateMachine.init(this.stateCache, this.cssMapper);
                }
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
                { type: core.Renderer2 },
                { type: BBAnimationStatesService },
                { type: BBStateCssMapperService }
            ];
        };
        BBAlternatingPanelDirective.propDecorators = {
            css: [{ type: core.Input }],
            state: [{ type: core.Input }],
            transitions: [{ type: core.Input }]
        };
        return BBAlternatingPanelDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BBAnimationStatesModule = (function () {
        function BBAnimationStatesModule() {
        }
        /**
         * @return {?}
         */
        BBAnimationStatesModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BBAnimationStatesModule,
                    providers: [BBAnimationStatesService, BBStateCssMapperService]
                };
            };
        BBAnimationStatesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [],
                        providers: []
                    },] },
        ];
        return BBAnimationStatesModule;
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
                        imports: [
                            common.CommonModule,
                            BBAnimationStatesModule.forRoot(),
                        ],
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
    exports.BBSlidingPanelModule = BBSlidingPanelModule;
    exports.BBSlidingPanel = BBSlidingPanel;
    exports.BBSlidingPanelToggle = BBSlidingPanelToggle;
    exports.BBDropdownMenuModule = BBDropdownMenuModule;
    exports.BBDropdownMenu = BBDropdownMenu;
    exports.BBSlideoutMenuModule = BBSlideoutMenuModule;
    exports.BBSlideoutMenu = BBSlideoutMenu;
    exports.BBDropdownInputModule = BBDropdownInputModule;
    exports.BBDropdownInputServiceToken = BBDropdownInputServiceToken;
    exports.BBDropdownInput = BBDropdownInput;
    exports.BBHamburgerMenuModule = BBHamburgerMenuModule;
    exports.BBHamburgerMenu = BBHamburgerMenu;
    exports.BBCollapsingMenuModule = BBCollapsingMenuModule;
    exports.BBCollapsingMenu = BBCollapsingMenu;
    exports.BBMultiSelectComponent = BBMultiSelectComponent;
    exports.BBMultiSelectModule = BBMultiSelectModule;
    exports.BBCommonModule = BBCommonModule;
    exports.BBMenuItem = BBMenuItem;
    exports.closeSubscription = closeSubscription;
    exports.BBDragAndDropContainerComponent = BBDragAndDropContainerComponent;
    exports.BBDraggableDirective = BBDraggableDirective;
    exports.DraggableContext = DraggableContext;
    exports.BBDragAndDropComponentModule = BBDragAndDropComponentModule;
    exports.TabService = TabService;
    exports.BBTabModule = BBTabModule;
    exports.DragAndDropService = DragAndDropService;
    exports.BBDragAndDropModule = BBDragAndDropModule;
    exports.BBSortableModule = BBSortableModule;
    exports.BBStateCssMapperService = BBStateCssMapperService;
    exports.BBAnimationStatesService = BBAnimationStatesService;
    exports.BBRootModule = BBRootModule;
    exports.BearBonesModule = BearBonesModule;
    exports.ɵa = BBAnimationStatesModule;
    exports.ɵj = BBDragAndDropService;
    exports.ɵn = DropZoneDirective;
    exports.ɵm = DropperDirective;
    exports.ɵg = BBDropdownInputDirective;
    exports.ɵh = BBDropdownInputItemsList;
    exports.ɵf = BBDynamicComponentDirective;
    exports.ɵe = BBDynamicComponentModule;
    exports.ɵi = BBMenuItemRight;
    exports.ɵc = horizontalSlideAnimations;
    exports.ɵb = verticalSlideAnimations;
    exports.ɵd = SlideAnimationDirections;
    exports.ɵo = SortableDirective;
    exports.ɵl = TabContentDirective;
    exports.ɵk = TabDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWF0LWJlYXJib25lcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbHRlcm5hdGluZy1wYW5lbC9hbHRlcm5hdGluZy1wYW5lbC50b2tlbnMudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbHRlcm5hdGluZy1wYW5lbC9hbHRlcm5hdGluZy1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbmltYXRpb24tc3RhdGVzL3N0YXRlLWNzcy1tYXBwZXIvc3RhdGUtY3NzLW1hcHBlci5zZXJ2aWNlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGVzLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbHRlcm5hdGluZy1wYW5lbC9hbHRlcm5hdGluZy1wYW5lbC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9hbmltYXRpb24tc3RhdGVzL2FuaW1hdGlvbi1zdGF0ZXMubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvYWx0ZXJuYXRpbmctcGFuZWwvYWx0ZXJuYXRpbmctcGFuZWwubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmVudW1zLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmFuaW1hdGlvbnMudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGluZy1wYW5lbC90b2dnbGUvc2xpZGluZy1wYW5lbC10b2dnbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGVvdXQtbWVudS9zbGlkZW91dC1tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRlb3V0LW1lbnUvc2xpZGVvdXQtbWVudS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9kcm9wZG93bi1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcm9wZG93bi1pbnB1dC9pdGVtLWxpc3QvZHJvcGRvd24taW5wdXQtaXRlbS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbW1vbi9tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvaGFtYnVyZ2VyLW1lbnUvbWVudS1pdGVtLXJpZ2h0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2hhbWJ1cmdlci1tZW51L2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbW1vbi9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29sbGFwc2luZy1tZW51L2NvbGxhcHNpbmctbWVudS5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb2xsYXBzaW5nLW1lbnUvY29sbGFwc2luZy1tZW51Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb21tb24vY2xvc2Utc3Vic2NyaXB0aW9uLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC1jb21wb25lbnQvZG5kLmNvbnN0LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC1jb21wb25lbnQvZHJhZy1hbmQtZHJvcC5zZXJ2aWNlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC1jb21wb25lbnQvZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9kcmFnLWFuZC1kcm9wLWNvbnRhaW5lci9kcmFnLWFuZC1kcm9wLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9kcmFnLWFuZC1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3RhYi90YWIuc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3RhYi90YWIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvdGFiL3RhYi1jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3RhYi90YWIubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wL2Ryb3BwZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJhZy1hbmQtZHJvcC9kcmFnLWFuZC1kcm9wLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NvcnRhYmxlL3NvcnRhYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NvcnRhYmxlL3NvcnRhYmxlLm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2JlYXItYm9uZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uTWV0YWRhdGEgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIHRoZSBhbmltYXRpb24gdG8gcGxheSB3aGVuIHRoZSBwYW5lbCB0cmFuc2l0aW9ucyBcclxuICogZnJvbSBzdGF0ZSAyIHRvIHN0YXRlIDEuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWx0UGFuZWxTdGF0ZTFBbmltYXRpb24gPSBcclxuICBuZXcgSW5qZWN0aW9uVG9rZW48QW5pbWF0aW9uTWV0YWRhdGF8QW5pbWF0aW9uTWV0YWRhdGFbXT4oJ0JCX0FMVF9QQU5FTF9TVEFURV8xX0FOSU1BVElPTicpO1xyXG5cclxuICAvKipcclxuICAgKiBQcm92aWRlcyB0aGUgYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiB0aGUgcGFuZWwgdHJhbnNpdGlvbnMgXHJcbiAgICogZnJvbSBzdGF0ZSAxIHRvIHN0YXRlIDIuXHJcbiAgICovXHJcbmV4cG9ydCBjb25zdCBBbHRQYW5lbFN0YXRlMkFuaW1hdGlvbiA9IFxyXG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxBbmltYXRpb25NZXRhZGF0YXxBbmltYXRpb25NZXRhZGF0YVtdPignQkJfQUxUX1BBTkVMX1NUQVRFXzJfQU5JTUFUSU9OJyk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIEFuaW1hdGlvbk1ldGFkYXRhLCBBbmltYXRpb25QbGF5ZXIsIEFuaW1hdGlvbkV2ZW50LCBhbmltYXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQWx0ZXJuYXRpbmdQYW5lbENTU0NsYXNzZXMgfSBmcm9tICcuL2FsdGVybmF0aW5nLXBhbmVsLmNzcy1tb2RlbCc7XG5pbXBvcnQgeyBBbHRQYW5lbFN0YXRlMUFuaW1hdGlvbiwgQWx0UGFuZWxTdGF0ZTJBbmltYXRpb24gfSBmcm9tICcuL2FsdGVybmF0aW5nLXBhbmVsLnRva2Vucyc7XG5cbi8qKlxuICogXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tiYi1hbHQtcGFuZWxdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVzOiBbYGBdLFxuICBhbmltYXRpb25zOiBbXSxcbiAgZXhwb3J0QXM6ICdiYkFsdFBhbmVsJyxcbn0pXG5leHBvcnQgY2xhc3MgQkJBbHRlcm5hdGluZ1BhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipcbiAgICogRGVmaW50ZXMgdGhlIGNzcyBjbGFzc2VzIHRoZSBwYW5lbCB3aWxsIHVzZS5cbiAgICovXG4gIEBJbnB1dCgpIGNzczogQWx0ZXJuYXRpbmdQYW5lbENTU0NsYXNzZXM7XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGFuaW1hdGlvbiB0byBwbGF5IHdoZW5cbiAgICogdHJhbnNpdGlvbmluZyBmcm9tIHN0YXRlIDIgdG8gc3RhdGUgMS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGUxUGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGFuaW1hdGlvbiB0byBwbGF5IHdoZW5cbiAgICogdHJhbnNpdGlvbmluZyBmcm9tIHN0YXRlIDEgdG8gc3RhdGUgMi5cbiAgICovXG4gIHByaXZhdGUgc3RhdGUyUGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XG5cbiAgLyoqXG4gICAqIFN0b3JlIHRoZSBjdXJyZW50IHBhbmVsIHN0YXRlIGZvciBkZXRlcm1pbmluZyBcbiAgICogdGhlIG5leHQgdHJhbnNpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgcGFuZWxTdGF0ZUNhY2hlICA9ICdpbml0JztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSB0cmFuc2l0aW9uIHRvIG1ha2Ugd2hlblxuICAgKiB0aGUgc3RhdGUgY2hhbmdlcy5cbiAgICogXG4gICAqIElmIHRoZSBzdGF0ZSBpcyB0cmFuc2l0aW9uZWQgYmFjayB0byBpbml0XG4gICAqIG9yIHRoZSB0cmFuc2l0aW9uIGlzIHVucmVjb2duaXplZCB0aGVuIHBsYXkgXG4gICAqIG5vIGFuaW1hdGlvbiBhbmQgcmVtb3ZlIGVpdGhlciBzdGF0ZVxuICAgKiBjc3MgY2xhc3MgdGhhdCB3YXMgYXBwbGllZC4gXG4gICAqL1xuICBwcml2YXRlIHNldCBwYW5lbFN0YXRlKHN0YXRlOiAnaW5pdCcgfCAnc3RhdGUxJyB8ICdzdGF0ZTInKSB7XG4gICAgaWYoc3RhdGUgIT09IHRoaXMucGFuZWxTdGF0ZUNhY2hlKSB7XG4gICAgICBpZih0aGlzLnBhbmVsU3RhdGVDYWNoZSAhPT0gJ2luaXQnKSB7XG4gICAgICAgIGlmKHRoaXMucGFuZWxTdGF0ZUNhY2hlID09PSAnc3RhdGUyJyAmJiBzdGF0ZSA9PT0gJ3N0YXRlMScpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Ub1N0YXRlMSgpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgZWxzZSBpZih0aGlzLnBhbmVsU3RhdGVDYWNoZSA9PT0gJ3N0YXRlMScgJiYgc3RhdGUgPT09ICdzdGF0ZTInKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2l0aW9uVG9TdGF0ZTIoKTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhckNTU1N0YXRlQ2xhc3NlcygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKHN0YXRlID09PSAnc3RhdGUxJykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LHRoaXMuY3NzLnN0YXRlMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzdGF0ZSA9PT0gJ3N0YXRlMicpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCx0aGlzLmNzcy5zdGF0ZTIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnBhbmVsU3RhdGVDYWNoZSA9IHN0YXRlO1xuICAgIH1cbiAgICBcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGFCdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLFxuICAgIEBJbmplY3QoQWx0UGFuZWxTdGF0ZTFBbmltYXRpb24pXG4gICAgcHJpdmF0ZSBzdGF0ZTFBbmltYXRpb246IEFuaW1hdGlvbk1ldGFkYXRhIHwgQW5pbWF0aW9uTWV0YWRhdGFbXSxcbiAgICBASW5qZWN0KEFsdFBhbmVsU3RhdGUyQW5pbWF0aW9uKVxuICAgIHByaXZhdGUgc3RhdGUyQW5pbWF0aW9uOiBBbmltYXRpb25NZXRhZGF0YSB8IEFuaW1hdGlvbk1ldGFkYXRhW10sXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5idWlsZEFuaW1hdGlvbnMoKTtcblxuICAgIGNvbnNvbGUubG9nKGBjc3M6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5jc3MpfWApO1xuXG4gICAgY29uc29sZS5sb2coYHN0YXRlczogJHt0aGlzLmNzcy5zdGF0ZTF9ICYgJHt0aGlzLmNzcy5zdGF0ZTJ9YCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCx0aGlzLmNzcy5wYW5lbCk7XG5cbiAgICB0aGlzLnRvZ2dsZSgnc3RhdGUxJyk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNpdGlvbiB0aGUgcGFuZWwgdG8gdGhlIG5leHQgc3RhdGUuICBJZiBub1xuICAgKiBuZXh0IHN0YXRlIGlzIHBhc3NlZCBpbiB0aGUgb3JkZXIgd2lsbCBiZTpcbiAgICogXG4gICAqIGluaXQgLT4gc3RhdGUxIC0+IHN0YXRlMiAtPiBzdGF0ZTEgLT4gc3RhdGUyLi4uXG4gICAqIFxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIG5leHQgc3RhdGUgdG8gdHJhbnNpdGlvbiB0by5cbiAgICovXG4gIHRvZ2dsZShzdGF0ZT86IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGluZycpO1xuICAgIHN0YXRlID0gc3RhdGUgfHwgdGhpcy5wYW5lbFN0YXRlQ2FjaGU7XG4gICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICBjYXNlICdpbml0Jzoge1xuICAgICAgICB0aGlzLnBhbmVsU3RhdGUgPSAnc3RhdGUxJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdzdGF0ZTEnOiB7XG4gICAgICAgIHRoaXMucGFuZWxTdGF0ZSA9ICdzdGF0ZTInO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N0YXRlMic6IHtcbiAgICAgICAgdGhpcy5wYW5lbFN0YXRlID0gJ3N0YXRlMSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgYW5pbWF0aW9ucyBpbmplY3RlZCB0aHJvdWdoIHRoZSB0b2tlbnMgXG4gICAqIHRvIHBsYXkgd2hlbiB0cmFuc2l0aW9ucyBoYXBwZW4uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnN0YXRlMVBsYXllciA9IFxuICAgICAgdGhpcy5hQnVpbGRlci5idWlsZCh0aGlzLnN0YXRlMUFuaW1hdGlvbilcbiAgICAgICAgLmNyZWF0ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgdGhpcy5zdGF0ZTJQbGF5ZXIgPSBcbiAgICAgIHRoaXMuYUJ1aWxkZXIuYnVpbGQodGhpcy5zdGF0ZTJBbmltYXRpb24pXG4gICAgICAgIC5jcmVhdGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIHRvIHN0YXRlIDEsIHJlbW92aW5nIHRoZSBzdGF0ZSAyIGNzcyBjbGFzcyAgXG4gICAqIGlmIGl0IGV4aXN0cywgcGxheSB0aGUgYW5pbWF0aW9uLCBhbmQgc2V0IHRoZSBzdGF0ZSAxIFxuICAgKiBjc3MgY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHRyYW5zaXRpb25Ub1N0YXRlMSgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCx0aGlzLmNzcy5zdGF0ZTIpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LHRoaXMuY3NzLnN0YXRlMSk7XG4gICAgaWYodGhpcy5zdGF0ZTJQbGF5ZXIpIHsgdGhpcy5zdGF0ZTJQbGF5ZXIucmVzZXQoKTsgfVxuICAgIHRoaXMuc3RhdGUxUGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2l0aW9uIHRvIHN0YXRlIDIsIHJlbW92aW5nIHRoZSBzdGF0ZSAxIGNzcyBjbGFzcyAgXG4gICAqIGlmIGl0IGV4aXN0cywgcGxheSB0aGUgYW5pbWF0aW9uLCBhbmQgc2V0IHRoZSBzdGF0ZSAyIFxuICAgKiBjc3MgY2xhc3MuXG4gICAqL1xuICBwcml2YXRlIHRyYW5zaXRpb25Ub1N0YXRlMigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCx0aGlzLmNzcy5zdGF0ZTEpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LHRoaXMuY3NzLnN0YXRlMik7XG4gICAgaWYodGhpcy5zdGF0ZTFQbGF5ZXIpIHsgdGhpcy5zdGF0ZTFQbGF5ZXIucmVzZXQoKTsgfVxuICAgIHRoaXMuc3RhdGUyUGxheWVyLnBsYXkoKTsgICAgICBcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBib3RoIHRoZSBzdGF0ZSAxIGFuZCBzdGF0ZSAyIGNzcyBjbGFzc2VzIGlmIHRoZXkgZXhpc3QuXG4gICAqL1xuICBwcml2YXRlIGNsZWFyQ1NTU3RhdGVDbGFzc2VzKCkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LHRoaXMuY3NzLnN0YXRlMSk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsdGhpcy5jc3Muc3RhdGUyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJTdGF0ZUNTU01hcCB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcHBlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZSB7XG5cbiAgZ2V0Q1NTQ2xhc3Moc3RhdGU6c3RyaW5nLCBtYXA6IEJCU3RhdGVDU1NNYXApIHtcbiAgICByZXR1cm4gbWFwICYmIG1hcFtzdGF0ZV07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICB9XG5cbiAgY3JlYXRlU3RhdGVDU1NNYXBwZXIoZWxlbWVudDogYW55LCBtYXA6IEJCU3RhdGVDU1NNYXApIHtcbiAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihlbGVtZW50LG51bGwpO1xuXG4gICAgcmV0dXJuIDxCQlN0YXRlQ1NTTWFwcGVyPntcbiAgICAgIHJlbW92ZTogKHN0YXRlOnN0cmluZyk9PiB7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsdGhpcy5nZXRDU1NDbGFzcyhzdGF0ZSxtYXApKTtcbiAgICAgIH0sXG4gICAgICBhZGQ6IChzdGF0ZTpzdHJpbmcpPT4ge1xuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LHRoaXMuZ2V0Q1NTQ2xhc3Moc3RhdGUsbWFwKSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQWxsOiAoKT0+IHtcbiAgICAgICAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGVudHJ5PT5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBtYXBbZW50cnldKSk7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogKCk9PiB7XG4gICAgICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgcmVuZGVyZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJCU3RhdGVDU1NNYXBwZXIge1xuICByZW1vdmU6IChzdGF0ZTpzdHJpbmcpPT52b2lkO1xuICByZW1vdmVBbGw6ICgpPT52b2lkO1xuICBhZGQ6IChzdGF0ZTpzdHJpbmcpPT4gdm9pZDtcbiAgZGVzdHJveTogKCk9PiB2b2lkO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uUGxheWVyLCBBbmltYXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCQkFuaW1hdGlvblRyYW5zaXRpb25zIH0gZnJvbSAnLi9hbmltYXRpb24tdHJhbnNpdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25QbGF5ZXJzIH0gZnJvbSAnLi9hbmltYXRpb24tcGxheWVycy5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZSB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcHBlci9zdGF0ZS1jc3MtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZU1hY2hpbmUgfSBmcm9tICcuL2FuaW1hdGlvbi1zdGF0ZS1tYWNoaW5lLm1vZGVsJztcbmltcG9ydCB7IEJCU3RhdGVDU1NNYXBwZXIgfSBmcm9tICcuL3N0YXRlLWNzcy1tYXBwZXIvc3RhdGUtY3NzLW1hcHBlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJCQW5pbWF0aW9uU3RhdGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcbiAgICBwcml2YXRlIGNzc01hcHBlcjogQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICkge31cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGFwcGx5IHRoZSBhbmltYXRpb25zIHRvLlxuICAgKiBAcGFyYW0gdHJhbnNpdGlvbnMgVGhlIG1hcCBvZiBzdGF0ZSB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgYnVpbGRQbGF5ZXJzKFxuICAgIGVsZW1lbnQ6IGFueSwgXG4gICAgdHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMpIHtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0cmFuc2l0aW9ucykucmVkdWNlPEJCQW5pbWF0aW9uUGxheWVycz4oXG4gICAgICAocGxheWVycyxmcm9tU3RhdGUpPT57XG4gICAgICAgIHBsYXllcnNbZnJvbVN0YXRlXSA9IE9iamVjdC5rZXlzKHRyYW5zaXRpb25zW2Zyb21TdGF0ZV0pXG4gICAgICAgICAgLnJlZHVjZTx7W3RvU3RhdGU6c3RyaW5nXTogQW5pbWF0aW9uUGxheWVyfT4oXG4gICAgICAgICAgICAocHJldix0b1N0YXRlKT0+e1xuICAgICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmJ1aWxkZXJcbiAgICAgICAgICAgICAgICAuYnVpbGQodHJhbnNpdGlvbnNbZnJvbVN0YXRlXVt0b1N0YXRlXSlcbiAgICAgICAgICAgICAgICAuY3JlYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICBwcmV2W3RvU3RhdGVdID0gcGxheWVyOyBcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LHt9KTtcbiAgICAgIHJldHVybiBwbGF5ZXJzO1xuICAgIH0se30pO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCA9IChcbiAgICBzdGF0ZTogc3RyaW5nLCBcbiAgICBtYXBwZXI6IEJCU3RhdGVDU1NNYXBwZXIgPSBudWxsKSA9PiAoKSA9PiB7XG4gICAgICBpZihtYXBwZXIpIHtcbiAgICAgICAgbWFwcGVyLnJlbW92ZShzdGF0ZSk7XG4gICAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUgPSAoXG4gICAgc3RhdGU6IHN0cmluZywgXG4gICAgbWFwcGVyOiBCQlN0YXRlQ1NTTWFwcGVyID0gbnVsbCkgPT4gKCkgPT4ge1xuICAgICAgaWYobWFwcGVyKSB7XG4gICAgICAgIG1hcHBlci5hZGQoc3RhdGUpO1xuICAgICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZnJvbVN0YXRlIFxuICAgKiBAcGFyYW0gdG9TdGF0ZSBcbiAgICogQHBhcmFtIHBsYXllcnMgXG4gICAqL1xuICBnZXRQbGF5ZXIoXG4gICAgZnJvbVN0YXRlOiBzdHJpbmcsIFxuICAgIHRvU3RhdGU6IHN0cmluZywgXG4gICAgcGxheWVyczogQkJBbmltYXRpb25QbGF5ZXJzKSB7XG4gICAgICByZXR1cm4gcGxheWVycyAmJiBcbiAgICAgICAgcGxheWVyc1tmcm9tU3RhdGVdICYmIFxuICAgICAgICBwbGF5ZXJzW2Zyb21TdGF0ZV1bdG9TdGF0ZV07XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwbGF5ZXJzIFxuICAgKi9cbiAgZGVzdHJveUFsbFBsYXllcnMocGxheWVyczogQkJBbmltYXRpb25QbGF5ZXJzKSB7XG4gICAgaWYocGxheWVycykge1xuICAgICAgT2JqZWN0LmtleXMocGxheWVycykuZm9yRWFjaChmcm9tU3RhdGU9PntcbiAgICAgICAgT2JqZWN0LmtleXMocGxheWVyc1tmcm9tU3RhdGVdKS5mb3JFYWNoKHRvU3RhdGU9PntcbiAgICAgICAgICBwbGF5ZXJzW2Zyb21TdGF0ZV1bdG9TdGF0ZV0uZGVzdHJveSgpO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZWxlbWVudCBcbiAgICogQHBhcmFtIHRyYW5zaXRpb25zIFxuICAgKi9cbiAgY3JlYXRlQW5pbWF0aW9uU3RhdGVNYWNoaW5lKFxuICAgIGVsZW1lbnQ6IGFueSwgXG4gICAgdHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMgPSB7fSkge1xuXG4gICAgbGV0IHBsYXllcnMgPSB0aGlzLmJ1aWxkUGxheWVycyhlbGVtZW50LCB0cmFuc2l0aW9ucyk7XG4gICAgbGV0IGN1cnJlbnRTdGF0ZTogc3RyaW5nID0gJyc7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcblxuICAgIHJldHVybiA8QkJBbmltYXRpb25TdGF0ZU1hY2hpbmU+IHtcbiAgICAgICAgaW5pdDogKHN0YXRlOnN0cmluZywgbWFwcGVyOiBCQlN0YXRlQ1NTTWFwcGVyID0gbnVsbCk9PiB7IFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAgICAgaWYobWFwcGVyKSB7XG4gICAgICAgICAgICBtYXBwZXIuYWRkKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQ6IChuZXh0U3RhdGU6IHN0cmluZywgbWFwcGVyOiBCQlN0YXRlQ1NTTWFwcGVyID0gbnVsbCkgPT4ge1xuICAgICAgICAgIGlmKGN1cnJlbnRTdGF0ZSAhPT0gbmV4dFN0YXRlKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYXllciA9IHRoaXMuZ2V0UGxheWVyKGN1cnJlbnRTdGF0ZSwgbmV4dFN0YXRlLHBsYXllcnMpO1xuXG4gICAgICAgICAgICBpZihjdXJyZW50UGxheWVyKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIucmVzZXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYobmV3UGxheWVyKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBuZXdQbGF5ZXI7XG5cbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICogUmVzZXRpbmcgdGhlIHBsYXllciBjbGVhcnMgdGhlIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgKiBzbyByZXJlZ2lzdGVyIHRoZW0gZWFjaCB0aW1lIGJlZm9yZSBwbGF5aW5nLlxuICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgY3VycmVudFBsYXllci5vblN0YXJ0KFxuICAgICAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25TdGFydChjdXJyZW50U3RhdGUsbWFwcGVyKSk7XG4gICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIub25Eb25lKFxuICAgICAgICAgICAgICAgIHRoaXMub25BbmltYXRpb25Eb25lKG5leHRTdGF0ZSxtYXBwZXIpKTtcblxuICAgICAgICAgICAgICBjdXJyZW50UGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogSW4gY2FzZSBhbiBhbmltYXRpb24gaXNuJ3QgZGVmaW5lZCBmb3JcbiAgICAgICAgICAgICAqIHRoZSB0cmFuc2l0aW9uIGJ1dCBhIGNzcyBjbGFzcyBpcyBoYW5kbGVcbiAgICAgICAgICAgICAqIHRoYXQgYnkgZXhwbGljaXRseSBzd2FwcGluZyBvdXQgIHRoZSBjc3MgXG4gICAgICAgICAgICAgKiBjbGFzc2VzIHdoZW4gdGhlIHRyYW5zaXRpb24gcGxheWVyIGRvZXNuJ3QgXG4gICAgICAgICAgICAgKiBleGlzdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGlmKG1hcHBlcikge1xuICAgICAgICAgICAgICAgIG1hcHBlci5yZW1vdmUoY3VycmVudFN0YXRlKTtcbiAgICAgICAgICAgICAgICBtYXBwZXIuYWRkKG5leHRTdGF0ZSk7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveTogKCk9PiB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95QWxsUGxheWVycyhwbGF5ZXJzKTtcbiAgICAgICAgICBjdXJyZW50UGxheWVyID0gbnVsbDtcbiAgICAgICAgICBjdXJyZW50U3RhdGUgPSBudWxsO1xuICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBudWxsO1xuICAgICAgICAgIHBsYXllcnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSBcblxuICB9XG59XG5cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25UcmFuc2l0aW9ucyB9IGZyb20gJy4uL2FuaW1hdGlvbi1zdGF0ZXMvYW5pbWF0aW9uLXRyYW5zaXRpb25zLm1vZGVsJztcbmltcG9ydCB7IEJCQW5pbWF0aW9uU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXN0YXRlcy9hbmltYXRpb24tc3RhdGUtbWFjaGluZS5tb2RlbCc7XG5pbXBvcnQgeyBCQlN0YXRlQ1NTTWFwIH0gZnJvbSAnLi4vYW5pbWF0aW9uLXN0YXRlcy9zdGF0ZS1jc3MtbWFwcGVyL3N0YXRlLWNzcy1tYXBwZXIubW9kZWwnO1xuaW1wb3J0IHsgQkJTdGF0ZUNzc01hcHBlclNlcnZpY2UsIEJCU3RhdGVDU1NNYXBwZXIgfSBmcm9tICcuLi9hbmltYXRpb24tc3RhdGVzL3N0YXRlLWNzcy1tYXBwZXIvc3RhdGUtY3NzLW1hcHBlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiQWx0ZXJuYXRpbmdQYW5lbF0nXG59KVxuZXhwb3J0IGNsYXNzIEJCQWx0ZXJuYXRpbmdQYW5lbERpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBhbmltYXRpb25zU3RhdGVNYWNoaW5lOiBCQkFuaW1hdGlvblN0YXRlTWFjaGluZTtcbiAgcHJpdmF0ZSBjc3NNYXBwZXI6IEJCU3RhdGVDU1NNYXBwZXI7XG5cbiAgcHJpdmF0ZSBzdGF0ZUNhY2hlOiBzdHJpbmc7XG4gIHByaXZhdGUgbWFwQ2FjaGU6IEJCU3RhdGVDU1NNYXA7XG4gIHByaXZhdGUgdHJhbnNpdGlvbnNDYWNoZTogQkJBbmltYXRpb25UcmFuc2l0aW9ucztcbiAgLyoqXG4gICAqIERlZmludGVzIHRoZSBjc3MgY2xhc3NlcyB0aGUgcGFuZWwgd2lsbCB1c2UuXG4gICAqL1xuICBASW5wdXQoKSBzZXQgY3NzIChtYXA6IEJCU3RhdGVDU1NNYXApIHtcbiAgICBpZih0aGlzLm1hcENhY2hlICE9IG1hcCkge1xuICAgICAgdGhpcy5tYXBDYWNoZSA9IG1hcDtcblxuICAgICAgaWYodGhpcy5jc3NNYXBwZXIpIHtcbiAgICAgICAgdGhpcy5jc3NNYXBwZXIucmVtb3ZlQWxsKCk7XG4gICAgICAgIHRoaXMuY3NzTWFwcGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jc3NNYXBwZXIgPSB0aGlzLmNzc01hcHBlclNlcnZpY2UuY3JlYXRlU3RhdGVDU1NNYXBwZXIoXG4gICAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5tYXBDYWNoZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IHN0YXRlKHRvU3RhdGU6c3RyaW5nKSB7XG4gICAgaWYodGhpcy5zdGF0ZUNhY2hlICE9IHRvU3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGVDYWNoZSA9IHRvU3RhdGU7XG5cbiAgICAgIGlmKHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZSkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUubmV4dCh0aGlzLnN0YXRlQ2FjaGUsIHRoaXMuY3NzTWFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBzZXQgdHJhbnNpdGlvbnModHJhbnNpdGlvbnM6IEJCQW5pbWF0aW9uVHJhbnNpdGlvbnMpIHtcbiAgICBpZih0aGlzLnRyYW5zaXRpb25zQ2FjaGUgIT0gdHJhbnNpdGlvbnMpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbnNDYWNoZSA9IHRyYW5zaXRpb25zO1xuXG4gICAgICBpZih0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUpIHtcblxuICAgICAgICBpZih0aGlzLmNzc01hcHBlcikge1xuICAgICAgICAgIHRoaXMuY3NzTWFwcGVyLnJlbW92ZUFsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zU3RhdGVNYWNoaW5lLmRlc3Ryb3koKTtcbiAgICAgIH0gICAgXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uc1N0YXRlTWFjaGluZSA9IFxuICAgICAgICB0aGlzLmJiQnVpbGRlclxuICAgICAgICAgIC5jcmVhdGVBbmltYXRpb25TdGF0ZU1hY2hpbmUoXG4gICAgICAgICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25zQ2FjaGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgYmJCdWlsZGVyOiBCQkFuaW1hdGlvblN0YXRlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjc3NNYXBwZXJTZXJ2aWNlOiBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkgeyAgXG4gICAgaWYodGhpcy5hbmltYXRpb25zU3RhdGVNYWNoaW5lKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbnNTdGF0ZU1hY2hpbmUuaW5pdCh0aGlzLnN0YXRlQ2FjaGUsdGhpcy5jc3NNYXBwZXIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCQkFuaW1hdGlvblN0YXRlc1NlcnZpY2UgfSBmcm9tICcuL2FuaW1hdGlvbi1zdGF0ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZSB9IGZyb20gJy4vc3RhdGUtY3NzLW1hcHBlci9zdGF0ZS1jc3MtbWFwcGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgQkJBbmltYXRpb25TdGF0ZXNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCQW5pbWF0aW9uU3RhdGVzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbQkJBbmltYXRpb25TdGF0ZXNTZXJ2aWNlLCBCQlN0YXRlQ3NzTWFwcGVyU2VydmljZV1cbiAgICB9O1xuICB9ICBcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkJBbHRlcm5hdGluZ1BhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hbHRlcm5hdGluZy1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQkJBbHRlcm5hdGluZ1BhbmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9hbHRlcm5hdGluZy1wYW5lbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQkJBbmltYXRpb25TdGF0ZXNNb2R1bGUgfSBmcm9tICcuLi9hbmltYXRpb24tc3RhdGVzL2FuaW1hdGlvbi1zdGF0ZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCQkFuaW1hdGlvblN0YXRlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQkFsdGVybmF0aW5nUGFuZWxDb21wb25lbnQsXG4gICAgQkJBbHRlcm5hdGluZ1BhbmVsRGlyZWN0aXZlLCBcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgQkJBbHRlcm5hdGluZ1BhbmVsQ29tcG9uZW50LFxuICAgIEJCQWx0ZXJuYXRpbmdQYW5lbERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCQWx0ZXJuYXRpbmdQYW5lbE1vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCQWx0ZXJuYXRpbmdQYW5lbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9ICBcbn1cbiIsImV4cG9ydCBlbnVtIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucyB7XHJcbiAgICBDTE9TRSA9ICdjbG9zZScsXHJcbiAgICBTTElERV9MRUZUID0gJ3NsaWRlLWxlZnQnLFxyXG4gICAgU0xJREVfUklHSFQgPSAnc2xpZGUtcmlnaHQnLFxyXG4gICAgU0xJREVfVVAgPSAnc2xpZGUtdXAnLFxyXG4gICAgU0xJREVfRE9XTiA9ICdzbGlkZS1kb3duJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2xpZGVEaXJlY3Rpb25zIHtcclxuICAgIExFRlQgPSAnbGVmdCcsXHJcbiAgICBSSUdIVCA9ICdyaWdodCcsXHJcbiAgICBVUCA9ICd1cCcsXHJcbiAgICBET1dOID0gJ2Rvd24nLFxyXG59IiwiaW1wb3J0IHsgYW5pbWF0aW9uLCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGdyb3VwLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zIH0gZnJvbSBcIi4vc2xpZGluZy1wYW5lbC5lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRpY2FsU2xpZGVBbmltYXRpb25zKCk6IEFuaW1hdGlvbk1ldGFkYXRhICB7XHJcbiAgICByZXR1cm4gdHJpZ2dlcigndmVydGljYWxUcmlnZ2VyJywgW1xyXG4gICAgICAgIHN0YXRlKFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0RPV04sIHN0eWxlKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHN0YXRlKFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9VUCwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuQ0xPU0UgKyBcclxuICAgICAgICAgICAgICAgICcgPT4gJyArIFxyXG4gICAgICAgICAgICAgICAgU2xpZGVEaXJlY3Rpb25zLlNMSURFX0RPV04sIFxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGAke1NsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRX0gPT4gJHtTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfRE9XTn1gLCBcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAndG9wJyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAndG9wJyBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgIGAke1NsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9ET1dOfSA9PiAke1NsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRX1gLFxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgU2xpZGVEaXJlY3Rpb25zLlNMSURFX0RPV04gKyBcclxuICAgICAgICAgICAgICAgICcgPT4gJyArIFxyXG4gICAgICAgICAgICAgICAgU2xpZGVEaXJlY3Rpb25zLkNMT1NFLCBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAndG9wJyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9VUCwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdib3R0b20nIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdib3R0b20nIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1VQICsgXHJcbiAgICAgICAgICAgICcgPT4gJyArIFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UsIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnYm90dG9tJyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2JvdHRvbScgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSlcclxuICAgICAgICBcclxuICAgIF0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9yaXpvbnRhbFNsaWRlQW5pbWF0aW9ucygpOiBBbmltYXRpb25NZXRhZGF0YSAge1xyXG4gICAgcmV0dXJuIHRyaWdnZXIoJ2hvcml6b250YWxUcmlnZ2VyJywgW1xyXG4gICAgICAgIHN0YXRlKFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1JJR0hULCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBzdGF0ZShTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfTEVGVCwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFICsgXHJcbiAgICAgICAgICAgICcgPT4gJyArIFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQsIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnbGVmdCcgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2xlZnQnIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1JJR0hUICsgXHJcbiAgICAgICAgICAgICcgPT4gJyArIFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UsIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnbGVmdCcgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdsZWZ0JyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9MRUZULCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAncmlnaHQnIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0xFRlQgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdyaWdodCcgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdyaWdodCcgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSlcclxuICAgICAgICBcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IFxyXG4gIENvbXBvbmVudCwgXHJcbiAgSW5wdXQsIFxyXG4gIE91dHB1dCwgXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ1pvbmUsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHRyaWdnZXIsXHJcbiAgc3RhdGUsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICBrZXlmcmFtZXMsXHJcbiAgYW5pbWF0ZSxcclxuICBncm91cFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgXHJcbiAgdmVydGljYWxTbGlkZUFuaW1hdGlvbnMsIFxyXG4gIGhvcml6b250YWxTbGlkZUFuaW1hdGlvbnMgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwuYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucywgU2xpZGVEaXJlY3Rpb25zIH0gZnJvbSAnLi9zbGlkaW5nLXBhbmVsLmVudW1zJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEEgc2xpZGluZyBwYW5lbCBpcyBhIGRpdiBlbGVtZW50IHRoYXQgY2FuIGJlIFxyXG4gKiBzZXQgdG8gc2xpZGUgdXAsIGRvd24sIGxlZnQsIG9yIHJpZ2h0LlxyXG4gKiBcclxuICogSXQgY2FuIGJlIHRpZWQgdG8gYSBzbGlkaWluZyBwYW5lbCB0b2dnbGVcclxuICogb3IgY2FuIGJlIHNob3duIG9yIGhpZGRlbiBieSBjYWxsaW5nIHRoZVxyXG4gKiBwdWJsaWMgbWVtYmVycyBzaG93LCBoaWRlLCBvciB0b2dnbGUuIFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItc2xpZGluZy1wYW5lbF0nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbQGhvcml6b250YWxUcmlnZ2VyXSc6J2hvcml6b250YWxTdGF0ZScsXHJcbiAgICAnW0B2ZXJ0aWNhbFRyaWdnZXJdJzondmVydGljYWxTdGF0ZScsXHJcbiAgICAnW2NsYXNzLm9wZW5dJzonaXNTaG93aW5nJyxcclxuICAgICdbY2xhc3MuY2xvc2VkXSc6JyFpc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5waW5uZWRdJzoncGlubmVkJyxcclxuICAgICcobW91c2VlbnRlciknOidtb3VzZUVudGVyUGFuZWwuZW1pdCgkZXZlbnQpJyxcclxuICAgICcobW91c2VsZWF2ZSknOidtb3VzZUxlYXZlUGFuZWwuZW1pdCgkZXZlbnQpJyxcclxuICAgICcobW91c2VvdmVyKSc6J21vdXNlT3ZlclBhbmVsLmVtaXQoJGV2ZW50KScsXHJcbiAgICAnKGNsaWNrKSc6J2NsaWNrUGFuZWwuZW1pdCgkZXZlbnQpJyxcclxuICAgICdbY2xhc3MuYmItc2xpZGluZy1wYW5lbF0nOlwiJ3RydWUnXCJcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHZlcnRpY2FsU2xpZGVBbmltYXRpb25zKCksIFxyXG4gICAgaG9yaXpvbnRhbFNsaWRlQW5pbWF0aW9ucygpLFxyXG4gIF0sXHJcbiAgZXhwb3J0QXM6ICdiYlNsaWRpbmdQYW5lbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlNsaWRpbmdQYW5lbCB7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmeSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBwYW5lbHMgc2xpZGluZyBhbmltYXRpb24uXHJcbiAgICogVmFsaWQgdmFsdWVzOiAndXAnLCAnZG93bicsICdsZWZ0Jywgb3IgJ3JpZ2h0J1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNsaWRlRGlyZWN0aW9uOiBTbGlkZURpcmVjdGlvbnMgPSBTbGlkZURpcmVjdGlvbnMuRE9XTjtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgZm9yIHdoZW4gdGhlIG1vdXNlIGVudGVycyB0aGUgcGFuZWwuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG1vdXNlRW50ZXJQYW5lbD0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmb3Igd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBwYW5lbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VMZWF2ZVBhbmVsPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGZvciB3aGVuIHRoZSBtb3VzZSBpcyBvdmVyIHRoZSBwYW5lbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VPdmVyUGFuZWw9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgZm9yIHdoZW4gdGhlIHBhbmVsIGlzIGNsaWNrZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGNsaWNrUGFuZWw9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIHBpbm5lZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBmb3IgdGhlIGhvcml6b250YWwgYW5pbWF0aW9ucy5cclxuICAgKi9cclxuICBob3Jpem9udGFsU3RhdGUgOiBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMgPSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgZm9yIHRoZSB2ZXJ0aWNhbCBhbmltYXRpb25zLlxyXG4gICAqL1xyXG4gIHZlcnRpY2FsU3RhdGUgOiBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMgPSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwYW5lbCBpcyBvcGVuIG9yIGNsb3NlZC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzU2hvd2luZygpIHtcclxuICAgIHJldHVybiAodGhpcy5ob3Jpem9udGFsU3RhdGUgIT09IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSB8fFxyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSAhPT0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgdGhlIHBhbmVsIHdpdGggYSBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgc2hvdygpIHtcclxuICAgIHN3aXRjaCh0aGlzLnNsaWRlRGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgU2xpZGVEaXJlY3Rpb25zLkxFRlQ6IHtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9MRUZUO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgU2xpZGVEaXJlY3Rpb25zLlJJR0hUOiB7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsU3RhdGUgPSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuVVA6IHtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3RhdGUgPSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfVVA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuRE9XTjoge1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9ET1dOO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3RhdGUgPSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlIHRoZSBwYW5lbCB3aXRoIGEgc2xpZGluZyBhbmltYXRpb24uXHJcbiAgICovXHJcbiAgcHVibGljIGhpZGUoKSB7XHJcbiAgICB0aGlzLmhvcml6b250YWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgdGhlIHBhbmVsIHN0YXRlIHdpdGggYSBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgdG9nZ2xlKCkge1xyXG4gICAgaWYodGhpcy5pc1Nob3dpbmcpe1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgXHJcbiAgRGlyZWN0aXZlLCBcclxuICBJbnB1dCwgXHJcbiAgSG9zdExpc3RlbmVyLCBcclxuICBIb3N0QmluZGluZywgXHJcbiAgTmdab25lLCBcclxuICBFbGVtZW50UmVmLCBcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbCB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgZnJvbUV2ZW50ICwgIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciAsICBjb21iaW5lTGF0ZXN0ICwgIG1lcmdlICwgIG1hcCAsICBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKipcclxuICogQ29udHJvbCBhIHNsaWRpbmcgcGFuZWxzIHNob3duIG9yIGhpZGRlbiBzdGF0ZS5cclxuICogXHJcbiAqIFNob3VsZCBvbmx5IGJlIGF0dGFjaGVkIHRvIGVsZW1lbnRzIHRoYXQgaGF2ZVxyXG4gKiBhIGNsaWNrIGV2ZW50LlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLm9wZW5dJzoncGFuZWwuaXNTaG93aW5nJyxcclxuICAgICdbY2xhc3MuY2xvc2VkXSc6JyFwYW5lbC5pc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5waW5uZWRdJzoncGFuZWwucGlubmVkJyxcclxuICAgICdbY2xhc3MuYmItc2xpZGluZy1wYW5lbC10b2dnbGVdJzpcIid0cnVlJ1wiXHJcbiAgfSxcclxuICBleHBvcnRBczonYmJTbGlkaW5nUGFuZWxUb2dnbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlNsaWRpbmdQYW5lbFRvZ2dsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhbmVsIHRoYXQgdGhlIHRvZ2dsZSBpcyBhdHRhY2hlZCB0by5cclxuICAgKiBcclxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIG5vdCBzZXQgYW4gZXJyb3Igd2lsbCBiZSBcclxuICAgKiB0aHJvd24gZHVyaW5nIGluaXQuXHJcbiAgICovXHJcbiAgQElucHV0KCdiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZScpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbHMgd2hldGhlciB0aGUgcGFuZWwgc2hvdWxkIG9wZW4gYmFzZWQgXHJcbiAgICogb24gYSBjbGljayBldmVudCBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9nZ2xlT25DbGljayA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgb3BlbiBcclxuICAgKiBvbiBtb3VzZSBvdmVyIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T25Ib3ZlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgY2xvc2UgV2hlblxyXG4gICAqIGNsaWNrZWQgb3V0c2lkZSB0aGUgdG9nZ2xlIG9yIHBhbmVsIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2tPdXRzaWRlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHBhbmVsIFxyXG4gICAqIGJ5IHBpbm5pbmcgb3BlbiBpdCBpZiB0cnVlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPbkluaXQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEtlZXAgdHJhY2sgb2YgdGhlIHByZXZpb3VzIHBpbiBzdGF0ZS5cclxuICAgKiBUaGlzIGlzIG5lZWRlZCB0byBkZXRlcm1pbmUgaWYgdGhlIFxyXG4gICAqIG5ldyBwaW4gc3RhdGUgc2hvdWxkIGFjdHVhbGx5IGNhdXNlIGFcclxuICAgKiB0cmFuc2l0aW9uIG9yIG5vdC5cclxuICAgKi9cclxuICBwcml2YXRlIHByZXZpb3VzUGlubmVkU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICAvKipcclxuICAgKiBTYXZlIGhlIHN1YnNjcmlwdGlvbiBzbyB0aGUgc3RyZWFtXHJcbiAgICogY2FuIGJlIHByb3Blcmx5IGNsb3NlZC5cclxuICAgKi9cclxuICBwcml2YXRlIHNob3dIaWRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZighdGhpcy5wYW5lbCl7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gU2xpZGluZ1BhbmVsIGNvbXBvbmVudCBzdXBwbGllZCB0byAnICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAndGhlIGJiLXNsaWRpbmctcGFuZWwtdG9nZ2xlIGRpcmVjdGl2ZSAnICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAnKFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCIkUGFuZWxWYXJpYWJsZVwiKS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uICYmICF0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFN0cmVhbXMgb2YgdGhlIGV2ZW50cyBuZWNlc3NhcnkgXHJcbiAgICAgKiBmb3IgdGhlIGxvZ2ljIG9mIHRoZSB0b2dnbGUuXHJcbiAgICAgKi9cclxuXHJcbiAgICBsZXQgZG9jdW1lbnRDbGljayQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdjbGljaycpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlQ2xpY2skID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKTtcclxuICAgIGxldCB0b2dnbGVNb3VzZUVudGVyJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKTtcclxuICAgIGxldCB0b2dnbGVNb3VzZUxlYXZlJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKTtcclxuXHJcbiAgICBsZXQgcGFuZWxNb3VzZUVudGVyZWQkID0gdGhpcy5wYW5lbC5tb3VzZUVudGVyUGFuZWwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBsZXQgcGFuZWxNb3VzZUxlZnQkID0gdGhpcy5wYW5lbC5tb3VzZUxlYXZlUGFuZWwuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICBsZXQgcGFuZWxDbGljayQgPSB0aGlzLnBhbmVsLmNsaWNrUGFuZWwuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgLypcclxuICAgICAqIFJlZHVjZSBib3RoIGxlYXZpbmcgZXZlbnRzIHRvIFxyXG4gICAgICogYSBmYWxzZSBlbWlzc2lvbi5cclxuICAgICAqL1xyXG4gICAgbGV0IGxlYXZlQm90aCQgPSB0b2dnbGVNb3VzZUxlYXZlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtZXJnZShwYW5lbE1vdXNlTGVmdCQpLFxyXG4gICAgICAgIGZpbHRlcihfPT50aGlzLnNob3dPbkhvdmVyKSwgXHJcbiAgICAgICAgbWFwKF89PmZhbHNlKSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIFJlZHVjZSBib3RoIGVudGVyIGV2ZW50cyB0byBcclxuICAgICAqIGEgdHJ1ZSBlbWlzc2lvbi5cclxuICAgICAqL1xyXG4gICAgbGV0IGVudGVyRWl0aGVyJCA9IHRvZ2dsZU1vdXNlRW50ZXIkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKHBhbmVsTW91c2VFbnRlcmVkJCksXHJcbiAgICAgICAgZmlsdGVyKF89PnRoaXMuc2hvd09uSG92ZXIpLFxyXG4gICAgICAgIG1hcChfPT50cnVlKSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIFdoZW4gdGhlIHRvZ2dsZSBpcyBjbGlja2VkIFxyXG4gICAgICogc3RvcCB0aGUgZXZlbnQgZnJvbSBidWJibGluZ1xyXG4gICAgICogYW5kIHRvZ2dsZSB0aGUgcGlubmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBsZXQgdG9nZ2xlQ2xpY2tlZCQgPSB0b2dnbGVDbGljayRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKF89PiB7XHJcbiAgICAgICAgICAvKlxyXG4gICAgICAgICAgICogc2hvdWxkIHByb2JhYmx5IGJlIGRvbmUgd2l0aFxyXG4gICAgICAgICAgICogYSBkbyBvcGVyYXRvciwgb25jZSBpdCB3b3JrcyBhZ2FpbixcclxuICAgICAgICAgICAqIGZvciBib3RoIHRvZ2dsZSBjbGlja2VkIGFuZCBwYW5lbFxyXG4gICAgICAgICAgICogY2xpY2tlZFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIHJldHVybiAhdGhpcy5wcmV2aW91c1Bpbm5lZFN0YXRlIH0pKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogV2hlbiB0aGUgcGFuZWwgaXMgY2xpY2tlZFxyXG4gICAgICogc3RvcCB0aGUgZXZlbnQgZnJvbSBidWJibGluZ1xyXG4gICAgICogYW5kIGp1c3QgY29udGludWUgdG8gZW1pdCB0aGVcclxuICAgICAqIHByZXZpb3VzIHBpbm5lZCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgbGV0IHBhbmVsQ2xpY2tlZCQgPSBwYW5lbENsaWNrJFxyXG4gICAgICAucGlwZShtYXAoXz0+e1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzUGlubmVkU3RhdGUgfSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBBIGRvY3VtZW50IGNsaWNrIGlzIG9ubHlcclxuICAgICAqIHRyaWdnZXJlZCB3aGVuIHRoZSBwYW5lbFxyXG4gICAgICogYW5kIHRoZSB0b2dnbGUgZG9uJ3QgcHJldmVudFxyXG4gICAgICogdGhlIGJ1YmJsaW5nIHNvIGp1c3QgZW1pdCBcclxuICAgICAqIGZhbHNlIGFzIHRoZSBuZXh0IHBpbm5lZCBzdGF0ZS5cclxuICAgICAqL1xyXG4gICAgbGV0IGRvY3VtZW50Q2xpY2tlZCQgPSBkb2N1bWVudENsaWNrJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoXz0+dGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlKSxcclxuICAgICAgICBtYXAoXz0+ZmFsc2UpKTtcclxuICAgIFxyXG4gICAgLypcclxuICAgICAqIENvbWJpbmUgYWxsIHRoZSBwaW5uZWQgc3RhdGVcclxuICAgICAqIHN0cmVhbXMuXHJcbiAgICAgKi9cclxuICAgIGxldCBuZXh0UGlubmVkU3RhdGUkID0gb2YodGhpcy5zaG93T25Jbml0KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtZXJnZSh0b2dnbGVDbGlja2VkJCwgcGFuZWxDbGlja2VkJCwgZG9jdW1lbnRDbGlja2VkJCkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb21iaW5lIGFsbCB0aGUgbW91c2UgbW92ZW1lbnRcclxuICAgICAqIHN0cmVhbXMuXHJcbiAgICAgKi9cclxuICAgIGxldCBpc0hvdmVyaW5nJCA9IG9mKGZhbHNlKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtZXJnZShsZWF2ZUJvdGgkLCBlbnRlckVpdGhlciQpLFxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAqIDUwIGhlcmUgaXMgYXJiaXRyYXJ5IGJ1dCBcclxuICAgICAgICAgICogc2VlbXMgdG8gYmUgYmVsb3cgdGhlIFxyXG4gICAgICAgICAgKiBodW1hbiB0aHJlc2hob2xkIGZvciBub3RpY2luZ1xyXG4gICAgICAgICAgKiB0aGUgZGVsYXkgd2hpbGUgbGV0dGluZyBcclxuICAgICAgICAgICogc2xvd2VyIHN5c3RlbXMgaGF2ZSBwbGVudHkgb2ZcclxuICAgICAgICAgICogdGltZSB0byBwcm9jZXNzIHRoZSBldmVudHMuXHJcbiAgICAgICAgICAqIFxyXG4gICAgICAgICAgKiBNYXliZSBpdCBzaG91bGQgYmUgY29uZmlndXJhYmxlP1xyXG4gICAgICAgICAgKi9cclxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogQ29tYmluZSB0aGUgaG92ZXIgYW5kIHBpbm5lZCBzdGF0ZVxyXG4gICAgICogc3RyZWFtcyBpbnRvIGEgc3RyZWFtIHRoYXQgZGV0ZXJtaW5lc1xyXG4gICAgICogd2hldGhlciB0aGUgcGFuZWwgc3RhdGUgbmVlZHMgdG8gY2hhbmdlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uID0gXHJcbiAgICAgIGlzSG92ZXJpbmckXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBjb21iaW5lTGF0ZXN0KG5leHRQaW5uZWRTdGF0ZSQpLFxyXG4gICAgICAgICAgbWFwKHN0YXRlcz0+KHtob3ZlcjpzdGF0ZXNbMF0scGluOnN0YXRlc1sxXSB9KSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSh0aGlzLm9uTmV4dFN0YXRlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYodGhpcy5zaG93SGlkZVN1YnNjcmlwdGlvbiAmJiAhdGhpcy5zaG93SGlkZVN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5zaG93SGlkZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd1BhbmVsID0gKCkgPT4gdGhpcy5vbk5leHRTdGF0ZSh7aG92ZXI6IGZhbHNlLCBwaW46IHRydWV9KTtcclxuICBoaWRlUGFuZWwgPSAoKSA9PiB0aGlzLm9uTmV4dFN0YXRlKHtob3ZlcjogZmFsc2UsIHBpbjogZmFsc2V9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoYXQgdGhlIG5leHQgcGFuZWwgc3RhdGVcclxuICAgKiBzaG91bGQgYmUgYmFzZWQgb24gdGhlIG5ldyBob3ZlciBhbmRcclxuICAgKiBwaW4gc3RhdGVzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgb25OZXh0U3RhdGUgPSAobmV4dFN0YXRlczp7aG92ZXI6IGJvb2xlYW4sIHBpbjogYm9vbGVhbn0pID0+IHtcclxuICAgIGlmKG5leHRTdGF0ZXMuaG92ZXIgKSB7XHJcbiAgICAgIGlmKHRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSAmJiAhbmV4dFN0YXRlcy5waW4pIHsgXHJcbiAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7ICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhbmVsLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlmKCF0aGlzLnByZXZpb3VzUGlubmVkU3RhdGUgJiYgbmV4dFN0YXRlcy5waW4pIHtcclxuICAgICAgICB0aGlzLnBhbmVsLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCFuZXh0U3RhdGVzLnBpbil7XHJcbiAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSA9IG5leHRTdGF0ZXMucGluO1xyXG4gICAgdGhpcy5wYW5lbC5waW5uZWQgPSBuZXh0U3RhdGVzLnBpbjtcclxuICB9XHJcblxyXG4gIFxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsVG9nZ2xlIH0gZnJvbSAnLi90b2dnbGUvc2xpZGluZy1wYW5lbC10b2dnbGUuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gIF0sXHJcbiAgXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCQlNsaWRpbmdQYW5lbCwgXHJcbiAgICBCQlNsaWRpbmdQYW5lbFRvZ2dsZSwgXHJcbiAgXSxcclxuXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJTbGlkaW5nUGFuZWwsIFxyXG4gICAgQkJTbGlkaW5nUGFuZWxUb2dnbGUsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJTbGlkaW5nUGFuZWxNb2R1bGUgeyBcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQlNsaWRpbmdQYW5lbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9ICBcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCQk1lbnVJdGVtfSBmcm9tICcuLi9jb21tb24vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1kcm9wZG93bi1tZW51XScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCJwYW5lbFwiIFxyXG4gICAgIFt0b2dnbGVPbkNsaWNrXT1cInRvZ2dsZU9uQ2xpY2tcIlxyXG4gICAgIFtzaG93T25Ib3Zlcl09XCJzaG93T25Ib3ZlclwiXHJcbiAgICAgW2Nsb3NlT25DbGlja091dHNpZGVdPVwiY2xvc2VPbkNsaWNrT3V0c2lkZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtdG9nZ2xlXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250YWluZXJcIj5cclxuICA8ZGl2IGJiLXNsaWRpbmctcGFuZWwgXHJcbiAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiXHJcbiAgICBzbGlkZURpcmVjdGlvbj1cImRvd25cIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LWl0ZW1dXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BkaXYuZHJvcGRvd24tY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlfS9kZWVwLyAuZHJvcGRvd24tY29udGFpbmVyPmRpdi5iYi1zbGlkaW5nLXBhbmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDowfS5kcm9wZG93bi1jb250YWluZXIgZGl2LmJiLXNsaWRpbmctcGFuZWx7ZGlzcGxheTpmbGV4O2ZsZXg6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW59YF0sXHJcbiAgZXhwb3J0QXM6J2JiRHJvcGRvd25NZW51J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEcm9wZG93bk1lbnUge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmItZHJvcGRvd24tbWVudScpIGFwcGx5SG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIHNob3dPbkhvdmVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcHVibGljIHRvZ2dsZU9uQ2xpY2sgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaXNTaG93aW5nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duTWVudSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZVxyXG4gIF0sXHJcbiAgXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCQkRyb3Bkb3duTWVudVxyXG4gIF0sXHJcbiAgXHJcbiAgZXhwb3J0czogW1xyXG5cdCAgQkJEcm9wZG93bk1lbnVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duTWVudU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJEcm9wZG93bk1lbnVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG4gfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1zbGlkZW91dC1tZW51XScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2xpZGUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiBbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdPVwicGFuZWxcIiBcclxuICAgIFt0b2dnbGVPbkNsaWNrXT1cInBpbk9uQ2xpY2tcIlxyXG4gICAgW3Nob3dPbkhvdmVyXT1cInNob3dPbk1vdXNlT3ZlclwiXHJcbiAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzbGlkZS1wb3NpdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlLWFuY2hvclwiPlxyXG4gICAgICA8ZGl2IGJiLXNsaWRpbmctcGFuZWwgXHJcbiAgICAgICAgI3BhbmVsPVwiYmJTbGlkaW5nUGFuZWxcIlxyXG4gICAgICAgIFtzbGlkZURpcmVjdGlvbl09XCJzbGlkZURpcmVjdGlvblwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5zbGlkZS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LnNsaWRlLWNvbnRhaW5lcj5kaXYuc2xpZGUtcG9zaXRpb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9L2RlZXAvIC5zbGlkZS1sZWZ0PmRpdi5zbGlkZS1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZWR9L2RlZXAvIC5zbGlkZS1sZWZ0IGRpdi5zbGlkZS1wb3NpdGlvbntsZWZ0OjB9L2RlZXAvIC5zbGlkZS1yaWdodCBkaXYuc2xpZGUtcG9zaXRpb257cmlnaHQ6MH0uc2xpZGUtY29udGFpbmVyPj5kaXYuc2xpZGUtYW5jaG9ye3Bvc2l0aW9uOnJlbGF0aXZlfS9kZWVwLyAuc2xpZGUtYW5jaG9yPmRpdi5iYi1zbGlkaW5nLXBhbmVse3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleDoxfS9kZWVwLyAuc2xpZGUtbGVmdCBkaXYuYmItc2xpZGluZy1wYW5lbHtyaWdodDowfS9kZWVwLyAuc2xpZGUtcmlnaHQgZGl2LmJiLXNsaWRpbmctcGFuZWx7bGVmdDowfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc2xpZGUtbGVmdF0nOlwic2xpZGVMZWZ0XCIsXHJcbiAgICAnW2NsYXNzLnNsaWRlLXJpZ2h0XSc6XCIhc2xpZGVMZWZ0XCJcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlNsaWRlb3V0TWVudSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1zbGlkZW91dC1tZW51JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd09uTW91c2VPdmVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgcGluT25DbGljayA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNsaWRlRGlyZWN0aW9uOiBcImxlZnRcIiB8IFwicmlnaHRcIiA9IFwicmlnaHRcIjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaXNTaG93aW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWRlTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNsaWRlRGlyZWN0aW9uID09PSBcImxlZnRcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJTbGlkZW91dE1lbnUgfSBmcm9tICcuL3NsaWRlb3V0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCU2xpZGVvdXRNZW51XHJcbiAgXSxcclxuICBcclxuICBleHBvcnRzOiBbXHJcblx0ICBCQlNsaWRlb3V0TWVudVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGVvdXRNZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQlNsaWRlb3V0TWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9ICBcclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICBDb21wb25lbnQsIFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBJbmplY3QsXHJcbiAgZm9yd2FyZFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgVmlld0NoaWxkICBcclxuICAgICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3Vic2NyaXB0aW9uICwgIEJlaGF2aW9yU3ViamVjdCAsICBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lICwgIG1hcCAsICBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJEcm9wZG93bklucHV0SXRlbXNMaXN0IH0gZnJvbSAnLi9pdGVtLWxpc3QvZHJvcGRvd24taW5wdXQtaXRlbS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZSB9IGZyb20gJy4uL2R5bmFtaWMtY29tcG9uZW50L2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IERyb3Bkb3duSW5wdXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL2Ryb3Bkb3duLWlucHV0LXNlcnZpY2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRHJvcGRvd25JbnB1dEl0ZW1DaG9zZW5FdmVudCwgRHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Ryb3Bkb3duLWlucHV0LWl0ZW0tZXZlbnRzLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQkJEcm9wZG93bklucHV0U2VydmljZVRva2VuID0gbmV3IEluamVjdGlvblRva2VuPERyb3Bkb3duSW5wdXRTZXJ2aWNlPignRGRJU2VydmljZScpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItZHJvcGRvd24taW5wdXRdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkcm9wZG93bi1hbmNob3JcIj5cclxuICA8aW5wdXQgI2Ryb3Bkb3duSW5wdXRcclxuXHRcdCAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcblx0XHQgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJUZXh0XCIvPlxyXG4gIFx0PGRpdiBiYi1zbGlkaW5nLXBhbmVsXHJcblx0ICAgICBjbGFzcz1cInJlc3VsdHNcIiBcclxuXHRcdCBzbGlkZURpcmVjdGlvbj1cImRvd25cIlxyXG5cdFx0ICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCI+XHJcblx0XHQgPHVsIGJiLWRyb3Bkb3duLWlucHV0LWl0ZW1zLWxpc3RcclxuXHRcdCBcdCNkcm9wZG93bkxpc3RcclxuXHRcdCAgICBbZHluYW1pY0NvbXBvbmVudHNEYXRhXT1cImRpU2Vydi5pdGVtcyQgfCBhc3luY1wiXHJcblx0XHRcdChsaXN0SXRlbU1vdXNlT3Zlcik9XCJvbkxpc3RJdGVtTW91c2VPdmVyKCRldmVudClcIlxyXG5cdFx0XHQobGlzdEl0ZW1DbGljayk9XCJvbkxpc3RJdGVtQ2xpY2tlZCgkZXZlbnQpXCJcclxuXHRcdFx0KG5ld0NvbnRhaW5lcnMpPVwib25OZXdJdGVtQ29udGFpbmVycygkZXZlbnQpXCI+XHJcblx0XHQgPC91bD5cclxuICBcdDwvZGl2Plx0XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BkaXYuZHJvcGRvd24tYW5jaG9ye3Bvc2l0aW9uOnJlbGF0aXZlfS5kcm9wZG93bi1hbmNob3I+ZGl2LmJiLXNsaWRpbmctcGFuZWx7cG9zaXRpb246YWJzb2x1dGV9LmRyb3Bkb3duLWFuY2hvcj4uYmItc2xpZGluZy1wYW5lbCB1bC5iYi1kcm9wZG93bi1pbnB1dC1pdGVtcy1saXN0e2Rpc3BsYXk6ZmxleDtmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmctbGVmdDowO2xpc3Qtc3R5bGU6bm9uZX1gXSxcclxuICBob3N0OiB7XHJcbiAgICAnKGZvY3Vzb3V0KSc6XCJvbkhvc3RGb2N1c091dCgkZXZlbnQpXCIsXHJcbiAgICAnKGZvY3VzaW4pJzpcIm9uSG9zdEZvY3VzSW4oJGV2ZW50KVwiLFxyXG4gIH0sXHJcbiAgZXhwb3J0QXM6J2JiRHJvcGRvd25JbnB1dCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duSW5wdXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmItZHJvcGRvd24taW5wdXQnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBmb3IgdGhlIHNlcnZpY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4SXRlbXM6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlcyB3aGV0aGVyIHRoZSBkaXNwbGF5VGV4dCBzaG91bGQgYmUgc2V0IGludG8gdGhlIGlucHV0XHJcbiAgICogYm94IHdoZW4gYW4gaXRlbSBpcyAnY2hvc2VuJy4gIERlZmF1bHRzIHRvIHRydWUuIFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNldFRleHRPbkNob2ljZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgcGxhY2UgaG9sZGVyIHRleHQgb24gdGhlIGlucHV0IGVsZW1lbnQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJUZXh0ID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgaG93IGxvbmcsIGluIG1zLCB0aGUgZGVsYXkgaXMgXHJcbiAgICogYmV0d2VlbiB1cGRhdGVzIHRvIHRoZSBEcm9wZG93bklucHV0U2VydmljZVxyXG4gICAqIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICogaGFzIGJlZW4gY2hhbmdlZC5cclxuICAgKiBcclxuICAgKiBEZWZhdWx0cyB0byA0MDBtcy5cclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgaW5wdXRWYWx1ZUNoYW5nZURlbGF5bXMgPSA0MDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhdXRvIHNlbGVjdGlvbiBtb2RlIGRldGVybWluZSB3aGljaCBpdGVtIHdpbGwgYmUgc2VsZWN0ZWQgaWYgdGhlXHJcbiAgICogY2hvb3NlIGl0ZW0gbWV0aG9kIGlzIGV4ZWN1dGVkIHdoZW4gbm8gaXRlbSBoYXMgYmVlbiBzcGVjaWZpY2FsbHlcclxuICAgKiBzZWxlY3RlZCBieSB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAqIFxyXG4gICAqICdub25lJyAgICAtIG5vdGhpbmcgaXMgY2hvc2VuIHdpdGhvdXQgdXNlciBpbnRlcmFjdGlvblxyXG4gICAqICBcclxuICAgKiAnbGF6eScgICAgLSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdCBpcyBjaG9zZW5cclxuICAgKiAgXHJcbiAgICogJ2V4YWN0JyAgIC0gaWYgYW55IGl0ZW0ncyBkaXNwbGF5VGV4dCBtYXRjaGVzIHRoZSBpbnB1dCBleGFjdGx5LFxyXG4gICAqICAgICAgICAgICAgIGlnbm9yaW5nIGNhc2UsIHRoZSBmaXJzdCBtYXRjaCBpcyBjaG9zZW5cclxuICAgKiBcclxuICAgKiAnb25seScgICAgLSBpZiB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIGl0ZW0gaW4gdGhlIGxpc3QgaXQgaXMgY2hvc2VuXHJcbiAgICogXHJcbiAgICogJ3BhcnRpYWwnIC0gbWF0aCB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgbGlzdCB0aGF0LCBpZ25vcmluZyBjYXNlLCBcclxuICAgKiAgICAgICAgICAgICBleGFjdGx5IG1hdGNoZXMgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgKi9cclxuICBASW5wdXQoKSBhdXRvU2VsZWN0aW9uTW9kZTogJ25vbmUnIHwgJ2xhenknIHwgJ2V4YWN0JyB8ICdvbmx5JyB8ICdwYXJ0aWFsJyA9ICdub25lJzsgXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgYXV0byBzZWxlY3Rpb24gbW9kZSBzZWxlY3Rpb24gbWFkZS5cclxuICAgKi9cclxuICBwcml2YXRlIGF1dG9TZWxlY3RlZEluZGV4ID0gLTE7XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cclxuICAvKipcclxuICAgKiBFbWl0IHRoZSBkYXRhIGZvciB0aGUgbGlzdCBpdGVtIHNlbGVjdGVkIGVpdGhlciB0aHJvdWdoIFxyXG4gICAqIGEgbW91c2UgY2xpY2sgb3IgaGl0dGluZyBlbnRlciB3aGVuIGl0IGlzIGluIHRoZSBzZWxlY3RlZCBcclxuICAgKiBzdGF0ZS5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbGlzdEl0ZW1DaG9zZW4gPSBuZXcgRXZlbnRFbWl0dGVyPERyb3Bkb3duSW5wdXRJdGVtQ2hvc2VuRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBzZXJ2aWNlIGhhcyByZXR1cm5lZFxyXG4gICAqIGF0IGxlYXN0IDEgaXRlbSB0byB0aGUgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaGFzSXRlbXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm51bUl0ZW1zID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaXNTaG93aW5nO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25JbnB1dCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgaW5wdXRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBwYW5lbEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duTGlzdCcpIGxpc3Q6IEJCRHJvcGRvd25JbnB1dEl0ZW1zTGlzdDtcclxuXHJcbiAgcHVibGljIGdldCBpbnB1dEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaW5wdXRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBkZXRlcm1pbmUgdGhlIGxvY2F0aW9uIG9mIGNsaWNrc1xyXG4gIC8vIHRvIGRldGVybWluZSBpZiB0aGUgZHJvcGRvd24gc2hvdWxkXHJcbiAgLy8gc2hvdyBvciBub3QuXHJcbiAgcHJpdmF0ZSBvdXRzaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHJpdmF0ZSBpbnNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJpdmF0ZSBjbGlja2VkSW5zaWRlID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gIC8qIHVzZXIgaW50ZXJhY3Rpb24gc3RhdGUgdHJhY2tpbmcgKi9cclxuICBwcml2YXRlIHdhc0luc2lkZUNsaWNrZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIHdhc0ZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gZm9yIHRyYWNraW5nIHRoZSBzdGF0ZSBvZiB0aGUgcGFuZWxcclxuICBwcml2YXRlIGlucHV0U3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgaXRlbXNTdWI6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIG51bUl0ZW1zOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKlxyXG4gICAqIEludGVybmFsIGxpc3Qgb2YgdGhlIGR5bmFtaWMgY29tcG9uZW50cycgY29udGFpbmVycy5cclxuICAgKi9cclxuICBwcml2YXRlIGR5bmFtaWNDb250YWluZXJzOiBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmVbXTtcclxuXHJcbiAgcHVibGljIGRpU2VydjogRHJvcGRvd25JbnB1dFNlcnZpY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpPT5CQkRyb3Bkb3duSW5wdXRTZXJ2aWNlVG9rZW4pKSBwcml2YXRlIF9kaVNlcnY6IERyb3Bkb3duSW5wdXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGU6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNoRGV0UmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICB0aGlzLmRpU2VydiA9IF9kaVNlcnY7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZih0aGlzLm1heEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMuZGlTZXJ2LnNldE1heEl0ZW1zKHRoaXMubWF4SXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBUcmFjayB0aGUgdmFsdWUgY2hhbmdlcyBvZiB0aGUgaW5wdXQgZWxlbWVudFxyXG4gICAgICogd2l0aG91dCBicmluZ2luZyBpbiBhbmd1bGFyIGZvcm1zIHRvIGtlZXBcclxuICAgICAqIHRoZSByZXF1aXJlbWVudHMgZm9yIGJiIGFzIGxvdyBhcyBwb3NzaWJsZS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5pbnB1dFN1YiA9IFxyXG4gICAgICBmcm9tRXZlbnQodGhpcy5pbnB1dEVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKGV2ZW50OktleWJvYXJkRXZlbnQpPT4oZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSxcclxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmlucHV0VmFsdWVDaGFuZ2VEZWxheW1zKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgbmV3VGV4dD0+e1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlTZXJ2LnNldFNlYXJjaFRleHQobmV3VGV4dCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhlcnIpLFxyXG4gICAgICAgICgpPT57Lypkb25lKi99KTtcclxuXHJcbiAgICB0aGlzLml0ZW1zU3ViID0gdGhpcy5kaVNlcnYuaXRlbXMkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChpdGVtcz0+IGl0ZW1zPyBpdGVtcy5sZW5ndGg6LTEpKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIG51bT0+IHtcclxuICAgICAgICAgIHRoaXMubnVtSXRlbXMgPSBudW07XHJcblxyXG4gICAgICAgICAgaWYodGhpcy5oYXNJdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFuZWwuaGlkZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuY2hEZXRSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhlcnIpLFxyXG4gICAgICAgICgpPT57Lypkb25lKi99KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCl7XHJcbiAgICB0aGlzLmlucHV0U3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLml0ZW1zU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmRpU2Vydi5jbGVhckl0ZW1zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBhbnkgcHJldmlvdXMgc2VsZWN0aW9uIGNyaXRlcmlhIGFuZFxyXG4gICAqIHBlcmZvcm0gYSBuZXcgYXV0byBzZWxlY3Rpb24uXHJcbiAgICovXHJcbiAgIG9uTmV3SXRlbUNvbnRhaW5lcnMoXHJcbiAgICBjb250YWluZXJzOiBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmVbXSkge1xyXG4gICAgICB0aGlzLmNsZWFyQXV0b1NlbGVjdGlvbigpO1xyXG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuZHluYW1pY0NvbnRhaW5lcnMgPSBjb250YWluZXJzO1xyXG4gICAgICBpZih0aGlzLmR5bmFtaWNDb250YWluZXJzICYmIHRoaXMuZHluYW1pY0NvbnRhaW5lcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgdGhpcy5hdXRvU2VsZWN0SXRlbSgpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaG9vc2UgZWl0aGVyIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSBvclxyXG4gICAqIHRoZSBhdXRvIGNob3NlbiBpdGVtIGFuZCBlbWl0IGl0LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2hvb3NlQ3VycmVudEl0ZW0oKSB7XHJcbiAgICAgIGxldCBjdXJyZW50SXRlbTogRHJvcGRvd25JbnB1dEl0ZW1DaG9zZW5FdmVudDtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtID0gdGhpcy5nZXRDdXJyZW50SXRlbSh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYXV0b1NlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50SXRlbSA9IHRoaXMuZ2V0Q3VycmVudEl0ZW0odGhpcy5hdXRvU2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGN1cnJlbnRJdGVtKXtcclxuICAgICAgICBpZiAodGhpcy5zZXRUZXh0T25DaG9pY2UpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gY3VycmVudEl0ZW0ubWF0Y2hUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0SXRlbUNob3Nlbi5lbWl0KGN1cnJlbnRJdGVtKTtcclxuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIGRhdGEgc3RydWN0dXJlIG9mIHRoZSBkeW5hbWljIGNvbXBvbmVudFxyXG4gICAqIGRlc2NyaWJlZCBieSB0aGUgaW5kZXggdmFsdWUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50SXRlbShpbmRleDogbnVtYmVyKTogRHJvcGRvd25JbnB1dEl0ZW1DaG9zZW5FdmVudCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb21wb25lbnQ6IHRoaXMuZHluYW1pY0NvbnRhaW5lcnNbaW5kZXhdLmN1cnJlbnRDb21wUmVmLmluc3RhbmNlLFxyXG4gICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgIG1hdGNoVGV4dDogdGhpcy5saXN0LmR5bmFtaWNDb21wb25lbnRzRGF0YVtpbmRleF0ubWF0Y2hUZXh0LFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogU29mdCBTZWxlY3Rpb24gSGFuZGxpbmcgKi9cclxuICBwcml2YXRlIGF1dG9TZWxlY3RJdGVtKCkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICBzd2l0Y2ggKHRoaXMuYXV0b1NlbGVjdGlvbk1vZGUpIHtcclxuICAgICAgICBjYXNlICdub25lJzoge1xyXG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdsYXp5Jzoge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5keW5hbWljQ29udGFpbmVycykge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdleGFjdCc6IHtcclxuICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNDb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LmR5bmFtaWNDb21wb25lbnRzRGF0YS5maW5kKFxyXG4gICAgICAgICAgICAoY250LGkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoY250Lm1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpID09PSBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGNvbnRhaW5lckluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAncGFydGlhbCc6IHtcclxuICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNDb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXJJbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LmR5bmFtaWNDb21wb25lbnRzRGF0YS5maW5kKFxyXG4gICAgICAgICAgICAoY250LGkpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoY250Lm1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJzdHIoMCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZS5sZW5ndGgpID09PSBcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lckluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29udGFpbmVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdvbmx5Jzoge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5keW5hbWljQ29udGFpbmVycyAmJiB0aGlzLmR5bmFtaWNDb250YWluZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5kZXggIT0gdGhpcy5hdXRvU2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICB0aGlzLmNsZWFyQXV0b1NlbGVjdGlvbigpO1xyXG5cclxuICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2hhbmdlQXV0b1NlbGVjdGlvbihpbmRleCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hdXRvU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgY3VycmVudCBhdXRvIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xlYXJBdXRvU2VsZWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYXV0b1NlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLmxpc3QuY2hhbmdlQXV0b1NlbGVjdGlvbih0aGlzLmF1dG9TZWxlY3RlZEluZGV4LCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuYXV0b1NlbGVjdGVkSW5kZXggPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBwcmV2aW91cywgd3JhcHBpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdFByZXZpb3VzTGlzdEl0ZW0oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5nZXROZXh0U2VsZWN0aW9uKC0xKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IG5leHQsIHdyYXBwaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWxlY3ROZXh0TGlzdEl0ZW0oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5nZXROZXh0U2VsZWN0aW9uKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBuZXh0IHNlbGVjdGlvbiBiYXNlZCBvbiB0aGUgaW5kZXhDaGFuZ2VcclxuICAgKiBhbmQgd3JhcHBpbmcgYXJvdW5kIHRoZSBhcnJheSBvZiBpdGVtcy5cclxuICAgKi9cclxuICBwcml2YXRlIGdldE5leHRTZWxlY3Rpb24oaW5kZXhDaGFuZ2U6bnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5keW5hbWljQ29udGFpbmVycyAmJiB0aGlzLmR5bmFtaWNDb250YWluZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2hhbmdlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJbmRleCwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBtb3ZlIHNlbGVjdGlvbiBpbmRleFxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCArPSBpbmRleENoYW5nZTtcclxuXHJcbiAgICAgICAgLy8gd3JhcCB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5keW5hbWljQ29udGFpbmVycy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPj0gdGhpcy5keW5hbWljQ29udGFpbmVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgc2VsZWN0aW9uXHJcbiAgICAgICAgdGhpcy5saXN0LmNoYW5nZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSW5kZXgsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyB0aGUgY29udGFpbmVyIGVsZW1lbnQgaXMgY29uc2lkZXJlZCB0byBiZSB0aGUgYW5ndWxhciBiaW5kaW5nIGNvbW1lbnQsIHNvIHdlIGhhdmUgdG8gZ28gdXAgMSBsZXZlbCB0byB0aGUgbGkgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5saXN0Lmxpc3RFbGVtZW50c1t0aGlzLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSAodGhpcy5wYW5lbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaXMgaW4gdmlld1xyXG4gICAgICAgIGNvbnN0IGluVmlld0RhdGEgPSB0aGlzLmVsZW1lbnRPZmZzZXRGcm9tVmlldyhsaXN0RWxlbWVudCwgY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFpblZpZXdEYXRhLmluVmlldykge1xyXG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNjcm9sbFRvcCArPSBpblZpZXdEYXRhLnNjcm9sbEJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNsZWFyIGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPj0gMCkge1xyXG4gICAgICB0aGlzLmxpc3QuY2hhbmdlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJbmRleCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnRcclxuICAgKiBhbmQgaWYgaXQgaXNuJ3QgYWxzbyBkZXRlcm1pbmUgdGhlIHZlcnRpY2FsIG9mZnNldCBmcm9tIGJlaW5nIGluIHZpZXdcclxuICAgKiBpdCBpcyBhdC5cclxuICAgKiBAcGFyYW0gbGlzdEVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluIHZpZXdcclxuICAgKiBAcGFyYW0gY29udGFpbmVyIHRoZSB2aWV3aW5nIGNvbnRhaW5lciBvZiB0aGUgZWxlbWVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZWxlbWVudE9mZnNldEZyb21WaWV3KGxpc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBsaXN0UmVjID0gbGlzdEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGNvbnRSZWMgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHRvcFZpeiA9IGxpc3RSZWMudG9wID49IGNvbnRSZWMudG9wO1xyXG4gICAgICBjb25zdCBib3RWaXogPSBsaXN0UmVjLmJvdHRvbSA8PSBjb250UmVjLmJvdHRvbTtcclxuXHJcbiAgICAgIGNvbnN0IGluVmlld0RhdGEgPSB7XHJcbiAgICAgICAgICBpblZpZXc6IHRvcFZpeiAmJiBib3RWaXosXHJcbiAgICAgICAgICBzY3JvbGxCeTogMCBcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFib3RWaXopIHtcclxuICAgICAgICAgIGluVmlld0RhdGEuc2Nyb2xsQnkgPSBsaXN0UmVjLmJvdHRvbSAtIGNvbnRSZWMuYm90dG9tO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCF0b3BWaXopIHtcclxuICAgICAgICAgIGluVmlld0RhdGEuc2Nyb2xsQnkgPSAtKGNvbnRSZWMudG9wIC0gbGlzdFJlYy50b3ApO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gaW5WaWV3RGF0YTtcclxuICB9XHJcblxyXG5cclxuICAvKiBFdmVudCBIYW5kbGVycyAqL1xyXG5cclxuICAvKipcclxuICAgKiBSZWFkIGZvciBleHRyYSBjb250cm9sIGtleXMgcHJlc3NlZCwgdXAgYW5kIGRvd24gYXJyb3dzIGFuZCBlbnRlcixcclxuICAgKiBhbmQgdGFrZSB0aGUgYXBwcm9wcmlhdGUgYWN0aW9uIGJhc2VkIG9uIHRoZW0uXHJcbiAgICogVXAgQXJyb3cgLSBzZWxlY3QgdGhlIHByZXZpb3VzIGl0ZW0gb24gdGhlIGxpc3QsIG9yIHRoZSBsYXN0IGl0ZW0gaWYgbm9uZSBoYXMgYmVlbiBzZWxlY3RlZCB5ZXRcclxuICAgKiBEb3duIEFycm93IC0gc2VsZWN0IHRoZSBuZXh0IGl0ZW0gb24gdGhlIGxpc3QsIG9yIHRoZSBmaXJzdCBpZiBub25lIGhhcyBiZWVuIHNlbGVjdGVkIFxyXG4gICAqIEVudGVyIC0gJ2Nob29zZScgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtXHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgIGNhc2UgRXZlbnRLZXlzLlVQQVJST1c6XHJcbiAgICAgICAgICAgICAgdGhpcy5jbGVhckF1dG9TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzTGlzdEl0ZW0oZSk7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFdmVudEtleXMuRE9XTkFSUk9XOlxyXG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3ROZXh0TGlzdEl0ZW0oZSk7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFdmVudEtleXMuRU5URVI6XHJcbiAgICAgICAgICAgICAgdGhpcy5jaG9vc2VDdXJyZW50SXRlbSgpO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLFsnJGV2ZW50J10pIFxyXG4gIG9uT3V0c2lkZUNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmKCF0aGlzLndhc0luc2lkZUNsaWNrZWQpIHtcclxuICAgICAgdGhpcy53YXNGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHNldFRpbWVvdXQoXz0+e1xyXG4gICAgICAgIGlmKCF0aGlzLndhc0ZvY3VzZWQpe1xyXG4gICAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7XHJcbiAgICAgICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jaERldFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfX0sMTUwKTtcclxuICAgIH1cclxuICAgIHRoaXMud2FzSW5zaWRlQ2xpY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLFsnJGV2ZW50J10pIFxyXG4gIG9uSW5zaWRlQ2xpY2soZTogTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy53YXNJbnNpZGVDbGlja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMud2FzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkhvc3RGb2N1c0luKGU6IEZvY3VzRXZlbnQpIHtcclxuICAgIGlmKHRoaXMuaGFzSXRlbXMpe1xyXG4gICAgICB0aGlzLnBhbmVsLnNob3coKTtcclxuICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5jaERldFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndhc0ZvY3VzZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25Ib3N0Rm9jdXNPdXQoZTogRm9jdXNFdmVudCl7XHJcbiAgICB0aGlzLndhc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoXz0+e1xyXG4gICAgICBpZighdGhpcy53YXNGb2N1c2VkKXtcclxuICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9fSwxNTApO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0SXRlbU1vdXNlT3ZlcihlOiBEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLmNsZWFyQXV0b1NlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZS5pbmRleDtcclxuICAgIHRoaXMubGlzdC5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEluZGV4LHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0SXRlbUNsaWNrZWQoZTogRHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZS5pbmRleDtcclxuICAgIHRoaXMubGlzdC5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEluZGV4LHRydWUpO1xyXG4gICAgdGhpcy5jaG9vc2VDdXJyZW50SXRlbSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnVtZXJhdGUgdGhlIGRlc2lyZWQga2V5IGNvZGVzIGZvciBrZXkgZXZlbnRzXHJcbiAqL1xyXG5lbnVtIEV2ZW50S2V5cyB7XHJcbiAgICBFTlRFUiA9IDEzLFxyXG4gICAgVVBBUlJPVyA9IDM4LFxyXG4gICAgRE9XTkFSUk9XID0gNDAsXHJcbn07XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JiLXNsaWRpbmctcGFuZWwtZm9jdXNdJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGZvY3VzKSc6XCJvbkZvY3VzKCRldmVudClcIixcclxuICAgICcoYmx1ciknOlwib25CbHVyKCRldmVudClcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25JbnB1dERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdiYi1zbGlkaW5nLXBhbmVsLWZvY3VzJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG4gIEBJbnB1dCgpIGNhblNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgb25Gb2N1cyhlOiBGb2N1c0V2ZW50KSB7XHJcbiAgICBpZih0aGlzLmNhblNob3cpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Nob3dpbmcnKTtcclxuICAgICAgdGhpcy5wYW5lbC5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZTogRm9jdXNFdmVudCkge1xyXG4gICAgdGhpcy5wYW5lbC5oaWRlKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSwgIFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgQ29tcG9uZW50UmVmLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBJbnB1dCxcclxuICAgIFJlZmxlY3RpdmVJbmplY3RvcixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudERhdGEgfSBmcm9tICcuL2R5bmFtaWMtY29tcG9uZW50LWRhdGEuaW50ZXJmYWNlJztcclxuXHJcbi8qKlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYmItZHluYW1pYy1jb21wb25lbnRdJyxcclxuICBleHBvcnRBczonZHluYW1pY0NvbXAnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlIHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XHJcblxyXG4gICAgcHVibGljIGRjY0NsYXNzZXM6IGFueSA9IHt9O1xyXG5cclxuICAgIEBJbnB1dCgnYmItZHluYW1pYy1jb21wb25lbnQnKSBwdWJsaWMgc2V0IGNvbXBvbmVudERhdGEoY29tcERhdGE6IER5bmFtaWNDb21wb25lbnREYXRhKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KGNvbXBEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoY29tcERhdGE6IER5bmFtaWNDb21wb25lbnREYXRhKSB7XHJcbiAgICAgIGlmICghY29tcERhdGEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wUmVmKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q29tcFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpbnB1dFByb3ZpZGVyczogYW55W10gPSBbXVxyXG5cclxuICAgICAgaWYgKGNvbXBEYXRhLnByb3ZpZGVycykge1xyXG4gICAgICAgIGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMoY29tcERhdGEucHJvdmlkZXJzKS5tYXAoXHJcbiAgICAgICAgICAocHJvdk5hbWU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBwcm92aWRlOiBwcm92TmFtZSwgdXNlVmFsdWU6IGNvbXBEYXRhLnByb3ZpZGVyc1twcm92TmFtZV0gfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgaW5qZWN0b3IgPVxyXG4gICAgICAgIFJlZmxlY3RpdmVJbmplY3RvclxyXG4gICAgICAgICAgLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuICAgICAgICAgICAgUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpLFxyXG4gICAgICAgICAgICB0aGlzLnZjUmVmLnBhcmVudEluamVjdG9yKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBjb21wUmVmOiBDb21wb25lbnRSZWY8YW55PiA9XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlclxyXG4gICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBEYXRhLmNvbXBvbmVudClcclxuICAgICAgICAgIC5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuICAgICAgdGhpcy52Y1JlZi5pbnNlcnQoY29tcFJlZi5ob3N0Vmlldyk7XHJcblxyXG4gICAgICBpZiAoY29tcERhdGEuaW5wdXRzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoY29tcERhdGEuaW5wdXRzKS5tYXAoXHJcbiAgICAgICAgICBpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBSZWYuaW5zdGFuY2VbaW5wdXRdID0gY29tcERhdGEuaW5wdXRzW2lucHV0XTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIHRoaXMuY3VycmVudENvbXBSZWYgPSBjb21wUmVmO1xyXG4gICAgfVxyXG5cclxuIFxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEJCRHluYW1pY0NvbXBvbmVudE1vZHVsZSB7IH1cbiIsImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIFJlZmxlY3RpdmVJbmplY3RvcixcclxuICAgIFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBWaWV3Q2hpbGRyZW4sXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgSG9zdEJpbmRpbmcsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERyb3Bkb3duSXRlbUNvbXBvbmVudERhdGEgfSBmcm9tICcuLi9zZXJ2aWNlL2Ryb3Bkb3duLWlucHV0LXNlcnZpY2UuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudCB9IGZyb20gJy4uL2V2ZW50cy9kcm9wZG93bi1pbnB1dC1pdGVtLWV2ZW50cy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjondWxbYmItZHJvcGRvd24taW5wdXQtaXRlbXMtbGlzdF0nLFxyXG4gICAgdGVtcGxhdGU6IGA8bGkgKm5nRm9yPVwibGV0IGNvbXBEYXRhIG9mIGR5bmFtaWNDb21wb25lbnRzRGF0YTsgbGV0IGkgPSBpbmRleDtcIlxyXG4gICAgI2xpc3RJdGVtXHJcbiAgICBjbGFzcz1cIml0ZW1cIlxyXG4gICAgW2NsYXNzLmF1dG8tc2VsZWN0ZWRdPVwiaXRlbUF1dG9TZWxlY3RlZFtpXVwiXHJcbiAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbVNlbGVjdGVkW2ldXCJcclxuICAgIChjbGljayk9XCJvbkxpc3RJdGVtQ2xpY2soJGV2ZW50LCBpKVwiXHJcbiAgICAobW91c2VvdmVyKT1cIm9uTGlzdEl0ZW1Nb3VzZU92ZXIoJGV2ZW50LCBpKVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250YWluZXI9XCJkeW5hbWljQ29tcFwiIFtiYi1keW5hbWljLWNvbXBvbmVudF09XCJjb21wRGF0YVwiPjwvbmctdGVtcGxhdGU+XHJcbjwvbGk+XHJcblxyXG5cclxuYCxcclxuICAgIHN0eWxlczogW2BgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duSW5wdXRJdGVtc0xpc3Qge1xyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1kcm9wZG93bi1pbnB1dC1pdGVtcy1saXN0JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkeW5hbWljQ29tcG9uZW50c0RhdGE6IERyb3Bkb3duSXRlbUNvbXBvbmVudERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBkeW5hbWljQ29tcG9uZW50Q2xhc3NlczogYW55W107XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbignY29udGFpbmVyJykgXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWNDb21wb25lbnRDb250YWluZXJzOiBRdWVyeUxpc3Q8QkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlPjtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCdsaXN0SXRlbScse3JlYWQ6Vmlld0NvbnRhaW5lclJlZn0pXHJcbiAgICAgICAgcHVibGljIGxpc3RJdGVtczogUXVlcnlMaXN0PFZpZXdDb250YWluZXJSZWY+O1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbGlzdEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy50b0FycmF5KCkubWFwKGxpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAobGkuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxMSUVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbmV3Q29udGFpbmVycyA9IG5ldyBFdmVudEVtaXR0ZXI8QkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlW10+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBsaXN0SXRlbU1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudD4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGxpc3RJdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXdDb250YWluZXJzU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgaXRlbUF1dG9TZWxlY3RlZDogYm9vbGVhbltdID0gW107XHJcbiAgICBpdGVtU2VsZWN0ZWQ6IGJvb2xlYW5bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hEZXRSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVNlbGVjdGlvbihpbmRleDpudW1iZXIsIHNlbGVjdGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWRbaW5kZXhdPXNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5jaERldFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZUF1dG9TZWxlY3Rpb24oaW5kZXg6IG51bWJlciwgc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLml0ZW1BdXRvU2VsZWN0ZWRbaW5kZXhdPXNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5jaERldFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIGVtaXQgdGhlIG9yaWdpbmFsIGxpc3RcclxuICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnMuZW1pdCh0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXJzLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMubmV3Q29udGFpbmVyc1N1Yikge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnNTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmV3Q29udGFpbmVyc1N1YiA9XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcnNcclxuICAgICAgICAgICAgICAgIC5jaGFuZ2VzXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1BdXRvU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdDb250YWluZXJzLmVtaXQobmV3TGlzdC50b0FycmF5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Q29udGFpbmVyc1N1Yi51bnN1YnNjcmliZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3Q29udGFpbmVyc1N1Yikge1xyXG4gICAgICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnNTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0SXRlbUNsaWNrKFxyXG4gICAgICAgIGU6IE1vdXNlRXZlbnQsIFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1DbGljay5lbWl0KHtcclxuICAgICAgICAgICAgZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGlzdEl0ZW1Nb3VzZU92ZXIoXHJcbiAgICAgICAgZTogTW91c2VFdmVudCwgXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1Nb3VzZU92ZXIuZW1pdCh7XHJcbiAgICAgICAgICAgIGV2ZW50OiBlLFxyXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJEcm9wZG93bklucHV0IH0gZnJvbSAnLi9kcm9wZG93bi1pbnB1dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJCRHluYW1pY0NvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2R5bmFtaWMtY29tcG9uZW50L2R5bmFtaWMtY29tcG9uZW50Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dEl0ZW1zTGlzdCB9IGZyb20gJy4vaXRlbS1saXN0L2Ryb3Bkb3duLWlucHV0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZSxcclxuICAgIEJCRHluYW1pY0NvbXBvbmVudE1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJEcm9wZG93bklucHV0LFxyXG4gICAgQkJEcm9wZG93bklucHV0RGlyZWN0aXZlLCBcclxuICAgIEJCRHJvcGRvd25JbnB1dEl0ZW1zTGlzdCxcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuXHQgIEJCRHJvcGRvd25JbnB1dCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duSW5wdXRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCRHJvcGRvd25JbnB1dE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tiYi1tZW51LWl0ZW1dJyxcclxufSlcclxuZXhwb3J0IGNsYXNzICBCQk1lbnVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2JiLW1lbnUtaXRlbS1yaWdodF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgIEJCTWVudUl0ZW1SaWdodCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgUXVlcnlMaXN0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE5nWm9uZSxcclxuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBcclxuICBCQlNsaWRpbmdQYW5lbCwgXHJcbiAgQkJTbGlkaW5nUGFuZWxUb2dnbGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsJztcclxuXHJcbmltcG9ydCB7QkJNZW51SXRlbX0gZnJvbSAnLi4vY29tbW9uL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JCTWVudUl0ZW1SaWdodH0gZnJvbSAnLi9tZW51LWl0ZW0tcmlnaHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBmcm9tRXZlbnQgLCAgb2YgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlICwgIG1hcCAsICBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBBIGhhbWJ1cmdlciBtZW51IGlzIGVpdGhlciBhIGRpdiBvciBuYXYgZWxlbWVudFxyXG4gKiB0aGF0IGhhcyBhcmJpdHJhcnkgaXRlbXMgYXMgaXQncyBjb250ZW50IHdpdGggdGhlXHJcbiAqIGJiLW1lbnUtaXRlbSBvciBiYi1tZW51LWl0ZW0tcmlnaHQgZGlyZWN0aXZlcy5cclxuICogXHJcbiAqIEl0IHRha2VzIGEgc3RhbmRhcmQgY3NzIG1lZGlhIHF1ZXJ5IGFzIGFuIGlucHV0LFxyXG4gKiBleHBhbmRPblF1ZXJ5LCBhbmQgd2hlbiB0aGF0IHF1ZXJ5IHJldHVybnMgdHJ1ZSBcclxuICogdGhlIG1lbnUgd2lsbCBkaXNwbGF5IHRoZSBpdGVtcyBpbnNpZGUgaXQncyBib3JkZXJzLlxyXG4gKiBcclxuICogSWYgdGhlIHF1ZXJ5IGlzIGZhbHNlIHRoZSBtZW51IHdpbGwgYmUgcmVuZGVyZWQgaW4gXHJcbiAqIHRoZSBjb2xsYXBzZWQgc3RhdGUgd2hlcmUgYSB0b2dnbGUgd2lsbCBiZSByaWdodCBcclxuICoganVzdGlmaWVkIGFuZCB3aGVuIGNsaWNrZWQgd2lsbCBzaG93IGFuZCBoaWRlIHRoZVxyXG4gKiBtZW51IGl0ZW0gY29udGVudHMgaW4gYSBwYW5lbCB0aGF0IGRyb3BzIGRvd24uXHJcbiAqIFxyXG4gKiBUaGUgdG9nZ2xlIGl0c2VsZiBpcyBzZXQgYnkgYWRkaW5nIHRoZSBiYi1tZW51LXRvZ2dsZVxyXG4gKiBkaXJlY3RpdmUgdG8gY29udGVudCBpbnNpZGUgdGhlIG1lbnUgZWxlbWVudCB0aGF0IFxyXG4gKiBzaG91bGQgYWN0IGFzIHRoZSB0b2dnbGUuXHJcbiAqIFxyXG4gKiBUaGUgaGFtYnVyZ2VyIG1lbnUgY29tcG9uZW50IGlzIGV4cG9ydGVkIGFzIEJCSGFtYnVyZ2VyTWVudVxyXG4gKiBhbmQgcHJvdmlkZXMgdGhlIHN0YXRlIG9mIHRoZSBwYW5lbCB3aXRoIGlzT3BlbiBhbmQgdGhlIFxyXG4gKiBzdGF0ZSBvZiB0aGUgbWVudSBpdHNlbGYgYXMgZXhwYW5kZWQuICBUaGVzZSBjYW4gYmUgdXNlZCBcclxuICogdG8gbW9kaWZ5IHRoZSBtZW51IGNvbnRlbnQgaXRzZWxmIGJhc2VkIG9uIHRoZSBjdXJyZW50XHJcbiAqIHN0YXRlIG9mIHRoZSBtZW51LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItaGFtYnVyZ2VyLW1lbnVdLCBuYXZbYmItaGFtYnVyZ2VyLW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1maXhlZC1jb250ZW50XVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgPGRpdiBiYi1zbGlkaW5nLXBhbmVsXHJcbiAgICAgIGNsYXNzPVwibWVudS1pdGVtcy1jb250YWluZXJcIlxyXG4gICAgICBzbGlkZURpcmVjdGlvbj1cImRvd25cIlxyXG4gICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXNcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1zLXJpZ2h0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LWl0ZW0tcmlnaHRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgPGRpdiBbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdPVwicGFuZWxcIlxyXG4gICAgICAgI3RvZ2dsZT1cImJiU2xpZGluZ1BhbmVsVG9nZ2xlXCIgXHJcbiAgICAgICBbdG9nZ2xlT25DbGlja109XCJ0b2dnbGVPbkNsaWNrXCJcclxuICAgICAgIFtzaG93T25Ib3Zlcl09XCJzaG93T25Ib3ZlclwiXHJcbiAgICAgICBbc2hvd09uSW5pdF09XCJleHBhbmRlZFwiXHJcbiAgICAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LXRvZ2dsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5tZW51LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleDoxO2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7bWluLWhlaWdodDppbmhlcml0O21heC1oZWlnaHQ6aW5oZXJpdDtoZWlnaHQ6aW5oZXJpdH06aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4OjE7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2Lm1lbnUtaXRlbXMsOmhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2Lm1lbnUtaXRlbXMtcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2ZsZXgtYmFzaXM6YXV0b306aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcy1yaWdodHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuY29sbGFwc2VkIGRpdi5tZW51LWl0ZW1zLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXg6MX06aG9zdC5iYi1oYW1idXJnZXItbWVudS5jb2xsYXBzZWQgZGl2Lm1lbnUtaXRlbXMsOmhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuY29sbGFwc2VkIGRpdi5tZW51LWl0ZW1zLXJpZ2h0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1ncm93OjE7ZmxleC1zaHJpbms6MTtmbGV4LWJhc2lzOmF1dG99Omhvc3QuYmItaGFtYnVyZ2VyLW1lbnUuZXhwYW5kZWQgZGl2LmJiLXNsaWRpbmctcGFuZWwtdG9nZ2xle3Zpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjB9ZGl2LmJiLXNsaWRpbmctcGFuZWwtdG9nZ2xle2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0LmNvbGxhcHNlZCBkaXYubWVudS1pdGVtcy1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7bGVmdDowO3JpZ2h0OjB9Omhvc3QuY29sbGFwc2VkIGRpdi5tZW51LWNvbnRhaW5lcntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1kaXYubWVudS1pdGVtc3tmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2ZsZXgtYmFzaXM6YXV0b31gXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmV4cGFuZGVkXSc6IFwiZXhwYW5kZWRcIixcclxuICAgICdbY2xhc3MuY29sbGFwc2VkXSc6IFwiIWV4cGFuZGVkXCIsXHJcbiAgfSxcclxuICBleHBvcnRBczonYmJIYW1idXJnZXJNZW51J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJIYW1idXJnZXJNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmItaGFtYnVyZ2VyLW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZScpIHRvZ2dsZTogQkJTbGlkaW5nUGFuZWxUb2dnbGU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQkJNZW51SXRlbSwgeyByZWFkOkVsZW1lbnRSZWYsIGRlc2NlbmRhbnRzOnRydWUgfSkgXHJcbiAgaXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBAQ29udGVudENoaWxkcmVuKEJCTWVudUl0ZW1SaWdodCwge3JlYWQ6RWxlbWVudFJlZiwgZGVzY2VuZGFudHM6dHJ1ZX0pIFxyXG4gIHJpZ2h0SXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBpdGVtcyBjdXJyZW50bHkgYmVpbmcgZGlzcGxheWVkXHJcbiAgICogaW4gdGhlIGhhbWJ1cmdlciBtZW51LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXRlbUVsZW1lbnRSZWZzKCk6IEVsZW1lbnRSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy50b0FycmF5KCkuY29uY2F0KHRoaXMucmlnaHRJdGVtcy50b0FycmF5KCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGlmIHRoZSBwYW5lbCBpcyBvcGVuIG9yIG5vdC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhbmVsLmlzU2hvd2luZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY3NzIG1lZGlhIHF1ZXJ5IGFzIGEgc3RyaW5nIHRoYXRcclxuICAgKiB3aWxsIGRldGVybWluZSB3aGVuIHRoZSBoYW1idXJnZXIgbWVudVxyXG4gICAqIHNob3VsZCBleHBhbmQgdGhlIGl0ZW1zIG9udG8gdGhlIG1lbnUgXHJcbiAgICogYmFyIGFuZCByZW1vdmUgdGhlIGRyb3Bkb3duIHRvZ2dsZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGV4cGFuZE9uUXVlcnk6IHN0cmluZztcclxuICAgICAgICAgXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgbWVudSBpZiB0aGUgdG9nZ2xlIGlzIGhvdmVyZWRcclxuICAgKiBvdmVyLiAgRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgdGhlIG1lbnUgaWYgYSBjbGljayBoYXBwZW5zIG91dHNpZGVcclxuICAgKiBpdC4gIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93IHRoZSB0b2dnbGUgdG8gd29yayBvbiB0aGVcclxuICAgKiBjbGljayBldmVudC5cclxuICAgKi9cclxuICByZWFkb25seSB0b2dnbGVPbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGUgZm9yIHRoZSBjbG9zZU9uQ2xpY2tPdXRzaWRlXHJcbiAgICogaW5wdXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfY29jb0luaXQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIGEgZmxhZyBtZW1iZXIgZm9yIHRoZSBleHBhbmRlZCBcclxuICAgKiBzdGF0ZSBiZWNhdXNlIGhvc3QgYmluZGluZ3MgY2FuJ3QgXHJcbiAgICogdXNlIHRoZSBhc3luYyBwaXBlIHNvIHdlIGhhdmUgdG8gXHJcbiAgICogY2FjaGUgdGhlIG1lZGlhIHF1ZXJ5IHJlc3VsdHMuXHJcbiAgICovXHJcbiAgcHVibGljIGV4cGFuZGVkID0gZmFsc2U7O1xyXG5cclxuICAvKipcclxuICAgKiBUcmFjayB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB3aW5kb3dcclxuICAgKiByZXNpemUgZXZlbnQgYW5kIG1lZGlhIHF1ZXJ5IHJlc3VsdFxyXG4gICAqIHN0cmVhbS5cclxuICAgKi9cclxuICBwcml2YXRlIGV4cGFuZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvKlxyXG4gICAgICogU2F2ZSB0aGUgY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxyXG4gICAgICogc3RhdGUuICBUaGlzIHdpbGwgYmUgdG9nZ2xlZCBzb1xyXG4gICAgICogdGhhdCB0aGUgcGFuZWwgZG9lc250IGVudGVyIHRoZVxyXG4gICAgICogY2xvc2VkIHN0YXRlIHdoZW4gdGhlIG1lbnUgYmFyIFxyXG4gICAgICogaXMgaW4gdGhlIGV4cGFuZGVkIHN0YXRlLlxyXG4gICAgICogXHJcbiAgICAgKiBPdGhlcndpc2UgdGhlIHBhbmVsIGNvbGxhcHNlcyBhbmRcclxuICAgICAqIHRoZSBpdGVtcyBkaXNhcHBlYXIgd2l0aCBubyB0b2dnbGVcclxuICAgICAqIHRvIGJyaW5nIHRoZW0gYmFjay5cclxuICAgICAqL1xyXG4gICAgdGhpcy5fY29jb0luaXQgPSB0aGlzLmNsb3NlT25DbGlja091dHNpZGU7XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGluaXRpYWwgZXhwYW5zaW9uIHN0YXRlXHJcbiAgICAgKiBiYXNlZCBvbiB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXhwYW5kZWQgPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmV4cGFuZE9uUXVlcnkpLm1hdGNoZXM7XHJcblxyXG4gICAgaWYodGhpcy5leHBhbmRlZCkgeyAgXHJcbiAgICAgIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLypcclxuICAgICAqIFNldCB1cCB0aGUgc3RyZWFtXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXhwYW5kZWRTdWJzY3JpcHRpb24gPSBcclxuICAgICAgZnJvbUV2ZW50KHdpbmRvdyxcInJlc2l6ZVwiKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoXz0+d2luZG93Lm1hdGNoTWVkaWEodGhpcy5leHBhbmRPblF1ZXJ5KS5tYXRjaGVzKSxcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKGV4cGFuZGVkPT57XHJcbiAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVBhbmVsU3RhdGUoKTtcclxuICAgICAgfSk7ICBcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYodGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbiAmJiAhdGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbi5jbG9zZWQpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzdGF0ZSBvZiB0aGUgcGFuZWwgXHJcbiAgICogdG8gc2hvd2luZyBvciBoaWRpbmcgYmFzZWRcclxuICAgKiBvbiB0aGUgY2FjaGVkIGV4cGFuZGVkIG1lbWJlclxyXG4gICAqL1xyXG4gIHByaXZhdGUgdG9nZ2xlUGFuZWxTdGF0ZSgpIHtcclxuICAgIGlmKHRoaXMuZXhwYW5kZWQpIHsgIFxyXG4gICAgICB0aGlzLmNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b2dnbGUuc2hvd1BhbmVsKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gdGhpcy5fY29jb0luaXQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlLmhpZGVQYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCTWVudUl0ZW0gfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJNZW51SXRlbSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJCTWVudUl0ZW0sXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJDb21tb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCQ29tbW9uTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuIH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwubW9kdWxlJztcclxuaW1wb3J0IHsgQkJIYW1idXJnZXJNZW51IH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQk1lbnVJdGVtUmlnaHQgfSBmcm9tICcuL21lbnUtaXRlbS1yaWdodC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JCQ29tbW9uTW9kdWxlfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgQkJDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCSGFtYnVyZ2VyTWVudSxcclxuICAgIEJCTWVudUl0ZW1SaWdodCxcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJCSGFtYnVyZ2VyTWVudSxcclxuICAgIEJCTWVudUl0ZW1SaWdodCxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkhhbWJ1cmdlck1lbnVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCSGFtYnVyZ2VyTWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBRdWVyeUxpc3QsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld1JlZixcclxuICBSZW5kZXJlcixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgTmdab25lLFxyXG4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJNZW51SXRlbSB9IGZyb20gJy4uL2NvbW1vbi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLWNvbGxhcHNpbmctbWVudV0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAjZGlzcGxheWVkSXRlbXMgY2xhc3M9XCJkaXNwbGF5ZWRcIj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiAgI3RvZ2dsZVxyXG4gICAgICAgIFtjbGFzcy5oaWRkZW5dPVwiIWhhc092ZXJmbG93XCIgXHJcbiAgICAgICAgW2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlXT1cInBhbmVsXCJcclxuICAgICAgICBbdG9nZ2xlT25DbGlja109XCJ0b2dnbGVPbkNsaWNrXCJcclxuICAgICAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCJcclxuICAgICAgICBbc2hvd09uSG92ZXJdPVwic2hvd09uSG92ZXJcIj5cclxuICAgIFxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtdG9nZ2xlXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGJiLXNsaWRpbmctcGFuZWwgXHJcbiAgICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiXHJcbiAgICAgICAjY29sbGFwc2VkSXRlbXMgXHJcbiAgICAgICBzbGlkZURpcmVjdGlvbj1cImRvd25cIlxyXG4gICAgICAgI3BhbmVsPVwiYmJTbGlkaW5nUGFuZWxcIj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgZGl2LmRpc3BsYXllZHtmbGV4LWdyb3c6MTtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1zaHJpbms6MDtkaXNwbGF5OmZsZXh9ZGl2Lm1lbnUtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOnJvdztkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXgtc2hyaW5rOjA7ZmxleC1ncm93OjF9ZGl2LmJiLXNsaWRpbmctcGFuZWx7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDoxMDAlfWRpdi5oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59YF0sXHJcbiAgaG9zdDp7XHJcbiAgICAnKHdpbmRvdzpyZXNpemUpJzogXCJvbldpbmRvd1Jlc2l6ZSgpXCIsXHJcbiAgfSxcclxuICBleHBvcnRBczogXCJiYkNvbGxhcHNpbmdNZW51XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCQ29sbGFwc2luZ01lbnUge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYmItY29sbGFwc2luZy1tZW51JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbXMgc2hvdWxkICBcclxuICAgKiBvcGVuIGJhc2VkIG9uIGEgY2xpY2sgZXZlbnQgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvZ2dsZU9uQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbXMgc2hvdWxkIG9wZW4gXHJcbiAgICogb24gbW91c2Ugb3ZlciBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uSG92ZXIgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udHJvbHMgd2hldGhlciB0aGUgY29sbGFwc2VkIGl0ZW1zIHNob3VsZCBjbG9zZVxyXG4gICAqIFdoZW4gY2xpY2tlZCBvdXRzaWRlIHRoZSB0b2dnbGUgb3IgcGFuZWwgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEJCTWVudUl0ZW0sIHtyZWFkOkVsZW1lbnRSZWYsIGRlc2NlbmRhbnRzOiBmYWxzZX0pIFxyXG4gICAgaXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuICBAVmlld0NoaWxkKCdkaXNwbGF5ZWRJdGVtcycsIHtyZWFkOkVsZW1lbnRSZWZ9KSBcclxuICAgIGRpc3BsYXllZEl0ZW1zOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbGxhcHNlZEl0ZW1zJywge3JlYWQ6RWxlbWVudFJlZn0pIFxyXG4gICAgY29sbGFwc2VkSXRlbXM6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndG9nZ2xlJywge3JlYWQ6RWxlbWVudFJlZn0pIFxyXG4gICAgdG9nZ2xlOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQZXIgaXNzdWUgMTAwOTggQ29udGVudENoaWxkcmVuIGN1cnJlbnRseSBhbHNvIGFkZHMgdGhlIGhvc3QgY29tcG9uZW50XHJcbiAgICogdG8gYSBRdWVyeUxpc3QgdGhhdCBpdCBzYXRpc2ZpZXMgbWFraW5nIGl0IG5lY2Vzc2FyeSB0byBmaWx0ZXIgdGhlIFxyXG4gICAqIGhvc3QgY29tcG9uZW50IG91dCBvZiBpdCdzIG93biBsaXN0IGluIGNhc2Ugc29tZW9uZSB3YW50cyB0byBuZXN0XHJcbiAgICogYSBjb2xsYXBzaW5nIG1lbnUgaW5zaWRlIGFub3RoZXIgQkIgY29tcG9uZW50IHRoYXQgdXNlcyBCQk1lbnVJdGVtcy5cclxuICAgKiBcclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDA5OCNpc3N1ZWNvbW1lbnQtMjM1MTU3NjQyXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXQgaXRlbUVsZW1lbnRzKCk6IEVsZW1lbnRSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy50b0FycmF5KClcclxuICAgICAgLmZpbHRlcihlbD0+IGVsLm5hdGl2ZUVsZW1lbnQgIT09IHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBob3N0RGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmhvc3RFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBkaXNwbGF5ZWREaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkSXRlbXMubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGNvbGxhcHNlZERpdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRJdGVtcy5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgdG9nZ2xlRGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLnRvZ2dsZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgaGFzT3ZlcmZsb3cgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgXHJcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZU92ZXJmbG93KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hpY2gsIGlmIGFueSwgaXRlbXMgbmVlZCB0byBiZSBcclxuICAgKiBtb3ZlZCBpbnRvIHRoZSBjb2xsYXBzZWQgcGFuZWwgd2hlbiB0aGV5IFxyXG4gICAqIG92ZXJmbG93IHRoZSBtZW51IHdpZHRoLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgY2FsY3VsYXRlT3ZlcmZsb3coKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucHJvamVjdE5vZGVzKHRoaXMuZGlzcGxheWVkRGl2LCBcclxuICAgICAgICB0aGlzLml0ZW1FbGVtZW50cy5tYXAoZWw9PnsgcmV0dXJuIGVsLm5hdGl2ZUVsZW1lbnQgfSkpO1xyXG5cclxuICAgICAgaWYodGhpcy5hcmVEaXNwbGF5ZWRJdGVtc1RvV2lkZSgpKSB7XHJcblxyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCk9PntcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYXNPdmVyZmxvdyA9IHRydWV9KX0pO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51Q2FsY2VkUmlnaHQgPSBcclxuICAgICAgICAgICh0aGlzLmhvc3REaXYub2Zmc2V0TGVmdCArIFxyXG4gICAgICAgICAgdGhpcy5ob3N0RGl2Lm9mZnNldFdpZHRoIC0gXHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpdi5vZmZzZXRXaWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdE92ZXJmbG93SW5kZXggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XHJcbiAgICAgICAgbGV0IG92ZXJmbG93QW1vdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGl0ZW0gdGhhdCBpcyBvdXRzaWRlIHRoZSBtZW51J3Mgc2l6ZSAtIHRvZ2dsZSBzaXplXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGUgPSAodGhpcy5pdGVtRWxlbWVudHNbaV0ubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBlbGVDYWxjZWRSaWdodCA9IChlbGUub2Zmc2V0TGVmdCArIHRoaXMuaG9zdERpdi5vZmZzZXRMZWZ0ICsgZWxlLm9mZnNldFdpZHRoKTtcclxuXHJcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgaG93IG11Y2ggYW4gaXRlbSBvdmVyZmxvd3MgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgLy8gdGFraW5nIHRoZSB0b2dnbGVzIHdpZHRoIGludG8gYWNjb3VudC5cclxuICAgICAgICAgIG92ZXJmbG93QW1vdW50ID0gZWxlQ2FsY2VkUmlnaHQgLSBtZW51Q2FsY2VkUmlnaHQ7XHJcblxyXG4gICAgICAgICAgaWYob3ZlcmZsb3dBbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGZpcnN0T3ZlcmZsb3dJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsIGl0ZW1zIGFyZSBjb2xsYXBzZWRcclxuICAgICAgICBpZiAoZmlyc3RPdmVyZmxvd0luZGV4ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5wcm9qZWN0Tm9kZXModGhpcy5jb2xsYXBzZWREaXYsXHJcbiAgICAgICAgICAgICAgdGhpcy5pdGVtRWxlbWVudHMubWFwKGVsPT57cmV0dXJuIGVsLm5hdGl2ZUVsZW1lbnR9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGUgb3ZlcmZsb3cgaXRlbXMgbWFrZSBlbm91Z2ggcm9vbSBmb3IgdGhlIHRvZ2dsZVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnByb2plY3ROb2Rlcyh0aGlzLmNvbGxhcHNlZERpdixcclxuICAgICAgICAgICAgICB0aGlzLml0ZW1FbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZWwsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggPj0gZmlyc3RPdmVyZmxvd0luZGV4KX0pXHJcbiAgICAgICAgICAgICAgICAubWFwKGVsPT57cmV0dXJuIGVsLm5hdGl2ZUVsZW1lbnR9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCk9PntcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYXNPdmVyZmxvdyA9IGZhbHNlfSl9KTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBtZW51IGNvbnRlbnQgd2lkdGggaXMgbGFyZ2VyIHRoYW4gdGhlIG1lbnUgd2lkdGhcclxuICAgKi9cclxuICBwcml2YXRlIGFyZURpc3BsYXllZEl0ZW1zVG9XaWRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID4gXHJcbiAgICAgIHRoaXMuaG9zdERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXJzXHJcbiAgICovXHJcblxyXG4gIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5jYWxjdWxhdGVPdmVyZmxvdygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vY29tbW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJCQ29sbGFwc2luZ01lbnUgfSBmcm9tICcuL2NvbGxhcHNpbmctbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCQkNvbW1vbk1vZHVsZSxcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtCQkNvbGxhcHNpbmdNZW51XSxcclxuICBleHBvcnRzOiBbQkJDb2xsYXBzaW5nTWVudV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCQ29sbGFwc2luZ01lbnVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCQ29sbGFwc2luZ01lbnVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG4gfVxyXG4iLCJpbXBvcnQgeyBcclxuICAgIENvbXBvbmVudCwgXHJcbiAgICBPbkluaXQsIFxyXG4gICAgSW5wdXQsIFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgVmlld0NoaWxkLCBcclxuICAgIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwICwgIGRlYm91bmNlVGltZSAsICBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQkJNdWx0aVNlbGVjdEl0ZW0gfSBmcm9tICcuL211bHRpLXNlbGVjdC1pdGVtLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGl2W2JiLW11bHRpLXNlbGVjdF0nLFxyXG4gICAgdGVtcGxhdGU6IGA8aW5wdXQgY2xhc3M9XCJzZWxlY3Rpb25zLWZpbHRlclwiICNmaWx0ZXIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJUZXh0XCIvPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWxhYmVsc1wiPlxyXG4gICAgPHNwYW4+SXRlbXM8L3NwYW4+PHNwYW4+U2VsZWN0ZWQ8L3NwYW4+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwic2VsZWN0aW9ucy1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VzXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNob2ljZSBvZiBjaG9pY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9pY2VDbGlja2VkKGNob2ljZSlcIj57e2Nob2ljZS50ZXh0fX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdGlvbnNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc2VsZWN0aW9uIG9mIHNlbGVjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvblNlbGVjdGlvbkNsaWNrZWQoc2VsZWN0aW9uKVwiPnt7c2VsZWN0aW9uLnRleHR9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBzdHlsZXM6IFtgOmhvc3QgZGl2e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59aW5wdXQuc2VsZWN0aW9ucy1maWx0ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcn1kaXYuY29udGFpbmVyLWxhYmVscyxkaXYuc2VsZWN0aW9ucy1jb250YWluZXJ7d2lkdGg6aW5oZXJpdDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5zZWxlY3Rpb25zLWNvbnRhaW5lciB1bHtwYWRkaW5nLWxlZnQ6MH0uY2hvaWNlcyB1bCwuc2VsZWN0aW9ucyB1bHtsaXN0LXN0eWxlOm5vbmV9ZGl2LmNvbnRhaW5lci1sYWJlbHN7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMH1gXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXJUZXh0ID0gXCJTZWFyY2guLi5cIjtcclxuICAgIEBJbnB1dCgpIGZpbHRlckNoYW5nZURlbGF5bXMgPSAyMDA7XHJcblxyXG4gICAgQElucHV0KCkgc2VsZWN0aW9uSXRlbXM6IEJCTXVsdGlTZWxlY3RJdGVtW107XHJcblxyXG4gICAgZ2V0IGNob2ljZXMoKTogQkJNdWx0aVNlbGVjdEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uSXRlbXMuZmlsdGVyKGl0ZW09PnsgcmV0dXJuICFpdGVtLnNlbGVjdGVkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGlvbnMoKTogQkJNdWx0aVNlbGVjdEl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uSXRlbXMuZmlsdGVyKGl0ZW09PnsgcmV0dXJuIGl0ZW0uc2VsZWN0ZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXInKSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxCQk11bHRpU2VsZWN0SXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBpdGVtVW5zZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QkJNdWx0aVNlbGVjdEl0ZW0+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dhcm5pbmcgdGhpcyBjb21wb25lbnQgaXMgc3RpbGwgdW5kZXIgaGVhdnkgZGV2ZWxvcG1lbnQuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0l0IGlzblxcJ3QgY29tcGxldGVseSBmdW5jdGlvbmFsIHlldCBhbmQgaXMgc3ViamVjdCB0byBjaGFuZ2UuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgoZXZlbnQ6S2V5Ym9hcmRFdmVudCk9PihldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5maWx0ZXJDaGFuZ2VEZWxheW1zKSxcclxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBmaWx0ZXJUZXh0PT4gdGhpcy5maWx0ZXJJdGVtcyhmaWx0ZXJUZXh0KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHRlbXAgdGVzdGluZyBjb2RlXHJcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0aW9uSXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25JdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUG9zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llYXIgb2YgQmlydGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1Jvb2tpZSBTZWFzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0hlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnV2VpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdGb3J0eSBUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCZW5jaCBXZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ZlcnRpY2FsIEp1bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0Jyb2FkIEp1bXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1NodXR0bGUgVGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29uZSBUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEcmFmdCBQb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29sbGVnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ29sbGVnZSBEaXZpc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3VycmVudCBUZWFtJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbnMucHVzaCh0aGlzLmNob2ljZXNbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hvaWNlQ2xpY2tlZChpdGVtOiBCQk11bHRpU2VsZWN0SXRlbSkge1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3Rpb25DbGlja2VkKGl0ZW06IEJCTXVsdGlTZWxlY3RJdGVtKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbVVuc2VsZWN0ZWQuZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJJdGVtcyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCTXVsdGlTZWxlY3RDb21wb25lbnRcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEJCTXVsdGlTZWxlY3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQk11bHRpU2VsZWN0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQk11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU3Vic2NyaXB0aW9uKHN1YjogU3Vic2NyaXB0aW9uKSB7XHJcbiAgICBpZihzdWIgJiYgIXN1Yi5jbG9zZWQpIHtcclxuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBiYkRuRFR5cGUgPSBcImJiL2RuZFwiOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJCRHJhZ0FuZERyb3BTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBcbiAgRGlyZWN0aXZlLCBcbiAgT25Jbml0LCBcbiAgRWxlbWVudFJlZiwgXG4gIFZpZXdSZWYsIFxuICBWaWV3Q29udGFpbmVyUmVmLCBcbiAgVGVtcGxhdGVSZWYsIFxuICBFbWJlZGRlZFZpZXdSZWYsIFxuICBPbkRlc3Ryb3ksXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3Vic2NyaXB0aW9uICwgIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYmJEbkRUeXBlIH0gZnJvbSAnLi8uLi9kbmQuY29uc3QnO1xuaW1wb3J0IHsgY2xvc2VTdWJzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJWZWN0b3IsIEJCRHJhZ1N0YXJ0RXZlbnQgfSBmcm9tICcuLy4uL2RuZC5tb2RlbHMnO1xuXG4vKipcbiAqIEJCIERyYWdnYWJsZSBTdHJ1Y3R1cmFsIERpcmVjdGl2ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJEcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBCQkRyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGRyYWdTdGFydGVkT25WaWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxCQkRyYWdTdGFydEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZGVkT25WaWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxWaWV3UmVmPigpO1xuICBcbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGdldCBpc0JlaW5nRHJhZ2dlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNCZWluZ0RyYWdnZWQ7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRyYWdnYWJsZVRlbXBsYXRlUmVmKCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBkcmFnZ2FibGVWaWV3UmVmOiBWaWV3UmVmO1xuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgZW1iZWRkZWRUZW1wbGF0ZVJlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBkcmFnU3RhcnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIGRyYWdFbmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIHNldCBpc0RyYWdnZWQoZHJhZ2dlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQmVpbmdEcmFnZ2VkID0gZHJhZ2dlZDtcblxuICAgIGlmKHRoaXMuX2lzQmVpbmdEcmFnZ2VkKSB7XG4gICAgICAvL3RoaXMuZHJhZ1N0YXJ0ZWRPblZpZXcubmV4dCh0aGlzLmRyYWdnYWJsZVZpZXdSZWYpO1xuICAgICAgLy90aGlzLnZpZXdDb250YWluZXIuZGV0YWNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy5kcmFnRW5kZWRPblZpZXcubmV4dCh0aGlzLmRyYWdnYWJsZVZpZXdSZWYpO1xuICAgICAgLy90aGlzLnZpZXdDb250YWluZXIuaW5zZXJ0KHRoaXMuZHJhZ2dlZFZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgX2lzQmVpbmdEcmFnZ2VkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBjb250ZXh0ID0gbmV3IERyYWdnYWJsZUNvbnRleHQoKTtcblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBkbmRTZXJ2aWNlIFxuICAgKiBAcGFyYW0gdGVtcGxhdGVSZWYgXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRuZFNlcnZpY2U6IEJCRHJhZ0FuZERyb3BTZXJ2aWNlLCAgICBcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICkge1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgLypcbiAgICB0aGlzLmVtYmVkZGVkVGVtcGxhdGVSZWYgPSBcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5yZWdpc3RlckRyYWdBbmREcm9wRXZlbnRzKHRoaXMuZW1iZWRkZWRUZW1wbGF0ZVJlZi5yb290Tm9kZXNbMF0pO1xuICAgIHRoaXMuZHJhZ2dlZFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuZ2V0KDApO1xuICAgICovXG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjbG9zZVN1YnNjcmlwdGlvbih0aGlzLmRyYWdTdGFydFN1YnNjcmlwdGlvbik7XG4gICAgY2xvc2VTdWJzY3JpcHRpb24odGhpcy5kcmFnRW5kU3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHRhcmdldCBcbiAgICovXG4gIHJlZ2lzdGVyRHJhZ0FuZERyb3BFdmVudHModmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT4pIHtcbiAgICB0aGlzLmRyYWdnYWJsZVZpZXdSZWYgPSB2aWV3O1xuICAgIGxldCB0YXJnZXQgPSB2aWV3LnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIixcInRydWVcIik7XG5cbiAgICB0aGlzLmRyYWdTdGFydFN1YnNjcmlwdGlvbiA9IFxuICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGFyZ2V0LFwiZHJhZ3N0YXJ0XCIpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnQpPT57XG4gICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoYmJEbkRUeXBlLCdiYmRyYWdnYWJsZScpO1xuICAgICAgICAgIC8vZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICAgICAgICAvL2V2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoXG4gICAgICAgICAgLy8gIHRhcmdldC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQsMCwwKTtcblxuICAgICAgICAgIGxldCByZWN0ID0gZXZlbnQuc3JjRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBsZXQgeSA9IHJlY3QudG9wICsgKHJlY3QuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgbGV0IHggPSByZWN0LmxlZnQgKyAocmVjdC53aWR0aCAvIDIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHgseSk7XG5cbiAgICAgICAgICBsZXQgZTogQkJEcmFnU3RhcnRFdmVudCA9IHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXMuZHJhZ2dhYmxlVmlld1JlZixcbiAgICAgICAgICAgIG1vdXNlT2Zmc2V0OiB7XG4gICAgICAgICAgICAgIG9mZnNldFg6IGV2ZW50LmNsaWVudFggLSB4LFxuICAgICAgICAgICAgICBvZmZzZXRZOiBldmVudC5jbGllbnRZIC0geVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgbGV0IGNlbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgY2VudGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICBjZW50ZXIuc3R5bGUubGVmdCA9IGAke21vdXNlT2Zmc2V0Lm9mZnNldFh9cHhgO1xuICAgICAgICAgIGNlbnRlci5zdHlsZS50b3AgPSBgJHttb3VzZU9mZnNldC5vZmZzZXRZfXB4YDtcbiAgICAgICAgICBjZW50ZXIuc3R5bGUuYm9yZGVyUmFkaXVzPSBcIjIwcHhcIlxuICAgICAgICAgIGNlbnRlci5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcbiAgICAgICAgICBjZW50ZXIuc3R5bGUud2lkdGg9IFwiMjBweFwiO1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBpID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IGNsb25lID0gZXZlbnQuc3JjRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTExJRWxlbWVudDtcbiAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChjZW50ZXIpO1xuICAgICAgICAgIGkuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoXG4gICAgICAgICAgICAgaSxldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuICAgICAgICAgICovXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UoXG4gICAgICAgICAgICBldmVudC5zcmNFbGVtZW50LGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICAgICovXG5cbiAgICAgICAgICAvKiBDaHJvbWUgY2FsbHMgZHJhZ2VuZCBpZiB0aGUgZG9tIGlzIGNoYW5nZWQgZHVyaW5nICAqL1xuICAgICAgICAgIC8qIGRyYWcgc3RhcnQgc28gaW4gb3JkZXIgdG8gbm90IGNhbGwgZHJhZ2VuZCAgICAgICAgICovXG4gICAgICAgICAgLyogaW1tZWRpYXRlbHkgd2UgaGF2ZSB0byBmaXJlIHRoZSBkb20gbWFuaXB1bGF0aW9ucyAgKi9cbiAgICAgICAgICAvKiBvdXRzaWRlIG9mIHRoZSBldmVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0ZWRPblZpZXcubmV4dChlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnI9PmNvbnNvbGUubG9nKGVyciksXG4gICAgICAgICgpPT57fSk7XG5cbiAgICB0aGlzLmRyYWdFbmRTdWJzY3JpcHRpb24gPSBcbiAgICBmcm9tRXZlbnQodGFyZ2V0LFwiZHJhZ2VuZFwiKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogRHJhZ0V2ZW50KT0+e1xuICAgICAgICAgIC8vdGhpcy5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmRyYWdFbmRlZE9uVmlldy5uZXh0KHRoaXMuZHJhZ2dhYmxlVmlld1JlZik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycj0+Y29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgKCk9Pnt9KTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbnRleHQge1xuICBwdWJsaWMgaW1wbGljaXQkOiBhbnkgPSBudWxsO1xufVxuIiwiaW1wb3J0IHsgXG4gIERpcmVjdGl2ZSwgXG4gIE9uSW5pdCwgXG4gIFF1ZXJ5TGlzdCwgXG4gIEFmdGVyQ29udGVudEluaXQsIFxuICBDb250ZW50Q2hpbGRyZW4sICBcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIFZpZXdSZWYsXG4gIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCQkRyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RyYWdnYWJsZS9kcmFnZ2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3Vic2NyaXB0aW9uICwgIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgYmJEbkRUeXBlIH0gZnJvbSAnLi8uLi9kbmQuY29uc3QnO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgQkJEcmFnU3RhcnRFdmVudCwgQkJWZWN0b3IgfSBmcm9tICcuLi9kbmQubW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JiRG5EQ29udGFpbmVyXScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAjZG5kQ29udGFpbmVyPjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihCQkRyYWdnYWJsZURpcmVjdGl2ZSkgZHJhZ2dhYmxlc1FMOiBRdWVyeUxpc3Q8QkJEcmFnZ2FibGVEaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKFwiZG5kQ29udGFpbmVyXCIsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgZG5kQ29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBcbiAgcHJpdmF0ZSBkcmFnZ2luZ01vdXNlT2Zmc2V0OiBCQlZlY3RvcjtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRFdmVudDogQkJEcmFnU3RhcnRFdmVudDtcbiAgcHJpdmF0ZSBkcmFnZ2FibGVFbWJlZGRlZFZpZXdzOiBFbWJlZGRlZFZpZXdSZWY8YW55PltdID0gW107XG4gIHByaXZhdGUgZHJhZ1N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBEZWZhdWx0RHJhZ0xvY2F0aW9uVGFyZ2V0OiBEcmFnTG9jYXRpb25UYXJnZXQgPSB7XG4gICAgbG93SW5kZXg6IC0xLCBcbiAgICBoaWdoSW5kZXg6IC0xLFxuICAgIHZpZXdCZWluZ0RyYWdnZWQ6IG51bGxcbiAgfTtcblxuICBwcml2YXRlIGRyYWdMb2NhdGlvbiA6IERyYWdMb2NhdGlvblRhcmdldCA9IHRoaXMuRGVmYXVsdERyYWdMb2NhdGlvblRhcmdldDtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG5kU2VydmljZTogQkJEcmFnQW5kRHJvcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudFJlZjogRWxlbWVudFJlZiAgICBcbiAgKSB7XG4gICAgY29uc29sZS53YXJuKCdCQiBEcmFnIGFuZCBEcm9wIGlzIHN0aWxsIHVuZGVyIGRldmVsb3BtZW50LicpXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcImRyYWdlbnRlclwiKVxuICAgICAgLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VudGVyKSk7XG5cbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcImRyYWdvdmVyXCIpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwKSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5vbkRyYWdPdmVyKSk7XG5cbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcImRyYWdvdmVyXCIpXG4gICAgICAuc3Vic2NyaWJlKChlOkV2ZW50KT0+XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKSkpO1xuXG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgIGZyb21FdmVudCh0aGlzLmhvc3RFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXCJkcm9wXCIpXG4gICAgICAuc3Vic2NyaWJlKHRoaXMub25Ecm9wKSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgIHRoaXMuZHJhZ2dhYmxlc1FMXG4gICAgICAuY2hhbmdlc1xuICAgICAgLnN1YnNjcmliZSgoZHJhZ2dhYmxlczpCQkRyYWdnYWJsZURpcmVjdGl2ZVtdKT0+e1xuICAgICAgfSkpO1xuICAgIGNvbnNvbGUubG9nKFwiY29udGFpbmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG5kQ29udGFpbmVyKTtcbiAgICB0aGlzLmRyYWdnYWJsZXNRTC5tYXAodGhpcy5pbml0RHJhZ2dhYmxlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWI9PntcbiAgICAgIGlmKCFzdWIuY2xvc2VkKSB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBkcmFnZ2FibGUgXG4gICAqIEBwYXJhbSBpbmRleCBcbiAgICovXG4gIGluaXREcmFnZ2FibGUgPSAoZHJhZ2dhYmxlOiBCQkRyYWdnYWJsZURpcmVjdGl2ZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGxldCBlbWJlZGRlZFZpZXdSZWYgPSBcbiAgICAgIHRoaXMuZG5kQ29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhkcmFnZ2FibGUuZHJhZ2dhYmxlVGVtcGxhdGVSZWYpXG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzLnB1c2goZW1iZWRkZWRWaWV3UmVmKTtcbiAgICBkcmFnZ2FibGUucmVnaXN0ZXJEcmFnQW5kRHJvcEV2ZW50cyhlbWJlZGRlZFZpZXdSZWYpO1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIGRyYWdnYWJsZS5kcmFnU3RhcnRlZE9uVmlldy5zdWJzY3JpYmUodGhpcy5vbkRyYWdTdGFydCkpO1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kZWRPblZpZXcuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kKSk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBldmVudCBcbiAgICovXG4gIG9uRHJhZ1N0YXJ0ID0gKGV2ZW50OiBCQkRyYWdTdGFydEV2ZW50KSA9PiB7XG4gICAgdGhpcy5kcmFnU3RhcnRFdmVudCA9IGV2ZW50O1xuICAgIHRoaXMuZHJhZ2dpbmdNb3VzZU9mZnNldCA9IGV2ZW50Lm1vdXNlT2Zmc2V0O1xuICAgIGxldCB2aWV3SW5kZXggPSB0aGlzLmRuZENvbnRhaW5lci5pbmRleE9mKGV2ZW50LnZpZXcpO1xuICAgIHRoaXMuZG5kQ29udGFpbmVyLmRldGFjaCh2aWV3SW5kZXgpO1xuICAgIHRoaXMuZHJhZ2dhYmxlRW1iZWRkZWRWaWV3cy5zcGxpY2Uodmlld0luZGV4LDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gdmlldyBcbiAgICovXG4gIG9uRHJhZ0VuZCA9ICh2aWV3OiBFbWJlZGRlZFZpZXdSZWY8YW55PikgPT4ge1xuICAgIC8vdGhpcy5kbmRDb250YWluZXIuaW5zZXJ0KHZpZXcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uRHJhZ0VudGVyID0gKGV2ZW50OkRyYWdFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZHJhZ2VudGVyXCIpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG9uRHJhZ092ZXIgPSAoZXZlbnQ6RHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnb3ZlclwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudC5kYXRhVHJhbnNmZXIudHlwZXMpO1xuICAgIGxldCBzaG9ydGVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgbGV0IGNsb3Nlc3RWaWV3OiBFbWJlZGRlZFZpZXdSZWY8YW55PiA9IG51bGw7XG4gICAgbGV0IGNsb3Nlc3RJbmRleCA9IDA7IFxuICAgIGxldCBuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblxuICAgIHRoaXMuZHJhZ2dhYmxlRW1iZWRkZWRWaWV3c1xuICAgICAgLypcbiAgICAgICAqIFRPRE86IExvbmcgdGVybSBvcHRpbWl6YXRpb24gbWF5YmUgdXNlIHRoZSBpdGVtXG4gICAgICAgKiBmaWx0ZXJlZCBvdXQncyBpbmRleCBhcyB0aGUgc3RhcnRpbmcgbG9jYXRpb25cbiAgICAgICAqIGZvciBmdXJ0aGVyIGhpdCB0ZXN0cyBzaW5jZSB3ZSBrbm93IHRoYXQgaXRcbiAgICAgICAqIGlzIHRoZSBvbmUgYmVpbmcgZHJhZ2dlZC4gIEllLiAgSWYgSW5kZXggNCBpc1xuICAgICAgICogZmlsdGVyZWQgb3V0IHRoZW4gc3RhcnQgaGl0IHRlc3RzIGF0IGluZGV4IDMgXG4gICAgICAgKiBhbmQgNSBpbnN0ZWFkIG9mIHN0YXJ0aW5nIGhpdCB0ZXN0cyBhdCBpbmRleCBcbiAgICAgICAqIDAgYW5kIGNoZWNraW5nIGFsbCBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgLmZpbHRlcih2aWV3PT52aWV3IT09dGhpcy5kcmFnU3RhcnRFdmVudC52aWV3KVxuICAgICAgLm1hcCh2aWV3PT57XG4gICAgICAgIGxldCBlbGVtZW50ID0gKHZpZXcucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgICAgeDogcmVjdC5sZWZ0ICsgKHJlY3Qud2lkdGggLyAyKSxcbiAgICAgICAgICB5OiByZWN0LnRvcCArIChyZWN0LmhlaWdodCAvIDIpXG4gICAgICAgIH19KVxuICAgICAgLmZvckVhY2goKGNlbnRlckNvb3JkaW5hdGVzLCBpKSA9PntcbiAgICAgICAgbGV0IGR5ID0gdGhpcy5jYWxjdWxhdGUxRGltZW5zaW9uRGlzdGFuY2UoXG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMueSxcbiAgICAgICAgICBldmVudC5jbGllbnRZICsgdGhpcy5kcmFnU3RhcnRFdmVudC5tb3VzZU9mZnNldC5vZmZzZXRZKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSA9ICR7ZHl9IHknczogJHtjZW50ZXJDb29yZGluYXRlcy55fSAtICR7ZXZlbnQuY2xpZW50WX0gKyAke3RoaXMuZHJhZ1N0YXJ0RXZlbnQubW91c2VPZmZzZXQub2Zmc2V0WX1gKVxuICAgICAgICAgIFxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyhkeSk7XG5cbiAgICAgICAgaWYoZGlzdGFuY2UgPCBzaG9ydGVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgIGNsb3Nlc3RWaWV3ID0gY2VudGVyQ29vcmRpbmF0ZXMudmlldztcbiAgICAgICAgICBjbG9zZXN0SW5kZXggPSBpO1xuXG4gICAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHNpZGUgb2YgdGhlIGNsb3Nlc3QgZHJhZ2dhYmxlXG4gICAgICAgICAgLy8gdGhlIGRyYWdnYWJsZSBiZWluZyBkcmFnZ2VkIGlzIG9uIGFuZCBzZXQgdGhlXG4gICAgICAgICAgLy8gbmV4dCBjbG9zZXN0IGFjY29yZGluZ2x5XG4gICAgICAgICAgbmV4dENsb3Nlc3RJbmRleCA9IChkeSA8IDApPyBjbG9zZXN0SW5kZXggKyAxOiBjbG9zZXN0SW5kZXggLSAxO1xuXG4gICAgICAgICAgdGhpcy5kcmFnTG9jYXRpb24gPSB7XG4gICAgICAgICAgICBsb3dJbmRleDogTWF0aC5taW4oY2xvc2VzdEluZGV4LG5leHRDbG9zZXN0SW5kZXgpLFxuICAgICAgICAgICAgaGlnaEluZGV4OiBNYXRoLm1heChjbG9zZXN0SW5kZXgsbmV4dENsb3Nlc3RJbmRleCksXG4gICAgICAgICAgICB2aWV3QmVpbmdEcmFnZ2VkOiB0aGlzLmRyYWdTdGFydEV2ZW50LnZpZXdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvKiB0aGlzIHNpZ25pZmllcyB0aGF0IHRoZSBjb250YWluZXIgaXMgYSB2YWxpZCBkcm9wIHRhcmdldCAgKi9cbiAgICAvKiBUT0RPOiBkb2Vzbid0IHdvcmsgYXQgdGhlIG1vbWVudD8gdGhlIEJCRG5EVHlwZSBpcyBuZXZlciAqL1xuICAgIC8qIHByb3Blcmx5IGF0dGFjaGVkIHRvIHRoZSBldmVudCBldmVuIHRob3VnaCBJIGFtIHNldHRpbmcgICAqL1xuICAgIC8qIHRoZSB0eXBlIGluc2lkZSB0aGUgZHJhZ2dhYmxlIGRpcmVjdGl2ZSBldmVudC4uLiAgICAgICAgICAqL1xuICAgIC8qXG4gICAgaWYoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzLmluY2x1ZGVzKGJiRG5EVHlwZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdiYiB0cmFuc2ZlciBkZXRlY3RlZCcpO1xuICAgIH1cbiAgICAqL1xuICB9XG5cbiAgb25Ecm9wID0gKGV2ZW50OkRyYWdFdmVudCkgPT4ge1xuICAgIHRoaXMuZG5kQ29udGFpbmVyLmluc2VydChcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLnZpZXdCZWluZ0RyYWdnZWQsXG4gICAgICB0aGlzLmRyYWdMb2NhdGlvbi5oaWdoSW5kZXgpO1xuXG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzLnNwbGljZShcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLmhpZ2hJbmRleCxcbiAgICAgIDAsXG4gICAgICB0aGlzLmRyYWdMb2NhdGlvbi52aWV3QmVpbmdEcmFnZ2VkIGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHAxIFxuICAgKiBAcGFyYW0gcDIgXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZShwMTogbnVtYmVyLCBwMjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHAxIC0gcDI7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB4MSBcbiAgICogQHBhcmFtIHgyIFxuICAgKiBAcGFyYW0geTEgXG4gICAqIEBwYXJhbSB5MiBcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlMkRpbWVuc2lvbkRpc3RhbmNlKHgxOiBudW1iZXIseDI6IG51bWJlcix5MTogbnVtYmVyLHkyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgdGhpcy5jYWxjdWxhdGUxRGltZW5zaW9uRGlzdGFuY2UoeDEseDIpKioyICsgXG4gICAgICB0aGlzLmNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZSh5MSx5MikqKjIpO1xuICB9XG5cbiAgICBcbiAgXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0xvY2F0aW9uVGFyZ2V0IHtcbiAgbG93SW5kZXg6IG51bWJlcjtcbiAgaGlnaEluZGV4OiBudW1iZXI7XG4gIHZpZXdCZWluZ0RyYWdnZWQ6IFZpZXdSZWY7XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJCRHJhZ0FuZERyb3BDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AtY29udGFpbmVyL2RyYWctYW5kLWRyb3AtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCQkRyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuL2RyYWctYW5kLWRyb3Auc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJCRHJhZ0FuZERyb3BDb250YWluZXJDb21wb25lbnQsXG4gICAgQkJEcmFnZ2FibGVEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJCRHJhZ0FuZERyb3BDb250YWluZXJDb21wb25lbnQsXG4gICAgQkJEcmFnZ2FibGVEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQkJEcmFnQW5kRHJvcFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuIH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYlNlcnZpY2Uge1xuICBhY3RpdmVUYWI6IHN0cmluZyA9ICcnO1xuICB0YWJzZXRzID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vdGFiLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJUYWJdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoJ2JidGFiJykgdGFiTmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2JidGFic2V0JykgdGFic2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgnYmJhY3RpdmVjbGFzcycpIGFjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGJic2hvd3N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJzaG93ZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5iYnNob3dzdGFydC5lbWl0KHRoaXMudGFiTmFtZSk7XG4gICAgICAgICAgdGhpcy50YWJTZXJ2aWNlLnRhYnNldHNbdGhpcy50YWJzZXRdID0ge307XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudCkge1xuICAgICAgdGhpcy5iYnNob3dzdGFydC5lbWl0KHRoaXMudGFiTmFtZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSgpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG5cbiAgICAgIGxldCBhY3RpdmVDbGFzc0VsZW1lbnQgPSAnbm9uZSc7XG4gICAgICBsZXQgYWN0aXZlQ2xhc3NUYXJnZXQgPSAnbm9uZSc7XG5cbiAgICAgIC8vIEZpbmQgb3V0IGlmIHRoaXMgZWxlbWVudCwgdGhlIHBhcmVudCBlbGVtZW50LCBvciBjaGlsZCBlbGVtZW50cyBoYXZlIGFuIGFjdGl2ZSBjbGFzcyBzZXQuXG4gICAgICAvLyBPcmRlciBvZiBwcmVjZWRlbmNlOiBQYXJlbnQsIHRhYiwgY2hpbGQuXG4gICAgICBpZiAocGFyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2JiYWN0aXZlY2xhc3MnKSkge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzRWxlbWVudCA9ICdwYXJlbnQnO1xuICAgICAgICAgIGFjdGl2ZUNsYXNzVGFyZ2V0ID0gcGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWydiYnRhcmdldCddLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hY3RpdmVDbGFzcykge1xuICAgICAgICAgIGFjdGl2ZUNsYXNzRWxlbWVudCA9ICd0YWInO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQuaGFzQXR0cmlidXRlKCdiYmFjdGl2ZWNsYXNzJykpIHtcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NFbGVtZW50ID0gJ2NoaWxkJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB0YWIgZWxlbWVudCBpdHNlbGYgaGFzIGl0IHNldCwgYXBwbHkgaXQuXG4gICAgICBpZiAoYWN0aXZlQ2xhc3NFbGVtZW50ID09PSAndGFiJykge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLmhhc0F0dHJpYnV0ZSgnYmJ0YWInKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sIHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUNsYXNzRWxlbWVudCA9PT0gJ2NoaWxkJykge1xuICAgICAgICAgIGxldCBjaGlsZEFjdGl2ZUNsYXNzID0gY2hpbGQuYXR0cmlidXRlcy5iYmFjdGl2ZWNsYXNzLnZhbHVlO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLmhhc0F0dHJpYnV0ZSgnYmJ0YWInKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShwYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJhY3RpdmUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0sIGNoaWxkQWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNoaWxkLCBjaGlsZEFjdGl2ZUNsYXNzKTtcblxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVDbGFzc0VsZW1lbnQgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgbGV0IHBhcmVudEFjdGl2ZUNsYXNzID0gcGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzLmJiYWN0aXZlY2xhc3MudmFsdWU7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDbGFzc1RhcmdldCA9PT0gJ3RhYicpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2xhc3NUYXJnZXQgPT09ICdjaGlsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uY2hpbGRyZW5bMF0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2JiYWN0aXZlJywgdHJ1ZSk7XG4gICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzVGFyZ2V0ID09PSAndGFiJykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgcGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2xhc3NUYXJnZXQgPT09ICdjaGlsZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0sIHBhcmVudEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZXJlIGFyZSBubyBjaGlsZCBlbGVtZW50cyBhbmQgYmJhY3RpdmVDbGFzcyBpc24ndCBzZXQuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2JiYWN0aXZlJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYlNlcnZpY2UudGFic2V0c1t0aGlzLnRhYnNldF1bJ2FjdGl2ZVRhYiddID0gdGhpcy50YWJOYW1lO1xuICAgICAgdGhpcy5iYnNob3dlbmQuZW1pdCh0aGlzLnRhYk5hbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiVGFiQ29udGVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnREaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoJ2JidGFiY29udGVudCcpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdiYnRhYnNldCcpIHRhYnNldDogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5zZXRWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIHNldFZpc2liaWxpdHkoKSB7XG4gICAgICBsZXQgZGlzcGxheSA9IHRoaXMudGFiU2VydmljZS50YWJzZXRzW3RoaXMudGFic2V0XS5hY3RpdmVUYWIgPT09IHRoaXMubmFtZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCBkaXNwbGF5KTtcbn1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUYWJTZXJ2aWNlIH0gZnJvbSAnLi90YWIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFiQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYkRpcmVjdGl2ZSxcbiAgICBUYWJDb250ZW50RGlyZWN0aXZlXG4gIF0sXG4gIFxuICBleHBvcnRzOiBbXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYkNvbnRlbnREaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCQlRhYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJUYWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUYWJTZXJ2aWNlXVxuICAgIH07XG4gIH1cbiB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFnQW5kRHJvcFNlcnZpY2Uge1xuICBlbDogYW55O1xuICBkcm9wem9uZUluZGV4OiBudW1iZXI7XG4gIGRyb3BwYWJsZUluZGV4OiBudW1iZXI7XG4gIG1vZGVsOiBBcnJheTxhbnk+O1xuICBkcm9wem9uZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcFNlcnZpY2UgfSBmcm9tICcuL2RyYWctYW5kLWRyb3Auc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYkRyb3BwZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wcGVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBkbmRTZXJ2aWNlOiBEcmFnQW5kRHJvcFNlcnZpY2VcbiAgKSB7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmRyYWdzdGFydCA9IHRoaXMuZHJhZ3N0YXJ0O1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5kcmFnZW5kID0gdGhpcy5kcmFnZW5kO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5iYmRyb3BwZXJDbGFzcykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiZHJvcHBlckNsYXNzKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgnYmJkcm9wcGVyJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2JiZHJvcHBlckNsYXNzJykgYmJkcm9wcGVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYmhvbGRpbmdDbGFzcycpIGJiaG9sZGluZ0NsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJwYXlsb2FkJykgYmJwYXlsb2FkOnN0cmluZztcbiAgQElucHV0KCdiYmRyb3BwZXJJZCcpIGJiZHJvcHBlcklkOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBiYnN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgZHJhZ3N0YXJ0KGV2ZW50OmFueSkge1xuICAgICAgaWYgKHRoaXMuYmJob2xkaW5nQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiaG9sZGluZ0NsYXNzKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5iYnBheWxvYWQgfHwgbnVsbCk7XG4gICAgICB0aGlzLmRuZFNlcnZpY2UuZWwgPSB0aGlzLmVsO1xuICAgICAgaWYodGhpcy5iYmRyb3BwZXJJZCkge1xuICAgICAgICAgIHRoaXMuYmJzdGFydC5lbWl0KHRoaXMuYmJkcm9wcGVySWQpO1xuICAgICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcpIGRyYWdlbmQoKSB7XG4gICAgICBpZiAodGhpcy5iYmhvbGRpbmdDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJob2xkaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5iYmRyb3BwZXJJZCkge1xuICAgICAgICAgIHRoaXMuYmJzdGFydC5lbWl0KHRoaXMuYmJkcm9wcGVySWQpO1xuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiRHJvcFpvbmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcm9wWm9uZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgZG5kU2VydmljZTogRHJhZ0FuZERyb3BTZXJ2aWNlLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5kbmRTZXJ2aWNlLmRyb3B6b25lcy5pbmNsdWRlcyh0aGlzLm5hbWUpKSB7XG4gICAgICAgICAgdGhpcy5kbmRTZXJ2aWNlLmRyb3B6b25lcy5wdXNoKHRoaXMubmFtZSk7XG4gICAgICB9XG4gIH1cblxuICBASW5wdXQoJ2JiZHJvcHpvbmUnKSBuYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCdiYmRyb3B6b25lQ2xhc3MnKSBiYmRyb3B6b25lQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYmRyb3B6b25lSG92ZXJDbGFzcycpIGJiZHJvcHpvbmVIb3ZlckNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJkcm9wem9uZUlkJykgYmJkcm9wem9uZUlkOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBiYmRhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIGRyYWdvdmVyKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VudGVyJykgZHJhZ2VudGVyKCkge1xuICAgICAgaWYgKHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lSWQpIHtcbiAgICAgICAgICB0aGlzLmJiZW50ZXIuZW1pdCh0aGlzLmJiZHJvcHpvbmVJZCk7XG4gICAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnKSBkcmFnbGVhdmUoKSB7XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVJZCkge1xuICAgICAgICAgIHRoaXMuYmJsZWF2ZS5lbWl0KHRoaXMuYmJkcm9wem9uZUlkKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBkcm9wKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpO1xuXG4gICAgICBsZXQgZHJvcHBlZCA9IHRoaXMuZG5kU2VydmljZS5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKGRyb3BwZWQuYXR0cmlidXRlcy5iYmRyb3BwZXIudmFsdWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kbmRTZXJ2aWNlLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSwgdGhpcy5kbmRTZXJ2aWNlLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmRuZFNlcnZpY2UuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgaWYgKGRyb3BwZWQuYXR0cmlidXRlcy5iYnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5iYmRhdGEuZW1pdChkcm9wcGVkLmF0dHJpYnV0ZXMuYmJwYXlsb2FkLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lSWQpIHtcbiAgICAgICAgICB0aGlzLmJiZHJvcC5lbWl0KHRoaXMuYmJkcm9wem9uZUlkKTtcbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3BwZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3BwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bab25lRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wLXpvbmUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEcm9wcGVyRGlyZWN0aXZlLFxuICAgIERyb3Bab25lRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHJvcHBlckRpcmVjdGl2ZSxcbiAgICBEcm9wWm9uZURpcmVjdGl2ZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCQkRyYWdBbmREcm9wTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCQkRyYWdBbmREcm9wTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRHJhZ0FuZERyb3BTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJTb3J0YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgQElucHV0KCdiYnNvcnRhYmxlJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2Jib3B0aW9ucycpIG9wdGlvbnM6IGFueTtcblxuICAvLyBFdmVudCBlbWl0dGVyc1xuICBAT3V0cHV0KCkgb3JkZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJzdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJibGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZHJhZ2dlZEl0ZW06bnVtYmVyO1xuICBkcm9wVGFyZ2V0OmFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICB0aGlzLmluaXRDaGlsZHJlbigpO1xuICB9XG5cbiAgLy8gRHJvcHBlciBsaXN0ZW5lcnNcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSkgZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldFsnYmJ2YWx1ZSddIHx8IG51bGwpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob2xkaW5nQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG9sZGluZ0NsYXNzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2VkSXRlbSA9ICtldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXTtcbiAgICAgIHRoaXMuYmJzdGFydC5lbWl0KHRoaXMuZHJhZ2dlZEl0ZW0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pIGRyYWdlbmQoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG9sZGluZ0NsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmhvbGRpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmJiZW5kLmVtaXQodGhpcy5kcmFnZ2VkSXRlbSk7XG4gIH1cblxuICAvLyBEcm9wem9uZSBsaXN0ZW5lcnNcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKSBkcmFnb3ZlcihldmVudDphbnkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKSBkcmFnZW50ZXIoZXZlbnQ6YW55KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXRbJ2Jic29ydGFibGUtbmFtZSddID09PSB0aGlzLm5hbWUgJiYgZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLWluZGV4J10gIT09IHRoaXMuZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3B6b25lQ2xhc3MoZXZlbnQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmJiZW50ZXIuZW1pdCgrZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLWluZGV4J10pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSkgZHJhZ2xlYXZlKGV2ZW50OmFueSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLW5hbWUnXSA9PT0gdGhpcy5uYW1lICYmIGV2ZW50LnRhcmdldFsnYmJzb3J0YWJsZS1pbmRleCddICE9PSB0aGlzLmRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVEcm9wem9uZUNsYXNzKGV2ZW50LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYmJsZWF2ZS5lbWl0KCtldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgZHJvcChldmVudDphbnkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBkb0Ryb3A6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICBsZXQgZHJvcFRhcmdldDphbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoZHJvcFRhcmdldFsnYmJzb3J0YWJsZS1uYW1lJ10gIT09IHRoaXMubmFtZSkge1xuICAgICAgICAgIHdoaWxlIChkcm9wVGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKGRyb3BUYXJnZXQucGFyZW50Tm9kZVsnYmJzb3J0YWJsZS1uYW1lJ10gPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgZHJvcFRhcmdldCA9IGRyb3BUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgIGRvRHJvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRyb3BUYXJnZXQgPSBkcm9wVGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9Ecm9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvRHJvcCkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZHJvcFRhcmdldCwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZHJhZ2dlZEl0ZW0gPSB0aGlzLmRyYWdnZWRJdGVtO1xuICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IGRyb3BUYXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXTtcblxuICAgICAgICAgIGlmIChkcmFnZ2VkSXRlbSA+IG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpID49IG5ld1Bvc2l0aW9uICYmIGkgPCBkcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJzb3J0YWJsZS1pbmRleCcsIGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdiYnNvcnRhYmxlLWluZGV4JywgbmV3UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPiBkcmFnZ2VkSXRlbSAmJiBpIDw9IG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdiYnNvcnRhYmxlLWluZGV4JywgaSAtIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5iYmRyb3AuZW1pdCgrbmV3UG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMub3JkZXJDaGFuZ2VkLmVtaXQoeyBkcmFnZ2VkSXRlbSwgbmV3UG9zaXRpb24gfSk7XG4gICAgICB9XG4gIH1cblxuICBpbml0Q2hpbGRyZW4oKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBpKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtbmFtZScsIHRoaXMubmFtZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc3RpbmdDbGFzcykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgdGhpcy5vcHRpb25zLnJlc3RpbmdDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgdXBkYXRlRHJvcHpvbmVDbGFzcyhldmVudDphbnksIGNzc0NsYXNzOnN0cmluZywgYWRkaW5nOmJvb2xlYW4pIHtcbiAgICAgIGxldCBwYXJlbnROb2RlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB3aGlsZSAocGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwYXJlbnROb2RlWydiYnNvcnRhYmxlLW5hbWUnXSA9PT0gdGhpcy5uYW1lICYmIHBhcmVudE5vZGVbJ2Jic29ydGFibGUtaW5kZXgnXSAhPT0gdGhpcy5kcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICBpZiAoYWRkaW5nICYmICFwYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocGFyZW50Tm9kZSwgY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhwYXJlbnROb2RlLCBjc3NDbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTb3J0YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vc29ydGFibGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTb3J0YWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNvcnRhYmxlRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCU29ydGFibGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCU29ydGFibGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdXG4gICAgfTtcbiAgfVxuIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4vc2xpZGluZy1wYW5lbC9pbmRleCc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51L2luZGV4JztcclxuaW1wb3J0IHsgQkJTbGlkZW91dE1lbnVNb2R1bGUgfSBmcm9tICcuL3NsaWRlb3V0LW1lbnUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXRNb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duLWlucHV0L2luZGV4JztcclxuaW1wb3J0IHsgQkJIYW1idXJnZXJNZW51TW9kdWxlIH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS9pbmRleCc7XHJcbmltcG9ydCB7IEJCQ29sbGFwc2luZ01lbnVNb2R1bGUgfSBmcm9tICcuL2NvbGxhcHNpbmctbWVudS9pbmRleCc7XHJcbmltcG9ydCB7IEJCTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICcuL211bHRpLXNlbGVjdC9pbmRleCc7XHJcbmltcG9ydCB7IEJCQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi9jb21tb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9pbmRleCc7XHJcbmltcG9ydCB7IEJCVGFiTW9kdWxlIH0gZnJvbSAnLi90YWIvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wL2luZGV4JztcclxuaW1wb3J0IHsgQkJTb3J0YWJsZU1vZHVsZSB9IGZyb20gJy4vc29ydGFibGUvaW5kZXgnO1xyXG5cclxuY29uc3QgQkJfTU9EVUxFUyA9IFtcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgQkJEcm9wZG93bk1lbnVNb2R1bGUsXHJcbiAgICBCQlNsaWRlb3V0TWVudU1vZHVsZSxcclxuICAgIEJCRHJvcGRvd25JbnB1dE1vZHVsZSxcclxuICAgIEJCSGFtYnVyZ2VyTWVudU1vZHVsZSxcclxuICAgIEJCQ29sbGFwc2luZ01lbnVNb2R1bGUsXHJcbiAgICBCQk11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgQkJDb21tb25Nb2R1bGUsXHJcbiAgICBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlLFxyXG4gICAgQkJUYWJNb2R1bGUsXHJcbiAgICBCQkRyYWdBbmREcm9wTW9kdWxlLFxyXG4gICAgQkJTb3J0YWJsZU1vZHVsZSxcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBvbmx5IGV4aXN0cyB0byBhbGxvdyB0aGUgZGVtbyBcclxuICogdG8gaW1wb3J0IHRoZSBlbnRpcmUgbGlicmFyeSBxdWlja2x5LiAgSXQgXHJcbiAqIHNob3VsZCBub3QgYmUgdXNlZCBieSBjb25zdW1lcnMgb2YgdGhlIFxyXG4gKiBsaWJyYXJ5IGFuZCBpcyBub3QgZXhwb3J0ZWQgYXMgcGFydCBvZiBcclxuICogdGhlIGRpc3RyYnV0ZWQgcGFja2FnZS5cclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcm9wZG93bk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJTbGlkZW91dE1lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcm9wZG93bklucHV0TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCSGFtYnVyZ2VyTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkNvbGxhcHNpbmdNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCTXVsdGlTZWxlY3RNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJDb21tb25Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQlRhYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyYWdBbmREcm9wTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgXHJcbiAgXSxcclxuICBleHBvcnRzOiBCQl9NT0RVTEVTXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlJvb3RNb2R1bGUgeyB9XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IEJCX01PRFVMRVMsXHJcbiAgZXhwb3J0czogQkJfTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJlYXJCb25lc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge25nTW9kdWxlOiBCQlJvb3RNb2R1bGUsIHByb3ZpZGVyczogW119O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQW5pbWF0aW9uQnVpbGRlciIsIkluamVjdCIsIklucHV0IiwiSW5qZWN0YWJsZSIsIlJlbmRlcmVyRmFjdG9yeTIiLCJEaXJlY3RpdmUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJFdmVudEVtaXR0ZXIiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiT3V0cHV0IiwiZnJvbUV2ZW50IiwibWVyZ2UiLCJmaWx0ZXIiLCJtYXAiLCJvZiIsImRlYm91bmNlVGltZSIsImNvbWJpbmVMYXRlc3QiLCJIb3N0QmluZGluZyIsIlZpZXdDaGlsZCIsIkJlaGF2aW9yU3ViamVjdCIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiZm9yd2FyZFJlZiIsIkhvc3RMaXN0ZW5lciIsIlJlZmxlY3RpdmVJbmplY3RvciIsIlZpZXdDb250YWluZXJSZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q2hpbGRyZW4iLCJDb250ZW50Q2hpbGRyZW4iLCJSZW5kZXJlciIsIk5nWm9uZSIsIlRlbXBsYXRlUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFPQSx5QkFBYSx1QkFBdUIsR0FDbEMsSUFBSUEsbUJBQWMsQ0FBd0MsZ0NBQWdDLENBQUMsQ0FBQzs7Ozs7QUFNOUYseUJBQWEsdUJBQXVCLEdBQ2xDLElBQUlBLG1CQUFjLENBQXdDLGdDQUFnQyxDQUFDOzs7Ozs7QUNmN0Y7Ozs7UUE0RUUscUNBQ1UsT0FDQSxVQUNBLFVBRUEsZUFBd0QsRUFFeEQsZUFBd0Q7WUFOeEQsVUFBSyxHQUFMLEtBQUs7WUFDTCxhQUFRLEdBQVIsUUFBUTtZQUNSLGFBQVEsR0FBUixRQUFRO1lBRVIsb0JBQWUsR0FBZixlQUFlLENBQXlDO1lBRXhELG9CQUFlLEdBQWYsZUFBZSxDQUF5Qzs7Ozs7bUNBN0N2QyxNQUFNO1NBOEM1Qjs4QkFuQ08sbURBQVU7Ozs7Ozs7Ozs7OzBCQUFDLEtBQW1DO2dCQUN4RCxJQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUNqQyxJQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssTUFBTSxFQUFFO3dCQUNsQyxJQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7NEJBQzFELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3lCQUMzQjs2QkFDSSxJQUFHLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxJQUFJLEtB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