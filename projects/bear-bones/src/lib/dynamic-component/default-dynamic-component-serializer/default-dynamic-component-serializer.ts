import { BBDynamicComponentSerializerMap } from '../dynamic-component-serializer-map/dynamic-component-serializer-map.model';
import { BBDynamicComponentSerializer } from '../dynamic-component-serializer/dynamic-component-serializer.model';
import { BBComponentConstructor } from '../component-constructor/component-constructor.model';

export class BBDefaultDynamicComponentSerializer implements BBDynamicComponentSerializer {

    constructor(private serializerMap: BBDynamicComponentSerializerMap) {}

    getComponent<T>(componentName: string) {
        return this.serializerMap
            .deserializeMap.get(componentName);
    }

    getName(componentConstructor: BBComponentConstructor) {
        return this.serializerMap
            .serializeMap.get(componentConstructor);
    }

}
