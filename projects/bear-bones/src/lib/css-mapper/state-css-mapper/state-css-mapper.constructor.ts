import { Renderer2, QueryList } from "@angular/core";
import { CssMapNodeDirective } from './../css-map-node/css-map-node.directive';
import { StateCssMap } from "./state-css-map/state-css-map.model";
import { StateCssMapper } from "./state-css-mapper.model";

/**
 * The shape of a class constructor that can act as a state css mapper.
 */
export interface StateCssMapperConstructor {
    new(
        renderer: Renderer2,
        nodesQl: QueryList<CssMapNodeDirective>,
        cssMap: StateCssMap
    ):StateCssMapper
}