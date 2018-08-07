import { BBComponentConstructor } from '../component-constructor/component-constructor.model';

export interface BBDynamicComponentSerializerMap {
    serializeMap: Map<BBComponentConstructor, string>;
    deserializeMap: Map<string, BBComponentConstructor>;
}

