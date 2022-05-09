import { environment } from '../../environments/environment.prod';
import { IUser } from '../models/IUser';
import { BaseApi } from './myBaseApi.service';
import { Injectable, Inject } from '@angular/core';

const ENV_LOGIN_URL: string = environment.ENV.localhost + '/api/login/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private inited_user?: IUser

  get is_auth(): boolean {
    return this.inited_user ? true : false
  }
  constructor(private api: BaseApi) { }
  login = async (user: any):Promise<any> => {
    return await this.api.post(ENV_LOGIN_URL, { login: user.login, password: user.password })
      .then((data) => {
        if(data.err){
          return data.err
        } else{
          this.inited_user = data
          return false
        }
      })
      .catch(err => new Error(err));
  }
  logout = (): void => {
    this.inited_user = undefined;
  }
}
