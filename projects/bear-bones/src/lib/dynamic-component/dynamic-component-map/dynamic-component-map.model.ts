import { BBComponentConstructor } from "../component-constructor/component-constructor.model";

export interface BBDynamicComponentsMap {
    [serializedName:string]: BBComponentConstructor;
}