import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BaseApi {
    get = async (api: string, body: {} = {}): Promise<any> => {
        const getQueryString = this.getQueryArray(body);
        const url = `${api}?${getQueryString}`;
        return await fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

        })
            .then(data => data.json())
            .then(result => result)
            .catch(err => console.log(err.response))
    }
    post = async (api: string, body?: {}): Promise<any> => {
        await fetch(api, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(result => result)
            .catch(err => console.log(err.response))
    }
    delete = async (api: string, body?: {}) => {
        await fetch(api, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(result => result.data)
            .catch(err => console.log(err.response))
    }
    getQueryArray = (obj: {}): string => {
        const array: string[] = [];
        Object.entries(obj).map(([key, value]) => {
            if (value) {
                array.push(`${key}=${value}`);
            }
        })
        return array.join('&');
    }
}