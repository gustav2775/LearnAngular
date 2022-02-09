import { environment } from '../../../environments/environment';
import { BaseApi } from './myBaseApi.service';
import { Inject, Injectable } from '@angular/core';
import { IUser, IStateUser, IPropsUser } from '../../interfaces/IUser';

const ENV_OUTER_URL: string = 'https://reqres.in/api/products/';
const ENV_LOGIN_URL: string = environment.ENV.localhost + '/api/login/';
const ENV_USER_URL: string = environment.ENV.localhost + '/api/user/';

@Injectable({ providedIn: 'root' })
export class UsersService {
    private pagination_number: number = 1;
    private page_size: number = 6;
    private state: IStateUser = {
        users: [],
        nextPage: false,
    }
    private inited_user: any = {}

    get getUsers(): IStateUser {
        return this.state;
    }
    get nextPage(): IStateUser {
        this.pagination_number++;
        this.init();
        return this.state;
    }
    constructor(@Inject('myBaseApi') private api: BaseApi) { }
    getById = async (id: number): Promise<IUser> => {
        const user = this.state.users.find(user => user.id === id);
        if (user) {
            return user;
        } else {
            return await this.api.get(ENV_OUTER_URL, { id: id })
                .then(data => data.data);
        }
    }
    init = (): void => {
        this.api.get(ENV_OUTER_URL, { per_page: this.page_size, page: this.pagination_number })
            .then(data => {
                this.state.users = [...this.state.users, ...data.data];
                if (data.total_pages <= this.pagination_number) {
                    this.state.nextPage = true;
                } else {
                    this.state.nextPage = false;
                }
            })
    }
    add = (props: IPropsUser) => {
        this.api.post(ENV_USER_URL, props)
            .then(data => {
                if (data) {
                    const user = data as IUser
                    this.state.users.push(user)
                }
            })
            .catch(err => new Error(err));
    }
    login = (user: any) => {
        this.api.post(ENV_LOGIN_URL, { login: user.login, password: user.password })
            .then((data) => {
                this.inited_user = data
            })
            .catch(err => new Error(err));
    }
    delete = (user: IUser): void => {
        const index = this.state.users.indexOf(user);
        this.state.users.splice(index, 1);
        this.api.delete(ENV_USER_URL, { id: user.id });
    }
}
