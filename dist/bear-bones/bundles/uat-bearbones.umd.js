(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@uat/bearbones', ['exports', '@angular/animations', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global.uat = global.uat || {}, global.uat.bearbones = {}),global.ng.animations,global.ng.core,global.rxjs,global.rxjs.operators,global.ng.common));
}(this, (function (exports,animations,core,rxjs,operators,common) { 'use strict';

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
                            BBSlidingPanelToggle
                        ],
                        exports: [
                            BBSlidingPanel,
                            BBSlidingPanelToggle
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
    exports.BBRootModule = BBRootModule;
    exports.BearBonesModule = BearBonesModule;
    exports.ɵi = BBDragAndDropService;
    exports.ɵm = DropZoneDirective;
    exports.ɵl = DropperDirective;
    exports.ɵf = BBDropdownInputDirective;
    exports.ɵg = BBDropdownInputItemsList;
    exports.ɵe = BBDynamicComponentDirective;
    exports.ɵd = BBDynamicComponentModule;
    exports.ɵh = BBMenuItemRight;
    exports.ɵb = horizontalSlideAnimations;
    exports.ɵa = verticalSlideAnimations;
    exports.ɵc = SlideAnimationDirections;
    exports.ɵn = SortableDirective;
    exports.ɵk = TabContentDirective;
    exports.ɵj = TabDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWF0LWJlYXJib25lcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuZW51bXMudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuYW5pbWF0aW9ucy50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkaW5nLXBhbmVsL3RvZ2dsZS9zbGlkaW5nLXBhbmVsLXRvZ2dsZS5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9zbGlkZW91dC1tZW51L3NsaWRlb3V0LW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc2xpZGVvdXQtbWVudS9zbGlkZW91dC1tZW51Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLWlucHV0L2Ryb3Bkb3duLWlucHV0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtY29tcG9uZW50L2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2R5bmFtaWMtY29tcG9uZW50L2R5bmFtaWMtY29tcG9uZW50Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2Ryb3Bkb3duLWlucHV0L2l0ZW0tbGlzdC9kcm9wZG93bi1pbnB1dC1pdGVtLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvZHJvcGRvd24taW5wdXQvZHJvcGRvd24taW5wdXQubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29tbW9uL21lbnUtaXRlbS5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9oYW1idXJnZXItbWVudS9tZW51LWl0ZW0tcmlnaHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvaGFtYnVyZ2VyLW1lbnUvaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9jb2xsYXBzaW5nLW1lbnUvY29sbGFwc2luZy1tZW51LmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbGxhcHNpbmctbWVudS9jb2xsYXBzaW5nLW1lbnUubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0Lm1vZHVsZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2NvbW1vbi9jbG9zZS1zdWJzY3JpcHRpb24udHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9kbmQuY29uc3QudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9kcmFnLWFuZC1kcm9wLnNlcnZpY2UudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wLWNvbXBvbmVudC9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2RyYWctYW5kLWRyb3AtY29udGFpbmVyL2RyYWctYW5kLWRyb3AtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2RyYWctYW5kLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvdGFiL3RhYi5zZXJ2aWNlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvdGFiL3RhYi5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi90YWIvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvdGFiL3RhYi5tb2R1bGUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3Auc2VydmljZS50cyIsIm5nOi8vQHVhdC9iZWFyYm9uZXMvbGliL2RyYWctYW5kLWRyb3AvZHJvcHBlci5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wL2Ryb3Atem9uZS5kaXJlY3RpdmUudHMiLCJuZzovL0B1YXQvYmVhcmJvbmVzL2xpYi9kcmFnLWFuZC1kcm9wL2RyYWctYW5kLWRyb3AubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc29ydGFibGUvc29ydGFibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvc29ydGFibGUvc29ydGFibGUubW9kdWxlLnRzIiwibmc6Ly9AdWF0L2JlYXJib25lcy9saWIvYmVhci1ib25lcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zIHtcclxuICAgIENMT1NFID0gJ2Nsb3NlJyxcclxuICAgIFNMSURFX0xFRlQgPSAnc2xpZGUtbGVmdCcsXHJcbiAgICBTTElERV9SSUdIVCA9ICdzbGlkZS1yaWdodCcsXHJcbiAgICBTTElERV9VUCA9ICdzbGlkZS11cCcsXHJcbiAgICBTTElERV9ET1dOID0gJ3NsaWRlLWRvd24nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTbGlkZURpcmVjdGlvbnMge1xyXG4gICAgTEVGVCA9ICdsZWZ0JyxcclxuICAgIFJJR0hUID0gJ3JpZ2h0JyxcclxuICAgIFVQID0gJ3VwJyxcclxuICAgIERPV04gPSAnZG93bicsXHJcbn0iLCJpbXBvcnQgeyBhbmltYXRpb24sIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgZ3JvdXAsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25NZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMgfSBmcm9tIFwiLi9zbGlkaW5nLXBhbmVsLmVudW1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVydGljYWxTbGlkZUFuaW1hdGlvbnMoKTogQW5pbWF0aW9uTWV0YWRhdGEgIHtcclxuICAgIHJldHVybiB0cmlnZ2VyKCd2ZXJ0aWNhbFRyaWdnZXInLCBbXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBzdGF0ZShTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfRE9XTiwgc3R5bGUoe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1VQLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIFNsaWRlRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuU0xJREVfRE9XTiwgXHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgYCR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFfSA9PiAke1NsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9ET1dOfWAsIFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbihcclxuICAgICAgICAgICAgYCR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0RPV059ID0+ICR7U2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFfWAsXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuU0xJREVfRE9XTiArIFxyXG4gICAgICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgICAgICBTbGlkZURpcmVjdGlvbnMuQ0xPU0UsIFxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3RvcCcgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLW91dCcsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AnIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX1VQLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2JvdHRvbScgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcxNTBtcyBlYXNlLWluJywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2JvdHRvbScgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfVVAgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdib3R0b20nIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnYm90dG9tJyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob3Jpem9udGFsU2xpZGVBbmltYXRpb25zKCk6IEFuaW1hdGlvbk1ldGFkYXRhICB7XHJcbiAgICByZXR1cm4gdHJpZ2dlcignaG9yaXpvbnRhbFRyaWdnZXInLCBbXHJcbiAgICAgICAgc3RhdGUoU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBzdGF0ZShTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQsIHN0eWxlKHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHN0YXRlKFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9MRUZULCBzdHlsZSh7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScsIFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9SSUdIVCwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdsZWZ0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2UtaW4nLCBcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnbGVmdCcgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfUklHSFQgKyBcclxuICAgICAgICAgICAgJyA9PiAnICsgXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSwgW1xyXG4gICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgXHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdsZWZ0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2xlZnQnIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oXHJcbiAgICAgICAgICAgIFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRSArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0xFRlQsIFtcclxuICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAncmlnaHQnIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicsIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCBcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICdyaWdodCcgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICAgICBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuU0xJREVfTEVGVCArIFxyXG4gICAgICAgICAgICAnID0+ICcgKyBcclxuICAgICAgICAgICAgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHsgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCBcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0JyBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JywgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3JpZ2h0JyBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgXHJcbiAgQ29tcG9uZW50LCBcclxuICBJbnB1dCwgXHJcbiAgT3V0cHV0LCBcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE5nWm9uZSxcclxuICBIb3N0QmluZGluZyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGtleWZyYW1lcyxcclxuICBhbmltYXRlLFxyXG4gIGdyb3VwXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBcclxuICB2ZXJ0aWNhbFNsaWRlQW5pbWF0aW9ucywgXHJcbiAgaG9yaXpvbnRhbFNsaWRlQW5pbWF0aW9ucyB9IGZyb20gJy4vc2xpZGluZy1wYW5lbC5hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLCBTbGlkZURpcmVjdGlvbnMgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwuZW51bXMnO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQSBzbGlkaW5nIHBhbmVsIGlzIGEgZGl2IGVsZW1lbnQgdGhhdCBjYW4gYmUgXHJcbiAqIHNldCB0byBzbGlkZSB1cCwgZG93biwgbGVmdCwgb3IgcmlnaHQuXHJcbiAqIFxyXG4gKiBJdCBjYW4gYmUgdGllZCB0byBhIHNsaWRpaW5nIHBhbmVsIHRvZ2dsZVxyXG4gKiBvciBjYW4gYmUgc2hvd24gb3IgaGlkZGVuIGJ5IGNhbGxpbmcgdGhlXHJcbiAqIHB1YmxpYyBtZW1iZXJzIHNob3csIGhpZGUsIG9yIHRvZ2dsZS4gXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1zbGlkaW5nLXBhbmVsXScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tAaG9yaXpvbnRhbFRyaWdnZXJdJzonaG9yaXpvbnRhbFN0YXRlJyxcclxuICAgICdbQHZlcnRpY2FsVHJpZ2dlcl0nOid2ZXJ0aWNhbFN0YXRlJyxcclxuICAgICdbY2xhc3Mub3Blbl0nOidpc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5jbG9zZWRdJzonIWlzU2hvd2luZycsXHJcbiAgICAnW2NsYXNzLnBpbm5lZF0nOidwaW5uZWQnLFxyXG4gICAgJyhtb3VzZWVudGVyKSc6J21vdXNlRW50ZXJQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJyhtb3VzZWxlYXZlKSc6J21vdXNlTGVhdmVQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJyhtb3VzZW92ZXIpJzonbW91c2VPdmVyUGFuZWwuZW1pdCgkZXZlbnQpJyxcclxuICAgICcoY2xpY2spJzonY2xpY2tQYW5lbC5lbWl0KCRldmVudCknLFxyXG4gICAgJ1tjbGFzcy5iYi1zbGlkaW5nLXBhbmVsXSc6XCIndHJ1ZSdcIlxyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdmVydGljYWxTbGlkZUFuaW1hdGlvbnMoKSwgXHJcbiAgICBob3Jpem9udGFsU2xpZGVBbmltYXRpb25zKCksXHJcbiAgXSxcclxuICBleHBvcnRBczogJ2JiU2xpZGluZ1BhbmVsJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGluZ1BhbmVsIHtcclxuICAvKipcclxuICAgKiBTcGVjaWZ5IHRoZSBkaXJlY3Rpb24gb2YgdGhlIHBhbmVscyBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKiBWYWxpZCB2YWx1ZXM6ICd1cCcsICdkb3duJywgJ2xlZnQnLCBvciAncmlnaHQnXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2xpZGVEaXJlY3Rpb246IFNsaWRlRGlyZWN0aW9ucyA9IFNsaWRlRGlyZWN0aW9ucy5ET1dOO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmb3Igd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSBwYW5lbC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbW91c2VFbnRlclBhbmVsPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGZvciB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHBhbmVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtb3VzZUxlYXZlUGFuZWw9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgZm9yIHdoZW4gdGhlIG1vdXNlIGlzIG92ZXIgdGhlIHBhbmVsLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtb3VzZU92ZXJQYW5lbD0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmb3Igd2hlbiB0aGUgcGFuZWwgaXMgY2xpY2tlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgY2xpY2tQYW5lbD0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgcGlubmVkID0gZmFsc2U7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIGZvciB0aGUgaG9yaXpvbnRhbCBhbmltYXRpb25zLlxyXG4gICAqL1xyXG4gIGhvcml6b250YWxTdGF0ZSA6IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucyA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBmb3IgdGhlIHZlcnRpY2FsIGFuaW1hdGlvbnMuXHJcbiAgICovXHJcbiAgdmVydGljYWxTdGF0ZSA6IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucyA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHBhbmVsIGlzIG9wZW4gb3IgY2xvc2VkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNTaG93aW5nKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmhvcml6b250YWxTdGF0ZSAhPT0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFIHx8XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFN0YXRlICE9PSBTbGlkZUFuaW1hdGlvbkRpcmVjdGlvbnMuQ0xPU0UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgcGFuZWwgd2l0aCBhIHNsaWRpbmcgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KCkge1xyXG4gICAgc3dpdGNoKHRoaXMuc2xpZGVEaXJlY3Rpb24pIHtcclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuTEVGVDoge1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0xFRlQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBTbGlkZURpcmVjdGlvbnMuUklHSFQ6IHtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9SSUdIVDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNsaWRlRGlyZWN0aW9ucy5VUDoge1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5TTElERV9VUDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFNsaWRlRGlyZWN0aW9ucy5ET1dOOiB7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLlNMSURFX0RPV047XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxTdGF0ZSA9IFNsaWRlQW5pbWF0aW9uRGlyZWN0aW9ucy5DTE9TRTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIHBhbmVsIHdpdGggYSBzbGlkaW5nIGFuaW1hdGlvbi5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZSgpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgdGhpcy52ZXJ0aWNhbFN0YXRlID0gU2xpZGVBbmltYXRpb25EaXJlY3Rpb25zLkNMT1NFO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0aGUgcGFuZWwgc3RhdGUgd2l0aCBhIHNsaWRpbmcgYW5pbWF0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyB0b2dnbGUoKSB7XHJcbiAgICBpZih0aGlzLmlzU2hvd2luZyl7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICBEaXJlY3RpdmUsIFxyXG4gIElucHV0LCBcclxuICBIb3N0TGlzdGVuZXIsIFxyXG4gIEhvc3RCaW5kaW5nLCBcclxuICBOZ1pvbmUsIFxyXG4gIEVsZW1lbnRSZWYsIFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiAsICBmcm9tRXZlbnQgLCAgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyICwgIGNvbWJpbmVMYXRlc3QgLCAgbWVyZ2UgLCAgbWFwICwgIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbi8qKlxyXG4gKiBDb250cm9sIGEgc2xpZGluZyBwYW5lbHMgc2hvd24gb3IgaGlkZGVuIHN0YXRlLlxyXG4gKiBcclxuICogU2hvdWxkIG9ubHkgYmUgYXR0YWNoZWQgdG8gZWxlbWVudHMgdGhhdCBoYXZlXHJcbiAqIGEgY2xpY2sgZXZlbnQuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Mub3Blbl0nOidwYW5lbC5pc1Nob3dpbmcnLFxyXG4gICAgJ1tjbGFzcy5jbG9zZWRdJzonIXBhbmVsLmlzU2hvd2luZycsXHJcbiAgICAnW2NsYXNzLnBpbm5lZF0nOidwYW5lbC5waW5uZWQnLFxyXG4gICAgJ1tjbGFzcy5iYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV0nOlwiJ3RydWUnXCJcclxuICB9LFxyXG4gIGV4cG9ydEFzOidiYlNsaWRpbmdQYW5lbFRvZ2dsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGluZ1BhbmVsVG9nZ2xlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGFuZWwgdGhhdCB0aGUgdG9nZ2xlIGlzIGF0dGFjaGVkIHRvLlxyXG4gICAqIFxyXG4gICAqIElmIHRoaXMgdmFsdWUgaXMgbm90IHNldCBhbiBlcnJvciB3aWxsIGJlIFxyXG4gICAqIHRocm93biBkdXJpbmcgaW5pdC5cclxuICAgKi9cclxuICBASW5wdXQoJ2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBwYW5lbCBzaG91bGQgb3BlbiBiYXNlZCBcclxuICAgKiBvbiBhIGNsaWNrIGV2ZW50IG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSB0b2dnbGVPbkNsaWNrID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIHBhbmVsIHNob3VsZCBvcGVuIFxyXG4gICAqIG9uIG1vdXNlIG92ZXIgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHNob3dPbkhvdmVyID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIHBhbmVsIHNob3VsZCBjbG9zZSBXaGVuXHJcbiAgICogY2xpY2tlZCBvdXRzaWRlIHRoZSB0b2dnbGUgb3IgcGFuZWwgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNsb3NlT25DbGlja091dHNpZGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgcGFuZWwgXHJcbiAgICogYnkgcGlubmluZyBvcGVuIGl0IGlmIHRydWUuXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2hvd09uSW5pdDogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogS2VlcCB0cmFjayBvZiB0aGUgcHJldmlvdXMgcGluIHN0YXRlLlxyXG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGRldGVybWluZSBpZiB0aGUgXHJcbiAgICogbmV3IHBpbiBzdGF0ZSBzaG91bGQgYWN0dWFsbHkgY2F1c2UgYVxyXG4gICAqIHRyYW5zaXRpb24gb3Igbm90LlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJldmlvdXNQaW5uZWRTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNhdmUgaGUgc3Vic2NyaXB0aW9uIHNvIHRoZSBzdHJlYW1cclxuICAgKiBjYW4gYmUgcHJvcGVybHkgY2xvc2VkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2hvd0hpZGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmKCF0aGlzLnBhbmVsKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTbGlkaW5nUGFuZWwgY29tcG9uZW50IHN1cHBsaWVkIHRvICcgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICd0aGUgYmItc2xpZGluZy1wYW5lbC10b2dnbGUgZGlyZWN0aXZlICcgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICcoW2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlXT1cIiRQYW5lbFZhcmlhYmxlXCIpLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24gJiYgIXRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24uY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogU3RyZWFtcyBvZiB0aGUgZXZlbnRzIG5lY2Vzc2FyeSBcclxuICAgICAqIGZvciB0aGUgbG9naWMgb2YgdGhlIHRvZ2dsZS5cclxuICAgICAqL1xyXG5cclxuICAgIGxldCBkb2N1bWVudENsaWNrJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVDbGljayQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpO1xyXG4gICAgbGV0IHRvZ2dsZU1vdXNlRW50ZXIkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpO1xyXG4gICAgbGV0IHRvZ2dsZU1vdXNlTGVhdmUkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xyXG5cclxuICAgIGxldCBwYW5lbE1vdXNlRW50ZXJlZCQgPSB0aGlzLnBhbmVsLm1vdXNlRW50ZXJQYW5lbC5hc09ic2VydmFibGUoKTtcclxuICAgIGxldCBwYW5lbE1vdXNlTGVmdCQgPSB0aGlzLnBhbmVsLm1vdXNlTGVhdmVQYW5lbC5hc09ic2VydmFibGUoKTtcclxuICAgIGxldCBwYW5lbENsaWNrJCA9IHRoaXMucGFuZWwuY2xpY2tQYW5lbC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogUmVkdWNlIGJvdGggbGVhdmluZyBldmVudHMgdG8gXHJcbiAgICAgKiBhIGZhbHNlIGVtaXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBsZXQgbGVhdmVCb3RoJCA9IHRvZ2dsZU1vdXNlTGVhdmUkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKHBhbmVsTW91c2VMZWZ0JCksXHJcbiAgICAgICAgZmlsdGVyKF89PnRoaXMuc2hvd09uSG92ZXIpLCBcclxuICAgICAgICBtYXAoXz0+ZmFsc2UpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogUmVkdWNlIGJvdGggZW50ZXIgZXZlbnRzIHRvIFxyXG4gICAgICogYSB0cnVlIGVtaXNzaW9uLlxyXG4gICAgICovXHJcbiAgICBsZXQgZW50ZXJFaXRoZXIkID0gdG9nZ2xlTW91c2VFbnRlciRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWVyZ2UocGFuZWxNb3VzZUVudGVyZWQkKSxcclxuICAgICAgICBmaWx0ZXIoXz0+dGhpcy5zaG93T25Ib3ZlciksXHJcbiAgICAgICAgbWFwKF89PnRydWUpKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICogV2hlbiB0aGUgdG9nZ2xlIGlzIGNsaWNrZWQgXHJcbiAgICAgKiBzdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nXHJcbiAgICAgKiBhbmQgdG9nZ2xlIHRoZSBwaW5uZWQgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGxldCB0b2dnbGVDbGlja2VkJCA9IHRvZ2dsZUNsaWNrJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoXz0+IHtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgKiBzaG91bGQgcHJvYmFibHkgYmUgZG9uZSB3aXRoXHJcbiAgICAgICAgICAgKiBhIGRvIG9wZXJhdG9yLCBvbmNlIGl0IHdvcmtzIGFnYWluLFxyXG4gICAgICAgICAgICogZm9yIGJvdGggdG9nZ2xlIGNsaWNrZWQgYW5kIHBhbmVsXHJcbiAgICAgICAgICAgKiBjbGlja2VkXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgcmV0dXJuICF0aGlzLnByZXZpb3VzUGlubmVkU3RhdGUgfSkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBXaGVuIHRoZSBwYW5lbCBpcyBjbGlja2VkXHJcbiAgICAgKiBzdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nXHJcbiAgICAgKiBhbmQganVzdCBjb250aW51ZSB0byBlbWl0IHRoZVxyXG4gICAgICogcHJldmlvdXMgcGlubmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBsZXQgcGFuZWxDbGlja2VkJCA9IHBhbmVsQ2xpY2skXHJcbiAgICAgIC5waXBlKG1hcChfPT57XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSB9KSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEEgZG9jdW1lbnQgY2xpY2sgaXMgb25seVxyXG4gICAgICogdHJpZ2dlcmVkIHdoZW4gdGhlIHBhbmVsXHJcbiAgICAgKiBhbmQgdGhlIHRvZ2dsZSBkb24ndCBwcmV2ZW50XHJcbiAgICAgKiB0aGUgYnViYmxpbmcgc28ganVzdCBlbWl0IFxyXG4gICAgICogZmFsc2UgYXMgdGhlIG5leHQgcGlubmVkIHN0YXRlLlxyXG4gICAgICovXHJcbiAgICBsZXQgZG9jdW1lbnRDbGlja2VkJCA9IGRvY3VtZW50Q2xpY2skXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihfPT50aGlzLmNsb3NlT25DbGlja091dHNpZGUpLFxyXG4gICAgICAgIG1hcChfPT5mYWxzZSkpO1xyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgICogQ29tYmluZSBhbGwgdGhlIHBpbm5lZCBzdGF0ZVxyXG4gICAgICogc3RyZWFtcy5cclxuICAgICAqL1xyXG4gICAgbGV0IG5leHRQaW5uZWRTdGF0ZSQgPSBvZih0aGlzLnNob3dPbkluaXQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKHRvZ2dsZUNsaWNrZWQkLCBwYW5lbENsaWNrZWQkLCBkb2N1bWVudENsaWNrZWQkKSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIENvbWJpbmUgYWxsIHRoZSBtb3VzZSBtb3ZlbWVudFxyXG4gICAgICogc3RyZWFtcy5cclxuICAgICAqL1xyXG4gICAgbGV0IGlzSG92ZXJpbmckID0gb2YoZmFsc2UpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1lcmdlKGxlYXZlQm90aCQsIGVudGVyRWl0aGVyJCksXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICogNTAgaGVyZSBpcyBhcmJpdHJhcnkgYnV0IFxyXG4gICAgICAgICAgKiBzZWVtcyB0byBiZSBiZWxvdyB0aGUgXHJcbiAgICAgICAgICAqIGh1bWFuIHRocmVzaGhvbGQgZm9yIG5vdGljaW5nXHJcbiAgICAgICAgICAqIHRoZSBkZWxheSB3aGlsZSBsZXR0aW5nIFxyXG4gICAgICAgICAgKiBzbG93ZXIgc3lzdGVtcyBoYXZlIHBsZW50eSBvZlxyXG4gICAgICAgICAgKiB0aW1lIHRvIHByb2Nlc3MgdGhlIGV2ZW50cy5cclxuICAgICAgICAgICogXHJcbiAgICAgICAgICAqIE1heWJlIGl0IHNob3VsZCBiZSBjb25maWd1cmFibGU/XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgIGRlYm91bmNlVGltZSg1MCkpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb21iaW5lIHRoZSBob3ZlciBhbmQgcGlubmVkIHN0YXRlXHJcbiAgICAgKiBzdHJlYW1zIGludG8gYSBzdHJlYW0gdGhhdCBkZXRlcm1pbmVzXHJcbiAgICAgKiB3aGV0aGVyIHRoZSBwYW5lbCBzdGF0ZSBuZWVkcyB0byBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2hvd0hpZGVTdWJzY3JpcHRpb24gPSBcclxuICAgICAgaXNIb3ZlcmluZyRcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGNvbWJpbmVMYXRlc3QobmV4dFBpbm5lZFN0YXRlJCksXHJcbiAgICAgICAgICBtYXAoc3RhdGVzPT4oe2hvdmVyOnN0YXRlc1swXSxwaW46c3RhdGVzWzFdIH0pKSlcclxuICAgICAgICAuc3Vic2NyaWJlKHRoaXMub25OZXh0U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZih0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uICYmICF0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLnNob3dIaWRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93UGFuZWwgPSAoKSA9PiB0aGlzLm9uTmV4dFN0YXRlKHtob3ZlcjogZmFsc2UsIHBpbjogdHJ1ZX0pO1xyXG4gIGhpZGVQYW5lbCA9ICgpID0+IHRoaXMub25OZXh0U3RhdGUoe2hvdmVyOiBmYWxzZSwgcGluOiBmYWxzZX0pO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hhdCB0aGUgbmV4dCBwYW5lbCBzdGF0ZVxyXG4gICAqIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgbmV3IGhvdmVyIGFuZFxyXG4gICAqIHBpbiBzdGF0ZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvbk5leHRTdGF0ZSA9IChuZXh0U3RhdGVzOntob3ZlcjogYm9vbGVhbiwgcGluOiBib29sZWFufSkgPT4ge1xyXG4gICAgaWYobmV4dFN0YXRlcy5ob3ZlciApIHtcclxuICAgICAgaWYodGhpcy5wcmV2aW91c1Bpbm5lZFN0YXRlICYmICFuZXh0U3RhdGVzLnBpbikgeyBcclxuICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYoIXRoaXMucHJldmlvdXNQaW5uZWRTdGF0ZSAmJiBuZXh0U3RhdGVzLnBpbikge1xyXG4gICAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoIW5leHRTdGF0ZXMucGluKXtcclxuICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1Bpbm5lZFN0YXRlID0gbmV4dFN0YXRlcy5waW47XHJcbiAgICB0aGlzLnBhbmVsLnBpbm5lZCA9IG5leHRTdGF0ZXMucGluO1xyXG4gIH1cclxuXHJcbiAgXHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWxUb2dnbGUgfSBmcm9tICcuL3RvZ2dsZS9zbGlkaW5nLXBhbmVsLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCU2xpZGluZ1BhbmVsLCBcclxuICAgIEJCU2xpZGluZ1BhbmVsVG9nZ2xlXHJcbiAgXSxcclxuXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJTbGlkaW5nUGFuZWwsIFxyXG4gICAgQkJTbGlkaW5nUGFuZWxUb2dnbGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB7IFxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0JCTWVudUl0ZW19IGZyb20gJy4uL2NvbW1vbi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLWRyb3Bkb3duLW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgW2JiLXNsaWRpbmctcGFuZWwtdG9nZ2xlXT1cInBhbmVsXCIgXHJcbiAgICAgW3RvZ2dsZU9uQ2xpY2tdPVwidG9nZ2xlT25DbGlja1wiXHJcbiAgICAgW3Nob3dPbkhvdmVyXT1cInNob3dPbkhvdmVyXCJcclxuICAgICBbY2xvc2VPbkNsaWNrT3V0c2lkZV09XCJjbG9zZU9uQ2xpY2tPdXRzaWRlXCI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCJcclxuICAgIHNsaWRlRGlyZWN0aW9uPVwiZG93blwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5kcm9wZG93bi1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9L2RlZXAvIC5kcm9wZG93bi1jb250YWluZXI+ZGl2LmJiLXNsaWRpbmctcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOjB9LmRyb3Bkb3duLWNvbnRhaW5lciBkaXYuYmItc2xpZGluZy1wYW5lbHtkaXNwbGF5OmZsZXg7ZmxleDoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1gXSxcclxuICBleHBvcnRBczonYmJEcm9wZG93bk1lbnUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkRyb3Bkb3duTWVudSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1kcm9wZG93bi1tZW51JykgYXBwbHlIb3N0Q2xhc3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgc2hvd09uSG92ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgdG9nZ2xlT25DbGljayA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGNsb3NlT25DbGlja091dHNpZGUgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25NZW51IH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlXHJcbiAgXSxcclxuICBcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJCRHJvcGRvd25NZW51XHJcbiAgXSxcclxuICBcclxuICBleHBvcnRzOiBbXHJcblx0ICBCQkRyb3Bkb3duTWVudVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25NZW51TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCQkRyb3Bkb3duTWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbiB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQkJTbGlkaW5nUGFuZWwgfSBmcm9tICcuLi9zbGlkaW5nLXBhbmVsL3NsaWRpbmctcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2JiLXNsaWRlb3V0LW1lbnVdJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzbGlkZS1jb250YWluZXJcIj5cclxuICA8ZGl2IFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCJwYW5lbFwiIFxyXG4gICAgW3RvZ2dsZU9uQ2xpY2tdPVwicGluT25DbGlja1wiXHJcbiAgICBbc2hvd09uSG92ZXJdPVwic2hvd09uTW91c2VPdmVyXCJcclxuICAgIFtjbG9zZU9uQ2xpY2tPdXRzaWRlXT1cImNsb3NlT25DbGlja091dHNpZGVcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltiYi1tZW51LXRvZ2dsZV1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGUtYW5jaG9yXCI+XHJcbiAgICAgIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiXHJcbiAgICAgICAgW3NsaWRlRGlyZWN0aW9uXT1cInNsaWRlRGlyZWN0aW9uXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS1pdGVtXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgZGl2LnNsaWRlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uc2xpZGUtY29udGFpbmVyPmRpdi5zbGlkZS1wb3NpdGlvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MH0vZGVlcC8gLnNsaWRlLWxlZnQ+ZGl2LnNsaWRlLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnJlZH0vZGVlcC8gLnNsaWRlLWxlZnQgZGl2LnNsaWRlLXBvc2l0aW9ue2xlZnQ6MH0vZGVlcC8gLnNsaWRlLXJpZ2h0IGRpdi5zbGlkZS1wb3NpdGlvbntyaWdodDowfS5zbGlkZS1jb250YWluZXI+PmRpdi5zbGlkZS1hbmNob3J7cG9zaXRpb246cmVsYXRpdmV9L2RlZXAvIC5zbGlkZS1hbmNob3I+ZGl2LmJiLXNsaWRpbmctcGFuZWx7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4OjF9L2RlZXAvIC5zbGlkZS1sZWZ0IGRpdi5iYi1zbGlkaW5nLXBhbmVse3JpZ2h0OjB9L2RlZXAvIC5zbGlkZS1yaWdodCBkaXYuYmItc2xpZGluZy1wYW5lbHtsZWZ0OjB9YF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zbGlkZS1sZWZ0XSc6XCJzbGlkZUxlZnRcIixcclxuICAgICdbY2xhc3Muc2xpZGUtcmlnaHRdJzpcIiFzbGlkZUxlZnRcIlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCU2xpZGVvdXRNZW51IHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJiLXNsaWRlb3V0LW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93T25Nb3VzZU92ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwaW5PbkNsaWNrID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgc2xpZGVEaXJlY3Rpb246IFwibGVmdFwiIHwgXCJyaWdodFwiID0gXCJyaWdodFwiO1xyXG5cclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBCQlNsaWRpbmdQYW5lbDtcclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2xpZGVMZWZ0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2xpZGVEaXJlY3Rpb24gPT09IFwibGVmdFwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQlNsaWRlb3V0TWVudSB9IGZyb20gJy4vc2xpZGVvdXQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJTbGlkZW91dE1lbnVcclxuICBdLFxyXG4gIFxyXG4gIGV4cG9ydHM6IFtcclxuXHQgIEJCU2xpZGVvdXRNZW51XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJTbGlkZW91dE1lbnVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCU2xpZGVvdXRNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH0gIFxyXG59XHJcbiIsImltcG9ydCB7IFxyXG4gIENvbXBvbmVudCwgXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEluamVjdCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEluamVjdGlvblRva2VuLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBIb3N0QmluZGluZyxcclxuICBWaWV3Q2hpbGQgIFxyXG4gICAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgQmVoYXZpb3JTdWJqZWN0ICwgIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgLCAgbWFwICwgIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbCB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXRJdGVtc0xpc3QgfSBmcm9tICcuL2l0ZW0tbGlzdC9kcm9wZG93bi1pbnB1dC1pdGVtLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1jb21wb25lbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRHJvcGRvd25JbnB1dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZHJvcGRvd24taW5wdXQtc2VydmljZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEcm9wZG93bklucHV0SXRlbUNob3NlbkV2ZW50LCBEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50IH0gZnJvbSAnLi9ldmVudHMvZHJvcGRvd24taW5wdXQtaXRlbS1ldmVudHMuaW50ZXJmYWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBCQkRyb3Bkb3duSW5wdXRTZXJ2aWNlVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48RHJvcGRvd25JbnB1dFNlcnZpY2U+KCdEZElTZXJ2aWNlJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1kcm9wZG93bi1pbnB1dF0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWFuY2hvclwiPlxyXG4gIDxpbnB1dCAjZHJvcGRvd25JbnB1dFxyXG5cdFx0IChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuXHRcdCBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclRleHRcIi8+XHJcbiAgXHQ8ZGl2IGJiLXNsaWRpbmctcGFuZWxcclxuXHQgICAgIGNsYXNzPVwicmVzdWx0c1wiIFxyXG5cdFx0IHNsaWRlRGlyZWN0aW9uPVwiZG93blwiXHJcblx0XHQgI3BhbmVsPVwiYmJTbGlkaW5nUGFuZWxcIj5cclxuXHRcdCA8dWwgYmItZHJvcGRvd24taW5wdXQtaXRlbXMtbGlzdFxyXG5cdFx0IFx0I2Ryb3Bkb3duTGlzdFxyXG5cdFx0ICAgIFtkeW5hbWljQ29tcG9uZW50c0RhdGFdPVwiZGlTZXJ2Lml0ZW1zJCB8IGFzeW5jXCJcclxuXHRcdFx0KGxpc3RJdGVtTW91c2VPdmVyKT1cIm9uTGlzdEl0ZW1Nb3VzZU92ZXIoJGV2ZW50KVwiXHJcblx0XHRcdChsaXN0SXRlbUNsaWNrKT1cIm9uTGlzdEl0ZW1DbGlja2VkKCRldmVudClcIlxyXG5cdFx0XHQobmV3Q29udGFpbmVycyk9XCJvbk5ld0l0ZW1Db250YWluZXJzKCRldmVudClcIj5cclxuXHRcdCA8L3VsPlxyXG4gIFx0PC9kaXY+XHRcclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGRpdi5kcm9wZG93bi1hbmNob3J7cG9zaXRpb246cmVsYXRpdmV9LmRyb3Bkb3duLWFuY2hvcj5kaXYuYmItc2xpZGluZy1wYW5lbHtwb3NpdGlvbjphYnNvbHV0ZX0uZHJvcGRvd24tYW5jaG9yPi5iYi1zbGlkaW5nLXBhbmVsIHVsLmJiLWRyb3Bkb3duLWlucHV0LWl0ZW1zLWxpc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZy1sZWZ0OjA7bGlzdC1zdHlsZTpub25lfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoZm9jdXNvdXQpJzpcIm9uSG9zdEZvY3VzT3V0KCRldmVudClcIixcclxuICAgICcoZm9jdXNpbiknOlwib25Ib3N0Rm9jdXNJbigkZXZlbnQpXCIsXHJcbiAgfSxcclxuICBleHBvcnRBczonYmJEcm9wZG93bklucHV0JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25JbnB1dCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1kcm9wZG93bi1pbnB1dCcpIGFwcGx5SG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zIGZvciB0aGUgc2VydmljZS5cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhJdGVtczogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIHdoZXRoZXIgdGhlIGRpc3BsYXlUZXh0IHNob3VsZCBiZSBzZXQgaW50byB0aGUgaW5wdXRcclxuICAgKiBib3ggd2hlbiBhbiBpdGVtIGlzICdjaG9zZW4nLiAgRGVmYXVsdHMgdG8gdHJ1ZS4gXHJcbiAgICovXHJcbiAgQElucHV0KCkgc2V0VGV4dE9uQ2hvaWNlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBwbGFjZSBob2xkZXIgdGV4dCBvbiB0aGUgaW5wdXQgZWxlbWVudC5cclxuICAgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlclRleHQgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBob3cgbG9uZywgaW4gbXMsIHRoZSBkZWxheSBpcyBcclxuICAgKiBiZXR3ZWVuIHVwZGF0ZXMgdG8gdGhlIERyb3Bkb3duSW5wdXRTZXJ2aWNlXHJcbiAgICogd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgKiBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAqIFxyXG4gICAqIERlZmF1bHRzIHRvIDQwMG1zLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpbnB1dFZhbHVlQ2hhbmdlRGVsYXltcyA9IDQwMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGF1dG8gc2VsZWN0aW9uIG1vZGUgZGV0ZXJtaW5lIHdoaWNoIGl0ZW0gd2lsbCBiZSBzZWxlY3RlZCBpZiB0aGVcclxuICAgKiBjaG9vc2UgaXRlbSBtZXRob2QgaXMgZXhlY3V0ZWQgd2hlbiBubyBpdGVtIGhhcyBiZWVuIHNwZWNpZmljYWxseVxyXG4gICAqIHNlbGVjdGVkIGJ5IHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICogXHJcbiAgICogJ25vbmUnICAgIC0gbm90aGluZyBpcyBjaG9zZW4gd2l0aG91dCB1c2VyIGludGVyYWN0aW9uXHJcbiAgICogIFxyXG4gICAqICdsYXp5JyAgICAtIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0IGlzIGNob3NlblxyXG4gICAqICBcclxuICAgKiAnZXhhY3QnICAgLSBpZiBhbnkgaXRlbSdzIGRpc3BsYXlUZXh0IG1hdGNoZXMgdGhlIGlucHV0IGV4YWN0bHksXHJcbiAgICogICAgICAgICAgICAgaWdub3JpbmcgY2FzZSwgdGhlIGZpcnN0IG1hdGNoIGlzIGNob3NlblxyXG4gICAqIFxyXG4gICAqICdvbmx5JyAgICAtIGlmIHRoZXJlIGlzIG9ubHkgYSBzaW5nbGUgaXRlbSBpbiB0aGUgbGlzdCBpdCBpcyBjaG9zZW5cclxuICAgKiBcclxuICAgKiAncGFydGlhbCcgLSBtYXRoIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBsaXN0IHRoYXQsIGlnbm9yaW5nIGNhc2UsIFxyXG4gICAqICAgICAgICAgICAgIGV4YWN0bHkgbWF0Y2hlcyB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGF1dG9TZWxlY3Rpb25Nb2RlOiAnbm9uZScgfCAnbGF6eScgfCAnZXhhY3QnIHwgJ29ubHknIHwgJ3BhcnRpYWwnID0gJ25vbmUnOyBcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGV4IG9mIHRoZSBhdXRvIHNlbGVjdGlvbiBtb2RlIHNlbGVjdGlvbiBtYWRlLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXV0b1NlbGVjdGVkSW5kZXggPSAtMTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4ID0gLTE7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgdGhlIGRhdGEgZm9yIHRoZSBsaXN0IGl0ZW0gc2VsZWN0ZWQgZWl0aGVyIHRocm91Z2ggXHJcbiAgICogYSBtb3VzZSBjbGljayBvciBoaXR0aW5nIGVudGVyIHdoZW4gaXQgaXMgaW4gdGhlIHNlbGVjdGVkIFxyXG4gICAqIHN0YXRlLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBsaXN0SXRlbUNob3NlbiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcGRvd25JbnB1dEl0ZW1DaG9zZW5FdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHNlcnZpY2UgaGFzIHJldHVybmVkXHJcbiAgICogYXQgbGVhc3QgMSBpdGVtIHRvIHRoZSBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBoYXNJdGVtcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnVtSXRlbXMgPiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYW5lbC5pc1Nob3dpbmc7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdkcm9wZG93bklucHV0Jywge3JlYWQ6IEVsZW1lbnRSZWZ9KSBpbnB1dEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnLCB7cmVhZDogRWxlbWVudFJlZn0pIHBhbmVsRWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25MaXN0JykgbGlzdDogQkJEcm9wZG93bklucHV0SXRlbXNMaXN0O1xyXG5cclxuICBwdWJsaWMgZ2V0IGlucHV0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiAodGhpcy5pbnB1dEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIC8vIGRldGVybWluZSB0aGUgbG9jYXRpb24gb2YgY2xpY2tzXHJcbiAgLy8gdG8gZGV0ZXJtaW5lIGlmIHRoZSBkcm9wZG93biBzaG91bGRcclxuICAvLyBzaG93IG9yIG5vdC5cclxuICBwcml2YXRlIG91dHNpZGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwcml2YXRlIGluc2lkZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIGNsaWNrZWRJbnNpZGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgLyogdXNlciBpbnRlcmFjdGlvbiBzdGF0ZSB0cmFja2luZyAqL1xyXG4gIHByaXZhdGUgd2FzSW5zaWRlQ2xpY2tlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgd2FzRm9jdXNlZCA9IGZhbHNlO1xyXG5cclxuICAvLyBmb3IgdHJhY2tpbmcgdGhlIHN0YXRlIG9mIHRoZSBwYW5lbFxyXG4gIHByaXZhdGUgaW5wdXRTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBpdGVtc1N1YjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgbnVtSXRlbXM6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qXHJcbiAgICogSW50ZXJuYWwgbGlzdCBvZiB0aGUgZHluYW1pYyBjb21wb25lbnRzJyBjb250YWluZXJzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZHluYW1pY0NvbnRhaW5lcnM6IEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZVtdO1xyXG5cclxuICBwdWJsaWMgZGlTZXJ2OiBEcm9wZG93bklucHV0U2VydmljZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCk9PkJCRHJvcGRvd25JbnB1dFNlcnZpY2VUb2tlbikpIHByaXZhdGUgX2RpU2VydjogRHJvcGRvd25JbnB1dFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZTogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2hEZXRSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgIHRoaXMuZGlTZXJ2ID0gX2RpU2VydjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmKHRoaXMubWF4SXRlbXMpIHtcclxuICAgICAgdGhpcy5kaVNlcnYuc2V0TWF4SXRlbXModGhpcy5tYXhJdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFRyYWNrIHRoZSB2YWx1ZSBjaGFuZ2VzIG9mIHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICAgKiB3aXRob3V0IGJyaW5naW5nIGluIGFuZ3VsYXIgZm9ybXMgdG8ga2VlcFxyXG4gICAgICogdGhlIHJlcXVpcmVtZW50cyBmb3IgYmIgYXMgbG93IGFzIHBvc3NpYmxlLlxyXG4gICAgICovXHJcbiAgICB0aGlzLmlucHV0U3ViID0gXHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmlucHV0RWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcCgoZXZlbnQ6S2V5Ym9hcmRFdmVudCk9PihldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpLFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuaW5wdXRWYWx1ZUNoYW5nZURlbGF5bXMpLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBuZXdUZXh0PT57XHJcbiAgICAgICAgICAgICAgdGhpcy5kaVNlcnYuc2V0U2VhcmNoVGV4dChuZXdUZXh0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnI9PmNvbnNvbGUubG9nKGVyciksXHJcbiAgICAgICAgKCk9PnsvKmRvbmUqL30pO1xyXG5cclxuICAgIHRoaXMuaXRlbXNTdWIgPSB0aGlzLmRpU2Vydi5pdGVtcyRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKGl0ZW1zPT4gaXRlbXM/IGl0ZW1zLmxlbmd0aDotMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgbnVtPT4ge1xyXG4gICAgICAgICAgdGhpcy5udW1JdGVtcyA9IG51bTtcclxuXHJcbiAgICAgICAgICBpZih0aGlzLmhhc0l0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5zaG93KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5lbC5oaWRlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5jaERldFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnI9PmNvbnNvbGUubG9nKGVyciksXHJcbiAgICAgICAgKCk9PnsvKmRvbmUqL30pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIHRoaXMuaW5wdXRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuaXRlbXNTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuZGlTZXJ2LmNsZWFySXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGFueSBwcmV2aW91cyBzZWxlY3Rpb24gY3JpdGVyaWEgYW5kXHJcbiAgICogcGVyZm9ybSBhIG5ldyBhdXRvIHNlbGVjdGlvbi5cclxuICAgKi9cclxuICAgb25OZXdJdGVtQ29udGFpbmVycyhcclxuICAgIGNvbnRhaW5lcnM6IEJCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZVtdKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJBdXRvU2VsZWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5keW5hbWljQ29udGFpbmVycyA9IGNvbnRhaW5lcnM7XHJcbiAgICAgIGlmKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMgJiYgdGhpcy5keW5hbWljQ29udGFpbmVycy5sZW5ndGggPiAwKXtcclxuICAgICAgICB0aGlzLmF1dG9TZWxlY3RJdGVtKCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENob29zZSBlaXRoZXIgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtIG9yXHJcbiAgICogdGhlIGF1dG8gY2hvc2VuIGl0ZW0gYW5kIGVtaXQgaXQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaG9vc2VDdXJyZW50SXRlbSgpIHtcclxuICAgICAgbGV0IGN1cnJlbnRJdGVtOiBEcm9wZG93bklucHV0SXRlbUNob3NlbkV2ZW50O1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgY3VycmVudEl0ZW0gPSB0aGlzLmdldEN1cnJlbnRJdGVtKHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hdXRvU2VsZWN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtID0gdGhpcy5nZXRDdXJyZW50SXRlbSh0aGlzLmF1dG9TZWxlY3RlZEluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoY3VycmVudEl0ZW0pe1xyXG4gICAgICAgIGlmICh0aGlzLnNldFRleHRPbkNob2ljZSkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBjdXJyZW50SXRlbS5tYXRjaFRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RJdGVtQ2hvc2VuLmVtaXQoY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgb2YgdGhlIGR5bmFtaWMgY29tcG9uZW50XHJcbiAgICogZGVzY3JpYmVkIGJ5IHRoZSBpbmRleCB2YWx1ZS5cclxuICAgKi9cclxuICBwcml2YXRlIGdldEN1cnJlbnRJdGVtKGluZGV4OiBudW1iZXIpOiBEcm9wZG93bklucHV0SXRlbUNob3NlbkV2ZW50IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbXBvbmVudDogdGhpcy5keW5hbWljQ29udGFpbmVyc1tpbmRleF0uY3VycmVudENvbXBSZWYuaW5zdGFuY2UsXHJcbiAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgbWF0Y2hUZXh0OiB0aGlzLmxpc3QuZHluYW1pY0NvbXBvbmVudHNEYXRhW2luZGV4XS5tYXRjaFRleHQsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBTb2Z0IFNlbGVjdGlvbiBIYW5kbGluZyAqL1xyXG4gIHByaXZhdGUgYXV0b1NlbGVjdEl0ZW0oKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIHN3aXRjaCAodGhpcy5hdXRvU2VsZWN0aW9uTW9kZSkge1xyXG4gICAgICAgIGNhc2UgJ25vbmUnOiB7XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2xhenknOiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNDb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2V4YWN0Jzoge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lckluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuZHluYW1pY0NvbXBvbmVudHNEYXRhLmZpbmQoXHJcbiAgICAgICAgICAgIChjbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjbnQubWF0Y2hUZXh0LnRvTG93ZXJDYXNlKCkgPT09IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVySW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lckluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gY29udGFpbmVySW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdwYXJ0aWFsJzoge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZHluYW1pY0NvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lckluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuZHluYW1pY0NvbXBvbmVudHNEYXRhLmZpbmQoXHJcbiAgICAgICAgICAgIChjbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjbnQubWF0Y2hUZXh0LnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgLnN1YnN0cigwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCkgPT09IFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVySW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBjb250YWluZXJJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ29ubHknOiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNDb250YWluZXJzICYmIHRoaXMuZHluYW1pY0NvbnRhaW5lcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbmRleCAhPSB0aGlzLmF1dG9TZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgIHRoaXMuY2xlYXJBdXRvU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jaGFuZ2VBdXRvU2VsZWN0aW9uKGluZGV4LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmF1dG9TZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBjdXJyZW50IGF1dG8gc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjbGVhckF1dG9TZWxlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hdXRvU2VsZWN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMubGlzdC5jaGFuZ2VBdXRvU2VsZWN0aW9uKHRoaXMuYXV0b1NlbGVjdGVkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgdGhpcy5hdXRvU2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IHByZXZpb3VzLCB3cmFwcGluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc2VsZWN0UHJldmlvdXNMaXN0SXRlbShlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmdldE5leHRTZWxlY3Rpb24oLTEpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgbmV4dCwgd3JhcHBpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHNlbGVjdE5leHRMaXN0SXRlbShlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLmdldE5leHRTZWxlY3Rpb24oMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG5leHQgc2VsZWN0aW9uIGJhc2VkIG9uIHRoZSBpbmRleENoYW5nZVxyXG4gICAqIGFuZCB3cmFwcGluZyBhcm91bmQgdGhlIGFycmF5IG9mIGl0ZW1zLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0TmV4dFNlbGVjdGlvbihpbmRleENoYW5nZTpudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmR5bmFtaWNDb250YWluZXJzICYmIHRoaXMuZHluYW1pY0NvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEluZGV4LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgc2VsZWN0aW9uIGluZGV4XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ICs9IGluZGV4Q2hhbmdlO1xyXG5cclxuICAgICAgICAvLyB3cmFwIHRoZSBzZWxlY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmR5bmFtaWNDb250YWluZXJzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSB0aGlzLmR5bmFtaWNDb250YWluZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBzZWxlY3Rpb25cclxuICAgICAgICB0aGlzLmxpc3QuY2hhbmdlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJbmRleCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIHRoZSBjb250YWluZXIgZWxlbWVudCBpcyBjb25zaWRlcmVkIHRvIGJlIHRoZSBhbmd1bGFyIGJpbmRpbmcgY29tbWVudCwgc28gd2UgaGF2ZSB0byBnbyB1cCAxIGxldmVsIHRvIHRoZSBsaSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLmxpc3QubGlzdEVsZW1lbnRzW3RoaXMuc2VsZWN0ZWRJbmRleF07XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9ICh0aGlzLnBhbmVsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpcyBpbiB2aWV3XHJcbiAgICAgICAgY29uc3QgaW5WaWV3RGF0YSA9IHRoaXMuZWxlbWVudE9mZnNldEZyb21WaWV3KGxpc3RFbGVtZW50LCBjb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICBpZiAoIWluVmlld0RhdGEuaW5WaWV3KSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2Nyb2xsVG9wICs9IGluVmlld0RhdGEuc2Nyb2xsQnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2xlYXIgY3VycmVudCBzZWxlY3Rpb25cclxuICAgKi9cclxuICBwcml2YXRlIGNsZWFyU2VsZWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA+PSAwKSB7XHJcbiAgICAgIHRoaXMubGlzdC5jaGFuZ2VTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEluZGV4LCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBjb250YWluZXIgZWxlbWVudFxyXG4gICAqIGFuZCBpZiBpdCBpc24ndCBhbHNvIGRldGVybWluZSB0aGUgdmVydGljYWwgb2Zmc2V0IGZyb20gYmVpbmcgaW4gdmlld1xyXG4gICAqIGl0IGlzIGF0LlxyXG4gICAqIEBwYXJhbSBsaXN0RWxlbWVudCB0aGUgZWxlbWVudCB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW4gdmlld1xyXG4gICAqIEBwYXJhbSBjb250YWluZXIgdGhlIHZpZXdpbmcgY29udGFpbmVyIG9mIHRoZSBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlbGVtZW50T2Zmc2V0RnJvbVZpZXcobGlzdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGxpc3RSZWMgPSBsaXN0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgY29udFJlYyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgdG9wVml6ID0gbGlzdFJlYy50b3AgPj0gY29udFJlYy50b3A7XHJcbiAgICAgIGNvbnN0IGJvdFZpeiA9IGxpc3RSZWMuYm90dG9tIDw9IGNvbnRSZWMuYm90dG9tO1xyXG5cclxuICAgICAgY29uc3QgaW5WaWV3RGF0YSA9IHtcclxuICAgICAgICAgIGluVmlldzogdG9wVml6ICYmIGJvdFZpeixcclxuICAgICAgICAgIHNjcm9sbEJ5OiAwIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWJvdFZpeikge1xyXG4gICAgICAgICAgaW5WaWV3RGF0YS5zY3JvbGxCeSA9IGxpc3RSZWMuYm90dG9tIC0gY29udFJlYy5ib3R0b207XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIXRvcFZpeikge1xyXG4gICAgICAgICAgaW5WaWV3RGF0YS5zY3JvbGxCeSA9IC0oY29udFJlYy50b3AgLSBsaXN0UmVjLnRvcCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBpblZpZXdEYXRhO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIEV2ZW50IEhhbmRsZXJzICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZm9yIGV4dHJhIGNvbnRyb2wga2V5cyBwcmVzc2VkLCB1cCBhbmQgZG93biBhcnJvd3MgYW5kIGVudGVyLFxyXG4gICAqIGFuZCB0YWtlIHRoZSBhcHByb3ByaWF0ZSBhY3Rpb24gYmFzZWQgb24gdGhlbS5cclxuICAgKiBVcCBBcnJvdyAtIHNlbGVjdCB0aGUgcHJldmlvdXMgaXRlbSBvbiB0aGUgbGlzdCwgb3IgdGhlIGxhc3QgaXRlbSBpZiBub25lIGhhcyBiZWVuIHNlbGVjdGVkIHlldFxyXG4gICAqIERvd24gQXJyb3cgLSBzZWxlY3QgdGhlIG5leHQgaXRlbSBvbiB0aGUgbGlzdCwgb3IgdGhlIGZpcnN0IGlmIG5vbmUgaGFzIGJlZW4gc2VsZWN0ZWQgXHJcbiAgICogRW50ZXIgLSAnY2hvb3NlJyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1cclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgY2FzZSBFdmVudEtleXMuVVBBUlJPVzpcclxuICAgICAgICAgICAgICB0aGlzLmNsZWFyQXV0b1NlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNMaXN0SXRlbShlKTtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEV2ZW50S2V5cy5ET1dOQVJST1c6XHJcbiAgICAgICAgICAgICAgdGhpcy5jbGVhckF1dG9TZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICB0aGlzLnNlbGVjdE5leHRMaXN0SXRlbShlKTtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEV2ZW50S2V5cy5FTlRFUjpcclxuICAgICAgICAgICAgICB0aGlzLmNob29zZUN1cnJlbnRJdGVtKCk7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsWyckZXZlbnQnXSkgXHJcbiAgb25PdXRzaWRlQ2xpY2soZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYoIXRoaXMud2FzSW5zaWRlQ2xpY2tlZCkge1xyXG4gICAgICB0aGlzLndhc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgc2V0VGltZW91dChfPT57XHJcbiAgICAgICAgaWYoIXRoaXMud2FzRm9jdXNlZCl7XHJcbiAgICAgICAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICAgICAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB0aGlzLmNoRGV0UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9fSwxNTApO1xyXG4gICAgfVxyXG4gICAgdGhpcy53YXNJbnNpZGVDbGlja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsWyckZXZlbnQnXSkgXHJcbiAgb25JbnNpZGVDbGljayhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLndhc0luc2lkZUNsaWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy53YXNGb2N1c2VkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uSG9zdEZvY3VzSW4oZTogRm9jdXNFdmVudCkge1xyXG4gICAgaWYodGhpcy5oYXNJdGVtcyl7XHJcbiAgICAgIHRoaXMucGFuZWwuc2hvdygpO1xyXG4gICAgICB0aGlzLmNoRGV0UmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLmNoRGV0UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMud2FzRm9jdXNlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkhvc3RGb2N1c091dChlOiBGb2N1c0V2ZW50KXtcclxuICAgIHRoaXMud2FzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChfPT57XHJcbiAgICAgIGlmKCF0aGlzLndhc0ZvY3VzZWQpe1xyXG4gICAgICAgIHRoaXMucGFuZWwuaGlkZSgpO1xyXG4gICAgICAgIHRoaXMuY2hEZXRSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH19LDE1MCk7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RJdGVtTW91c2VPdmVyKGU6IERyb3Bkb3duSW5wdXRJdGVtc01vdXNlRXZlbnQpIHtcclxuICAgIHRoaXMuY2xlYXJBdXRvU2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBlLmluZGV4O1xyXG4gICAgdGhpcy5saXN0LmNoYW5nZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSW5kZXgsdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RJdGVtQ2xpY2tlZChlOiBEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBlLmluZGV4O1xyXG4gICAgdGhpcy5saXN0LmNoYW5nZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSW5kZXgsdHJ1ZSk7XHJcbiAgICB0aGlzLmNob29zZUN1cnJlbnRJdGVtKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEVudW1lcmF0ZSB0aGUgZGVzaXJlZCBrZXkgY29kZXMgZm9yIGtleSBldmVudHNcclxuICovXHJcbmVudW0gRXZlbnRLZXlzIHtcclxuICAgIEVOVEVSID0gMTMsXHJcbiAgICBVUEFSUk9XID0gMzgsXHJcbiAgICBET1dOQVJST1cgPSA0MCxcclxufTtcclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbCB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYmItc2xpZGluZy1wYW5lbC1mb2N1c10nLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoZm9jdXMpJzpcIm9uRm9jdXMoJGV2ZW50KVwiLFxyXG4gICAgJyhibHVyKSc6XCJvbkJsdXIoJGV2ZW50KVwiXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJEcm9wZG93bklucHV0RGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2JiLXNsaWRpbmctcGFuZWwtZm9jdXMnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcbiAgQElucHV0KCkgY2FuU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpIHtcclxuICAgIGlmKHRoaXMuY2FuU2hvdykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2hvd2luZycpO1xyXG4gICAgICB0aGlzLnBhbmVsLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KSB7XHJcbiAgICB0aGlzLnBhbmVsLmhpZGUoKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLCAgXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIElucHV0LFxyXG4gICAgUmVmbGVjdGl2ZUluamVjdG9yLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50RGF0YSB9IGZyb20gJy4vZHluYW1pYy1jb21wb25lbnQtZGF0YS5pbnRlcmZhY2UnO1xyXG5cclxuLyoqXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tiYi1keW5hbWljLWNvbXBvbmVudF0nLFxyXG4gIGV4cG9ydEFzOidkeW5hbWljQ29tcCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmUge1xyXG4gICAgcHVibGljIGN1cnJlbnRDb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgICBwdWJsaWMgZGNjQ2xhc3NlczogYW55ID0ge307XHJcblxyXG4gICAgQElucHV0KCdiYi1keW5hbWljLWNvbXBvbmVudCcpIHB1YmxpYyBzZXQgY29tcG9uZW50RGF0YShjb21wRGF0YTogRHluYW1pY0NvbXBvbmVudERhdGEpIHtcclxuICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnQoY29tcERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbXBvbmVudChjb21wRGF0YTogRHluYW1pY0NvbXBvbmVudERhdGEpIHtcclxuICAgICAgaWYgKCFjb21wRGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuY3VycmVudENvbXBSZWYpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb21wUmVmLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGlucHV0UHJvdmlkZXJzOiBhbnlbXSA9IFtdXHJcblxyXG4gICAgICBpZiAoY29tcERhdGEucHJvdmlkZXJzKSB7XHJcbiAgICAgICAgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhjb21wRGF0YS5wcm92aWRlcnMpLm1hcChcclxuICAgICAgICAgIChwcm92TmFtZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHByb3ZpZGU6IHByb3ZOYW1lLCB1c2VWYWx1ZTogY29tcERhdGEucHJvdmlkZXJzW3Byb3ZOYW1lXSB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBpbmplY3RvciA9XHJcbiAgICAgICAgUmVmbGVjdGl2ZUluamVjdG9yXHJcbiAgICAgICAgICAuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFxyXG4gICAgICAgICAgICBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyksXHJcbiAgICAgICAgICAgIHRoaXMudmNSZWYucGFyZW50SW5qZWN0b3IpO1xyXG4gICAgICBcclxuICAgICAgbGV0IGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+ID1cclxuICAgICAgICB0aGlzLnJlc29sdmVyXHJcbiAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcERhdGEuY29tcG9uZW50KVxyXG4gICAgICAgICAgLmNyZWF0ZShpbmplY3Rvcik7XHJcblxyXG4gICAgICB0aGlzLnZjUmVmLmluc2VydChjb21wUmVmLmhvc3RWaWV3KTtcclxuXHJcbiAgICAgIGlmIChjb21wRGF0YS5pbnB1dHMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhjb21wRGF0YS5pbnB1dHMpLm1hcChcclxuICAgICAgICAgIGlucHV0ID0+IHtcclxuICAgICAgICAgICAgY29tcFJlZi5pbnN0YW5jZVtpbnB1dF0gPSBjb21wRGF0YS5pbnB1dHNbaW5wdXRdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgY29tcFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5jdXJyZW50Q29tcFJlZiA9IGNvbXBSZWY7XHJcbiAgICB9XHJcblxyXG4gXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmUgfSBmcm9tICcuL2R5bmFtaWMtY29tcG9uZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQkJEeW5hbWljQ29tcG9uZW50RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0JCRHluYW1pY0NvbXBvbmVudERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgQkJEeW5hbWljQ29tcG9uZW50TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIENvbXBvbmVudFJlZixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgUmVmbGVjdGl2ZUluamVjdG9yLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIFZpZXdDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBIb3N0QmluZGluZyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRHJvcGRvd25JdGVtQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uL3NlcnZpY2UvZHJvcGRvd24taW5wdXQtc2VydmljZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9keW5hbWljLWNvbXBvbmVudC9keW5hbWljLWNvbXBvbmVudC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50IH0gZnJvbSAnLi4vZXZlbnRzL2Ryb3Bkb3duLWlucHV0LWl0ZW0tZXZlbnRzLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOid1bFtiYi1kcm9wZG93bi1pbnB1dC1pdGVtcy1saXN0XScsXHJcbiAgICB0ZW1wbGF0ZTogYDxsaSAqbmdGb3I9XCJsZXQgY29tcERhdGEgb2YgZHluYW1pY0NvbXBvbmVudHNEYXRhOyBsZXQgaSA9IGluZGV4O1wiXHJcbiAgICAjbGlzdEl0ZW1cclxuICAgIGNsYXNzPVwiaXRlbVwiXHJcbiAgICBbY2xhc3MuYXV0by1zZWxlY3RlZF09XCJpdGVtQXV0b1NlbGVjdGVkW2ldXCJcclxuICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtU2VsZWN0ZWRbaV1cIlxyXG4gICAgKGNsaWNrKT1cIm9uTGlzdEl0ZW1DbGljaygkZXZlbnQsIGkpXCJcclxuICAgIChtb3VzZW92ZXIpPVwib25MaXN0SXRlbU1vdXNlT3ZlcigkZXZlbnQsIGkpXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj1cImR5bmFtaWNDb21wXCIgW2JiLWR5bmFtaWMtY29tcG9uZW50XT1cImNvbXBEYXRhXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9saT5cclxuXHJcblxyXG5gLFxyXG4gICAgc3R5bGVzOiBbYGBdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25JbnB1dEl0ZW1zTGlzdCB7XHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmJiLWRyb3Bkb3duLWlucHV0LWl0ZW1zLWxpc3QnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGR5bmFtaWNDb21wb25lbnRzRGF0YTogRHJvcGRvd25JdGVtQ29tcG9uZW50RGF0YVtdID0gW107XHJcblxyXG4gICAgcHVibGljIGR5bmFtaWNDb21wb25lbnRDbGFzc2VzOiBhbnlbXTtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKCdjb250YWluZXInKSBcclxuICAgICAgICBwdWJsaWMgZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcnM6IFF1ZXJ5TGlzdDxCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmU+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2xpc3RJdGVtJyx7cmVhZDpWaWV3Q29udGFpbmVyUmVmfSlcclxuICAgICAgICBwdWJsaWMgbGlzdEl0ZW1zOiBRdWVyeUxpc3Q8Vmlld0NvbnRhaW5lclJlZj47XHJcblxyXG4gICAgcHVibGljIGdldCBsaXN0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLnRvQXJyYXkoKS5tYXAobGk9PntcclxuICAgICAgICAgICAgcmV0dXJuIChsaS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTExJRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBuZXdDb250YWluZXJzID0gbmV3IEV2ZW50RW1pdHRlcjxCQkR5bmFtaWNDb21wb25lbnREaXJlY3RpdmVbXT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGxpc3RJdGVtTW91c2VPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wZG93bklucHV0SXRlbXNNb3VzZUV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdEl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcGRvd25JbnB1dEl0ZW1zTW91c2VFdmVudD4oKTtcclxuXHJcbiAgICBwcml2YXRlIG5ld0NvbnRhaW5lcnNTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBpdGVtQXV0b1NlbGVjdGVkOiBib29sZWFuW10gPSBbXTtcclxuICAgIGl0ZW1TZWxlY3RlZDogYm9vbGVhbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaERldFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU2VsZWN0aW9uKGluZGV4Om51bWJlciwgc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZFtpbmRleF09c2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB0aGlzLmNoRGV0UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlQXV0b1NlbGVjdGlvbihpbmRleDogbnVtYmVyLCBzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaXRlbUF1dG9TZWxlY3RlZFtpbmRleF09c2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jaERldFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB0aGlzLmNoRGV0UmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8gZW1pdCB0aGUgb3JpZ2luYWwgbGlzdFxyXG4gICAgICAgIHRoaXMubmV3Q29udGFpbmVycy5lbWl0KHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcnMudG9BcnJheSgpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5uZXdDb250YWluZXJzU3ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3Q29udGFpbmVyc1N1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uZXdDb250YWluZXJzU3ViID1cclxuICAgICAgICAgICAgdGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyc1xyXG4gICAgICAgICAgICAgICAgLmNoYW5nZXNcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUF1dG9TZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld0NvbnRhaW5lcnMuZW1pdChuZXdMaXN0LnRvQXJyYXkoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdDb250YWluZXJzU3ViLnVuc3Vic2NyaWJlKClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXdDb250YWluZXJzU3ViKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3Q29udGFpbmVyc1N1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxpc3RJdGVtQ2xpY2soXHJcbiAgICAgICAgZTogTW91c2VFdmVudCwgXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbUNsaWNrLmVtaXQoe1xyXG4gICAgICAgICAgICBldmVudDogZSxcclxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25MaXN0SXRlbU1vdXNlT3ZlcihcclxuICAgICAgICBlOiBNb3VzZUV2ZW50LCBcclxuICAgICAgICBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbU1vdXNlT3Zlci5lbWl0KHtcclxuICAgICAgICAgICAgZXZlbnQ6IGUsXHJcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQkRyb3Bkb3duSW5wdXQgfSBmcm9tICcuL2Ryb3Bkb3duLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLm1vZHVsZSc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24taW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQkJEeW5hbWljQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vZHluYW1pYy1jb21wb25lbnQvZHluYW1pYy1jb21wb25lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgQkJEcm9wZG93bklucHV0SXRlbXNMaXN0IH0gZnJvbSAnLi9pdGVtLWxpc3QvZHJvcGRvd24taW5wdXQtaXRlbS1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJCU2xpZGluZ1BhbmVsTW9kdWxlLFxyXG4gICAgQkJEeW5hbWljQ29tcG9uZW50TW9kdWxlLFxyXG4gIF0sXHJcbiAgXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCQkRyb3Bkb3duSW5wdXQsXHJcbiAgICBCQkRyb3Bkb3duSW5wdXREaXJlY3RpdmUsIFxyXG4gICAgQkJEcm9wZG93bklucHV0SXRlbXNMaXN0LFxyXG4gIF0sXHJcbiAgXHJcbiAgZXhwb3J0czogW1xyXG5cdCAgQkJEcm9wZG93bklucHV0LFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCRHJvcGRvd25JbnB1dE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJEcm9wZG93bklucHV0TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2JiLW1lbnUtaXRlbV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgIEJCTWVudUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYmItbWVudS1pdGVtLXJpZ2h0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyAgQkJNZW51SXRlbVJpZ2h0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBRdWVyeUxpc3QsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgTmdab25lLFxyXG4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFxyXG4gIEJCU2xpZGluZ1BhbmVsLCBcclxuICBCQlNsaWRpbmdQYW5lbFRvZ2dsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwnO1xyXG5cclxuaW1wb3J0IHtCQk1lbnVJdGVtfSBmcm9tICcuLi9jb21tb24vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QkJNZW51SXRlbVJpZ2h0fSBmcm9tICcuL21lbnUtaXRlbS1yaWdodC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIGZyb21FdmVudCAsICBvZiAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2UgLCAgbWFwICwgIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgaGFtYnVyZ2VyIG1lbnUgaXMgZWl0aGVyIGEgZGl2IG9yIG5hdiBlbGVtZW50XHJcbiAqIHRoYXQgaGFzIGFyYml0cmFyeSBpdGVtcyBhcyBpdCdzIGNvbnRlbnQgd2l0aCB0aGVcclxuICogYmItbWVudS1pdGVtIG9yIGJiLW1lbnUtaXRlbS1yaWdodCBkaXJlY3RpdmVzLlxyXG4gKiBcclxuICogSXQgdGFrZXMgYSBzdGFuZGFyZCBjc3MgbWVkaWEgcXVlcnkgYXMgYW4gaW5wdXQsXHJcbiAqIGV4cGFuZE9uUXVlcnksIGFuZCB3aGVuIHRoYXQgcXVlcnkgcmV0dXJucyB0cnVlIFxyXG4gKiB0aGUgbWVudSB3aWxsIGRpc3BsYXkgdGhlIGl0ZW1zIGluc2lkZSBpdCdzIGJvcmRlcnMuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcXVlcnkgaXMgZmFsc2UgdGhlIG1lbnUgd2lsbCBiZSByZW5kZXJlZCBpbiBcclxuICogdGhlIGNvbGxhcHNlZCBzdGF0ZSB3aGVyZSBhIHRvZ2dsZSB3aWxsIGJlIHJpZ2h0IFxyXG4gKiBqdXN0aWZpZWQgYW5kIHdoZW4gY2xpY2tlZCB3aWxsIHNob3cgYW5kIGhpZGUgdGhlXHJcbiAqIG1lbnUgaXRlbSBjb250ZW50cyBpbiBhIHBhbmVsIHRoYXQgZHJvcHMgZG93bi5cclxuICogXHJcbiAqIFRoZSB0b2dnbGUgaXRzZWxmIGlzIHNldCBieSBhZGRpbmcgdGhlIGJiLW1lbnUtdG9nZ2xlXHJcbiAqIGRpcmVjdGl2ZSB0byBjb250ZW50IGluc2lkZSB0aGUgbWVudSBlbGVtZW50IHRoYXQgXHJcbiAqIHNob3VsZCBhY3QgYXMgdGhlIHRvZ2dsZS5cclxuICogXHJcbiAqIFRoZSBoYW1idXJnZXIgbWVudSBjb21wb25lbnQgaXMgZXhwb3J0ZWQgYXMgQkJIYW1idXJnZXJNZW51XHJcbiAqIGFuZCBwcm92aWRlcyB0aGUgc3RhdGUgb2YgdGhlIHBhbmVsIHdpdGggaXNPcGVuIGFuZCB0aGUgXHJcbiAqIHN0YXRlIG9mIHRoZSBtZW51IGl0c2VsZiBhcyBleHBhbmRlZC4gIFRoZXNlIGNhbiBiZSB1c2VkIFxyXG4gKiB0byBtb2RpZnkgdGhlIG1lbnUgY29udGVudCBpdHNlbGYgYmFzZWQgb24gdGhlIGN1cnJlbnRcclxuICogc3RhdGUgb2YgdGhlIG1lbnUuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RpdltiYi1oYW1idXJnZXItbWVudV0sIG5hdltiYi1oYW1idXJnZXItbWVudV0nLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLWZpeGVkLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICA8ZGl2IGJiLXNsaWRpbmctcGFuZWxcclxuICAgICAgY2xhc3M9XCJtZW51LWl0ZW1zLWNvbnRhaW5lclwiXHJcbiAgICAgIHNsaWRlRGlyZWN0aW9uPVwiZG93blwiXHJcbiAgICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtc1wiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS1pdGVtXVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbXMtcmlnaHRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtaXRlbS1yaWdodF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBcclxuICA8ZGl2IFtiYi1zbGlkaW5nLXBhbmVsLXRvZ2dsZV09XCJwYW5lbFwiXHJcbiAgICAgICAjdG9nZ2xlPVwiYmJTbGlkaW5nUGFuZWxUb2dnbGVcIiBcclxuICAgICAgIFt0b2dnbGVPbkNsaWNrXT1cInRvZ2dsZU9uQ2xpY2tcIlxyXG4gICAgICAgW3Nob3dPbkhvdmVyXT1cInNob3dPbkhvdmVyXCJcclxuICAgICAgIFtzaG93T25Jbml0XT1cImV4cGFuZGVkXCJcclxuICAgICAgIFtjbG9zZU9uQ2xpY2tPdXRzaWRlXT1cImNsb3NlT25DbGlja091dHNpZGVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JiLW1lbnUtdG9nZ2xlXVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgZGl2Lm1lbnUtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjE7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OmluaGVyaXQ7bWF4LWhlaWdodDppbmhlcml0O2hlaWdodDppbmhlcml0fTpob3N0LmJiLWhhbWJ1cmdlci1tZW51LmV4cGFuZGVkIGRpdi5tZW51LWl0ZW1zLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXg6MTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcyw6aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYubWVudS1pdGVtcy1yaWdodHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjE7ZmxleC1iYXNpczphdXRvfTpob3N0LmJiLWhhbWJ1cmdlci1tZW51LmV4cGFuZGVkIGRpdi5tZW51LWl0ZW1zLXJpZ2h0e2p1c3RpZnktY29udGVudDpmbGV4LWVuZH06aG9zdC5iYi1oYW1idXJnZXItbWVudS5jb2xsYXBzZWQgZGl2Lm1lbnUtaXRlbXMtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleDoxfTpob3N0LmJiLWhhbWJ1cmdlci1tZW51LmNvbGxhcHNlZCBkaXYubWVudS1pdGVtcyw6aG9zdC5iYi1oYW1idXJnZXItbWVudS5jb2xsYXBzZWQgZGl2Lm1lbnUtaXRlbXMtcmlnaHR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWdyb3c6MTtmbGV4LXNocmluazoxO2ZsZXgtYmFzaXM6YXV0b306aG9zdC5iYi1oYW1idXJnZXItbWVudS5leHBhbmRlZCBkaXYuYmItc2xpZGluZy1wYW5lbC10b2dnbGV7dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MH1kaXYuYmItc2xpZGluZy1wYW5lbC10b2dnbGV7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3QuY29sbGFwc2VkIGRpdi5tZW51LWl0ZW1zLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTAwJTtsZWZ0OjA7cmlnaHQ6MH06aG9zdC5jb2xsYXBzZWQgZGl2Lm1lbnUtY29udGFpbmVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufWRpdi5tZW51LWl0ZW1ze2ZsZXgtZ3JvdzoxO2ZsZXgtc2hyaW5rOjE7ZmxleC1iYXNpczphdXRvfWBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZXhwYW5kZWRdJzogXCJleHBhbmRlZFwiLFxyXG4gICAgJ1tjbGFzcy5jb2xsYXBzZWRdJzogXCIhZXhwYW5kZWRcIixcclxuICB9LFxyXG4gIGV4cG9ydEFzOidiYkhhbWJ1cmdlck1lbnUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkhhbWJ1cmdlck1lbnUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1oYW1idXJnZXItbWVudScpIGFwcGx5SG9zdENsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogQkJTbGlkaW5nUGFuZWw7XHJcbiAgQFZpZXdDaGlsZCgndG9nZ2xlJykgdG9nZ2xlOiBCQlNsaWRpbmdQYW5lbFRvZ2dsZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihCQk1lbnVJdGVtLCB7IHJlYWQ6RWxlbWVudFJlZiwgZGVzY2VuZGFudHM6dHJ1ZSB9KSBcclxuICBpdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQkJNZW51SXRlbVJpZ2h0LCB7cmVhZDpFbGVtZW50UmVmLCBkZXNjZW5kYW50czp0cnVlfSkgXHJcbiAgcmlnaHRJdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGl0ZW1zIGN1cnJlbnRseSBiZWluZyBkaXNwbGF5ZWRcclxuICAgKiBpbiB0aGUgaGFtYnVyZ2VyIG1lbnUuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBpdGVtRWxlbWVudFJlZnMoKTogRWxlbWVudFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLnRvQXJyYXkoKS5jb25jYXQodGhpcy5yaWdodEl0ZW1zLnRvQXJyYXkoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gaWYgdGhlIHBhbmVsIGlzIG9wZW4gb3Igbm90LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGFuZWwuaXNTaG93aW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjc3MgbWVkaWEgcXVlcnkgYXMgYSBzdHJpbmcgdGhhdFxyXG4gICAqIHdpbGwgZGV0ZXJtaW5lIHdoZW4gdGhlIGhhbWJ1cmdlciBtZW51XHJcbiAgICogc2hvdWxkIGV4cGFuZCB0aGUgaXRlbXMgb250byB0aGUgbWVudSBcclxuICAgKiBiYXIgYW5kIHJlbW92ZSB0aGUgZHJvcGRvd24gdG9nZ2xlXHJcbiAgICovXHJcbiAgQElucHV0KCkgZXhwYW5kT25RdWVyeTogc3RyaW5nO1xyXG4gICAgICAgICBcclxuICAvKipcclxuICAgKiBTaG93IHRoZSBtZW51IGlmIHRoZSB0b2dnbGUgaXMgaG92ZXJlZFxyXG4gICAqIG92ZXIuICBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T25Ib3ZlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBDbG9zZSB0aGUgbWVudSBpZiBhIGNsaWNrIGhhcHBlbnMgb3V0c2lkZVxyXG4gICAqIGl0LiAgRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgKi9cclxuICBASW5wdXQoKSBjbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3cgdGhlIHRvZ2dsZSB0byB3b3JrIG9uIHRoZVxyXG4gICAqIGNsaWNrIGV2ZW50LlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IHRvZ2dsZU9uQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBDYWNoZSBmb3IgdGhlIGNsb3NlT25DbGlja091dHNpZGVcclxuICAgKiBpbnB1dC5cclxuICAgKi9cclxuICBwcml2YXRlIF9jb2NvSW5pdCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBVc2UgYSBmbGFnIG1lbWJlciBmb3IgdGhlIGV4cGFuZGVkIFxyXG4gICAqIHN0YXRlIGJlY2F1c2UgaG9zdCBiaW5kaW5ncyBjYW4ndCBcclxuICAgKiB1c2UgdGhlIGFzeW5jIHBpcGUgc28gd2UgaGF2ZSB0byBcclxuICAgKiBjYWNoZSB0aGUgbWVkaWEgcXVlcnkgcmVzdWx0cy5cclxuICAgKi9cclxuICBwdWJsaWMgZXhwYW5kZWQgPSBmYWxzZTs7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIHdpbmRvd1xyXG4gICAqIHJlc2l6ZSBldmVudCBhbmQgbWVkaWEgcXVlcnkgcmVzdWx0XHJcbiAgICogc3RyZWFtLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZXhwYW5kZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8qXHJcbiAgICAgKiBTYXZlIHRoZSBjbG9zZSBvbiBjbGljayBvdXRzaWRlXHJcbiAgICAgKiBzdGF0ZS4gIFRoaXMgd2lsbCBiZSB0b2dnbGVkIHNvXHJcbiAgICAgKiB0aGF0IHRoZSBwYW5lbCBkb2VzbnQgZW50ZXIgdGhlXHJcbiAgICAgKiBjbG9zZWQgc3RhdGUgd2hlbiB0aGUgbWVudSBiYXIgXHJcbiAgICAgKiBpcyBpbiB0aGUgZXhwYW5kZWQgc3RhdGUuXHJcbiAgICAgKiBcclxuICAgICAqIE90aGVyd2lzZSB0aGUgcGFuZWwgY29sbGFwc2VzIGFuZFxyXG4gICAgICogdGhlIGl0ZW1zIGRpc2FwcGVhciB3aXRoIG5vIHRvZ2dsZVxyXG4gICAgICogdG8gYnJpbmcgdGhlbSBiYWNrLlxyXG4gICAgICovXHJcbiAgICB0aGlzLl9jb2NvSW5pdCA9IHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZTtcclxuICAgIFxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSB0aGUgaW5pdGlhbCBleHBhbnNpb24gc3RhdGVcclxuICAgICAqIGJhc2VkIG9uIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgICAqL1xyXG4gICAgdGhpcy5leHBhbmRlZCA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuZXhwYW5kT25RdWVyeSkubWF0Y2hlcztcclxuXHJcbiAgICBpZih0aGlzLmV4cGFuZGVkKSB7ICBcclxuICAgICAgdGhpcy5jbG9zZU9uQ2xpY2tPdXRzaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvKlxyXG4gICAgICogU2V0IHVwIHRoZSBzdHJlYW1cclxuICAgICAqL1xyXG4gICAgdGhpcy5leHBhbmRlZFN1YnNjcmlwdGlvbiA9IFxyXG4gICAgICBmcm9tRXZlbnQod2luZG93LFwicmVzaXplXCIpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChfPT53aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmV4cGFuZE9uUXVlcnkpLm1hdGNoZXMpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZXhwYW5kZWQ9PntcclxuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBleHBhbmRlZDtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlUGFuZWxTdGF0ZSgpO1xyXG4gICAgICB9KTsgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZih0aGlzLmV4cGFuZGVkU3Vic2NyaXB0aW9uICYmICF0aGlzLmV4cGFuZGVkU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHN0YXRlIG9mIHRoZSBwYW5lbCBcclxuICAgKiB0byBzaG93aW5nIG9yIGhpZGluZyBiYXNlZFxyXG4gICAqIG9uIHRoZSBjYWNoZWQgZXhwYW5kZWQgbWVtYmVyXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB0b2dnbGVQYW5lbFN0YXRlKCkge1xyXG4gICAgaWYodGhpcy5leHBhbmRlZCkgeyAgXHJcbiAgICAgIHRoaXMuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvZ2dsZS5zaG93UGFuZWwoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlT25DbGlja091dHNpZGUgPSB0aGlzLl9jb2NvSW5pdDtcclxuICAgICAgdGhpcy50b2dnbGUuaGlkZVBhbmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJNZW51SXRlbSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCQk1lbnVJdGVtLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJNZW51SXRlbSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCQkNvbW1vbk1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJDb21tb25Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG4gfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbE1vZHVsZSB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBCQkhhbWJ1cmdlck1lbnUgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCTWVudUl0ZW1SaWdodCB9IGZyb20gJy4vbWVudS1pdGVtLXJpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QkJDb21tb25Nb2R1bGV9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgICBCQkNvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJIYW1idXJnZXJNZW51LFxyXG4gICAgQkJNZW51SXRlbVJpZ2h0LFxyXG4gIF0sXHJcbiAgXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJIYW1idXJnZXJNZW51LFxyXG4gICAgQkJNZW51SXRlbVJpZ2h0LFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCSGFtYnVyZ2VyTWVudU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJIYW1idXJnZXJNZW51TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3UmVmLFxyXG4gIFJlbmRlcmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBIb3N0QmluZGluZyxcclxuICBOZ1pvbmUsXHJcbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCQk1lbnVJdGVtIH0gZnJvbSAnLi4vY29tbW9uL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCQlNsaWRpbmdQYW5lbCB9IGZyb20gJy4uL3NsaWRpbmctcGFuZWwvc2xpZGluZy1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkaXZbYmItY29sbGFwc2luZy1tZW51XScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cclxuICA8ZGl2ICNkaXNwbGF5ZWRJdGVtcyBjbGFzcz1cImRpc3BsYXllZFwiPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2ICAjdG9nZ2xlXHJcbiAgICAgICAgW2NsYXNzLmhpZGRlbl09XCIhaGFzT3ZlcmZsb3dcIiBcclxuICAgICAgICBbYmItc2xpZGluZy1wYW5lbC10b2dnbGVdPVwicGFuZWxcIlxyXG4gICAgICAgIFt0b2dnbGVPbkNsaWNrXT1cInRvZ2dsZU9uQ2xpY2tcIlxyXG4gICAgICAgIFtjbG9zZU9uQ2xpY2tPdXRzaWRlXT1cImNsb3NlT25DbGlja091dHNpZGVcIlxyXG4gICAgICAgIFtzaG93T25Ib3Zlcl09XCJzaG93T25Ib3ZlclwiPlxyXG4gICAgXHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbYmItbWVudS10b2dnbGVdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgYmItc2xpZGluZy1wYW5lbCBcclxuICAgICAgICNwYW5lbD1cImJiU2xpZGluZ1BhbmVsXCJcclxuICAgICAgICNjb2xsYXBzZWRJdGVtcyBcclxuICAgICAgIHNsaWRlRGlyZWN0aW9uPVwiZG93blwiXHJcbiAgICAgICAjcGFuZWw9XCJiYlNsaWRpbmdQYW5lbFwiPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BkaXYuZGlzcGxheWVke2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXNocmluazowO2Rpc3BsYXk6ZmxleH1kaXYubWVudS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OmluaGVyaXQ7ZmxleC1kaXJlY3Rpb246cm93O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MX1kaXYuYmItc2xpZGluZy1wYW5lbHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZ3JvdzoxO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjEwMCV9ZGl2LmhpZGRlbnt2aXNpYmlsaXR5OmhpZGRlbn1gXSxcclxuICBob3N0OntcclxuICAgICcod2luZG93OnJlc2l6ZSknOiBcIm9uV2luZG93UmVzaXplKClcIixcclxuICB9LFxyXG4gIGV4cG9ydEFzOiBcImJiQ29sbGFwc2luZ01lbnVcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJDb2xsYXBzaW5nTWVudSB7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYi1jb2xsYXBzaW5nLW1lbnUnKSBhcHBseUhvc3RDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbGxhcHNlZCBpdGVtcyBzaG91bGQgIFxyXG4gICAqIG9wZW4gYmFzZWQgb24gYSBjbGljayBldmVudCBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdG9nZ2xlT25DbGljayA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGNvbGxhcHNlZCBpdGVtcyBzaG91bGQgb3BlbiBcclxuICAgKiBvbiBtb3VzZSBvdmVyIG9yIG5vdC5cclxuICAgKi9cclxuICBASW5wdXQoKSBzaG93T25Ib3ZlciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBjb2xsYXBzZWQgaXRlbXMgc2hvdWxkIGNsb3NlXHJcbiAgICogV2hlbiBjbGlja2VkIG91dHNpZGUgdGhlIHRvZ2dsZSBvciBwYW5lbCBvciBub3QuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQkJNZW51SXRlbSwge3JlYWQ6RWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IGZhbHNlfSkgXHJcbiAgICBpdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Rpc3BsYXllZEl0ZW1zJywge3JlYWQ6RWxlbWVudFJlZn0pIFxyXG4gICAgZGlzcGxheWVkSXRlbXM6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnY29sbGFwc2VkSXRlbXMnLCB7cmVhZDpFbGVtZW50UmVmfSkgXHJcbiAgICBjb2xsYXBzZWRJdGVtczogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0b2dnbGUnLCB7cmVhZDpFbGVtZW50UmVmfSkgXHJcbiAgICB0b2dnbGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEJCU2xpZGluZ1BhbmVsO1xyXG5cclxuICBwdWJsaWMgZ2V0IGlzT3BlbigpIHtcclxuICAgIHJldHVybiB0aGlzLnBhbmVsLmlzU2hvd2luZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlciBpc3N1ZSAxMDA5OCBDb250ZW50Q2hpbGRyZW4gY3VycmVudGx5IGFsc28gYWRkcyB0aGUgaG9zdCBjb21wb25lbnRcclxuICAgKiB0byBhIFF1ZXJ5TGlzdCB0aGF0IGl0IHNhdGlzZmllcyBtYWtpbmcgaXQgbmVjZXNzYXJ5IHRvIGZpbHRlciB0aGUgXHJcbiAgICogaG9zdCBjb21wb25lbnQgb3V0IG9mIGl0J3Mgb3duIGxpc3QgaW4gY2FzZSBzb21lb25lIHdhbnRzIHRvIG5lc3RcclxuICAgKiBhIGNvbGxhcHNpbmcgbWVudSBpbnNpZGUgYW5vdGhlciBCQiBjb21wb25lbnQgdGhhdCB1c2VzIEJCTWVudUl0ZW1zLlxyXG4gICAqIFxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwMDk4I2lzc3VlY29tbWVudC0yMzUxNTc2NDJcclxuICAgKi9cclxuICBwcml2YXRlIGdldCBpdGVtRWxlbWVudHMoKTogRWxlbWVudFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLnRvQXJyYXkoKVxyXG4gICAgICAuZmlsdGVyKGVsPT4gZWwubmF0aXZlRWxlbWVudCAhPT0gdGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGhvc3REaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IGRpc3BsYXllZERpdigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWRJdGVtcy5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgY29sbGFwc2VkRGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZEl0ZW1zLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCB0b2dnbGVEaXYoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMudG9nZ2xlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBoYXNPdmVyZmxvdyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBcclxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2FsY3VsYXRlT3ZlcmZsb3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGljaCwgaWYgYW55LCBpdGVtcyBuZWVkIHRvIGJlIFxyXG4gICAqIG1vdmVkIGludG8gdGhlIGNvbGxhcHNlZCBwYW5lbCB3aGVuIHRoZXkgXHJcbiAgICogb3ZlcmZsb3cgdGhlIG1lbnUgd2lkdGguXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVPdmVyZmxvdygpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5wcm9qZWN0Tm9kZXModGhpcy5kaXNwbGF5ZWREaXYsIFxyXG4gICAgICAgIHRoaXMuaXRlbUVsZW1lbnRzLm1hcChlbD0+eyByZXR1cm4gZWwubmF0aXZlRWxlbWVudCB9KSk7XHJcblxyXG4gICAgICBpZih0aGlzLmFyZURpc3BsYXllZEl0ZW1zVG9XaWRlKCkpIHtcclxuXHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhc092ZXJmbG93ID0gdHJ1ZX0pfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVDYWxjZWRSaWdodCA9IFxyXG4gICAgICAgICAgKHRoaXMuaG9zdERpdi5vZmZzZXRMZWZ0ICsgXHJcbiAgICAgICAgICB0aGlzLmhvc3REaXYub2Zmc2V0V2lkdGggLSBcclxuICAgICAgICAgIHRoaXMudG9nZ2xlRGl2Lm9mZnNldFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0T3ZlcmZsb3dJbmRleCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcclxuICAgICAgICBsZXQgb3ZlcmZsb3dBbW91bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgaXRlbSB0aGF0IGlzIG91dHNpZGUgdGhlIG1lbnUncyBzaXplIC0gdG9nZ2xlIHNpemVcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGVsZSA9ICh0aGlzLml0ZW1FbGVtZW50c1tpXS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IGVsZUNhbGNlZFJpZ2h0ID0gKGVsZS5vZmZzZXRMZWZ0ICsgdGhpcy5ob3N0RGl2Lm9mZnNldExlZnQgKyBlbGUub2Zmc2V0V2lkdGgpO1xyXG5cclxuICAgICAgICAgIC8vIGNhbGN1bGF0ZSBob3cgbXVjaCBhbiBpdGVtIG92ZXJmbG93cyB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAvLyB0YWtpbmcgdGhlIHRvZ2dsZXMgd2lkdGggaW50byBhY2NvdW50LlxyXG4gICAgICAgICAgb3ZlcmZsb3dBbW91bnQgPSBlbGVDYWxjZWRSaWdodCAtIG1lbnVDYWxjZWRSaWdodDtcclxuXHJcbiAgICAgICAgICBpZihvdmVyZmxvd0Ftb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZmlyc3RPdmVyZmxvd0luZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhbGwgaXRlbXMgYXJlIGNvbGxhcHNlZFxyXG4gICAgICAgIGlmIChmaXJzdE92ZXJmbG93SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnByb2plY3ROb2Rlcyh0aGlzLmNvbGxhcHNlZERpdixcclxuICAgICAgICAgICAgICB0aGlzLml0ZW1FbGVtZW50cy5tYXAoZWw9PntyZXR1cm4gZWwubmF0aXZlRWxlbWVudH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoZSBvdmVyZmxvdyBpdGVtcyBtYWtlIGVub3VnaCByb29tIGZvciB0aGUgdG9nZ2xlXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucHJvamVjdE5vZGVzKHRoaXMuY29sbGFwc2VkRGl2LFxyXG4gICAgICAgICAgICAgIHRoaXMuaXRlbUVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbmRleCA+PSBmaXJzdE92ZXJmbG93SW5kZXgpfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZWw9PntyZXR1cm4gZWwubmF0aXZlRWxlbWVudH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKT0+e1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhc092ZXJmbG93ID0gZmFsc2V9KX0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIG1lbnUgY29udGVudCB3aWR0aCBpcyBsYXJnZXIgdGhhbiB0aGUgbWVudSB3aWR0aFxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXJlRGlzcGxheWVkSXRlbXNUb1dpZGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5ZWREaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiBcclxuICAgICAgdGhpcy5ob3N0RGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXZlbnQgaGFuZGxlcnNcclxuICAgKi9cclxuXHJcbiAgb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZU92ZXJmbG93KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCQkNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQkJDb2xsYXBzaW5nTWVudSB9IGZyb20gJy4vY29sbGFwc2luZy1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi4vc2xpZGluZy1wYW5lbC9zbGlkaW5nLXBhbmVsLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJCQ29tbW9uTW9kdWxlLFxyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0JCQ29sbGFwc2luZ01lbnVdLFxyXG4gIGV4cG9ydHM6IFtCQkNvbGxhcHNpbmdNZW51XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJDb2xsYXBzaW5nTWVudU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQkJDb2xsYXBzaW5nTWVudU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcbiB9XHJcbiIsImltcG9ydCB7IFxyXG4gICAgQ29tcG9uZW50LCBcclxuICAgIE9uSW5pdCwgXHJcbiAgICBJbnB1dCwgXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBWaWV3Q2hpbGQsIFxyXG4gICAgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgLCAgZGVib3VuY2VUaW1lICwgIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBCQk11bHRpU2VsZWN0SXRlbSB9IGZyb20gJy4vbXVsdGktc2VsZWN0LWl0ZW0uaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkaXZbYmItbXVsdGktc2VsZWN0XScsXHJcbiAgICB0ZW1wbGF0ZTogYDxpbnB1dCBjbGFzcz1cInNlbGVjdGlvbnMtZmlsdGVyXCIgI2ZpbHRlciBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclRleHRcIi8+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXItbGFiZWxzXCI+XHJcbiAgICA8c3Bhbj5JdGVtczwvc3Bhbj48c3Bhbj5TZWxlY3RlZDwvc3Bhbj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJzZWxlY3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNob2ljZXNcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGNob2ljZXNcIj5cclxuICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNob2ljZUNsaWNrZWQoY2hvaWNlKVwiPnt7Y2hvaWNlLnRleHR9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0aW9uc1wiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBzZWxlY3Rpb24gb2Ygc2VsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uU2VsZWN0aW9uQ2xpY2tlZChzZWxlY3Rpb24pXCI+e3tzZWxlY3Rpb24udGV4dH19PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2A6aG9zdCBkaXZ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1pbnB1dC5zZWxlY3Rpb25zLWZpbHRlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWRpdi5jb250YWluZXItbGFiZWxzLGRpdi5zZWxlY3Rpb25zLWNvbnRhaW5lcnt3aWR0aDppbmhlcml0O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnNlbGVjdGlvbnMtY29udGFpbmVyIHVse3BhZGRpbmctbGVmdDowfS5jaG9pY2VzIHVsLC5zZWxlY3Rpb25zIHVse2xpc3Qtc3R5bGU6bm9uZX1kaXYuY29udGFpbmVyLWxhYmVsc3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwfWBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQkJNdWx0aVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlclRleHQgPSBcIlNlYXJjaC4uLlwiO1xyXG4gICAgQElucHV0KCkgZmlsdGVyQ2hhbmdlRGVsYXltcyA9IDIwMDtcclxuXHJcbiAgICBASW5wdXQoKSBzZWxlY3Rpb25JdGVtczogQkJNdWx0aVNlbGVjdEl0ZW1bXTtcclxuXHJcbiAgICBnZXQgY2hvaWNlcygpOiBCQk11bHRpU2VsZWN0SXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25JdGVtcy5maWx0ZXIoaXRlbT0+eyByZXR1cm4gIWl0ZW0uc2VsZWN0ZWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VsZWN0aW9ucygpOiBCQk11bHRpU2VsZWN0SXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25JdGVtcy5maWx0ZXIoaXRlbT0+eyByZXR1cm4gaXRlbS5zZWxlY3RlZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ZpbHRlcicpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBPdXRwdXQoKSBpdGVtU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEJCTXVsdGlTZWxlY3RJdGVtPigpO1xyXG4gICAgQE91dHB1dCgpIGl0ZW1VbnNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxCQk11bHRpU2VsZWN0SXRlbT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2FybmluZyB0aGlzIGNvbXBvbmVudCBpcyBzdGlsbCB1bmRlciBoZWF2eSBkZXZlbG9wbWVudC4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSXQgaXNuXFwndCBjb21wbGV0ZWx5IGZ1bmN0aW9uYWwgeWV0IGFuZCBpcyBzdWJqZWN0IHRvIGNoYW5nZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgbWFwKChldmVudDpLZXlib2FyZEV2ZW50KT0+KGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSksXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmZpbHRlckNoYW5nZURlbGF5bXMpLFxyXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGZpbHRlclRleHQ9PiB0aGlzLmZpbHRlckl0ZW1zKGZpbHRlclRleHQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gdGVtcCB0ZXN0aW5nIGNvZGVcclxuICAgICAgICBpZighdGhpcy5zZWxlY3Rpb25JdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVhciBvZiBCaXJ0aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUm9va2llIFNlYXNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSGVpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdXZWlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZvcnR5IFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0JlbmNoIFdlaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnVmVydGljYWwgSnVtcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQnJvYWQgSnVtcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2h1dHRsZSBUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb25lIFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RyYWZ0IFBvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb2xsZWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDb2xsZWdlIERpdmlzaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDdXJyZW50IFRlYW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9ucy5wdXNoKHRoaXMuY2hvaWNlc1sxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaG9pY2VDbGlja2VkKGl0ZW06IEJCTXVsdGlTZWxlY3RJdGVtKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGlvbkNsaWNrZWQoaXRlbTogQkJNdWx0aVNlbGVjdEl0ZW0pIHtcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtVW5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckl0ZW1zKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQkJNdWx0aVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICBdLFxyXG4gIFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQkJNdWx0aVNlbGVjdENvbXBvbmVudFxyXG4gIF0sXHJcbiAgXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQkJNdWx0aVNlbGVjdENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJCTXVsdGlTZWxlY3RNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJCTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfSAgXHJcbn1cclxuIiwiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VTdWJzY3JpcHRpb24oc3ViOiBTdWJzY3JpcHRpb24pIHtcclxuICAgIGlmKHN1YiAmJiAhc3ViLmNsb3NlZCkge1xyXG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IGJiRG5EVHlwZSA9IFwiYmIvZG5kXCI7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQkJEcmFnQW5kRHJvcFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBEaXJlY3RpdmUsIFxuICBPbkluaXQsIFxuICBFbGVtZW50UmVmLCBcbiAgVmlld1JlZiwgXG4gIFZpZXdDb250YWluZXJSZWYsIFxuICBUZW1wbGF0ZVJlZiwgXG4gIEVtYmVkZGVkVmlld1JlZiwgXG4gIE9uRGVzdHJveSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBiYkRuRFR5cGUgfSBmcm9tICcuLy4uL2RuZC5jb25zdCc7XG5pbXBvcnQgeyBjbG9zZVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4uL2RyYWctYW5kLWRyb3Auc2VydmljZSc7XG5pbXBvcnQgeyBCQlZlY3RvciwgQkJEcmFnU3RhcnRFdmVudCB9IGZyb20gJy4vLi4vZG5kLm1vZGVscyc7XG5cbi8qKlxuICogQkIgRHJhZ2dhYmxlIFN0cnVjdHVyYWwgRGlyZWN0aXZlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYkRyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIEJCRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ZWRPblZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPEJCRHJhZ1N0YXJ0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkcmFnRW5kZWRPblZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPFZpZXdSZWY+KCk7XG4gIFxuICAvKipcbiAgICogXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzQmVpbmdEcmFnZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0JlaW5nRHJhZ2dlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHB1YmxpYyBnZXQgZHJhZ2dhYmxlVGVtcGxhdGVSZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVSZWY7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIGRyYWdnYWJsZVZpZXdSZWY6IFZpZXdSZWY7XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBlbWJlZGRlZFRlbXBsYXRlUmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIGRyYWdTdGFydFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgZHJhZ0VuZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHByaXZhdGUgc2V0IGlzRHJhZ2dlZChkcmFnZ2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNCZWluZ0RyYWdnZWQgPSBkcmFnZ2VkO1xuXG4gICAgaWYodGhpcy5faXNCZWluZ0RyYWdnZWQpIHtcbiAgICAgIC8vdGhpcy5kcmFnU3RhcnRlZE9uVmlldy5uZXh0KHRoaXMuZHJhZ2dhYmxlVmlld1JlZik7XG4gICAgICAvL3RoaXMudmlld0NvbnRhaW5lci5kZXRhY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy90aGlzLmRyYWdFbmRlZE9uVmlldy5uZXh0KHRoaXMuZHJhZ2dhYmxlVmlld1JlZik7XG4gICAgICAvL3RoaXMudmlld0NvbnRhaW5lci5pbnNlcnQodGhpcy5kcmFnZ2VkVmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHJpdmF0ZSBfaXNCZWluZ0RyYWdnZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogXG4gICAqL1xuICBwcml2YXRlIGNvbnRleHQgPSBuZXcgRHJhZ2dhYmxlQ29udGV4dCgpO1xuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGRuZFNlcnZpY2UgXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVJlZiBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG5kU2VydmljZTogQkJEcmFnQW5kRHJvcFNlcnZpY2UsICAgIFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT5cbiAgKSB7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBuZ09uSW5pdCgpIHtcbiAgICAvKlxuICAgIHRoaXMuZW1iZWRkZWRUZW1wbGF0ZVJlZiA9IFxuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLnJlZ2lzdGVyRHJhZ0FuZERyb3BFdmVudHModGhpcy5lbWJlZGRlZFRlbXBsYXRlUmVmLnJvb3ROb2Rlc1swXSk7XG4gICAgdGhpcy5kcmFnZ2VkVmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5nZXQoMCk7XG4gICAgKi9cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNsb3NlU3Vic2NyaXB0aW9uKHRoaXMuZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uKTtcbiAgICBjbG9zZVN1YnNjcmlwdGlvbih0aGlzLmRyYWdFbmRTdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgKi9cbiAgcmVnaXN0ZXJEcmFnQW5kRHJvcEV2ZW50cyh2aWV3OiBFbWJlZGRlZFZpZXdSZWY8YW55Pikge1xuICAgIHRoaXMuZHJhZ2dhYmxlVmlld1JlZiA9IHZpZXc7XG4gICAgbGV0IHRhcmdldCA9IHZpZXcucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLFwidHJ1ZVwiKTtcblxuICAgIHRoaXMuZHJhZ1N0YXJ0U3Vic2NyaXB0aW9uID0gXG4gICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0YXJnZXQsXCJkcmFnc3RhcnRcIilcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IERyYWdFdmVudCk9PntcbiAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShiYkRuRFR5cGUsJ2JiZHJhZ2dhYmxlJyk7XG4gICAgICAgICAgLy9ldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xuICAgICAgICAgIC8vZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShcbiAgICAgICAgICAvLyAgdGFyZ2V0LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudCwwLDApO1xuXG4gICAgICAgICAgbGV0IHJlY3QgPSBldmVudC5zcmNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGxldCB5ID0gcmVjdC50b3AgKyAocmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgICBsZXQgeCA9IHJlY3QubGVmdCArIChyZWN0LndpZHRoIC8gMik7XG4gICAgICAgICAgY29uc29sZS5sb2coeCx5KTtcblxuICAgICAgICAgIGxldCBlOiBCQkRyYWdTdGFydEV2ZW50ID0ge1xuICAgICAgICAgICAgdmlldzogdGhpcy5kcmFnZ2FibGVWaWV3UmVmLFxuICAgICAgICAgICAgbW91c2VPZmZzZXQ6IHtcbiAgICAgICAgICAgICAgb2Zmc2V0WDogZXZlbnQuY2xpZW50WCAtIHgsXG4gICAgICAgICAgICAgIG9mZnNldFk6IGV2ZW50LmNsaWVudFkgLSB5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICBsZXQgY2VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICBjZW50ZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgIGNlbnRlci5zdHlsZS5sZWZ0ID0gYCR7bW91c2VPZmZzZXQub2Zmc2V0WH1weGA7XG4gICAgICAgICAgY2VudGVyLnN0eWxlLnRvcCA9IGAke21vdXNlT2Zmc2V0Lm9mZnNldFl9cHhgO1xuICAgICAgICAgIGNlbnRlci5zdHlsZS5ib3JkZXJSYWRpdXM9IFwiMjBweFwiXG4gICAgICAgICAgY2VudGVyLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuICAgICAgICAgIGNlbnRlci5zdHlsZS53aWR0aD0gXCIyMHB4XCI7XG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IGkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgY2xvbmUgPSBldmVudC5zcmNFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MTElFbGVtZW50O1xuICAgICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGNlbnRlcik7XG4gICAgICAgICAgaS5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShcbiAgICAgICAgICAgICBpLGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG4gICAgICAgICAgKi9cblxuICAgICAgICAgIC8qXG4gICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZShcbiAgICAgICAgICAgIGV2ZW50LnNyY0VsZW1lbnQsZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgICAgKi9cblxuICAgICAgICAgIC8qIENocm9tZSBjYWxscyBkcmFnZW5kIGlmIHRoZSBkb20gaXMgY2hhbmdlZCBkdXJpbmcgICovXG4gICAgICAgICAgLyogZHJhZyBzdGFydCBzbyBpbiBvcmRlciB0byBub3QgY2FsbCBkcmFnZW5kICAgICAgICAgKi9cbiAgICAgICAgICAvKiBpbW1lZGlhdGVseSB3ZSBoYXZlIHRvIGZpcmUgdGhlIGRvbSBtYW5pcHVsYXRpb25zICAqL1xuICAgICAgICAgIC8qIG91dHNpZGUgb2YgdGhlIGV2ZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRlZE9uVmlldy5uZXh0KGUpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycj0+Y29uc29sZS5sb2coZXJyKSxcbiAgICAgICAgKCk9Pnt9KTtcblxuICAgIHRoaXMuZHJhZ0VuZFN1YnNjcmlwdGlvbiA9IFxuICAgIGZyb21FdmVudCh0YXJnZXQsXCJkcmFnZW5kXCIpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBEcmFnRXZlbnQpPT57XG4gICAgICAgICAgLy90aGlzLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZHJhZ0VuZGVkT25WaWV3Lm5leHQodGhpcy5kcmFnZ2FibGVWaWV3UmVmKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhlcnIpLFxuICAgICAgICAoKT0+e30pO1xuICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlQ29udGV4dCB7XG4gIHB1YmxpYyBpbXBsaWNpdCQ6IGFueSA9IG51bGw7XG59XG4iLCJpbXBvcnQgeyBcbiAgRGlyZWN0aXZlLCBcbiAgT25Jbml0LCBcbiAgUXVlcnlMaXN0LCBcbiAgQWZ0ZXJDb250ZW50SW5pdCwgXG4gIENvbnRlbnRDaGlsZHJlbiwgIFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVmlld1JlZixcbiAgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJCRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBiYkRuRFR5cGUgfSBmcm9tICcuLy4uL2RuZC5jb25zdCc7XG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4uL2RyYWctYW5kLWRyb3Auc2VydmljZSc7XG5pbXBvcnQgeyBCQkRyYWdTdGFydEV2ZW50LCBCQlZlY3RvciB9IGZyb20gJy4uL2RuZC5tb2RlbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbYmJEbkRDb250YWluZXJdJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICNkbmRDb250YWluZXI+PC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBCQkRyYWdBbmREcm9wQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKEJCRHJhZ2dhYmxlRGlyZWN0aXZlKSBkcmFnZ2FibGVzUUw6IFF1ZXJ5TGlzdDxCQkRyYWdnYWJsZURpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoXCJkbmRDb250YWluZXJcIiwge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBkbmRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIFxuICBwcml2YXRlIGRyYWdnaW5nTW91c2VPZmZzZXQ6IEJCVmVjdG9yO1xuICBwcml2YXRlIGRyYWdTdGFydEV2ZW50OiBCQkRyYWdTdGFydEV2ZW50O1xuICBwcml2YXRlIGRyYWdnYWJsZUVtYmVkZGVkVmlld3M6IEVtYmVkZGVkVmlld1JlZjxhbnk+W10gPSBbXTtcbiAgcHJpdmF0ZSBkcmFnU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IERlZmF1bHREcmFnTG9jYXRpb25UYXJnZXQ6IERyYWdMb2NhdGlvblRhcmdldCA9IHtcbiAgICBsb3dJbmRleDogLTEsIFxuICAgIGhpZ2hJbmRleDogLTEsXG4gICAgdmlld0JlaW5nRHJhZ2dlZDogbnVsbFxuICB9O1xuXG4gIHByaXZhdGUgZHJhZ0xvY2F0aW9uIDogRHJhZ0xvY2F0aW9uVGFyZ2V0ID0gdGhpcy5EZWZhdWx0RHJhZ0xvY2F0aW9uVGFyZ2V0O1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkbmRTZXJ2aWNlOiBCQkRyYWdBbmREcm9wU2VydmljZSxcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50UmVmOiBFbGVtZW50UmVmICAgIFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oJ0JCIERyYWcgYW5kIERyb3AgaXMgc3RpbGwgdW5kZXIgZGV2ZWxvcG1lbnQuJylcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ2VudGVyXCIpXG4gICAgICAuc3Vic2NyaWJlKHRoaXMub25EcmFnRW50ZXIpKTtcblxuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ292ZXJcIilcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTApKVxuICAgICAgLnN1YnNjcmliZSh0aGlzLm9uRHJhZ092ZXIpKTtcblxuICAgIHRoaXMuZHJhZ1N1YnNjcmlwdGlvbnMucHVzaChcbiAgICBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFwiZHJhZ292ZXJcIilcbiAgICAgIC5zdWJzY3JpYmUoKGU6RXZlbnQpPT5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpKSk7XG5cbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcImRyb3BcIilcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5vbkRyb3ApKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmRyYWdTdWJzY3JpcHRpb25zLnB1c2goXG4gICAgdGhpcy5kcmFnZ2FibGVzUUxcbiAgICAgIC5jaGFuZ2VzXG4gICAgICAuc3Vic2NyaWJlKChkcmFnZ2FibGVzOkJCRHJhZ2dhYmxlRGlyZWN0aXZlW10pPT57XG4gICAgICB9KSk7XG4gICAgY29uc29sZS5sb2coXCJjb250YWluZXJcIik7XG4gICAgY29uc29sZS5sb2codGhpcy5kbmRDb250YWluZXIpO1xuICAgIHRoaXMuZHJhZ2dhYmxlc1FMLm1hcCh0aGlzLmluaXREcmFnZ2FibGUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1Yj0+e1xuICAgICAgaWYoIXN1Yi5jbG9zZWQpIHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGRyYWdnYWJsZSBcbiAgICogQHBhcmFtIGluZGV4IFxuICAgKi9cbiAgaW5pdERyYWdnYWJsZSA9IChkcmFnZ2FibGU6IEJCRHJhZ2dhYmxlRGlyZWN0aXZlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGVtYmVkZGVkVmlld1JlZiA9IFxuICAgICAgdGhpcy5kbmRDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KGRyYWdnYWJsZS5kcmFnZ2FibGVUZW1wbGF0ZVJlZilcbiAgICB0aGlzLmRyYWdnYWJsZUVtYmVkZGVkVmlld3MucHVzaChlbWJlZGRlZFZpZXdSZWYpO1xuICAgIGRyYWdnYWJsZS5yZWdpc3RlckRyYWdBbmREcm9wRXZlbnRzKGVtYmVkZGVkVmlld1JlZik7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgZHJhZ2dhYmxlLmRyYWdTdGFydGVkT25WaWV3LnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0KSk7XG4gICAgdGhpcy5kcmFnU3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRlZE9uVmlldy5zdWJzY3JpYmUodGhpcy5vbkRyYWdFbmQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGV2ZW50IFxuICAgKi9cbiAgb25EcmFnU3RhcnQgPSAoZXZlbnQ6IEJCRHJhZ1N0YXJ0RXZlbnQpID0+IHtcbiAgICB0aGlzLmRyYWdTdGFydEV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5kcmFnZ2luZ01vdXNlT2Zmc2V0ID0gZXZlbnQubW91c2VPZmZzZXQ7XG4gICAgbGV0IHZpZXdJbmRleCA9IHRoaXMuZG5kQ29udGFpbmVyLmluZGV4T2YoZXZlbnQudmlldyk7XG4gICAgdGhpcy5kbmRDb250YWluZXIuZGV0YWNoKHZpZXdJbmRleCk7XG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzLnNwbGljZSh2aWV3SW5kZXgsMSk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB2aWV3IFxuICAgKi9cbiAgb25EcmFnRW5kID0gKHZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+KSA9PiB7XG4gICAgLy90aGlzLmRuZENvbnRhaW5lci5pbnNlcnQodmlldyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25EcmFnRW50ZXIgPSAoZXZlbnQ6RHJhZ0V2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkcmFnZW50ZXJcIik7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25EcmFnT3ZlciA9IChldmVudDpEcmFnRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRyYWdvdmVyXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcyk7XG4gICAgbGV0IHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBsZXQgY2xvc2VzdFZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+ID0gbnVsbDtcbiAgICBsZXQgY2xvc2VzdEluZGV4ID0gMDsgXG4gICAgbGV0IG5leHRDbG9zZXN0SW5kZXggPSAwO1xuXG4gICAgdGhpcy5kcmFnZ2FibGVFbWJlZGRlZFZpZXdzXG4gICAgICAvKlxuICAgICAgICogVE9ETzogTG9uZyB0ZXJtIG9wdGltaXphdGlvbiBtYXliZSB1c2UgdGhlIGl0ZW1cbiAgICAgICAqIGZpbHRlcmVkIG91dCdzIGluZGV4IGFzIHRoZSBzdGFydGluZyBsb2NhdGlvblxuICAgICAgICogZm9yIGZ1cnRoZXIgaGl0IHRlc3RzIHNpbmNlIHdlIGtub3cgdGhhdCBpdFxuICAgICAgICogaXMgdGhlIG9uZSBiZWluZyBkcmFnZ2VkLiAgSWUuICBJZiBJbmRleCA0IGlzXG4gICAgICAgKiBmaWx0ZXJlZCBvdXQgdGhlbiBzdGFydCBoaXQgdGVzdHMgYXQgaW5kZXggMyBcbiAgICAgICAqIGFuZCA1IGluc3RlYWQgb2Ygc3RhcnRpbmcgaGl0IHRlc3RzIGF0IGluZGV4IFxuICAgICAgICogMCBhbmQgY2hlY2tpbmcgYWxsIGl0ZW1zLlxuICAgICAgICovXG4gICAgICAuZmlsdGVyKHZpZXc9PnZpZXchPT10aGlzLmRyYWdTdGFydEV2ZW50LnZpZXcpXG4gICAgICAubWFwKHZpZXc9PntcbiAgICAgICAgbGV0IGVsZW1lbnQgPSAodmlldy5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlldzogdmlldyxcbiAgICAgICAgICB4OiByZWN0LmxlZnQgKyAocmVjdC53aWR0aCAvIDIpLFxuICAgICAgICAgIHk6IHJlY3QudG9wICsgKHJlY3QuaGVpZ2h0IC8gMilcbiAgICAgICAgfX0pXG4gICAgICAuZm9yRWFjaCgoY2VudGVyQ29vcmRpbmF0ZXMsIGkpID0+e1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZShcbiAgICAgICAgICBjZW50ZXJDb29yZGluYXRlcy55LFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgKyB0aGlzLmRyYWdTdGFydEV2ZW50Lm1vdXNlT2Zmc2V0Lm9mZnNldFkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2l9ID0gJHtkeX0geSdzOiAke2NlbnRlckNvb3JkaW5hdGVzLnl9IC0gJHtldmVudC5jbGllbnRZfSArICR7dGhpcy5kcmFnU3RhcnRFdmVudC5tb3VzZU9mZnNldC5vZmZzZXRZfWApXG4gICAgICAgICAgXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKGR5KTtcblxuICAgICAgICBpZihkaXN0YW5jZSA8IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgY2xvc2VzdFZpZXcgPSBjZW50ZXJDb29yZGluYXRlcy52aWV3O1xuICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IGk7XG5cbiAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggc2lkZSBvZiB0aGUgY2xvc2VzdCBkcmFnZ2FibGVcbiAgICAgICAgICAvLyB0aGUgZHJhZ2dhYmxlIGJlaW5nIGRyYWdnZWQgaXMgb24gYW5kIHNldCB0aGVcbiAgICAgICAgICAvLyBuZXh0IGNsb3Nlc3QgYWNjb3JkaW5nbHlcbiAgICAgICAgICBuZXh0Q2xvc2VzdEluZGV4ID0gKGR5IDwgMCk/IGNsb3Nlc3RJbmRleCArIDE6IGNsb3Nlc3RJbmRleCAtIDE7XG5cbiAgICAgICAgICB0aGlzLmRyYWdMb2NhdGlvbiA9IHtcbiAgICAgICAgICAgIGxvd0luZGV4OiBNYXRoLm1pbihjbG9zZXN0SW5kZXgsbmV4dENsb3Nlc3RJbmRleCksXG4gICAgICAgICAgICBoaWdoSW5kZXg6IE1hdGgubWF4KGNsb3Nlc3RJbmRleCxuZXh0Q2xvc2VzdEluZGV4KSxcbiAgICAgICAgICAgIHZpZXdCZWluZ0RyYWdnZWQ6IHRoaXMuZHJhZ1N0YXJ0RXZlbnQudmlld1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8qIHRoaXMgc2lnbmlmaWVzIHRoYXQgdGhlIGNvbnRhaW5lciBpcyBhIHZhbGlkIGRyb3AgdGFyZ2V0ICAqL1xuICAgIC8qIFRPRE86IGRvZXNuJ3Qgd29yayBhdCB0aGUgbW9tZW50PyB0aGUgQkJEbkRUeXBlIGlzIG5ldmVyICovXG4gICAgLyogcHJvcGVybHkgYXR0YWNoZWQgdG8gdGhlIGV2ZW50IGV2ZW4gdGhvdWdoIEkgYW0gc2V0dGluZyAgICovXG4gICAgLyogdGhlIHR5cGUgaW5zaWRlIHRoZSBkcmFnZ2FibGUgZGlyZWN0aXZlIGV2ZW50Li4uICAgICAgICAgICovXG4gICAgLypcbiAgICBpZihldmVudC5kYXRhVHJhbnNmZXIudHlwZXMuaW5jbHVkZXMoYmJEbkRUeXBlKSkge1xuICAgICAgY29uc29sZS5sb2coJ2JiIHRyYW5zZmVyIGRldGVjdGVkJyk7XG4gICAgfVxuICAgICovXG4gIH1cblxuICBvbkRyb3AgPSAoZXZlbnQ6RHJhZ0V2ZW50KSA9PiB7XG4gICAgdGhpcy5kbmRDb250YWluZXIuaW5zZXJ0KFxuICAgICAgdGhpcy5kcmFnTG9jYXRpb24udmlld0JlaW5nRHJhZ2dlZCxcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLmhpZ2hJbmRleCk7XG5cbiAgICB0aGlzLmRyYWdnYWJsZUVtYmVkZGVkVmlld3Muc3BsaWNlKFxuICAgICAgdGhpcy5kcmFnTG9jYXRpb24uaGlnaEluZGV4LFxuICAgICAgMCxcbiAgICAgIHRoaXMuZHJhZ0xvY2F0aW9uLnZpZXdCZWluZ0RyYWdnZWQgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gcDEgXG4gICAqIEBwYXJhbSBwMiBcbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlMURpbWVuc2lvbkRpc3RhbmNlKHAxOiBudW1iZXIsIHAyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gcDEgLSBwMjtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHgxIFxuICAgKiBAcGFyYW0geDIgXG4gICAqIEBwYXJhbSB5MSBcbiAgICogQHBhcmFtIHkyIFxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGUyRGltZW5zaW9uRGlzdGFuY2UoeDE6IG51bWJlcix4MjogbnVtYmVyLHkxOiBudW1iZXIseTI6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICB0aGlzLmNhbGN1bGF0ZTFEaW1lbnNpb25EaXN0YW5jZSh4MSx4MikqKjIgKyBcbiAgICAgIHRoaXMuY2FsY3VsYXRlMURpbWVuc2lvbkRpc3RhbmNlKHkxLHkyKSoqMik7XG4gIH1cblxuICAgIFxuICBcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnTG9jYXRpb25UYXJnZXQge1xuICBsb3dJbmRleDogbnVtYmVyO1xuICBoaWdoSW5kZXg6IG51bWJlcjtcbiAgdmlld0JlaW5nRHJhZ2dlZDogVmlld1JlZjtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC1jb250YWluZXIvZHJhZy1hbmQtZHJvcC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJCRHJhZ2dhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCQkRyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCQkRyYWdnYWJsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkJEcmFnQW5kRHJvcENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCQkRyYWdnYWJsZURpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtCQkRyYWdBbmREcm9wU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJEcmFnQW5kRHJvcENvbXBvbmVudE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG4gfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFiU2VydmljZSB7XG4gIGFjdGl2ZVRhYjogc3RyaW5nID0gJyc7XG4gIHRhYnNldHMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJTZXJ2aWNlIH0gZnJvbSAnLi90YWIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYlRhYl0nXG59KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGFiU2VydmljZTogVGFiU2VydmljZVxuICApIHsgfVxuXG4gIEBJbnB1dCgnYmJ0YWInKSB0YWJOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJ0YWJzZXQnKSB0YWJzZXQ6IHN0cmluZztcbiAgQElucHV0KCdiYmFjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCdiYmFjdGl2ZWNsYXNzJykgYWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYmJzaG93c3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYnNob3dlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmJic2hvd3N0YXJ0LmVtaXQodGhpcy50YWJOYW1lKTtcbiAgICAgICAgICB0aGlzLnRhYlNlcnZpY2UudGFic2V0c1t0aGlzLnRhYnNldF0gPSB7fTtcbiAgICAgICAgICB0aGlzLnNldEFjdGl2ZSgpO1xuICAgICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB0aGlzLmJic2hvd3N0YXJ0LmVtaXQodGhpcy50YWJOYW1lKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZSgpO1xuICB9XG5cbiAgc2V0QWN0aXZlKCkge1xuICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcblxuICAgICAgbGV0IGFjdGl2ZUNsYXNzRWxlbWVudCA9ICdub25lJztcbiAgICAgIGxldCBhY3RpdmVDbGFzc1RhcmdldCA9ICdub25lJztcblxuICAgICAgLy8gRmluZCBvdXQgaWYgdGhpcyBlbGVtZW50LCB0aGUgcGFyZW50IGVsZW1lbnQsIG9yIGNoaWxkIGVsZW1lbnRzIGhhdmUgYW4gYWN0aXZlIGNsYXNzIHNldC5cbiAgICAgIC8vIE9yZGVyIG9mIHByZWNlZGVuY2U6IFBhcmVudCwgdGFiLCBjaGlsZC5cbiAgICAgIGlmIChwYXJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYmJhY3RpdmVjbGFzcycpKSB7XG4gICAgICAgICAgYWN0aXZlQ2xhc3NFbGVtZW50ID0gJ3BhcmVudCc7XG4gICAgICAgICAgYWN0aXZlQ2xhc3NUYXJnZXQgPSBwYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ2JidGFyZ2V0J10udmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgYWN0aXZlQ2xhc3NFbGVtZW50ID0gJ3RhYic7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZC5oYXNBdHRyaWJ1dGUoJ2JiYWN0aXZlY2xhc3MnKSkge1xuICAgICAgICAgICAgICBhY3RpdmVDbGFzc0VsZW1lbnQgPSAnY2hpbGQnO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHRhYiBlbGVtZW50IGl0c2VsZiBoYXMgaXQgc2V0LCBhcHBseSBpdC5cbiAgICAgIGlmIChhY3RpdmVDbGFzc0VsZW1lbnQgPT09ICd0YWInKSB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXSwgdGhpcy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdiYmFjdGl2ZScsIHRydWUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2xhc3NFbGVtZW50ID09PSAnY2hpbGQnKSB7XG4gICAgICAgICAgbGV0IGNoaWxkQWN0aXZlQ2xhc3MgPSBjaGlsZC5hdHRyaWJ1dGVzLmJiYWN0aXZlY2xhc3MudmFsdWU7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0uaGFzQXR0cmlidXRlKCdiYnRhYicpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHBhcmVudEVsZW1lbnQuY2hpbGRyZW5baV0sICdiYmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXS5jaGlsZHJlblswXSwgY2hpbGRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdiYmFjdGl2ZScsIHRydWUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY2hpbGQsIGNoaWxkQWN0aXZlQ2xhc3MpO1xuXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUNsYXNzRWxlbWVudCA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICBsZXQgcGFyZW50QWN0aXZlQ2xhc3MgPSBwYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXMuYmJhY3RpdmVjbGFzcy52YWx1ZTtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXS5oYXNBdHRyaWJ1dGUoJ2JidGFiJykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXSwgJ2JiYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzVGFyZ2V0ID09PSAndGFiJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXSwgcGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVDbGFzc1RhcmdldCA9PT0gJ2NoaWxkJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXS5jaGlsZHJlblswXSwgcGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgICAgICBpZiAoYWN0aXZlQ2xhc3NUYXJnZXQgPT09ICd0YWInKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBwYXJlbnRBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVDbGFzc1RhcmdldCA9PT0gJ2NoaWxkJykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgcGFyZW50QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIGNoaWxkIGVsZW1lbnRzIGFuZCBiYmFjdGl2ZUNsYXNzIGlzbid0IHNldC5cbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXS5oYXNBdHRyaWJ1dGUoJ2JidGFiJykpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkocGFyZW50RWxlbWVudC5jaGlsZHJlbltpXSwgJ2JiYWN0aXZlJywgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYmJhY3RpdmUnLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiU2VydmljZS50YWJzZXRzW3RoaXMudGFic2V0XVsnYWN0aXZlVGFiJ10gPSB0aGlzLnRhYk5hbWU7XG4gICAgICB0aGlzLmJic2hvd2VuZC5lbWl0KHRoaXMudGFiTmFtZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vdGFiLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJUYWJDb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29udGVudERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGFiU2VydmljZTogVGFiU2VydmljZVxuICApIHsgfVxuXG4gIEBJbnB1dCgnYmJ0YWJjb250ZW50JykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2JidGFic2V0JykgdGFic2V0OiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSgpIHtcbiAgICAgIGxldCBkaXNwbGF5ID0gdGhpcy50YWJTZXJ2aWNlLnRhYnNldHNbdGhpcy50YWJzZXRdLmFjdGl2ZVRhYiA9PT0gdGhpcy5uYW1lID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIGRpc3BsYXkpO1xufVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRhYlNlcnZpY2UgfSBmcm9tICcuL3RhYi5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFiRGlyZWN0aXZlLFxuICAgIFRhYkNvbnRlbnREaXJlY3RpdmVcbiAgXSxcbiAgXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJEaXJlY3RpdmUsXG4gICAgVGFiQ29udGVudERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCVGFiTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCQlRhYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RhYlNlcnZpY2VdXG4gICAgfTtcbiAgfVxuIH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wU2VydmljZSB7XG4gIGVsOiBhbnk7XG4gIGRyb3B6b25lSW5kZXg6IG51bWJlcjtcbiAgZHJvcHBhYmxlSW5kZXg6IG51bWJlcjtcbiAgbW9kZWw6IEFycmF5PGFueT47XG4gIGRyb3B6b25lczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdBbmREcm9wU2VydmljZSB9IGZyb20gJy4vZHJhZy1hbmQtZHJvcC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2JiRHJvcHBlcl0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGRuZFNlcnZpY2U6IERyYWdBbmREcm9wU2VydmljZVxuICApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuZHJhZ3N0YXJ0ID0gdGhpcy5kcmFnc3RhcnQ7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmRyYWdlbmQgPSB0aGlzLmRyYWdlbmQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHBlckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wcGVyQ2xhc3MpO1xuICAgICAgfVxuICB9XG5cbiAgQElucHV0KCdiYmRyb3BwZXInKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJkcm9wcGVyQ2xhc3MnKSBiYmRyb3BwZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoJ2JiaG9sZGluZ0NsYXNzJykgYmJob2xkaW5nQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYnBheWxvYWQnKSBiYnBheWxvYWQ6c3RyaW5nO1xuICBASW5wdXQoJ2JiZHJvcHBlcklkJykgYmJkcm9wcGVySWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIGJic3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBkcmFnc3RhcnQoZXZlbnQ6YW55KSB7XG4gICAgICBpZiAodGhpcy5iYmhvbGRpbmdDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJob2xkaW5nQ2xhc3MpO1xuICAgICAgfVxuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLmJicGF5bG9hZCB8fCBudWxsKTtcbiAgICAgIHRoaXMuZG5kU2VydmljZS5lbCA9IHRoaXMuZWw7XG4gICAgICBpZih0aGlzLmJiZHJvcHBlcklkKSB7XG4gICAgICAgICAgdGhpcy5iYnN0YXJ0LmVtaXQodGhpcy5iYmRyb3BwZXJJZCk7XG4gICAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJykgZHJhZ2VuZCgpIHtcbiAgICAgIGlmICh0aGlzLmJiaG9sZGluZ0NsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5iYmhvbGRpbmdDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmJiZHJvcHBlcklkKSB7XG4gICAgICAgICAgdGhpcy5iYnN0YXJ0LmVtaXQodGhpcy5iYmRyb3BwZXJJZCk7XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BTZXJ2aWNlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYmJEcm9wWm9uZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bab25lRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBkbmRTZXJ2aWNlOiBEcmFnQW5kRHJvcFNlcnZpY2UsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmRuZFNlcnZpY2UuZHJvcHpvbmVzLmluY2x1ZGVzKHRoaXMubmFtZSkpIHtcbiAgICAgICAgICB0aGlzLmRuZFNlcnZpY2UuZHJvcHpvbmVzLnB1c2godGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgnYmJkcm9wem9uZScpIG5hbWU6IHN0cmluZztcblxuICBASW5wdXQoJ2JiZHJvcHpvbmVDbGFzcycpIGJiZHJvcHpvbmVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoJ2JiZHJvcHpvbmVIb3ZlckNsYXNzJykgYmJkcm9wem9uZUhvdmVyQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCdiYmRyb3B6b25lSWQnKSBiYmRyb3B6b25lSWQ6IHN0cmluZztcbiAgQE91dHB1dCgpIGJiZGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJkcm9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSkgZHJhZ292ZXIoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInKSBkcmFnZW50ZXIoKSB7XG4gICAgICBpZiAodGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcykge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVJZCkge1xuICAgICAgICAgIHRoaXMuYmJlbnRlci5lbWl0KHRoaXMuYmJkcm9wem9uZUlkKTtcbiAgICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScpIGRyYWdsZWF2ZSgpIHtcbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVIb3ZlckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYmJkcm9wem9uZUhvdmVyQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYmJkcm9wem9uZUlkKSB7XG4gICAgICAgICAgdGhpcy5iYmxlYXZlLmVtaXQodGhpcy5iYmRyb3B6b25lSWQpO1xuICAgICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pIGRyb3AoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5iYmRyb3B6b25lSG92ZXJDbGFzcyk7XG5cbiAgICAgIGxldCBkcm9wcGVkID0gdGhpcy5kbmRTZXJ2aWNlLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZHJvcHBlZC5hdHRyaWJ1dGVzLmJiZHJvcHBlci52YWx1ZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRuZFNlcnZpY2UuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLCB0aGlzLmRuZFNlcnZpY2UuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuZG5kU2VydmljZS5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICBpZiAoZHJvcHBlZC5hdHRyaWJ1dGVzLmJicGF5bG9hZCkge1xuICAgICAgICAgICAgICB0aGlzLmJiZGF0YS5lbWl0KGRyb3BwZWQuYXR0cmlidXRlcy5iYnBheWxvYWQudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJiZHJvcHpvbmVJZCkge1xuICAgICAgICAgIHRoaXMuYmJkcm9wLmVtaXQodGhpcy5iYmRyb3B6b25lSWQpO1xuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRHJhZ0FuZERyb3BTZXJ2aWNlIH0gZnJvbSAnLi9kcmFnLWFuZC1kcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHJvcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcHBlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Atem9uZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERyb3BwZXJEaXJlY3RpdmUsXG4gICAgRHJvcFpvbmVEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEcm9wcGVyRGlyZWN0aXZlLFxuICAgIERyb3Bab25lRGlyZWN0aXZlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJCRHJhZ0FuZERyb3BNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEJCRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFnQW5kRHJvcFNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYlNvcnRhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU29ydGFibGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBASW5wdXQoJ2Jic29ydGFibGUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmJvcHRpb25zJykgb3B0aW9uczogYW55O1xuXG4gIC8vIEV2ZW50IGVtaXR0ZXJzXG4gIEBPdXRwdXQoKSBvcmRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYnN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBiYmVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmJsZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJiZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBkcmFnZ2VkSXRlbTpudW1iZXI7XG4gIGRyb3BUYXJnZXQ6YW55O1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgIHRoaXMuaW5pdENoaWxkcmVuKCk7XG4gIH1cblxuICAvLyBEcm9wcGVyIGxpc3RlbmVyc1xuICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKSBkcmFnc3RhcnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZXZlbnQudGFyZ2V0WydiYnZhbHVlJ10gfHwgbnVsbCk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhvbGRpbmdDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5ob2xkaW5nQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYWdnZWRJdGVtID0gK2V2ZW50LnRhcmdldFsnYmJzb3J0YWJsZS1pbmRleCddO1xuICAgICAgdGhpcy5iYnN0YXJ0LmVtaXQodGhpcy5kcmFnZ2VkSXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnZW5kJywgWyckZXZlbnQnXSkgZHJhZ2VuZChldmVudCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob2xkaW5nQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZXZlbnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG9sZGluZ0NsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmJlbmQuZW1pdCh0aGlzLmRyYWdnZWRJdGVtKTtcbiAgfVxuXG4gIC8vIERyb3B6b25lIGxpc3RlbmVyc1xuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIGRyYWdvdmVyKGV2ZW50OmFueSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFsnJGV2ZW50J10pIGRyYWdlbnRlcihldmVudDphbnkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldFsnYmJzb3J0YWJsZS1uYW1lJ10gPT09IHRoaXMubmFtZSAmJiBldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXSAhPT0gdGhpcy5kcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGV2ZW50LnRhcmdldCwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlRHJvcHpvbmVDbGFzcyhldmVudCwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYmJlbnRlci5lbWl0KCtldmVudC50YXJnZXRbJ2Jic29ydGFibGUtaW5kZXgnXSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKSBkcmFnbGVhdmUoZXZlbnQ6YW55KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChldmVudC50YXJnZXRbJ2Jic29ydGFibGUtbmFtZSddID09PSB0aGlzLm5hbWUgJiYgZXZlbnQudGFyZ2V0WydiYnNvcnRhYmxlLWluZGV4J10gIT09IHRoaXMuZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhldmVudC50YXJnZXQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3B6b25lQ2xhc3MoZXZlbnQsIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5iYmxlYXZlLmVtaXQoK2V2ZW50LnRhcmdldFsnYmJzb3J0YWJsZS1pbmRleCddKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBkcm9wKGV2ZW50OmFueSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGRvRHJvcDpib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIGxldCBkcm9wVGFyZ2V0OmFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChkcm9wVGFyZ2V0WydiYnNvcnRhYmxlLW5hbWUnXSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgd2hpbGUgKGRyb3BUYXJnZXQucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoZHJvcFRhcmdldC5wYXJlbnROb2RlWydiYnNvcnRhYmxlLW5hbWUnXSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICBkcm9wVGFyZ2V0ID0gZHJvcFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgZG9Ecm9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZHJvcFRhcmdldCA9IGRyb3BUYXJnZXQucGFyZW50Tm9kZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb0Ryb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9Ecm9wKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkcm9wVGFyZ2V0LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBkcmFnZ2VkSXRlbSA9IHRoaXMuZHJhZ2dlZEl0ZW07XG4gICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gZHJvcFRhcmdldFsnYmJzb3J0YWJsZS1pbmRleCddO1xuXG4gICAgICAgICAgaWYgKGRyYWdnZWRJdGVtID4gbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gbmV3UG9zaXRpb24gJiYgaSA8IGRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5baV0sICdiYnNvcnRhYmxlLWluZGV4JywgaSArIDEpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gZHJhZ2dlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBuZXdQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaSA+IGRyYWdnZWRJdGVtICYmIGkgPD0gbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2Jic29ydGFibGUtaW5kZXgnLCBpIC0gMSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpID09PSBkcmFnZ2VkSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJzb3J0YWJsZS1pbmRleCcsIG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmJiZHJvcC5lbWl0KCtuZXdQb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5vcmRlckNoYW5nZWQuZW1pdCh7IGRyYWdnZWRJdGVtLCBuZXdQb3NpdGlvbiB9KTtcbiAgICAgIH1cbiAgfVxuXG4gIGluaXRDaGlsZHJlbigpIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbltpXSwgJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJzb3J0YWJsZS1pbmRleCcsIGkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCAnYmJzb3J0YWJsZS1uYW1lJywgdGhpcy5uYW1lKTtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzdGluZ0NsYXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ldLCB0aGlzLm9wdGlvbnMucmVzdGluZ0NsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICB1cGRhdGVEcm9wem9uZUNsYXNzKGV2ZW50OmFueSwgY3NzQ2xhc3M6c3RyaW5nLCBhZGRpbmc6Ym9vbGVhbikge1xuICAgICAgbGV0IHBhcmVudE5vZGUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIHdoaWxlIChwYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHBhcmVudE5vZGVbJ2Jic29ydGFibGUtbmFtZSddID09PSB0aGlzLm5hbWUgJiYgcGFyZW50Tm9kZVsnYmJzb3J0YWJsZS1pbmRleCddICE9PSB0aGlzLmRyYWdnZWRJdGVtKSB7XG4gICAgICAgICAgICAgIGlmIChhZGRpbmcgJiYgIXBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhwYXJlbnROb2RlLCBjc3NDbGFzcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHBhcmVudE5vZGUsIGNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNvcnRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zb3J0YWJsZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNvcnRhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU29ydGFibGVEaXJlY3RpdmUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQkJTb3J0YWJsZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQkJTb3J0YWJsZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW11cbiAgICB9O1xuICB9XG4gfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJCU2xpZGluZ1BhbmVsTW9kdWxlIH0gZnJvbSAnLi9zbGlkaW5nLXBhbmVsL2luZGV4JztcclxuaW1wb3J0IHsgQkJEcm9wZG93bk1lbnVNb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQlNsaWRlb3V0TWVudU1vZHVsZSB9IGZyb20gJy4vc2xpZGVvdXQtbWVudS9pbmRleCc7XHJcbmltcG9ydCB7IEJCRHJvcGRvd25JbnB1dE1vZHVsZSB9IGZyb20gJy4vZHJvcGRvd24taW5wdXQvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQkhhbWJ1cmdlck1lbnVNb2R1bGUgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51L2luZGV4JztcclxuaW1wb3J0IHsgQkJDb2xsYXBzaW5nTWVudU1vZHVsZSB9IGZyb20gJy4vY29sbGFwc2luZy1tZW51L2luZGV4JztcclxuaW1wb3J0IHsgQkJNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJy4vbXVsdGktc2VsZWN0L2luZGV4JztcclxuaW1wb3J0IHsgQkJDb21tb25Nb2R1bGUgfSBmcm9tICcuL2NvbW1vbi9pbmRleCc7XHJcbmltcG9ydCB7IEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AtY29tcG9uZW50L2luZGV4JztcclxuaW1wb3J0IHsgQkJUYWJNb2R1bGUgfSBmcm9tICcuL3RhYi9pbmRleCc7XHJcbmltcG9ydCB7IEJCRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICcuL2RyYWctYW5kLWRyb3AvaW5kZXgnO1xyXG5pbXBvcnQgeyBCQlNvcnRhYmxlTW9kdWxlIH0gZnJvbSAnLi9zb3J0YWJsZS9pbmRleCc7XHJcblxyXG5jb25zdCBCQl9NT0RVTEVTID0gW1xyXG4gICAgQkJTbGlkaW5nUGFuZWxNb2R1bGUsXHJcbiAgICBCQkRyb3Bkb3duTWVudU1vZHVsZSxcclxuICAgIEJCU2xpZGVvdXRNZW51TW9kdWxlLFxyXG4gICAgQkJEcm9wZG93bklucHV0TW9kdWxlLFxyXG4gICAgQkJIYW1idXJnZXJNZW51TW9kdWxlLFxyXG4gICAgQkJDb2xsYXBzaW5nTWVudU1vZHVsZSxcclxuICAgIEJCTXVsdGlTZWxlY3RNb2R1bGUsXHJcbiAgICBCQkNvbW1vbk1vZHVsZSxcclxuICAgIEJCRHJhZ0FuZERyb3BDb21wb25lbnRNb2R1bGUsXHJcbiAgICBCQlRhYk1vZHVsZSxcclxuICAgIEJCRHJhZ0FuZERyb3BNb2R1bGUsXHJcbiAgICBCQlNvcnRhYmxlTW9kdWxlLFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgbW9kdWxlIG9ubHkgZXhpc3RzIHRvIGFsbG93IHRoZSBkZW1vIFxyXG4gKiB0byBpbXBvcnQgdGhlIGVudGlyZSBsaWJyYXJ5IHF1aWNrbHkuICBJdCBcclxuICogc2hvdWxkIG5vdCBiZSB1c2VkIGJ5IGNvbnN1bWVycyBvZiB0aGUgXHJcbiAqIGxpYnJhcnkgYW5kIGlzIG5vdCBleHBvcnRlZCBhcyBwYXJ0IG9mIFxyXG4gKiB0aGUgZGlzdHJidXRlZCBwYWNrYWdlLlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCQlNsaWRpbmdQYW5lbE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyb3Bkb3duTWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQlNsaWRlb3V0TWVudU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyb3Bkb3duSW5wdXRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJIYW1idXJnZXJNZW51TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCQ29sbGFwc2luZ01lbnVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJNdWx0aVNlbGVjdE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkNvbW1vbk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBCQkRyYWdBbmREcm9wQ29tcG9uZW50TW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCVGFiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEJCRHJhZ0FuZERyb3BNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgQkJTb3J0YWJsZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IEJCX01PRFVMRVNcclxufSlcclxuZXhwb3J0IGNsYXNzIEJCUm9vdE1vZHVsZSB7IH1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogQkJfTU9EVUxFUyxcclxuICBleHBvcnRzOiBCQl9NT0RVTEVTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmVhckJvbmVzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7bmdNb2R1bGU6IEJCUm9vdE1vZHVsZSwgcHJvdmlkZXJzOiBbXX07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiZnJvbUV2ZW50IiwibWVyZ2UiLCJmaWx0ZXIiLCJtYXAiLCJvZiIsImRlYm91bmNlVGltZSIsImNvbWJpbmVMYXRlc3QiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJIb3N0QmluZGluZyIsIlZpZXdDaGlsZCIsIkluamVjdGlvblRva2VuIiwiQmVoYXZpb3JTdWJqZWN0IiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJJbmplY3QiLCJmb3J3YXJkUmVmIiwiSG9zdExpc3RlbmVyIiwiUmVmbGVjdGl2ZUluamVjdG9yIiwiVmlld0NvbnRhaW5lclJlZiIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDaGlsZHJlbiIsIkNvbnRlbnRDaGlsZHJlbiIsIlJlbmRlcmVyIiwiTmdab25lIiwiSW5qZWN0YWJsZSIsIlRlbXBsYXRlUmVmIiwiUmVuZGVyZXIyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7ZUFDWSxPQUFPO29CQUNGLFlBQVk7cUJBQ1gsYUFBYTtrQkFDaEIsVUFBVTtvQkFDUixZQUFZOzs7O2NBSWxCLE1BQU07ZUFDTCxPQUFPO1lBQ1YsSUFBSTtjQUNGLE1BQU07Ozs7Ozs7QUNaakI7OztBQUlBO1FBQ0ksT0FB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