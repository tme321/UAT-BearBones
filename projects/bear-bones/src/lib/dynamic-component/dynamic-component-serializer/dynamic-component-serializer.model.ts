import { BBComponentConstructor } from '../component-constructor/component-constructor.model';

export interface BBDynamicComponentSerializer {
    getComponent<T>(componentName: string): BBComponentConstructor;
    getName(componentConstructor: BBComponentConstructor):string;
}
  