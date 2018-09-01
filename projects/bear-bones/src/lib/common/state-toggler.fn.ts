
export const stateToggler = 
    <T extends {[state:string]: string}, K extends keyof T>(states: T) => 
    (state: K): T[K] => states[state];
