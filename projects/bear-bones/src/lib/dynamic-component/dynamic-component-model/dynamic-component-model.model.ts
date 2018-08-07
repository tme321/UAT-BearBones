import { Provider } from "@angular/core";
import { InputStreams } from "../input-streams/input-streams.model";
import { OutputCallbacks } from "../output-callbacks/output-callbacks.model";
import { BBDynamicComponentData } from '../dynamic-component-data/dynamic-component-data.model';

/**
 * This model combines {@link DynamicComponentData} with 
 * an optional set of observable streams to tie to inputs
 * and callbacks to tie to {@link EventEmitter}s in the 
 * dynamically created component.
 */
export interface BBDynamicComponentModel<T> extends BBDynamicComponentData<T> {
    inputs$?: InputStreams<T>;
    outputCallbacks?: OutputCallbacks<T>;
    providers?: Provider[],
}