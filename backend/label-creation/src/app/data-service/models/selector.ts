import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Selector {
    name?: string;
    _keys: string[];
    _values: boolean[];

    constructor(init: { key: string, value: boolean;}[], label: string){
        this.name = label;
        for(var x = 0; x < init.length; x++){
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }
    set(key: string, value: boolean) {
        this[key] = value;
    }
    keys(): string[] {
        return this._keys;
    }
    values(): boolean[] {
        return this._values;
    }
    get(key: string): boolean {
        return this[key]
    }
}