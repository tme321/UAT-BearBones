import { BBCssMap, NormalizedCssMap } from "./css-map.model";

export function normalizeStyles(map: BBCssMap) {
    return Object.keys(map).reduce((nMap: NormalizedCssMap,key)=>{
        const entry  = map[key];
        if(Array.isArray(entry)) {
        nMap[key]=entry;
        }
        else {
        nMap[key]=[entry];
        }
        return nMap;
    },{})
}
