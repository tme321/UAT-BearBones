import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BBComponentConstructor } from '../component-constructor/component-constructor.model';
import { BBDynamicComponentModel } from '../dynamic-component-model/dynamic-component-model.model';
import { BBDynamicComponentsMap } from '../dynamic-component-map/dynamic-component-map.model';
import { BBDynamicComponentSerializerMap } from '../dynamic-component-serializer-map/dynamic-component-serializer-map.model';
import { BBDynamicComponentSerializerConstructorToken } from './dynamic-component-serializer.token';
import { BBDynamicComponentSerializerConstructor } from './dynamic-component-serializer.constructor';

@Injectable()
export class BBDynamicComponentSerializerService {

  constructor(
    @Inject(BBDynamicComponentSerializerConstructorToken)
    private serializerConstructor: BBDynamicComponentSerializerConstructor
  ) { }

  createSerializer(map: BBDynamicComponentsMap) {
    const serializerMap: BBDynamicComponentSerializerMap = {
      serializeMap: new Map<BBComponentConstructor,string>(),
      deserializeMap: new Map<string, BBComponentConstructor>(),
    };

    Object.keys(map).forEach(name=>{
      serializerMap.serializeMap.set(map[name], name);
      serializerMap.deserializeMap.set(name, map[name]);
    });

    return new this.serializerConstructor(serializerMap);
  }
}

/*

export class Foo {
  bar: string;
  biz: boolean;
  buzz = new EventEmitter<number>();
  blah() {};
  bork = ()=>{};
}


let o:BBDynamicComponentModel<Foo> = {
  name: '',
  initialValues: {
    bar: '',
  },
  inputs$: {
    bar: new Observable<string>(),
    blah: new Observable<()=>{}>(),
    
  },
  outputCallbacks: {
    buzz: (e: number)=>{},
  }
}

*/