// import APP_CONFIG from '../../app.config';
import { Injectable, EventEmitter } from '@angular/core';

export class Label {
    name?: string;
    private _keys: string[] = [];
    private _values: boolean[] = [];

    constructor(init: { key: string, value: boolean;}, label: string){
        this.name = label;
        
        this[init.key] = init.value;
        this._keys.push(init.key);
        this._values.push(init.value);
        
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