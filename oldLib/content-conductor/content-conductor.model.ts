import { ViewRef } from '@angular/core';
import { BBContentContainer } from './content-container/content-container.model';

/**
 * This is the shape of the object returned by the injectable 
 * {@link BBContentConductorService} that allows content in the 
 * form of {@link TemplateRef}s supplied by a {@link QueryList} to  
 * be moved between multiple containers. 
 * 
 * The number of containers and the number of views to move between
 * them is not limited.
 * 
 * @example
 * Define multiple BBContentContainers in a template:
 * 
 * <ng-container bb-content-container="one"></ng-container>
 * <ng-container bb-content-container="two"></ng-container>
 * 
 * Inside the component controller define queries for both the 
 * TemplateRefs and the BBContentContainer implementors:
 * 
 * `@ContentChildren(BBContentDirective,{ read: TemplateRef, descendants: true })` 
 * contents: QueryList<TemplateRef<any>>;
 *
 * `@ViewChildren(BBContentContainerDirective)`
 * containers: QueryList<BBContentContainerDirective>;
 * 
 * Inject the BBContentConductorService service:
 * 
 *   constructor(
 *      private ccService: BBContentConductorService) {}
 * 
 * And then create the Content Conductor once the queries are ready,
 * usually inside ngAfterViewInit:
 * 
 *   ngAfterViewInit() {
 *     this.conductor = this.ccService
 *       .createContentConductor(this.containers, this.contents);
 *     this.conductor.init(this.cont);
 *   }
 * 
 * And then move the content around with string names mapped to the
 * names of the bb-content-container directives:
 * 
 *   moveToTwo() {
 *     this.conductor.moveViews("one","two");
 *   }
 * 
 * Or back again:
 *
 *   moveToOne() {
 *     this.conductor.moveViews("two","one");
 *   }
 *
 * And then instantiate the component or directive and put the views to
 * move around inside the element:
 * 
 * <div bb-content-conductor-example>
 *	<span *bb-content>Content 1</span>
 *	<span *bb-content>Content 2</span>
 * </div>
 */
export interface BBContentConductor<T extends BBContentContainer> {

    /**
     * Initialize the content into the container of the given
     * string name.
     * @param initialContainer the string name of the container
     * to create the content initially inside of.  
     */
    init(initialContainer: string):void;

    /**
     *  Clean up, should be called by the component or directive's
     * {@link ngOnDestroy} method that is displaying the content. 
     */
    destroy():void;

    /**
     * Move a single {@link ViewRef} identified by it's index 
     * from one {@link BBContentContainerDirective} to the another.
     * @param previousContainer The source {@link BBContentContainerDirective}'s name
     * where the {@link ViewRef} is currently located.
     * @param nextContainer The destination {@link BBContentContainerDirective}'s name
     * where the {@link ViewRef} will be moved to.
     * @param index The index of the {@link ViewRef} to move.
     */
    moveView( 
        previousContainer: string,
        nextContainer:string, 
        index: number):void;

    /**
     * Detach a {@link ViewRef} from a {@link BBContentContainerDirective}
     * specified by it's index inside the {@link ViewContainerRef}
     * @param container The string name of the {@link BBContentContainerDirective}
     * to remove the {@link ViewRef} from.
     * @param index The index of the {@link ViewRef} to remove.
     * @returns The detached {@link ViewRef}.
     */
    detachView(
        container:string,
        index?: number):ViewRef;

    /**
     * Move all of the {@link ViewRef}s from one {@link BBContentContainerDirective}
     * to another.
     * @param previousContainer The {@link BBContentContainerDirective} 
     * to remove the {@link ViewRef} from.
     * @param nextContainer The {@link BBContentContainerDirective} 
     * to add the {@link ViewRef} to.
     */
    moveViews(
        previousContainer: string, 
        nextContainer: string):void;

    /**
     * Remove all {@link ViewRef}s from a {@link BBContentContainerDirective}.
     * @param container The name of the {@link BBContentContainerDirective} 
     * to remove the {@link ViewRef}s from.
     * @returns An array of the {@link ViewRef}s removed.
     */
    detachViews(container: string):ViewRef[];

    /**
     * Attach a {@link ViewRef} to a {@link BBContentContainerDirective}.
     * @param container The {@link BBContentContainerDirective} 
     * to attach the {@link ViewRef} to.
     * @param view The {@link ViewRef} to attach.
     */
    attachView(container:string, view: ViewRef):void;

    /**
     * Attach an array of {@link ViewRef}s to a {@link BBContentContainerDirective}.
     * @param container The {@link BBContentContainerDirective} 
     * to attach the {@link ViewRef}s array to.
     * @param views The {@link ViewRef}s array to attach.
     */
    attachViews(container:string, views?: ViewRef[]):void;
}