
export interface StateCssMapper {
  next: (state:string)=>void;
  removeAll: ()=>void;
  destroy: ()=> void;
}
  