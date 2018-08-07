import { BBDynamicComponentSerializer } from "./dynamic-component-serializer.model";
import { BBDynamicComponentSerializerMap } from "../dynamic-component-serializer-map/dynamic-component-serializer-map.model";

export interface BBDynamicComponentSerializerConstructor {
    new(serializerMap: BBDynamicComponentSerializerMap):BBDynamicComponentSerializer;
}
