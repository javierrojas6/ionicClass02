import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Proxy {
    //private headers: Object;
    constructor(private http: HttpClient) {
    }
    public consult(url: string, data: Object = {}, method: string) {
        return this.http[method](url, data);
    }
}