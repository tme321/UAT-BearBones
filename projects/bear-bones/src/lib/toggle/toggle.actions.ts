export enum BBToggleActionTypes {
    INIT = 'Init',
    TOGGLE = 'Toggle',
    SET = 'Set'
}

export class Init { readonly type=BBToggleActionTypes.INIT; }
export class Toggle { readonly type=BBToggleActionTypes.TOGGLE; }
export class Set {
    readonly type=BBToggleActionTypes.SET;
    constructor(public payload:string) {}
}

export type BBToggleActions = Init | Toggle | Set;

