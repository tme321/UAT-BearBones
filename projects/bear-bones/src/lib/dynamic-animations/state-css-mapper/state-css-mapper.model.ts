
/**
 * @method remove Remove the css class defined by the {@link BBStateCSSMap} 
 * for the given state. 
 * @method removeAll Remove all css classes defined by the {@link BBStateCSSMap}
 * @method add Add the css class defined by the {@link BBStateCSSMap} 
 * for the given state. 
 * @method destroy Release the references used by the closure.
 */
export interface BBStateCSSMapper {
    remove: (state:string)=>void;
    removeAll: ()=>void;
    add: (state:string)=> void;
    destroy: ()=> void;
  }
  