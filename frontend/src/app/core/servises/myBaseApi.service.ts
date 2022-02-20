import { Injectable, Inject } from '@angular/core';
import { LoadingService } from './myLoading.service';

@Injectable({ providedIn: 'root' })
export class BaseApi {
    constructor(@Inject('loadingService') private LoadingService:LoadingService){}

    get = async (api: string, body: {} = {}): Promise<any> => {
        this.LoadingService.setStatusLoading = 'start'
        const getQueryString = this.getQueryArray(body);
        const url = `${api}?${getQueryString}`;
        return await fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

        })
            .then(data => data.json())
            .then(result => {
                this.LoadingService.setStatusLoading = 'stop'
                return result
            })
            .catch(err => console.log(err.response))
    }
    post = async (api: string, body?: {}): Promise<any> => {
        this.LoadingService.setStatusLoading = 'start'
        return await fetch(api, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(result => {
                this.LoadingService.setStatusLoading = 'stop'
                return result
            })
            .catch(err => console.log(err.response))
    }
    put = async (api: string, body?: {}): Promise<any> => {
        this.LoadingService.setStatusLoading = 'start'
        return await fetch(api, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(result => {
                this.LoadingService.setStatusLoading = 'stop'
                return result
            })
            .catch(err => console.log(err.response))
    }
    delete = async (api: string, body?: {}) => {
        this.LoadingService.setStatusLoading = 'start'
        return await fetch(api, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(body)
        })
            .then(data => data.json())
            .then(result => {
                this.LoadingService.setStatusLoading = 'stop'
                return result.data
            })
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